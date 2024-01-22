// callbacks- > it is a function that is pass as a argument in next function.

 function sum(a,b){
    console.log(a*b);
 }

 function calculator(a,b,sum){
     sum(a,b);
 }

 calculator(3,5,sum);