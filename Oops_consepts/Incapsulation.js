
// class Employee
//   {
//     constructor()
//     {
//        var name;
//        var rating;
//     }

//     // Read Only Access : If we declare (getter methods) only then
//     //     it facilitates the read only access.

//         getName()
//         {
//           return this.name;
//         }

//         // Write Only Access : If we declare (setter methods) only 
//         // then it facilitates the write only access.

//       setName(name)
//       {
//         this.name=name;
//       }



//     //   Read & Write Access : If we declare both getter and setter methods 
//     //      then it facilitates both read and write access.
 
//       getRating()
//       {
//         return this.rating;
//       }
//     setRating(rating)
//     {
//           this.rating=rating;
//     }
// }
//     var emp=new Employee();
//      emp.setName("Naren");
//      emp.setRating(9);
//      console.log(emp.getName()+" "+emp.getRating());



     class student{
        constructor(S_name,S_rum){
            S_name ;
            S_rum ;

        }
        // using the (getter and setter) method 

        setS_name(){
             return this.S_name;
        }
        setS_name(S_name){
            this.S_name = S_name
        }

        // using both  method

       getS_rum(){
          return this.S_rum;
       }
       getS_rum(){
           this.S_rum = this.S_rum;
       }

     }

      //    createing a new object 

      const stu = new student();
      stu.setS_name = "Mahendra";
      stu.setS_rum = 502;
      console.log(stu.getS_name()+ " " +stu.getS_rum());
      console.log(stu);
