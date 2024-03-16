
// Imp Notes-> 

//    XML - Api sending  data in XML -{ eXtensible Markup Language} formet.
//    JSON -  After if  Api sending  data in { JSON -> (js Object Notation ) } formet.
//    AJAJ - Now Api sending  data in { AJAJ -> (Asynchronous js and JSON) }  formet.

// WE are sent any  request  to api  by AJAX - { Asynchronous JavaScript and XML}
    

const URL = "https://cat-fact.herokuapp.com/facts" ;
 const fectpara = document.querySelector("#fact");
 const btn = document.querySelector("#btn");


// using Async and await


const getFacts = async() =>{
    console.log("gatting data ....");
    let responce = await fetch(URL);
    console.log(responce); 

    let readdata = await responce.json();
    // console.log(readdata[0].text);
   fectpara.innerText = readdata[0].text;
};   
getFacts();







// now same operation perfrom using promis chain

/*
function getfacts(){
    fetch(URL);
    .then((responce)=>{
        return responce.json();
    });
    .then((data)=>{
        return data.json();
        fectpara.innerText = data[0].text;
    });
}

*/



//  eding event listener on button 
btn.addEventListener("click",fectpara);

