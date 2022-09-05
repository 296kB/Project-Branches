// To delete the projects linked to the projectDetail.ejs


document.querySelector('#guestAccount').addEventListener('click',fillLogin);

function fillLogin(){
    document.querySelector('#username').value = 'BranchesGuest'
    document.querySelector('#password').value = 'BranchesGuest'
    console.log('Test21')
}
