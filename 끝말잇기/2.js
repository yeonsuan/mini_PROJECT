const body = document.querySelector("body"); //
const question = document.querySelector(".question_blank");  //html에서 class라고 붙어있는건 . 붙이고 이름쓰기
const answer = document.querySelector(".answer_blank");
const submit = document.querySelector(".submit");

question.innerHTML = "돈까스";

submit.addEventListener("click", ()=>{
    let 제시어 = question.innerHTML;
    let 정답 = answer.value;

    if(제시어[제시어.length-1]=== 정답[0]){
        alert("정답입니다.")
        question.innerHTML = 정답;
    }else{
        alert("오답입니다.");
    }
    
});

// body.addEventListener("click", ()=>{
//     //body를 클릭했을 때 동작할 일.
//     console.log("연결확인")
// });