// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors; restructured variables to be declared first
    //changed var to nickName 
    var name1 = "Meri";
    var firstName = "Meredith",
        lastName = "Engel";
    var firstName = "Meredith";
    var nickName = "Beba";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    document.getElementById("first").innerHTML = firstName;
    document.getElementById("nickName").innerHTML = nickName;

}

function scope() {
    //fix the errors
    var name1 = "Meri"; // global w/"var"
    //const taxRate = .07; // constant will not change
    let localRate = .05; // local can change w/"let"
    let taxRate = .09; // local taxRate will change after tax has been called
    document.getElementById("tax").innerHTML = taxRate;
    {
    taxRate = .04;
    } //.09 will change to .04 after block scope
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHTML = localRate;
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Carl";
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Carl"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed; 
}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 10 + 32
    document.getElementById("addition").innerHTML = "10 + 32 = " + addition;
    let subtraction = 50 - 25
    document.getElementById("subtraction").innerHTML = "50 - 25 = " + subtraction;
    let multiplication = 6 * 8
    document.getElementById("multiplication").innerHTML = "6 * 8 = " + multiplication;
    let exponent = 2 ** 4
    document.getElementById("exponent").innerHTML = "2 ** 4 = " + exponent;
    let division = 144 / 12
    document.getElementById("division").innerHTML = "144 / 12 = " + division;
    let modulus = 10 % 4
    document.getElementById("modulus").innerHTML = "10 % 4 " + modulus;
    let increment = 7;
    increment++;
    document.getElementById("increment").innerHTML = "7 ++ = " + increment;
    let decrement = 10;
    decrement--;
    document.getElementById("decrement").innerHTML = "10 -- = " + decrement;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10
    document.getElementById("equals").innerHTML = "x = 10 " + "x = " + x;
    x += 1
    document.getElementById("plus_equals").innerHTML = "x += 1 " + "x = " + x;
    var y = 10
    y -= 1
    document.getElementById("minus_equals").innerHTML = "x -= 1 " + "x = " + y;
    var z = 10
    z *= 1
    document.getElementById("times_equals").innerHTML = "x *= 1 " + "x = " + z;
    var a = 10
    a /= 1
    document.getElementById("divide_equals").innerHTML = "x/= 1 " + "x = " + a;
    var b = 10
    b %= 1
    document.getElementById("modulus_equals").innerHTML = "x %= 1 " + "x = " + b;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const booksArray = ["The Martian", //array
                "Project Hail Mary", 
                "Ender's Game"];
    document.getElementById("array").innerHTML = booksArray;
    const booksObject = {
        mars : "The Martian",
        space : "Project Hail Mary",
        kids : "Ender's Game"
    };
    document.getElementById("object").innerHTML = 
        booksObject.mars + booksObject.space + booksObject.kids;
}