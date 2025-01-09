const allBotBtn = document.querySelectorAll('.chat-bot-btn');
const infoBox = document.querySelector('.info-box');
const messageInp = document.getElementById('message-to-bot');
const messageContainer = document.getElementById('chat-with-bot');
const sendBtn = document.getElementById('message-send-btn');

for (let i = 0; i < allBotBtn.length; i++) {
    allBotBtn[i].addEventListener("click", () => {
        for (let e = 0; e < allBotBtn.length; e++) {
            allBotBtn[e].classList.remove("active");
            const existingIndicator = allBotBtn[e].querySelector(".active-indicator");
            if (existingIndicator) {
                existingIndicator.remove();
            }
        }
        allBotBtn[i].classList.add("active");
        const activeIndicator = document.createElement("div");
        activeIndicator.className = "active-indicator";
        allBotBtn[i].append(activeIndicator);
    });
    allBotBtn[0].onclick = () => {
        const upgradeOverlay = document.getElementById('upgrade-overlay');

        upgradeOverlay.classList.add('d-none');
        upgradeOverlay.classList.remove('d-flex');
        infoBox.innerHTML = `Summarize your symptoms into a report for medical practitioners to understand and act upon. It's
        <span class="highlight">totally free of any charge</span>, so you can get basic help immediately!`;
    };
    allBotBtn[1].onclick = () => {
        const upgradeOverlay = document.getElementById('upgrade-overlay');

        upgradeOverlay.classList.remove('d-none');
        upgradeOverlay.classList.add('d-flex');
        infoBox.innerHTML = `This AI provides detailed assistance with managing medical records, allowing you to print, add comments, invite other DHAs—all at a highly <span class="highlight">competitive cost.</span> The feature is under development, and we will notify when it becomes available!`;

    };
    allBotBtn[2].onclick = () => {
        const upgradeOverlay = document.getElementById('upgrade-overlay');

        upgradeOverlay.classList.remove('d-none');
        upgradeOverlay.classList.add('d-flex');
        infoBox.innerHTML = `Azure AI helps with medical records, allowing you to print, comment, and invite DHAs at a competitive cost. <span class="highlight">The feature is in development, and we'll notify you once it's ready!</span>`;
    };
    allBotBtn[3].onclick = () => {
        const upgradeOverlay = document.getElementById('upgrade-overlay');

        upgradeOverlay.classList.remove('d-none');
        upgradeOverlay.classList.add('d-flex');
        infoBox.innerHTML = `This AI streamlines medical records by enabling printing, commenting, and inviting DHAs, all at an affordable price.
     <span class="highlight">We'll update you once the feature is live!</span>`;
    };
    allBotBtn[4].onclick = () => {
        const upgradeOverlay = document.getElementById('upgrade-overlay');

        upgradeOverlay.classList.remove('d-none');
        upgradeOverlay.classList.add('d-flex');
        infoBox.innerHTML = `This AI streamlines medical records, enabling you to print, comment, and invite DHAs at an affordable rate.
       <span class="highlight">The feature is in development, and we'll inform you when it's live!</span>`;
    };
}

let messageCount = 0;
let genderMessageSent = false; 

sendBtn.addEventListener('click', () => {
    if (messageInp.value === "") {
        return;
    } else {
        const userMessage = document.createElement('div');
        userMessage.innerHTML = `${messageInp.value}`;
        userMessage.classList.add('user-message');
        messageContainer.append(userMessage);

        messageCount++;
        handleBotResponse(messageCount);
        messageInp.value = "";
    }
});

