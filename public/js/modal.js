//global variable
let modalBg = document.querySelector('.modal-bg');
let putContent = document.querySelector('.send')

//Function to show up modal
function showUp() {
    let modalBg = document.querySelector('.modal-bg');
    modalBg.classList.add("active")
}

//create variable
let modalClose = document.querySelector('.modal-close');

//add event listener to x element to close modal 
modalClose.addEventListener('click', () => {
    modalBg.classList.remove("active")
})

//change welcome label content 
let changeContent = (content) => {
    document.getElementById('welcome-label').textContent = `Welcome ${content}`
}

//get name and use change function to change the text content
let getName = () => {
    let name = document.getElementById("name").value
    changeContent(name)
}

//add event lister to send button
putContent.addEventListener('click', () => {
    //variable to get email and name
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
        //validation for email
    if (email === "" || name === "") {
        window.alert("Complete all fields")
            // make changes
    } else {
        getName()
        modalBg.classList.remove("active")
    }
})