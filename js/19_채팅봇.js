function togglechat() {
    const chatContainer = document.getElementById("chat-container");
    const toggleButton = document.getElementById("toggle-button");
    //chatContainer.style.display==""
        //초기값이 빈 문자열일 수 있기 때문
    if(chatContainer.style.display == "none" || chatContainer.style.display=="") {
        chatContainer.style.display = "flex";
        toggleButton.textContent = "채팅숨기기";
    } else {
        chatContainer.style.display = "none";
        toggleButton.textContent = "채팅보이기";
    }
}
/*
javascript의 매개변수는
function에서 설정한 매개변수의 갯수와
작성하려는 코드의 매개변수의 갯수가 달라도
문제없이 실행되긴 함*/
메세지보이기("안녕하세요 상담봇 입니다. 원하는 메뉴를 입력하세요.", "bot")
function 메세지보이기(message,sender) {
    const chatbox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");

        //                       div 클래스 명 : "message"
        //                                 sender(메세지 보내는 주체) : user 또는 bot
    messageElement.classList.add("message", sender + "-message");
    messageElement.textContent = message;//메세지 보이기
    chatbox.appendChild(messageElement);//보낸 내용 추가하기
}
function sendMessage() {
    const inputbox = document.getElementById("user-input");
    const message = inputbox.value.trim();
        //message는 inputbox의 value
        //trim() : 공백제거
    //만약에 빈칸으로 아무 메세지 없이 보내기를 방지하기 원한다면 설정
    if (message == "") {
        return;
    }//return을 추가해서 더이상 밑으로 못가게 끝내기
    메세지보이기(message,"user");

    inputbox.value = "";//꼼수, input값에 새로운 값으로 "" 을 넣어 메세지 내용을 초기화

    //채팅 봇 띄우기
    setTimeout(() => {
        메세지보이기("저는 채팅 봇 입니다.", "bot");
    }, 1000)//1초 후에 메세지 보이기
}