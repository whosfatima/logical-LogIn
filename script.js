const button = document.querySelector('button')

const Name = document.getElementById('Name')
const UserName = document.getElementById('UserName')
const Email = document.getElementById('Email')
const Password = document.getElementById('Password')
const RePassword = document.getElementById('RePassword')
const result = document.querySelector('.result')

// Name.addEventListener('input',() => {
//     if(Name.value ===''){
//         Name.classList.add('errorborder')
//         Name.classList.remove('succesBorder')
//     } else{
//         Name.classList.remove('errorborder')
//         Name.classList.add('succesBorder')

//     }
// })
button.addEventListener('click', (e) => {
    let isvalid = true;
    if (Name.value === '') {
        Name.nextElementSibling.innerHTML = 'enter the right name ...'
        isvalid = false
    } else {
        Name.nextElementSibling.innerHTML = ''
    }
    let userNamePatern = /^[a-zA-Z0-9_-]{3,9}$/
    if (!userNamePatern.test(UserName.value)) {
        UserName.nextElementSibling.innerHTML = 'Enter the right UserName...'
        isvalid = false
    } else {
        UserName.nextElementSibling.innerHTML = ''
    }

    let emailPatern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailPatern.test(Email.value)) {
        Email.nextElementSibling.innerHTML = 'Enter the right email'
        isvalid = false
    } else {
        Email.nextElementSibling.innerHTML = ''
    }
    let passwordPatern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if (!passwordPatern.test(Password.value)) {
        Password.nextElementSibling.innerHTML = 'pls enter the right password'
        isvalid = false
    } else {
        Password.nextElementSibling.innerHTML = ''
    }
    if (RePassword.value !== Password.value) {
        RePassword.nextElementSibling.innerHTML = 'they are not match...'
        isvalid = false
    } else {
        RePassword.nextElementSibling.innerHTML = ''
    }
    e.preventDefault();
    if (isvalid) {
        result.style.display = 'block'
        result.innerHTML = 'ok'
    } else {
        result.style.display = 'none'
    }
})