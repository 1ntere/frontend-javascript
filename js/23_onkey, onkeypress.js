function 기능만들기() {
    const 기능 = document.getElementById("영문이름");
    기능.value = 기능.value.toUpperCase();
    /*
    toUpperCase() : 영어를 모두 대문자로 변경
    toLowerCase() : 영어를 모두 소문자로 변경
    */
}
function 엔터기능(event) {
    //만약에 enter 키를 눌렀을 때
    if(event.key === 'Enter') {
        alert("입력한 내용이 전달되었습니다.")
    }
}