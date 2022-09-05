const deleteBtn = document.getElementById('delete-project-button')

// To mark projects as Complete/Incomplete linked to the projectDetail.ejs
const projectComplete = document.getElementById('mark-complete-button')

// Functions

deleteBtn.addEventListener('click', deleteProject)

async function deleteProject(){
    const projectId = document.getElementById('projectIDblind').innerText
    try {
        const response = await fetch('delete', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'id': projectId
            })
        })
        const data = await response.text()
        console.log(data)
        window.location.href = "/dashboard";
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