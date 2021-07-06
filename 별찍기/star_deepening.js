//별찍기 심화버전

// for(i=6; i>0; i--){
//     console.log('*'.repeat(i-1));
// }

// for(i=0; i<=5; i++){
//     console.log(' '.repeat(5-i)+'*'.repeat(i));
// }

// for(i=0; i<5; i+=2){
//     console.log(' '.repeat(2-i)+'*'.repeat(i+1));
// }

// console.log(' '.repeat(2) + '*'.repeat(1));
// console.log(' '.repeat(1) + '*'.repeat(3));
// console.log(' '.repeat(0) + '*'.repeat(5));

// for(i=1; i<=5; i+=2){ //1,3,5
//         console.log(' '.repeat(i-1)+'*'.repeat(i))
// }


//트리찍기
for(let i = 1; i<=9; i=i+2) {
    console.log(' '.repeat((9-i)/2) + '*'.repeat(i));
}
