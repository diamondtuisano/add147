// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 

let bottles = "";
for (let x = 99; x >= 0; x--) {
    bottles += x + " bottles of beer on the wall, " + 
    x + " bottles of beer, " + " take one down, pass it around " +
    x + " bottles of beer," + "<br>"
}

document.getElementById("beer").innerHTML = bottles + "<br>";

//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

const months = [
    "January", 
    "February", 
    "March", 
    "April",
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October",
    "November", 
    "December"
];

let forIn = "";
for (let m in months) {
    forIn += months[m] + "<br>";
}

document.getElementById("for-in").innerHTML = forIn;

// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

let string = "BREAK";

let letters = "";
for (let l of string) {
    letters += l + "<br>";
}

document.getElementById("for-of").innerHTML = letters;

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

let L = "";

let c = 1;
while (c < 51) {
    L += c + "<br>";
    c++;
}

document.getElementById("while").innerHTML = L;