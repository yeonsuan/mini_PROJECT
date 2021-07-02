const formula = document.querySelector('.formula'); //class는 .으로 소환 id값은 #으로 소환
const userInput =document.querySelector('input');
const form = document.querySelector('form');

let num1 = Math.ceil(Math.random()*9); //math랜덤은 0에서 1까지, 여기서 9 곱해주면
let num2 = Math.floor(Math.random()*9) + 1; //1더해주는 이유가 0이 안나오게! +1하기 불편하니까 ceil로!
let result = num1 * num2;

//formula.textContent = num1 + 'X' + num2 + '=?'; //innerHTML이랑 비슷 textContent
formula.textContent = `${num1} X ${num2} = ?`



const animationOut = () =>{ //애니메이션을 틀릴 때 마다 반복하기 위해 쓰는 함수//
    userInput.classList.remove('wronganswer');
}


form.addEventListener('submit', (e)=>{     // addEventListener어떤 동작을 했을 때 이런걸 해달라고 요청
    e.preventDefault(); //새로고침 방지
    
    if(result === Number(userInput.value)){
        console.log('good');
        
        num1 = Math.ceil(Math.random()*9);       //같은 변수에다 새로운 숫자를 재할당!!! 그래서 let!
        num2 = Math.floor(Math.random()*9) + 1;     //재할당 하기 때문에 let 안써도됨
        result = num1 * num2;

        formula.textContent = `${num1} X ${num2} = ?`
        
        userInput.value='';
        
    }else{
        console.log('bad');
        userInput.value='';

        userInput.classList.add('wronganswer') /*애니메이션 추가하는 방법*/
        setTimeout(animationOut,800);
    }
})  

console.log(result);  


