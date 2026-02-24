function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    document.getElementById("round").innerHTML = Math.round(10.2);
    document.getElementById("ceil").innerHTML = Math.ceil(8.4);
    document.getElementById("floor").innerHTML = Math.floor(6.3);
    document.getElementById("trunc").innerHTML = Math.trunc(5.1);
    document.getElementById("sign").innerHTML = Math.sign(-7);
    document.getElementById("pow").innerHTML = Math.pow(4,3);
    document.getElementById("min").innerHTML = Math.min(19, 23, -15, 97, -21);
    document.getElementById("random").innerHTML = Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById("random2").innerHTML = Math.floor(Math.random() * 100) + 1;

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference
    //I have read the reference.

    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    let x = 1;
    document.getElementById("comparisons1").innerHTML = (x == '1');

    let y = 1;
    document.getElementById("comparisons2").innerHTML = (y === '1');

    let paragraph = "The Comparison Operators of == and === serve a similar function of figuring out whether or not two values are equal to one another. '==' is less strict, in that it asks if two values are equal to one another, while, '===' takes into account whether two values also have the same <i>type of value. For example: <br> x=1 <br> x=='1' <br> would return a Boolean value of true, despite '1' being a string. While, <br> x=1 <br> x==='1' <br> would return a Boolean value of false because the === operator understands that they have the same value of 1 but that they are different input types of integer and string."
    document.getElementById("comparisons").innerHTML = paragraph

    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
    //I have read the conditions page
}