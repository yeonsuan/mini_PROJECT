const result_blank = document.querySelector(".result_blank");
const result_numb = document.querySelector(".result_numb");
const bonus_blank = document.querySelector(".bonus_blank");
const result_bonus = document.querySelector(".result_bonus");


const balls = Array(45).fill().map(function(item, idx){ 
    return idx + 1;});
    // 1. array로 빈칸만들고 , 2. fill로 undefined을 채우고, 3. map으로 숫자채우기


const mixed = []; //배열 만들기


while(balls.length>0){ //공 하나 랜덤 꺼내기
    let moved = balls.splice(Math.floor(Math.random()*balls.length) ,1)[0]; //[0]은 괄호를 없애는 방법
    mixed.push(moved); 
};


const picked_num = mixed.slice(0,6).sort(function(p,c){  //0~6까지 잘라서 오름차순으로 정렬
                return p-c});   //p가 앞에오면 오름차순, c가 앞에오면 내림차순, 로또에서 쓰려고
                    

const bonus = mixed[mixed.length - 1]; //mixed 배열에 있는 맨 마지막 숫자를 뽑아오는 것!


result_numb.addEventListener('click', function() {
    function ball_color(num) {

        let ball = document.createElement('div'); //createElement html에 생성하는 것!
        ball.classList.add('ball_color');
        
        ball.textContent = picked_num[num];
        let background_color;
        if(picked_num[num]<=10){
            background_color='#C7361C';
        }else if(picked_num[num]<=20){
            background_color='#EF8102';
        }else if(picked_num[num]<=30){
            background_color='#3771D5';
        }else if(picked_num[num]<=45){
            background_color='#40C43A';
        }
        ball.style.background = background_color;
        result_blank.appendChild(ball); //appendChild는 추가하는거 
    }
    setTimeout(function(){
        ball_color(0); 
    },500);
    setTimeout(function(){
        ball_color(1); 
    },1000);
    setTimeout(function(){
        ball_color(2); 
    },1500);
    setTimeout(function(){
        ball_color(3); 
    },2000);
    setTimeout(function(){
        ball_color(4); 
    },2500);
    setTimeout(function(){
        ball_color(5); 
    },3000);
})

result_bonus.addEventListener('click', function() {
    function bonus_color(b_num) {
        console.log(b_num);
        let bonuscome = document.createElement('div'); 
        bonuscome.classList.add('bonus_color');
        bonuscome.textContent = b_num;


        let background_color;
        if(b_num<=10){
            background_color='#C7361C';
        }else if(b_num<=20){
            background_color='#EF8102';
        }else if(b_num<=30){
            background_color='#3771D5';
        }else if(b_num<=45){
            background_color='#40C43A';
        }
        bonuscome.style.background = background_color;
        bonus_blank.appendChild(bonuscome); 
    }
    setTimeout(function(){
        bonus_color(bonus); 
    },500);

});
