let teamMembers = document.querySelector('#team-members')

document.querySelector('#add-member').addEventListener('click', addMember)

function addMember() {
    let newMember = document.createElement('input')
    newMember.type = 'text'
    newMember.id = 'teamMembers'
    newMember.name = 'teamMembers[]'
    newMember.placeholder = "Team Member"
    teamMembers.appendChild(newMember)
}



//<input type="text" id="teamMembers" name="teamMembers[]" placeholder="Team Members">