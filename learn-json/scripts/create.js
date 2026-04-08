//empty array
let personArray = [];

//addme function
function addme() {
    //get info from form: https://www.w3schools.com/Jsref/prop_text_value.asp
    let fName = document.getElementById("fname").value;
    let lName = document.getElementById("lname").value;
    let eMail = document.getElementById("email").value;
    let phonenumber = document.getElementById("phone").value;

    //create object
    let person = {
        firstName: fName,
        lastName: lName,
        email: eMail,
        phone: phonenumber
    };

    //add object to array
    personArray.push(person);

    //stringify
    let personJSON = JSON.stringify(person);

    //display on page
    document.getElementById("json-value").innerHTML = personJSON;
    
}

/*This one mirros the video but the directions asked to it to an array from the data 
on the form so I thought I would just comment this out

//addme function
function addme() {
    //create object
    let person = {
        firstName: "Jenny",
        lastName: "Fromforrestgump",
        email: "tommytutone@gmail.com",
        phone: 8158675309
    };
    //stringify
    let personJSON = JSON.stringify(person);
    //display on page
    document.getElementById("json-value").innerHTML = personJSON;
    //return
    return person;
}*/