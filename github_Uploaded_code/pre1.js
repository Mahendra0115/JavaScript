// let str = "mahendrasingh";
//   let reverse ;
// for(let i=str.length-1; i>=0; i--){
//      reverse += str[i];
// }

// console.log(reverse);



// let string = "chandanpatel";
//   let reverse = Array.from(string).reverse().join();
//   console.log(reverse);
  


// let  mypromise = new Promise((resolve,reject)=> {

//   const success = false;

//   if(success){
//     resolve("password has been changed ");
//   }
//   else{
//     reject("Email or password wrong:");
//   }

// });
// mypromise
// .then((result)=>{
//   console.log(result);
// })
// .catch((error)=>{
//  console.log(error);
// })
  


// function promise(){
//   const seccess= false;
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
      
//      if(seccess){
//       resolve("success full get data");
//      }else{
//       reject("some error");
//      }

//     },2000);
//   })
// }
  


// promise().then((res)=>{
//   console.log("getting data 1....")
//      console.log(res);

//      promise().catch((err)=>{
//       console.log("getting data 2....")
//      console.log(err);
//     })

// })

          // async function

// function asyncwait(){
//   return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//        console("getin api data");
//        resolve();
//        reject ();
//      },5000);
//   })
// }


// async function asyncwait(){
//     console.log("getting data 1...");
//     await asyncwait(1);

//     console.log("getting data 2...");
//     await asyncwait(1);

//     console.log("getting data 3...");
//     await asyncwait(1);

//     console.log("getting data 4...");
//     await asyncwait(1);

//     console.log("getting data 5...");
//     await asyncwait(1);
// };



// const electrictext = {
// monthly(){
//   console.log("10 rupay per unit ");
// },

// }

//  const chand = {
//      permonth: 10
//  }

//  const mahi  ={
//             permonth: 20
//  }

//  const sohil = {
//         permonth : 30
//  }


//  chand.__proto__ = electrictext;
//   console.log("chand ");

//   chand.__proto__ = electrictext;
//   console.log("mahi");

//   chand.__proto__ = electrictext;
//   console.log("sohil");

// var a = 10;
// var b = 20;

// console.log(`Addition is = ${a+b}`);
// console.log(`sub is = ${a-b}`);


// try{
//   console.log(`multiis = ${a*c}`);
// }
// catch(err){
//     console.log(err);
// }


// console.log(`dive is = ${a/b}`);
// console.log(`Addition is = ${a+b}`);



// class Demo{
//  constructor(S_name,S_email){
//        this.S_name =S_name;
//        this.S_email = S_email;
//  }



//    Sum(a,b) {
//        console.log("Addition is= ",a+b);
//    }

//    multi(a,b){
//         console.log("multipication is = ",a*b);
//    }

//    sub(a,b){
//     console.log("substrction is ", a-b);
         
//    }
// }

// let obj =  new Demo("chand ","chand@gmail.com");
//  console.log(obj.Sum(5,6));
//  console.log(obj.multi(5,6));
//  console.log(obj.sub(5,6));
//  console.log(obj);
 

// let studentdata = "name,email,roll_nom";

// class StudentPortal{
//   constructor(S_name,S_email,S_Rool_num){
//     this.S_name = S_name;
//     this.S_email = S_email;
//     this.S_Roll_nom = S_Rool_num;
//   }

//   viewdata(data){
//     console.log("data is ",data);
//   }
// }

// class AdminPortal extends StudentPortal{
//   constructor(S_name,S_email,S_Rool_num,S_course,S_year){
     
//     super(S_name,S_email,S_Rool_num);
//     this.S_course =S_course;
//     this.S_year = S_year;

//   }

//   collageDetail(C_Name,C_Addres,C_Rating){

//     this.C_Name = C_Name;
//     this.C_Addres = C_Addres;
//     this.C_Rating = C_Rating;

//     console.log("Rama University","mandhna Kanpur","5.6");
//   }


// }

// let myobj = new AdminPortal("Mahi","mahi@gmail.com","201545","B.tech","4rth year");
// console.log(myobj);
// console.log(myobj.collageDetail());


// // console.log(obj)
// //  console.log(myobj.viewdata());





// // loop 
// function evenodd(n){
//    var count =0;
//    for(let i=0; i<=n; i++){
//       if(i%2 == 0){
//          console.log("even",i);
//          count++
//       }else{
//          console.log("odd",i);
//          // count++
//       }
//    }
//    console.log("even is= ",count);

// }
// evenodd(100);


// class loop{
//    loop() {
//       let num = 10;
      
//       while(num >= 0){
//          console.log(num);
//          num--;
//       }

//    }
   
// }
// let result = new loop();
// console.log(result);
// function checkPalindrome(n) {
//    let s = 0;
//    let r;
//    let t;

//    // s = 0;
//    // t = n;

//    while (n !== 0) {
//        r = n % 10;
//        s = s * 10 + r;
//        n = Math.floor(n / 10);
//    }

//    console.log("reverse number ",s);

//    // if (t === s) {
//    //     console.log("This is a palindrome number.");
//    // } else {
//    //     console.log("This is not a palindrome number.");
//    // }
// }

// checkPalindrome(12345);



// 

