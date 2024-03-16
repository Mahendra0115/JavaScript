// map -> this is same like forEach function but It return A new Array.
 let number = [10,15,20,25];

let newArr =  number.map((num) =>{
     return num;
 });
 console.log(newArr);

//   return the squire  array
let Squire = number.map((val) =>{
    return val *val ;
}) 
 console.log(`Squire array is = ${Squire}`);