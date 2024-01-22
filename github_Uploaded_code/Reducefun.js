// reduce fun -> it is use to return a " single value"  from array after performing the operations .

// Like -> we calculate addition , multi, avg .

let arr1 = [1,5,6,3,4];
let ArrSum  = arr1.reduce((res,cur) =>{
   // here (res,cur) -> are  "accumulator , currentvalue".
     return res + cur;
});
 console.log(ArrSum);