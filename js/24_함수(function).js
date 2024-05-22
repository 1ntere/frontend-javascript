function btn1() {
    const input1 = document.getElementById("input1");
    const value = input1.value;

    let result;//결과는 변경되기때문에 자료형을 let으로 선언

    if (value == 0) {
        result = "0";
    } else if (value > 0) {
        result = "양수";
    } else {
        result = "음수"
    }

    alert(result)
}