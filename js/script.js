// Loading Screen Hide
const mouseBtn = document.querySelector('.mouse-btn');
const loadingScreen = document.querySelector('.loading-screen');

mouseBtn.addEventListener('click', () => {
    loadingScreen.style.display = 'none';
})

// Number status animation 

window.onload = function () {
    const animations = [
        { element: document.getElementById('members'), startValue: 4000, endValue: 5000, duration: 1500, addPlus: true },
        { element: document.getElementById('hospitals-registered'), startValue: 800, endValue: 1000, duration: 1500, addPlus: true },
        { element: document.getElementById('dha-courses'), startValue: 80, endValue: 100, duration: 1500, addPlus: true },
        { element: document.getElementById('hospitals-registered2'), startValue: 800, endValue: 1000, duration: 1500, addPlus: true }
    ];

    animations.forEach(anim => {
        animateNumber(anim.element, anim.startValue, anim.endValue, anim.duration, anim.addPlus);
    });
};

function animateNumber(element, startValue, endValue, duration, addPlus = false) {
    const startTime = performance.now();

    function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Ensuring progress doesn't exceed 1
        const currentValue = Math.floor(startValue + (progress * (endValue - startValue)));

        element.textContent = addPlus ? `${currentValue}+` : currentValue;

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

// Review Swiper Code 
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});


const demoBtn = document.getElementById('demo-btn');
const videoPopup = document.getElementById('demo-video')

demoBtn.addEventListener('click' , () => {
    videoPopup.classList.remove('d-none')
})

videoPopup.addEventListener('click' , () => {
    videoPopup.classList.add('d-none')
})