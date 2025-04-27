const infoBox = document.querySelector('.info-box');
const messageInp = document.getElementById('message-to-bot');
const messageContainer = document.getElementById('chat-with-bot');
const sendBtn = document.getElementById('message-send-btn');

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
            case 4:
                const botMessage4 = document.createElement('div');
                botMessage4.innerHTML = `  <div class="demo-message-4">
                                <div class="d-flex gap-3 mt-3">
                                    <button id="yes-btn" class="btn border border-2 px-4 rounded-0 border-black text-black">Save</button>
                                    <a href="/user-dashboard/care-request.html">
                                        <button id="no-btn" class="btn border border-2 px-4 rounded-0 border-black text-black">Share</button>
                                    </a>
                                    <button id="no-btn" class="btn border border-2 px-4 rounded-0 border-black text-black">Print</button>
                                    <button id="no-btn" class="btn border border-2 px-4 rounded-0 border-black text-black">Delete</button>
                                </div>
                            </div>`;
                botMessage4.classList.add('bot-message');
                messageContainer.append(botMessage4);
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
