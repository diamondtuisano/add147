function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Diamond Tuisano"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    let a = 6
    let b = "7"
    let c = a + b
    document.getElementById("add").innerHTML = c;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let myNumber = 12
    document.getElementById("to-string1").innerHTML = "Decimal 12 = " + "<br><br>" +
    
    "Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
    "Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
    "Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
    "Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
    "Decimal (base 10): " + myNumber.toString(10) + "<br>" +
    "Octal (base 8): " + myNumber.toString(8) + "<br>" +
    "Binary (base 2): " + myNumber.toString(2);

    let d = 202;
    document.getElementById("to-string2").innerHTML = d.toString() + "<br>" +
    (202).toString() + "<br>" + (200 + 2).toString();

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let f = 3.142;
    document.getElementById("exponent").innerHTML = 
        f.toExponential() + "<br>" +
        f.toExponential(3) + "<br>" +
        f.toExponential(5) + "<br>" +
        f.toExponential(7) + "<br>";

    // Demonstrate the use of toFixed() and print to the fixed paragraph

    let g = 42.08579;
    document.getElementById("fixed").innerHTML = 
        g.toFixed(0) + "<br>" +
        g.toFixed(2) + "<br>" +
        g.toFixed(5) + "<br>";

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let h = 708.298401;
    document.getElementById("precision").innerHTML =
        h.toPrecision() + "<br>" +
        h.toPrecision(2) + "<br>" +
        h.toPrecision(3) + "<br>";

    // Demonstrate the use of parseFloat() and print to the float paragraph
    document.getElementById("float").innerHTML = 
        parseFloat("77") + "<br>" +
        parseFloat("77.856") + "<br>" +
        parseFloat("77 3") + "<br>" +
        parseFloat("77 minutes") + "<br>" +
        parseFloat("minutes 77");
 
    // Demonstrate the use of parseInt() and print to the int paragraph
    document.getElementById("int").innerHTML =
        parseInt("-77") + "<br>" +
        parseInt("-77.856") + "<br>" +
        parseInt("77 3") + "<br>" +
        parseInt("77 minutes") + "<br>" +
        parseInt("minutes 77");

    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    document.getElementById("equals").innerHTML =
        "Three equals signs: '===' as opposed to two '==' have slightly different outputs in JavaScript." + "<br>" + "<br>" +
        "They both ask the same question: is the value on the left identical to the value on the right? Does four === 'four'?" + "<br>" + 
        "If you ran the code it would come out with a Boolean value of 'true' because, yes, they are."+ "<br>" + 
        "If you did a simple comparison of four == 'four', it would also come out with 'true', because it is. However if you tested" + "<br>" + 
        "the value one with the string 1: one == '1'; you would get 'true' but, if you tested the value of:" + "<br>" + 
        "one with the string 1: one === '1';" + "<br>" +
        "you would get 'false'. That's because '==' is known as a loose equality operator, while '===' is a strict equality operator." + "<br>" + "<br>" + 
        "In short, == performs type coercion where it only compares the values after it converts it to the same type. Whereas, === does not. That's why:" + "<br>" + 
        "one == '1' is true, since it converted it to a string, and" + "<br>" +
        "one === '1' is false." + "<br>" + 
        "It is known as a best practice to use === when you want to prevent any room for error from JavaScript." + "<br>" + "<br>" + 
        "Source: https://www.geeksforgeeks.org/javascript/how-behaves-differently-from-in-javascript/";

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators

    document.getElementById("logic").innerHTML =
        "The && (and) operator will only pass as true if all conditions are met, while || (or) only needs one condition to be true." + "<br>" + "<br>" +
        "For example:" + "<br>" + 
        "var x === 'car'" + "<br>" + 
        "var y === 'motorcycle'" + "<br>" + 
        "x === 'car' && y === 'segway' would return false. But, " + "<br>" + "<br>" +
        "var x === 'car'" + "<br>" +
        "var y === 'motorcycle'" + "<br>" + 
        "x === 'car' || y === 'segway' will return true since one of the conditions are met." + "<br>" + "<br>" +
        "When you combine the two, using the operator precedence rule in JavaScript, the && are always evaluated before the ||." + "<br>" +
        "For example:" + "<br>" + 
        "var x === 'car'" + "<br>" + 
        "var y === 'motorcycle'" + "<br>" + 
        "x === 'car' || y === 'motorcycle' && x === 'segway'." + "<br>" + 
        "The && would get evaluated first, which would return false, then comparing it to || x === car would return true." + "<br>" + "<br>" +
        "If it's important for your code to evaluate the || conditions first, simply put parentheses around the two || conditions.";

    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
   
    let month;
    let month1 = new Date().getMonth();
    switch (month1) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
    }
    
    document.getElementById("switch").innerHTML = "Today is the 17th of " + month;

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph

    let house1 = 450000
    let budget = (house1 < 500000)
    ? "This house is within my budget."
    : "I cannot afford this house."
    
    document.getElementById("ternary").innerHTML = budget;  
}