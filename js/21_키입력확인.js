            //화면에 존재하는 키 모두 가져오기
                //                               (.key) == (class="key")
                //                               문서에 존재하는 .(class)key를 모두 가져옴
                const 키들 = document.querySelectorAll(".key");
                
                //document(문서, 화면 전체)
                //                  keydown = 키보드에서 키가 눌리는 것
                //                              e : 이벤트 객체(이벤트 관련 정보가 모두 담겨있음)
                //                              e.key : 입력된 키를 확인
            document.addEventListener("keydown", function(e) {
                let 숫자값저장;//인덱스 값을 저장할 변수
                switch(e.key) {
                    case 'q' :
                        숫자값저장 = 0;
                        break;
                    case 'w' :
                        숫자값저장 = 1;
                        break;
                    case 'e' :
                        숫자값저장 = 2;
                        break;
                    case 'r' :
                        숫자값저장 = 3;
                        break;
                    default :
                        return;//함수종료
                }

                //숫자번호와 일치하는 key배열의 태그 색을 변경
                키들[숫자값저장].style.background = "black";
                키들[숫자값저장].style.color = "white";
            });

            document.addEventListener("keyup", function(e) {
                let 숫자값저장;
                switch(e.key) {
                    case 'q' :
                        숫자값저장 = 0;
                        break;
                    case 'w' :
                        숫자값저장 = 1;
                        break;
                    case 'e' :
                        숫자값저장 = 2;
                        break;
                    case 'r' :
                        숫자값저장 = 3;
                        break;
                    default :
                        return;//함수종료
                }
                키들[숫자값저장].style.background = "white";
                키들[숫자값저장].style.color = "black";
            });