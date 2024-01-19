/* 

// Sift -> delite & return

let arr1 = [1,5,3,5,8];
let arr2 = arr1.shift();
console.log(arr2);

// Unsift ->  add to start

let Unsift1 = [1,5,3,5,8];
let Unsiftarr =Unsift1.unshift(15);
console.log(Unsiftarr);
console.log(Unsift1);


// concat-> joint multiple array
let Arr1 = [1,3,4,8,2];
let Arr2 = [1,5,4,5,3,8];
let Arr3 = ["monu","aman","sachin","rohit","ravi"];
let joint = Arr1.concat(Arr2,Arr3);
console.log(joint);

*/

// Q:-1 Write a code to, take two array, and replce elements in array to sequence way, and add both array and print them.

//  using only -> sift,unsift,concat,splice,push ,poop methods 

let taskarr1 =[1,3,2,4];
let taskarr2 =[,15,8,9,10];


taskarr1.splice(1,0,2) ;
// taskarr1.splice(1,1,0),

console.log (taskarr1);

let repleced = taskarr1.splice(3,1,4);
// console.log(repleced);
console.log(taskarr1)

let repleced2 = taskarr1.splice(4,1,5);
console.log(taskarr1);

// second array
taskarr2.unshift(6)
console.log(taskarr2);
//    delite
taskarr2.splice(1,1);
console.log(taskarr2);

// replace 15 to 7

taskarr2.splice(1,1,7);
console.log(taskarr2);

let join = taskarr1.concat(taskarr2);



function tasksummiting(){
    
    setTimeout(()=>{
    
    console.log(join);
 },2000);

 setTimeout(()=>{
    console.log("congratulactions your task compleated");
 },1000);

}

tasksummiting();


 