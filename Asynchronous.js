// Asynchronous -> it is not allow wait to execute program.

console.log("one")
console.log("two")


// take 2 second to execute this block "good morning".
setTimeout((str) =>{
    console.log("good morning");
},2000);

console.log("three");
console.log("four"); 