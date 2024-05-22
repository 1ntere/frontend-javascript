function togglechat() {
    const chatContainer = document.getElementById("chat-container");
    const toggleButton = document.getElementById("toggle-button");
    if(chatContainer.style.display == "none" || chatContainer.style.display=="") {
        chatContainer.style.display = "flex";
        toggleButton.textContent = "채팅숨기기";
    } else {
        chatContainer.style.display = "none";
        toggleButton.textContent = "채팅보이기";
    }
}
메세지보이기("안녕하세요 상담봇 입니다. 무엇을 도와드릴까요?", "bot")
function 메세지보이기(message,sender) {
    const chatbox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender + "-message");
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
}
function sendMessage() {
    const inputbox = document.getElementById("user-input");
    const message = inputbox.value;
    if (message == "") {
        return;
    }
    메세지보이기(message, "user");
    setTimeout(() => {
        메세지보이기("저는 채팅 봇 입니다.", "bot");
    }, 1000)
}