
// external event handling 
/* 

let btn1 = document.querySelector("#btn1");

btn1.onclick = ()=>{
    console.log(`value of A is `);
    let a = 10;
    a++;
      console.log(a);
};

let div = document.querySelector("#div")
div.onmouseover = ()=>{
    alert("mouse hoverd");
}

*/


/*

// EventObject ->  it use to give event information like -> what type of event 
  
 let div = document.querySelector("#div");
 div.onmouseover = (eventInfo) =>{
    console.log(eventInfo.type);
   console.log(eventInfo.type);

//    target is use for get code of according Id
   console.log(eventInfo.target);

//    clientX, ClientY is use for Game 
   console.log(eventInfo.clientX,eventInfo.clientY);
 };

 
 */


 /* 
 // Event Listener -> * It is use to perform multiple operation in  one  event . it have two  arguments Like -> addEventListener( event, callback). let btn1 = document.querySelector("#btn1");  


    let btn1 = document.querySelector("#btn1");              
    btn1.addEventListener("click", (evnt)=>{
        console.log("butten clicked");
        console.log(evnt.target)
        console.log(evnt.type)

        
    });
                      
    btn1.addEventListener("click", ()=>{
        console.log("butten clicked - hendler2");
        
    });
 
 */



   // removeEventListener ->
    
   let btn1 = document.querySelector("#btn1");              
   
                      
    btn1.addEventListener("click", ()=>{
        console.log("butten clicked - hendler1");
        
    });

    btn1.addEventListener("click", ()=>{
        console.log("butten clicked - hendler2");
        
    });

    btn1.addEventListener("click", ()=>{
        console.log("butten clicked - hendler3");
        
    });

   

          //  suppose we delite hendler 4 function 
    let hendler4remove =  ()=>{
        console.log("butten clicked - hendler4");
        
    };

    btn1.addEventListener("click",hendler4remove);


    btn1.removeEventListener("click",hendler4remove);
       




    // Imp Note :- when  we go from (one state to anogther state)  and agein return  same state . that is called "Toggel Button".
    
