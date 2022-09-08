const Project = require('../models/Project')
const User = require('../models/User')
const mongoose = require('mongoose')

// Schema: title, description, deadline, status, teamMembers
// Model name: Project
module.exports = {
    getProject: async (req, res) => {
        // console.log(req.query)
        try{
            const data = await Project.findOne({_id: req.query._id})
            console.log(data)
            res.render('project.ejs', {projectData: data})
        } catch (err) {
            console.log(err)
        }
    },
    addProject: async (req, res) => {
        try {
            let allMembers = [req.user.username].concat(req.body.teamMembers).filter(n => n)
            let project = await Project.create({
                title: req.body.title,
                description: req.body.description, 
                deadline: req.body.deadline,
                teamMembers: allMembers,
                status: false,
                userId: req.user.id,
            })
            // let projectId = project._id;
            // allMembers.forEach(user => {
            //     let userLower = user.toLowerCase();
            //     User.findOneAndUpdate({usernameLower: userLower}, {$push: {projects: mongoose.Types.ObjectId(projectId)}})
            //     console.log('user: ', user)
            // })
            console.log(`Project ${req.body.title} created!`)
            res.redirect('/dashboard')
        } catch (err) {
            console.log(err)
        }
    },
    markComplete: async (req, res) => {
        try {
            await Project.findOneAndUpdate({_id:req.body.id}, {
                status: true
            })
            console.log('Completed Task')
            res.json('Completed Task')
        } catch (err) {
            console.log(err)
        }
    },
    markIncomplete: async (reeq, res) => {
        try {
            await Project.findOneAndUpdate({_id:req.body.id}, {
                completed: false
            })
            console.log('Incompleted Task')
            res.json('Incompleted Task')
        } catch (err) {
            console.log(err)
        }
    },
    deleteProject: async (req, res) => {
        console.log(req.body.id)
        try {
            await Project.deleteOne({_id: req.body.id})
            console.log('Deleted Project')
            res.redirect('/dashboard')
        } catch (error) {
            console.log(err)
        }
    },

}





