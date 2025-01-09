const emailPopup = document.getElementById('email-popup')
const deletePopup = document.getElementById('delete-popup')
const viewPopup = document.getElementById('view-popup')
const historyPopup = document.getElementById('history-popup')
const closeBtn = document.getElementById('close-btn');
const emailSendBtn = document.getElementById('email-send-btn');
const emailCancelBtn = document.getElementById('email-cancel-btn');
const cancelBtn = document.getElementById('cancel-btn');
const emailReport = document.getElementById('email-report');
const deleteBtn = document.getElementById('delete-btn');
const symptomDeleteBtn = document.getElementById('symptom-delete-btn');
const symptomHistoryBtn = document.getElementById('symptom-history-btn');
const symptomViewBtn = document.getElementById('symptom-view-btn');


emailReport.addEventListener('click', () => {
    emailPopup.classList.remove('d-none');
    emailPopup.classList.add('d-flex');
})
symptomViewBtn.addEventListener('click', () => {
    viewPopup.classList.remove('d-none');
    viewPopup.classList.add('d-flex');
})
symptomHistoryBtn.addEventListener('click', () => {
    historyPopup.classList.remove('d-none');
    historyPopup.classList.add('d-flex');
})
symptomDeleteBtn.addEventListener('click', () => {
    deletePopup.classList.remove('d-none');
    deletePopup.classList.add('d-flex');
})
historyPopup.addEventListener('click', (e) => {
if (e.target === historyPopup) { 
    historyPopup.classList.add('d-none');
    historyPopup.classList.remove('d-flex');
}
})
viewPopup.addEventListener('click', (e) => {
    if (e.target === viewPopup) { 
    viewPopup.classList.add('d-none');
    viewPopup.classList.remove('d-flex');
    }
})

closeBtn.addEventListener('click', () => {
    deletePopup.classList.add('d-none');
})
emailCancelBtn.addEventListener('click', () => {
    emailPopup.classList.add('d-none');
})
emailSendBtn.addEventListener('click', () => {
    emailPopup.classList.add('d-none');
})
deleteBtn.addEventListener('click', () => {
    deletePopup.classList.add('d-none');
})
cancelBtn.addEventListener('click', () => {
    deletePopup.classList.add('d-none');
})