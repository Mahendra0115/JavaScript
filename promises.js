// promises ->  * this is an object in js . it work with API
            //  * it is working on three states like - (panding,fulfill,rejected).

            // let promises = new Promise((resolve,reject)=>{
            //     console.log("i am a promises");
            //     // resolve("successfull ");
            //     reject("some error accure");
            // });



            // promises

            /*
              function getData(dataId,getNextData){
                return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        console.log("hello",dataId);
                        resolve("success");
                       
                        if(getNextData){
                            getNextData();
                        }
                    },5000)
                });
              }
               getData(123);


               */




    //  //  .then() -> it's called when async function resolve successyfully.

    //   const getpromise = ()=>{
    //     return new Promise((resolve,reject)=>{
    //         console.log("i am a resolve");
    //         resolve("success");
    //         reject("error");
    //     })
    //   }

    //   let promise= getpromise();
    //   promise.then((res)=>{
    //     console.log("promise fullfilled");
    //   });

    //   promise.catch((res)=>{
    //     console.log("rejected");
    //   })




    //   // second example 



    //   const myPromise = new Promise((resolve, reject) => {
    //     // Async operation (e.g., fetching data from a server)
    //     const success = true;
      
    //     if (success) {
    //       resolve("Operation successful!");  // Resolve the promise
    //     } else {
    //       reject("Error occurred!");  // Reject the promise
    //     }
    //   });
      
    //   // Use .then and .catch to handle the promise result
    //   myPromise
    //     .then((result) => {
    //       console.log(result);  // Output: Operation successful!
    //     })
    //     .catch((error) => {
    //       console.error(error);  // Output: Error occurred!
    //     });