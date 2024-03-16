// ** Slice ** -> Remove elements


// Number Array
let  arr1 = [2,4,6,4,6];
let arr2 =arr1.slice(1,3) ;
console.log(arr2);


// String Array
let arrstr =["hello","sohil","rama","student"];
let  arrstr2 =arrstr.slice(1,3);
console.log(arrstr2);


// String Array -> Remove multiple string in Array
let Multistr =["hello","sohil","rama","student","subhi","chand"];
let  multistr2 =Multistr.slice(1,4);
console.log(multistr2);



//             ** Splice ** -> use to (add,remove,replace) element in array;

let arrSplice = ["google","amazone","ubar","IBM","Flipcar"]
// remove frist element
arrSplice.splice(0,1);
// replace element 
arrSplice.splice(1,0,"montu");
// Add element
arrSplice.splice(1,0,"mahi");
console.log(arrSplice);