const handleBotResponse = (messageCount) => {
    if (messageCount <= 3 || !genderMessageSent) {
        switch (messageCount) {
            case 1:
                const botMessage1 = document.createElement('div');
                botMessage1.innerHTML = `<div class="demo-message-1">
                    <span>It sounds like you would like to report the following symptoms</span>
                    <ul>
                        <li>Headache</li>
                    </ul>
                    <div class="">
                        <span>Is it correct?</span>
                        <div class="d-flex gap-3 mt-3">
                            <button id="yes-btn" class="btn border border-2 px-4 rounded-0 border-black text-black">Yes</button>
                            <button id="no-btn"  class="btn border border-2 px-4 rounded-0 border-black text-black">No</button>
                        </div>
                    </div>
                </div>`;
                botMessage1.classList.add('bot-message');
                messageContainer.append(botMessage1);

                botMessage1.querySelector('#yes-btn').addEventListener('click', () => {
                    userMessageAdd("Yes");
                    handleBotResponse(++messageCount);
                });

                botMessage1.querySelector('#no-btn').addEventListener('click', () => {
                    userMessageAdd("No");
                    handleBotResponse(++messageCount);
                });
                break;

            case 2:
                const botMessage2 = document.createElement('div');
                botMessage2.innerHTML = `<div class="demo-message-2">
                    <span>To assess the reporting symptoms, we need to collect some additional information.</span>
                    <h5 class="mt-2">Please specify your sex:</h5>
                    <div class="">
                        <div class="d-flex gap-3 mt-3">
                            <button id="male-btn" class="btn border border-2 px-4 rounded-0 border-black text-black">Male</button>
                            <button id="female-btn" class="btn border border-2 px-4 rounded-0 border-black text-black">Female</button>
                        </div>
                    </div>
                </div>`;
                botMessage2.classList.add('bot-message');
                messageContainer.append(botMessage2);

                botMessage2.querySelector('#male-btn').addEventListener('click', () => {
                    userMessageAdd("Male");
                    handleBotResponse(++messageCount);
                });

                botMessage2.querySelector('#female-btn').addEventListener('click', () => {
                    userMessageAdd("Female");
                    handleBotResponse(++messageCount);
                });
                break;

            case 3:
                const botMessage3 = document.createElement('div');
                botMessage3.innerHTML = `<div class="demo-message-3">
                    <span>The following symptoms were reported in similar cases. Do you have any of these symptoms?</span>
                    <div class="">
                        <div class="bot-check-box mt-3 d-flex align-items-center gap-2">
                            <input type="checkbox" id="fatigue" class="form-check-input">
                            <label for="fatigue" class="mt-1">Fatigue</label>
                        </div>
                        <div class="bot-check-box mt-1 d-flex align-items-center gap-2">
                            <input type="checkbox" id="dizzy" class="form-check-input">
                            <label for="dizzy" class="mt-1">Dizzy</label>
                        </div>
                        <div class="bot-check-box mt-1 d-flex align-items-center gap-2">
                            <input type="checkbox" id="fever" class="form-check-input">
                            <label for="fever" class="mt-1">Fever</label>
                        </div>
                        <div class="bot-check-box mt-1 d-flex align-items-center gap-2">
                            <input type="checkbox" id="chills" class="form-check-input">
                            <label for="chills" class="mt-1">Chills</label>
                        </div>
                        <div class="bot-check-box mt-1 d-flex align-items-center gap-2">
                            <input type="checkbox" id="reduced-appetite" class="form-check-input">
                            <label for="reduced-appetite" class="mt-1">Reduced Appetite</label>
                        </div>
                        <div class="d-flex gap-3 mt-3">
                            <button id="continue-btn" class="btn border border-2 px-4 rounded-0 border-black text-black">Continue</button>
                        </div>
                    </div>
                </div>`;
                botMessage3.classList.add('bot-message');
                messageContainer.append(botMessage3);

                botMessage3.querySelector('#continue-btn').addEventListener('click', () => {
                    userMessageAdd("Continue");
                    handleBotResponse(++messageCount);
                });
                break;
        }
    }
};

const userMessageAdd = (message) => {
    const userMessage = document.createElement('div');
    userMessage.innerHTML = `${message}`;
    userMessage.classList.add('user-message');
    messageContainer.append(userMessage);
};
