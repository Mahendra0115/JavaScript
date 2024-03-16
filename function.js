// basic function -->  use to repete block of code 
// function demo(){
//       console.log("hello mahendra");
// }
// demo();
// demo();
// demo();

// parametrize function
 function demo2(a,b){
   console.log(a*b);
 }

 demo2(2,1);
 demo2(2,2);
 demo2(2,3);
 demo2(2,4);


 //return function--> always return single value 

 function returndemo(a,b){

    let sum = a+b;
    return sum;
 }
 let  value = returndemo(5,6);
 console.log(`this is return value = ${value}`);



 /*
 NOTE-> the varrible  of function are  called "LOCAL VARRIBLE"
             AND it have "block scop" (this is use only inside  of function's block)  */