// inheritance -> it is use to inharrid (property and method ) of parents class.


/*
class parents {
    habbit(){
        console.log(" awak early in the morning ");
    };
       
};

class chield extends parents{
     behaviour(){
        console.log("atitude boy");
     };
};

let obj = new chield();
console.log(obj.behaviour);
console.log(obj.habbit);

*/





class person{
    eat(){
           console.log("buttor");
    }

    sleep(){
         console.log(" 12 hour");
    }

    walking(){
       console.log(" 1 hour");
    }
}




//   docter

 class docter extends person{
    // same method of person class
    walking(){
        console.log(" 15 hour");
     }
 

    treatment(){
            console.log("treatment of patient");
    }

    serjury(){
     console.log("serjury of patient")
    }

 }



  // engineer 

 class engineer extends docter{

    job(){
     console.log("8 hour job")
    }

    frelancing(){
          console("5 hour frelancing")

    }
}

let Mahendra = new engineer();
// Mahendra.engineer();
console.log(Mahendra);



 // Imp Note :  if we have same method in child and parent class then child's method will called only. this proses also calledd the " Method Ovrerriding".