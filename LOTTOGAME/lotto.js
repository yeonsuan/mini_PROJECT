const result_blank = document.querySelector(".result_blank");
const result_numb = document.querySelector(".result_numb");
const bonus_blank = document.querySelector(".bonus_blank");
const result_bonus = document.querySelector(".result_bonus");


const balls = Array(45).fill().map(function(item, idx){  //map더 공부하기 call back 함수!
    //array로 빈칸, fill로 undefine채우고, map으로 숫자채움
    return idx + 1;
});

const mixed = [];

while(balls.length>0){
    let moved = balls.splice(Math.floor(Math.random()*balls.length) ,1)[0]; //[0]은 괄호를 없애는 방법
    mixed.push(moved);
};

const picked_num = mixed.slice(0,6).sort(function(p,c){ 
        //p가 앞에오면 오름차순, c가 앞에오면 내림차순, 로또에서 쓰려고
                    return p-c
                    });

const bonus = mixed[mixed.length - 1]; //mixed 배열에 있는 맨 마지막 숫자를 뽑아오는 것!


result_numb.addEventListener('click', function() {
    function ball_color(num) {
        let ball = document.createElement('div'); //create이거는 html에 생성하는 것!
        ball.textContent = picked_num[num];
        ball.style.display='inline-block';
        ball.style.boxShadow= '2px 2px 2px gray';
        ball.style.border='1px solid black';
        ball.style.borderRadius='20px';
        ball.style.width='30px';
        ball.style.height='30px';
        ball.style.textAlign='center';
        ball.style.marginRight='15px';
        ball.style.marginTop='5px';
        ball.style.marginBottom='5px';
        ball.style.fontSize='15px';
        ball.style.lineHeight='30px';
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
    },1000);
    setTimeout(function(){
        ball_color(1); 
    },2000);
    setTimeout(function(){
        ball_color(2); 
    },3000);
    setTimeout(function(){
        ball_color(3); 
    },4000);
    setTimeout(function(){
        ball_color(4); 
    },5000);
    setTimeout(function(){
        ball_color(5); 
    },6000);
})