// function pattern(){
//    let n = 5 ;
//    let i,j;
//    for(let i=1; i<=n; i++){
//       for(let j=n; j>i; j--){
//          console.log(" ")
//       }
//       for(let k=1; k<=i; k++){
//           console.log("*");
//       }
//    }
//    console.log("\n");
   
// }
// let result = new pattern();
//  console.log(result);


// let arr1 = [250,645,300,900,50];
// let offer ;
// let count = 0 ;
// // let 
// for(let i =0; i<arr1.length; i++){
//    count = count+arr1[i];
//    offer = (count*10)/100;
// }
// console.log("after appling 10 % off = ",offer );

// let arr1 = ["chand","mahi", "montu","sohil","gopal"];
// let arr2 = [25,645,300,900];
// let arr3 = [500,645,300,900,6000];

//   arr1.splice(5,0,"Amazon");
// console.log(arr1);


// function 
// function vobel(str){
//    let count = 0;
//    if(str === 'a' ||str === 'e' || str === 'i'|| str ==='o' || str === 'u'){
//      count = count+str.length;
//      console.log("voble is",str);
//    }
//    else{
//       console.log("constent is",str)
//    }

//    return count;
// }
// let numberofvoble = vobel ("mahendra");
// console.log(numberofvoble);

// let arr5 = [1,2,3,4,5,6];
// arr5.forEach((num)=>{
//    num = num*2;
//     console.log(num)
// });


// let arr1 = [1,2,3,4,5];
// let arr2 = arr1.map((val)=>{
//    return val*val
// })
// console.log(arr2);

// let arr1 = [1,2,3, ];
// let arr2 = arr1.filter((a,b)=>{
//    console.log("addition is ",)
//    return a+b;
// })

// console.log(arr2);


// function number(arr){
//    let count = 0;
// let arr1 = arr.filter((value)=>{
//    count = count+arr.length;
//    console.log("addition is ",count);
//    return arr1;
// })


// }
// let array = number([1,2,3,4,5])
// console,log(array);

// callback

//  function sum(a,b){
//    console.log("Addition is",a+b);
//  }

//  function multi(a,b){
//    console.log("multi is ",a*b);
//  }

//  function claculator(a,b,sum,multi){
//    sum(a,b);
//    multi(a,b);
//  }
//  let result = claculator(2,3, sum,multi);
//  console.log(result);


// // callback hel
//  function studentdata1(studentId,getNexxtData){
//    setTimeout(()=>{
//       console.log("student 1 getting data....",studentId);
//       if(getNexxtData){
//          getNexxtData();
//       }
//    },2000);
//  }

//  function studentdata2(studentId,getNexxtData){
//    setTimeout(()=>{
//       console.log("student 2 getting data....",studentId);
//       if(getNexxtData){
//          getNexxtData();
//       }
//    },2000);
//  }

//  function studentdata3(studentId,getNexxtData){
//    setTimeout(()=>{
//       console.log("student 3 getting data....",studentId);
//       if(getNexxtData){
//          getNexxtData();
//       }
//    },3000);
//  }


//  console.log("getting data1...");
//  studentdata1(247 , ()=>{
//   console.log("getting data2...");
//   studentdata2(246,()=>{
//    console.log("getting data3....");
//    studentdata3(245,()=>{
//       console.log("done");
//    });
//   });
//  });


//  let promise =new Promise ((resolve,reject)=>{
//    let success = false;
//    setTimeout(()=>{
//       if(success){
//          resolve("Successfully done order:");
//       }
//       else{
//           reject("sorry sir having some technical isseues your orderd is not diliverd:")
//          }
      
//    },3000)
   
//  });

//   console.log("checking your order.....");
//  promise 
//  .then((result)=>{
//    console.log(result);
//  })
//  .catch((result)=>{
//    console.log(result)
//  })

//  Promisechaining

// function promisechain (iphone,getNextData){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//            console.log("Iphone 15 pro max:",iphone);
//            resolve("your order has been placed ");
//            reject(" Sorry , Durring the road eccsident, your I phone is distroy: ");
//            if(getNextData){
//             getNextData();
//            }

//       },2000);
//    })
// }


// // console.log("checking your order: ");
// // promisechain() 
// // .then((result )=>{
// //      console.log(result);
// //      promisechain() 
// //      .catch((result)=>{
// //       console.log(result);
// //      });
// // })

// function api(){
//    return new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//    console.log("getting data1..");
//    resolve("successfull:");
//    reject("network issus: ");
//   },2000);
// });
   
// }

//  async function whegtherapi(){
//    console.log("fetching data")
//     await api(1);
//    console.log("getting data1...")
//   await  api(2);
//    console.log("getting data2...")
//    await api(3);
//    console.log("getting data3...")
//    await api(4);
//    console.log("getting data4...")
//  } ;
//  whegtherapi(); 



// claback 
    // function sum (a,b){
    //       console.log("Addition",a+b);
    // }

    // function multi(a,b){
    //   console.log("multi", a*b);

    // }

    //  function claculator(a,b,add,multi){
    //         add(a,b);
    //         multi(a,b);
    //  }

    //  claculator(2,3,sum,multi);



    // constrocture 
    
    constructor(a,b){
        this.a = a;
        this.b = b
      
    }
    let 