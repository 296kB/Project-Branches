
const Project = require('../models/Project')

// Schema: title, description, dueDate, status, teamMembers
// Model name: Project
module.exports = {

    getProject: (req,res)=>{
        try{
            const data = await Project.findOne({_id: req.query._id})
            console.log(data)
            res.render('project.ejs', {projectData: data})
        } catch (err) {
            console.log(err)
        }
    },
    createProject: async (req, res) => {
        try {
            await Project.create({
                title: req.body.title,
                description: req.body.description, 
                dueDate: req.body.dueDate,
                teamMembers: req.body.teamMembers || [],
                status: false,
            })
        } catch (err) {
            console.log(err)
        }
    },
    markComplete: async (req, res) => {
        try {
            await Project.findOneAndUpdate({_id:req.body.id}, {
                completed: true
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
            await Project.findOneAndUpdate({_id:req.body.id})
            console.log('Deleted Project')
            res.json('Delete It')
        } catch (error) {
            console.log(err)
        }
    },

}





