const date = document.querySelector('.date');
const user_input = document.querySelector(".user_input");
const button = document.querySelector('.button')
const result_blank = document.querySelector('.result');


// function getTime(){ //시계
//     const time = new Date();
//     const clock = time.getHours();
//     const minute = time.getHours();
//     date.innerHTML = clock +":" + minute;
//     return getTime;
// } 
// getTime();


button.addEventListener("click", (e)=>{
    let list =document.createElement('li') //앞으로 추가될 list, li 태그 추가(createElement)하기 
    list.innerText = user_input.value;  //리스트 안에는 user_input내가 쓴거 값 넣어주기!
    result_blank.appendChild(list);     //결과창에 list를 추가(appendChild)해주기!
    user_input.value=" ";            //추가한 뒤 다시 빈칸으로 만들어주기! 


    list.addEventListener('click',()=>{ //리스트를 클릭했을 때
        list.style.textDecoration= "line-through"; //linep-through 줄긋기
    })
    list.addEventListener('dblclick',()=>{ //리스트에 더블클릭했을 때
        result_blank.removeChild(list); //removeChild 사라지게

        // QQ 여기 list.removeChild라고 하면 안될까요?
    })

    // console.log(user_input.value);

})