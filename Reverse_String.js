//    { Split , Array.from } ---> it use to conver string to array indexing byes

let str = "mahendra";
let arrstring =Array.from(str);


console.log(arrstring);


// it only convert string to array simple 
let str2 = "mahendra";
let arrstring2=str.split(str);


console.log(arrstring2);



/// reverse String ->>  using Array.form

let string  = "hello mahendra";
let  reverse = Array.from(string).reverse("").join(" ");

console.log(reverse);


// reverse using loop 

let string2 = "chandanpatel";
let reverse2 ;
for(let i = string2.length-1; i >= 0; i--){
    reverse2 += string2[i]
}
console.log(reverse2);
