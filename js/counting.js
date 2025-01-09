window.onload = function () {
    const animations = [
        { element: document.getElementById('members'), startValue: 4000, endValue: 5000, duration: 1500, addPlus: true },
        { element: document.getElementById('hospitals-registered'), startValue: 800, endValue: 1000, duration: 1500, addPlus: false },
        { element: document.getElementById('dha-courses'), startValue: 80, endValue: 100, duration: 1500, addPlus: true },
        { element: document.getElementById('hospitals-registered2'), startValue: 800, endValue: 1000, duration: 1500, addPlus: false }
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