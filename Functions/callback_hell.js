//  callback hell -> it is use to call the nested callback function





// simple function
function dataset(userid){
    console.log(userid);
}
dataset(4);



    // setTimeout function

    setTimeout(() => {
        console.log("hello mahendra");
    }, 2000);
 

// callbackhell using 
    
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
            
        });
       })
    });





    // Example - > 2 


    
                       ///call backhell -> Example of Calculatr

function add(a,b,getNextData){
    setTimeout(()=>{
        console.log("addition is " , a+b);
        if(getNextData){
              getNextData();
        }
    },1000);
}

function sub(a,b,getNextData){
    setTimeout(()=>{
        console.log("Subtruction is " , a-b);
        if(getNextData){
              getNextData();
        }
    },1000);
}

function mul(a,b,getNextData){
    setTimeout(()=>{
        console.log("Multiplication is " , a*b);
        if(getNextData){
              getNextData();
        }
    },1000);
}

function dev(a,b,getNextData){
    setTimeout(()=>{
        console.log("Division is " , a/b);
        if(getNextData){
              getNextData();
        }
    },1000);
}


console.log("getting data1....")
add(4,5, () =>{
    console.log("getting data2....")
    sub(4,5, ()=>{
        console.log("getting data3....")
        mul(4,5,()=>{
            console.log("getting data4....")
            dev(4,5);
        })
    })
})


    











//using the "promise chain" to perfrom same operation 




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