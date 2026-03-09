//declare summary variable
//use iteration
//display summary under summary paragraph
const summary = new Set([
    "Management Analysts recommend ways to improve an organization's efficiency.",
    "Also known as consultants",
    "Important skills to have: analysis, communication, time-management.",
    "Typical Entry-Level Education: Bachelor's Degree",
    "Work Experience: less than 5 years",
    "No on-the-job Training",
    "Job outlook is projected to grow 9% from 2024 to 2034.",
    "Similar jobs: accountants, facilities managers, budget analysts.",
    "Management analysts held approximately 1.1 million jobs in 2024."
]);

let indent = "";
for (const i of summary) {
    indent += i + "<br>";
}

document.getElementById("summary").innerHTML = indent;

//questions form + buttons
//switch statement
//nested funtion
function myForm() {
    let q1 = "Do you like improving your environment?";
    document.getElementById("q1").innerHTML = q1;
    let q2 = "Do you have at least a Bachelor's Degree?";
    document.getElementById("q2").innerHTML = q2;
    let q3 = "Do you have at least 5 years of relevant work experience?";
    document.getElementById("q3").innerHTML = q3;
    let option = ""; //empty var for option yes/no
    let comparison = ""; //empty var for different outcomes
    document.getElementById("submit").innerHTML = ""; //empty var for outcome?

    /*function comparison() {
        document.getElementById("submit").onclick = function() {comparison}; //?

    //list all potential outcomes + default
    switch (answer) {
        case 1:
            option = "Yes";
            break;
        case 2:
            option = "No";
            break;
        default:
            option = "That is not a valid option.";

    }

    //list potential outcomes
    if (q1 === "Yes" && q2 === "Yes" && q3 === "Yes") {
        comparison = "You're a great fit!"
    } else if (q1 === "Yes" && q2 === "Yes" && q3 === "No") {
        comparison = "You don't have the right amount of work experience."
    //other options
    } else {
        comparison = "That is not a valid comparison."}
}*/
}
    
//declare medianWage variable
//concatenate strings
//display medianWage under median-wage p-id
let medianWage = 
"The median annual wage for management analysts was $101,190 in May 2024." + 
"<br>" + "The lowest 10% earned less than $59,720 and the highest 10% earned greater than $174,140."

document.getElementById("median-wage").innerHTML = medianWage;

//create a map
//using four different job titles and pay associated with them
//display content of map using forEach method under pay paragraph
const pay = new Map([
    ["Professional, scientific, and technical services", " - $107,790"],
    ["Management of companies and enteprises", " - $101,560"],
    ["Finance and insurance", " - $98,710"],
    ["Government, excluding state and local education and hospitals", " - $94,080"]
]);

let average = "";
pay.forEach (function(value, key) {
    average += key + value + "<br>"
})

document.getElementById("pay").innerHTML = average;

//declare references variables
//display references under references p-id
let reference1 = 
"Bureau of Labor Statistics, U.S. Department of Labor, Occupational Outlook Handbook, Management Analysts, at https://www.bls.gov/ooh/business-and-financial/management-analysts.htm (visited January 04, 2026)."
let reference2 =
"Grand Canyon University. (n.d.). How to Become a Management Analyst. https://www.gcu.edu/career-guide/business/management-analyst"

document.getElementById("references").innerHTML = reference1 + "<br>" + "<br>" + reference2;