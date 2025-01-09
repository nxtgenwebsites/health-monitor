const postBtn = document.getElementById('post-question');
const postForm = document.getElementById('post-form');
const cancleBtn = document.getElementById('post-cancel-btn');

postBtn.addEventListener('click' , () => {
    postForm.classList.add('show-form');
})
cancleBtn.addEventListener('click' , () => {
    postForm.classList.remove('show-form');
})

// Posted popup 
const popup = document.getElementById('popup');
const postedBtn = document.getElementById('post-btn');
const okBtn = document.getElementById('ok-btn');
const closeBtn = document.getElementById('close-btn');

postedBtn.addEventListener('click', (e) => {
    e.preventDefault()
    popup.classList.remove('d-none')
})

closeBtn.addEventListener('click', () => {
    popup.classList.add('d-none')
})
okBtn.addEventListener('click', () => {
    popup.classList.add('d-none')
})


const optionBtn = document.querySelectorAll('.forum-options');
const forum = document.getElementById('forum-popup');

for (let i = 0; i < optionBtn.length; i++) {
    optionBtn[i].addEventListener('click' , () => {
        forum.classList.remove('d-none')
    })
    
}
forum.addEventListener('click' , (e) => {
   e.stopPropagation()
    forum.classList.add('d-none')
})