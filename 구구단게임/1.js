const formula = document.querySelector('.formula'); //식 쓰는 부분
const A =document.querySelector('input'); //값 입력부분
const form = document.querySelector('form'); //input이랑 button부분

let num1 = Math.ceil(Math.random()*9);
let num2 = Math.ceil(Math.random()*9);
let result = num1*num2;

formula.textContent = num1 + 'X' + num2 + '=?';


const animationOut=()=>{
    A.classList.remove('wronganswer');
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(result === Number(A.value)){
        console.log('good');

        num1 = Math.ceil(Math.random()*9);
        num2 = Math.ceil(Math.random()*9);
        result = num1*num2;

        formula.textContent = num1 + 'X' + num2 + '=?';

        A.value='';

    }else{
        console.log('bad');
        A.value=''; //useinput이라는 상자에 value라는 숫자값;

        A.classList.add('wronganswer')
        setTimeout(animationOut,800);
    }
})

console.log(result);