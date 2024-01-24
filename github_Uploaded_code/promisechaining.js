//promise chain ->  use to fetching data from API one by one .

 function asyncfun(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             console.log("same data1");
             resolve("success");
            reject("error  accruning");

        },4000);
    });
    
 };



 // deficult way to write 


 /*
 console.log("feching data1....");
 let promisechain = asyncfun();
 promisechain.then((res)=>{
    console.log(res);

    console.log("feching data2 ....");
    let promisechain2 = asyncfun();
    promisechain2.then((res)=>{
        console.log((res));
    });
 });



*/





// easy way same code 


/*

console.log(" feching data 1....");
 asyncfun().then((res)=>{
    console.log(res);
    asyncfun().catch((res)=>{
        console.log(res)

    });
 });


*/


//easy same code to write 

console.log(" feching data 1....");
asyncfun().then((res)=>{
   console.log(" feching data 2....");
    return asyncfun();
 });




 


  