


const intrest ={
  caltext (){
    console.log("10%");
  },
};

const mahendra = {
    sal : 1000,
};

const chand = {
    sal : 1000,
};

const  gopal = {
    sal : 1000,
};

const amresh= {
    sal : 1000,
};

// using  __proto__  object

 mahendra. __proto__ = intrest;
 console.log(mahendra);

 chand. __proto__ = intrest
console.log( chand);

gopal. __proto__ = intrest
console.log(gopal);

amresh. __proto__ = intrest
console.log(amresh);




// same 

// const intrest ={
//     caltext (){
//       console.log("10%");
//     },
//   };
  
//   const mahendra = {
//     sal : 1000,
//     caltext (){
//         console.log("taxt rate is 50%");
//     },
// };

// mahendra . __proto__  = intrest;
// console.log(mahendra);