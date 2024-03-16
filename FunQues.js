//  find number of  vowels (a,e,i,o,u) in string using function

/* 
function vowels(str){
  let count = 0;
  
  for(let i of str){
    if(i === 'a'|| i==='e' || i=== 'i'|| i === 'o' || i === 'u'){
        count++;
    }
  }
  console.log(` no of vowels in string = ${count}`);

  return count;
   


}

let char = vowels("aaa");
vowels("a");
vowels("hello mahendra singh how are  you");
 */

// using arrow function 
  
 /* 
const findvowels= (str)=>{
    let count = 0;
    
    for(let i of str){
      if(i === 'a'|| i==='e' || i=== 'i'|| i === 'o' || i === 'u'){
          count++;
      }
    }
    console.log(` no of vowels in string = ${count}`);
  
    // return count;
     
  
  
  }
  
  findvowels("aaa");
  findvowels("bcdfgt");

  */










// task-1:   given array of maks find the 90+ scored of student using filter method

/*
let   arr1 =[60,40,95,70,50];
 let scored= arr1.filter((val) =>{
    return val>=90;
 })
 console.log(scored);

 */











 // task-2: take a num as input and create array  of number form 1 to n.

 let number = 1000;
 
 let arr1 = [];

 for( let i=1; i<=number; i++){
     arr1[i-1] = i;
 }
  console.log(arr1);

  let sum = arr1.reduce((res,cur) =>{
      return res+cur;
  });
  console.log(sum);

  // factorial 

  let factorial = arr1.reduce((res,cur) =>{
    return res*cur;
});
console.log(`factorial is = ${factorial}`);