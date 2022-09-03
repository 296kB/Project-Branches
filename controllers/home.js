module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getSignup: (req,res)=>{
        res.render('signup.ejs')
    }
}
