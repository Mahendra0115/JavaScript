// alert("welcome to the html page");

console.dir(document.body);
console.log(document.body);


//  access by  id
let heading = document.getElementById("heading1")
  console.log(heading);
 

//  access by className -> it is return of HTML Collection.

let class1 = document.getElementsByClassName("container");
 console.log(class1);



 // access button
let button1 = document.getElementById("mybtn");
 console.log(document.button1);



//  access by TagName
 let newpara = document.getElementsByTagName("p");
 console.log(newpara);





//  query Selector -> it return Node List

// let fristelemet = document.querySelector(".container") // 1st Element select in paragraf
// console.dir(fristelemet);


let fristelemet = document.querySelector("#mybtn") // 1st Element select in paragraf
console.dir(fristelemet);


//  all Element select 

let allElements = document.querySelectorAll(".container") // all  element select
console.dir(allElements);


//access dom child

 document.querySelector("div");

 // access div ke andar div
 document.querySelector("div").children;



 // access innerText , innerHTML
 let div = document.querySelector("div")
  console.log(div);





  
