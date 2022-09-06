const Project = require("../models/Project");
const User = require("../models/User");

// getProjects,
module.exports = {
  // getDash: async (req, res) => {
  //   console.log('user', req.user);
  //   // const projects = await User.find({ username: req.user.username });
  //   let projectIds = req.user.projects
  //   let projectData = []
  //   for(let id of projectIds) {
  //       let project = await Project.find({_id: id})
  //       projectData.push(project)
  //   }
  //   console.log(projectData)
  //   res.render('dashboard.ejs', {projectData: projectData, user: req.user})
  // },
  getDash: async (req,res)=>{
    console.log(req.user)
    try{
      const projects = await Project.find({userId:req.user.id}).sort({ status: 1, dueDate: 1 } )
      res.render('dashboard.ejs', {projectData: projects, user: req.user})
      console.log(projects)
    }catch(err){
        console.log(err)
    }
  },
  addProject: (req, res) => {
    res.render('addProject.ejs')
  }
};

// const Todo = require('../models/Todo')

// module.exports = {
//     getTodos: async (req,res)=>{
//         console.log(req.user)
//         try{
//             const todoItems = await Todo.find({userId:req.user.id})
//             const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
//             res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
//         }catch(err){
//             console.log(err)
//         }
//     },
//     createTodo: async (req, res)=>{
//         try{
//             await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
//             console.log('Todo has been added!')
//             res.redirect('/todos')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     markComplete: async (req, res)=>{
//         try{
//             await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//                 completed: true
//             })
//             console.log('Marked Complete')
//             res.json('Marked Complete')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     markIncomplete: async (req, res)=>{
//         try{
//             await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//                 completed: false
//             })
//             console.log('Marked Incomplete')
//             res.json('Marked Incomplete')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     deleteTodo: async (req, res)=>{
//         console.log(req.body.todoIdFromJSFile)
//         try{
//             await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
//             console.log('Deleted Todo')
//             res.json('Deleted It')
//         }catch(err){
//             console.log(err)
//         }
//     }
// }
