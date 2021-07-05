const formula = document.querySelector('.formula');
const input = document.querySelector('input');
const form = document.querySelector('form');
const day= document.querySelector('.day');

function getTime(){
    const time = new Date();
    const year = time.getFullYear();
    const month = ('0'+(time.getMonth()+1)).slice(-2);
    const date = ('0'+(time.getDate()+1)).slice(-2);
    day.innerHTML = year +"-" + month + "-"+ date;
    return getTime;/*innerHTML, textContent 비슷 의미*/
} 
getTime();



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