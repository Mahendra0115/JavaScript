// IIFE -> it is immedatelly  called . when it define.

function studentclass(getstudentsata){
    return new Promise((resolve,rejject)=>{
        setTimeout(()=>{
            console.log(`student1 =${getstudentsata}`);
            resolve(200);
        },2000);
    });
};


// Using IIFE function 
(
 async function fourthyearstudent(){
    console.log("getting of student 1 ....")
     await studentclass(1);
     console.log("getting of student 2 ....")
     await studentclass(2);
     console.log("getting of student 3 ....")
     await studentclass(3);
} )();