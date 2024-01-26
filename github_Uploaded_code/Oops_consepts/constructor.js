
// cunstructor -> it is use to creat the Object


class RamaUniversity {

//   creating cunstructure
constructor(coll_name, no_of_department){
    console.log("creating a new object:");
    this.coll_name = coll_name;
    this.no_of_department = no_of_department;
}

//  behaviour of class
    Engineering(){
          console.log("engineering department")
    }

    madicalsciences(famous){
          this.famousdepartment = famous;
    }

    agreculture(){
         console.log("egreculture department");
    }

};


// creating objects behaviour 

let collage = new RamaUniversity();
 console.log(collage);


//   this object calling cunstructor
 let managment = new RamaUniversity(" rama",10);
 console.log(managment);