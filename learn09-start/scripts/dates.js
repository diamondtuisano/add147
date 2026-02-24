/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
var date = new Date();
document.getElementById("basic").innerHTML = date;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
var date = new Date(2026, 1, 24);
document.getElementById("today").innerHTML = date;

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
var date = new Date("June 11, 1998 12:00:00");
document.getElementById("birthday").innerHTML = date;

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
var date = new Date();
document.getElementById("iso").innerHTML = date.toISOString();

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
var date = new Date("08/30/1996");
document.getElementById("date1").innerHTML = date;

var date = new Date("Dec 12 2025");
document.getElementById("date2").innerHTML = date;

document.getElementById("date3").innerHTML = new Date("2000-09-01T06:00:00-03:00");

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
var date = new Date("1968-09-13");
document.getElementById("get1").innerHTML = date.getFullYear();

var date = new Date("2020-05-20");
document.getElementById("get2").innerHTML = date.getMonth() + 1;

var months = ["January", "February", "March", 
    "April", "May", "June", "July", "August", "September",
    "October", "November", "Decemeber"
]
var date = new Date();
let get3 = months[date.getUTCMonth()];
document.getElementById("get3").innerHTML = get3;

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date = new Date("2023-12-25");
let day = days[date.getDay()];
document.getElementById("get4").innerHTML = day;

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
var date = new Date("October 21, 2003");
date.setFullYear(2010);
document.getElementById("set1").innerHTML = date;

var date = new Date("July 1, 2001");
date.setMonth(10);
document.getElementById("set2").innerHTML = date;

var date = new Date("March 20, 2026");
date.setDate(date.getDate() + 8);
document.getElementById("set3").innerHTML = date;

var date = new Date("November 04, 2018");
date.setHours(15);
document.getElementById("set4").innerHTML = date;