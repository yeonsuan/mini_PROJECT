//addEventListener보다 더 쉬운방법 onclick!

const user_input = document.querySelector(".userinput_blank"); //숫자 들어가는곳
const result_blank = document.querySelector(".result");


// const division = document.querySelector(".division");
// const mul = document.querySelector(".mul");
// const minus = document.querySelector(".result");
// const plus = document.querySelector(".plus");
// const equal = document.querySelector(".equal");


// division.addEventListener('click', (e)=>{
//     division.innerHTML=" ";
// }) 아직 연산 기호를 눌렀을 때 입력이 안되도록 구현을 제대로 못함


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const userInputHandler = (elem) => { //input창에다 받은 값을 넣어주기!
    user_input.value += elem;  
    
}


const calculateResult = () =>{ //user_input창의 연산을 실행 후, 결과값을 띄우기
    let result;
    result=eval(user_input.value); //1. 데이터 대입만 한 것 JS
    result_blank.innerHTML=result; //2. 웹에 직접 구현하는 방법 WEB
}


const reset = () => { //AC 리셋값
    user_input.value=" ";
    result_blank.innerHTML="계산기";
}
