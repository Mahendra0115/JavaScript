//  forEach->    *  it  is  give the each value of array to internal function .
             //  *  this is automatacaly called  of the inner function.
            //   *  it is use to work with array elements. like - Upper case of array string 
            //   *   it also called  "Higher Order Function/Method" (HOF/HOM)

            //  decleared a array
             let arr1 = [1,2,3,4,5];

            //  using the ForEach  function
            arr1.forEach(function value(num){
                    console.log(num);
            });

            // using arrow function same code

            arr1.forEach((num) =>  {
                console.log(num);
                return  num;
            });


            // For Example -: 

            let arr2 = ["mahi", "chand", "sohil","amreesh"];
            // we neeed to get each string in "toUperCase"
            arr2.forEach((str ) => {
                console.log(str.toUpperCase());
            });


            // QUESTION-1: Print squire of each value in array.  using forEach function

               let arr3 = [1,2,3,4] ;
                rr3.forEach((num) => {
               console.log(num*num);
              });
  