
// for(let i=1; i<=num; i++){
//     console.log(i);
//     sum = sum+i;

// }
// console.log(`total sum of number is: ${sum}`);


let n = 123;

let r,s;
s = 0;
let count = 0;
while(n != 0){
   r = n%10;
   s = s+r;
   n = n/10;

   count++;
}

console.log("number is ",count);
