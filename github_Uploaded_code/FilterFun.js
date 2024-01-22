// filter -> it is use to filter element in array. 
  // like -> access  even/odd num in array elements.

  let number = [2,7,4,5,8,6,4,3,1];
  let even = number.filter((val) =>{
     return   val%2 === 1;
  });
  console.log(even);