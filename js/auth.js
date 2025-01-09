const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const btnSlider = document.getElementById('btn-slider');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const loginHeading = document.getElementById('login-heading');
const signupHeading = document.getElementById('signup-heading');


signupBtn.addEventListener('click', () => {
    btnSlider.classList.add('slide-left');
    loginBtn.classList.remove('active-btn');
    signupBtn.classList.add('active-btn');
    signupForm.classList.add('show-form');
    loginForm.classList.remove('show-form');
    loginForm.style.display = 'none';
    loginForm.classList.remove('show-form');
    loginForm.style.display = 'none';
    loginHeading.style.display = 'none'
    signupHeading.classList.add('show-heading');
    loginHeading.classList.remove('show-heading');
})

loginBtn.addEventListener('click', () => {
    btnSlider.classList.remove('slide-left');
    loginBtn.classList.add('active-btn');
    signupBtn.classList.remove('active-btn');
    loginForm.classList.add('show-form');
    signupForm.classList.remove('show-form');
    signupForm.style.display = 'none';
    signupHeading.style.display = 'none'
    loginHeading.classList.add('show-heading');
    signupHeading.classList.remove('show-heading');
})


const eyeIcon = document.querySelectorAll('.password img');
const inp = document.querySelectorAll('.password input');

for (let i = 0; i < eyeIcon.length; i++) {
    eyeIcon[i].addEventListener('click' , () => {
        if (eyeIcon[i].classList.contains('hide-pass')) {
            inp[i].type = 'text';
            eyeIcon[i].classList.replace('hide-pass', 'show-pass')
            eyeIcon[i].src ='assets/icons/hide pass.svg';
        }else{
            inp[i].type = 'password';
            eyeIcon[i].classList.replace('show-pass', 'hide-pass')
            eyeIcon[i].src ='assets/icons/show pass.svg'
        }
    })
}