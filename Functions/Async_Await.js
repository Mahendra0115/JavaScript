//  Async - >  it is return a promise compalsary.
function Api(){
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            console.log("Wegther Information");
            resolve(200);
            reject("error")
         },2000);
    });
};




 async function Weatherapi(){
    console.log ("getting data1...");
     await Api(1);
    console.log ("getting data2...");
      await Api(2);
    console.log ("getting data3...");
    await Api(3);
    console.log ("getting data4...");
    await Api(4 );
 }
 Weatherapi();




     //  prectise----->  

     /*
console.log("getting data from server.....")

 function add(){
   return new Promise((resolve, reject)=>{
      setTimeout(()=>{
       console.log(`opr successfully performed: ${5+3}` );
       resolve(200);
       reject("tectnical essus : ");
      //  return a+b;
      },2000);
   })
 }


 
 function sub(){
   return new Promise((resolve, reject)=>{
      setTimeout(()=>{
       console.log(`opr successfully performed:  ${5-3}` );
       resolve(200);
       reject("tectnical essus : ");
      //  return a+b;
      },2000);
   })
 }


 function multi(){
   return new Promise((resolve, reject)=>{
      setTimeout(()=>{
       console.log(`opr successfully performed:  ${5*3}` );
       resolve(200);
       reject("tectnical essus : ");
      //  return a+b;
      },2000);
   })
 }


 */
