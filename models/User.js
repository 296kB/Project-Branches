const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Project = require("./Project");

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, trim: true, required: true },
  usernameLower: String,
  email: { type: String, unique: true, trim: true, required: true },
  password: { type: String, required: true },
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  projects: [{ type: ObjectId, ref: "Project" }], // should be an array of objectids that can populate based on the Project model. Hopefully it works
});

// Password hash middleware.
UserSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

// Helper method for validating user's password.
UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
