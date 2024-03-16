// callbacks- > it is a function that is pass as a argument in next function.

 function sum(a,b){
    console.log(a*b);
 }
function calculator(a,b,sum){
     sum(a,b);
 }
 

 calculator(3,5,sum);







 function add(x,y){
   console.log(x+y);
 }

 function cal(x,y,add){
   console.log(add)

 }

 cal(8,2,add);