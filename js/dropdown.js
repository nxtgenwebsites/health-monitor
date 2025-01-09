let content = document.getElementById('dropdown-content');
let searchBar = document.getElementById('search-bar');

content.addEventListener('click', (e) => {
    e.preventDefault();

    searchBar.value = content.innerText;
});