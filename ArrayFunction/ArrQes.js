let companies = ["Bloomber","Microsoft","Uber","Google","Ibm","Netflix"];
// task-1 :  remove the frist company from the array
// task -2:  remove  uber & Ola in its place
// task-3:   add Amazon at the end




// task-1 :  remove the frist company from the array
 let value = companies.shift();
  console.log(value);
  console.log(companies);


  // task -2:  remove  uber & Ola in its place
   companies.splice(2,1,"Ola");
 console.log(companies);


    // task-3:   add Amazon at the end
    companies.push("Amazon");
     console.log(companies);