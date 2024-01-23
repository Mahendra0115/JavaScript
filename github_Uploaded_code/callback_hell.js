//  callback hell -> it is use to call the nested callback function




/*

function dataset(userid){
    console.log(userid);
}
dataset(4);


    setTimeout(() => {
        console.log("hello mahendra");
    }, 2000);
 */


    
   function database1(Userid, getNextData){
         setTimeout(()=>{
            console.log("hello",Userid);
            if(getNextData){
                getNextData();
            }
         },2000);
   }

   function database2(Userid, getNextData){
    setTimeout(()=>{
       console.log("mahendra",Userid);
       if(getNextData){
           getNextData();
       }
    },2000);
   }

    function database3(Userid, getNextData){
        setTimeout(()=>{
           console.log("singh",Userid);
           if(getNextData){
               getNextData();
           }
        },2000);
    }

   
    // callback hell is calling . "nested callback"
    
    database1(1,()=>{
        console.log(`getting data 2....`);
       database2(2,()=>{
        console.log(`getting data 3....`);
        database3(3,()=>{
            // console.log(`getting data 4....`);
            // database(4,()=>{
            //     console.log(`getting data 5....`);
            //     database(5)
            // })
        });
       })
    });

    











//using the "promise chain" to perfrom same operation 

/*


    function database(Userid ){
        return new Promise((resolve,reject)=>{
              setTimeout(()=>{
               console.log("deta1",Userid);
               resolve("success");
              },4000);
        });
       
  }



    console.log("data1 fatching ....");
    let promis = database(1);
     promis.then((res)=>{
        return database(2);  
     });

     console.log("data2 fatching ....");
     promis.then((res)=>{
      return database(3);
     });


     */