let content = document.querySelectorAll('.dropdown-menu li');
let title = document.getElementById('title');


for (let i = 0; i < content.length; i++) {
    content[i].addEventListener('click', (e) => {
        e.preventDefault();
        title.value = content[i].innerText;
    });
}

// thanks popup 
const popup = document.getElementById('popup');
const proceedBtn = document.getElementById('proceed-btn');
const closeBtn = document.getElementById('close-btn');

proceedBtn.addEventListener('click' , (e) => {
    e.preventDefault()
    popup.classList.remove('d-none')
})

closeBtn.addEventListener('click' , () => {
    popup.classList.add('d-none')
})