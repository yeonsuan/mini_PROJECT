const formula = document.querySelector('.formula');
const input = document.querySelector('input');
const form = document.querySelector('form');
const date= document.querySelector('.date');

function getTime(){
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    date.innerHTML = year +"." + month + "."+ date;
}

// formula.textContent = "수안"; 이게 필요한 코드일까요..?


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let 제시어 =  formula.innerHTML;
    let 정답 = input.value;

    if(제시어[제시어.length-1]===정답[0]){
        console.log('정답입니다.')
        formula.innerHTML = 정답;
    }else{
        console.log('오답입니다.')
    }
})