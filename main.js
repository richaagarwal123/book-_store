// let search = document.querySelector('.search-box');
 
// document.querySelector('#search-icon').onclick= () => {
//     search.classList.toggle('active');
// }



let header = document.querySelector('header');

window.addEventListener('scroll',() => {
    header.classList.toggle('shadow', window.scrollY > 0);

})



let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login').onclick = () =>{
    loginForm.classList.remove('active');
};
