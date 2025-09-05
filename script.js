const button= document.querySelector('button')

const Name= document.getElementById('Name')
const UserName= document.getElementById('UserName')
const Email= document.getElementById('Email')
const Password= document.getElementById('Password')
const RePassword= document.getElementById('RePassword')

Name.addEventListener('input',() => {
    if(Name.value ===''){
        Name.classList.add('errorborder')
        Name.classList.remove('succesBorder')
    } else{
        Name.classList.remove('errorborder')
        Name.classList.add('succesBorder')

    }
})
button.addEventListener('click', (e) => {
          Name.classList.remove('succesBorder')
    e.preventDefault();
    
})