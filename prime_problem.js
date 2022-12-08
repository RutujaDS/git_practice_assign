let number = 45;
function prime(number){
let bag=0;
for(let i=1; i<=number; i++){
if(number%i==0){
   bag++
      }
    }
if(bag==2){
     console.log("Prime");
}else{
     console.log("Not Prime");
}