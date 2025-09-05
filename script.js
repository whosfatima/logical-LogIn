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
        Name.nextElementSibling.innerHTML = 'enter ur right name ...'
        isvalid = false
    } else {
        Name.nextElementSibling.innerHTML = ''
    }
    e.preventDefault();
    if (isvalid) {
        result.style.display = 'block'
        result.innerHTML = 'ok'
    }
})