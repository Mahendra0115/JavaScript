// supper -> this is use to access the parent's class cunstructor in child class cunstructor .
// This  - >  it is use to access the featrs of self class varr .


class parent {
    constructor(father){
        console.log(" this is parent class constructor")
        this.father = father;
    }

    eat(){
        console.log("eating food");
    }
}

class chield extends parent{
    constructor(father){
       console.log("child class constructor ");
    //    access parent class constructor
       super(father);
       
    }

    walking(){
       // eccess parent's class method 
        super.eat();
        console.log(" go for walking");
        
    }
}
let  obj = new chield("satendra"); 
console.log(obj);
console.log(obj.walking);

  