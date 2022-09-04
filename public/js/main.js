// To delete the projects linked to the projectDetail.ejs
const deleteBtn = document.querySelectorAll('delete-project-button')

// [!] Waiting for Dashboard to be completed
//const projectItem = document.querySelectorAll('')

// To mark projects as Complete/Incomplete linked to the projectDetail.ejs
const projectComplete = document.querySelectorAll('mark-complete-button')

// Event Listeners linking to fucntions
Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteProject)
})

Array.from(projectComplete).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(projectComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

// Functions

async function deleteProject(){
    const projectId = this.parentNode.dataset.id
    try {
        const response = await fetch('projectDetail/projectDelete', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'id': projectId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function markComplete(){
    const projectId = this.parentNode.dataset.id
    try{
        const response = await fetch('projectDetail/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'id': projectId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const projectId = this.parentNode.dataset.id
    try{
        const response = await fetch('projectDetail/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'id': projectId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
