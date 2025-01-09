const watch1 = document.getElementById("video-icon");
const watch = document.getElementById("w-Icon");

watch1.onclick = () => {
    document.getElementById("w-Icon").classList.add('flex');
};

watch.onclick = () => {
    document.getElementById("w-Icon").classList.remove('flex');
};