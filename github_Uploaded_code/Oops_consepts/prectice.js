let data = "name, email,pass"

class user{
    constructor(name, email){
        this.name=name;
        this.email = email;

    }

    viewData(){
        console.log("data ", data);
    }
}

class Admin extends user{

    constructor(email,name){
    super(name,email);
    };

    editdata(){
        data = " edit your data";
    }
}

let admin1 = new Admin("admin1", "Admin1@gmail.com");
 console.log(admin1);

// let student1=new user("mahendra","mahendrasing@gmail.com");
// console.log(student1.viewData());
// let student2 = new user("chnad" ,"chand@gmail.com");
// console.log(student2.viewData());
// let  student3 = new user("shivam","sinvam@gmail.com");
// console.log(student3.viewData());

// let teacher1 =  new user("dean", "dean@gmail.com");
// console.log(teacher1.viewData());
// let teacher2 = new user ("hod", "hod@gmail.com");
// console.log(teacher2.viewData());




