let pManagement = document.getElementById('result-paragraph');
if (pManagement && pManagement.innerText.length >= 253) {
    let currentText = pManagement.innerText;
    pManagement.innerText = currentText.slice(0, 253) + '...';
}