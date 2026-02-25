let randomNum; //declare global variable to store and access; random number to be guessed

//runs automatically as the page loads
function start() {
    randomNum = Math.floor(Math.random() * 1000) + 1; //generates randomNum b/w 1-1000; mathFloor rounds it down so there is no decimal
    document.getElementById("submit").onclick = checkGuess; //goes to submit button and runs the function checkGuess when clicked
}

function checkGuess() { //function to check guess b/w user input and random number generated
    const input = document.getElementById("guess"); //chooses textbox for 'guess' and converts what the user typed to a whole number
    const guess = parseInt(input.value); //turns guess from string to an integer

    if (guess < 1 || guess > 1000) { //if guess is not between 1-1000, alert box pops out
        alert("That is not between 1 and 1000!");
        return
    }

    const difference = Math.abs(randomNum - guess); //determines how far off guess is using difference b/w absolute values
    //declares two empty variables to be filled by if else statement
    let message;
    let color;

    //checks how close the guess is and assigns message and color
    //https://www.daniweb.com/programming/web-development/threads/368479/javascript-function-to-change-a-color
    if (guess === randomNum) {
        message = guess + " Correct!!!"
        color = "red";
    } else if (difference <= 5) {
        message = guess + " Hot!"
        color = "orange";
    } else if (difference <= 20) {
        message = guess + " Warm!"
        color = "brown";
    } else if (difference <= 50) {
        message = guess + " Lukewarm..."
        color = "green";
    } else if (difference <= 100) {
        message = guess + " Chilly..."
        color = "darkblue";
    } else {
        message = guess + " Ice cold!!!"
        color = "blue";
    }
    
    //display history using a list with colors and message corresponding to the closeness of the guess to the random number
    //+= adds each guessed letter to a <li> under history 
    //"<li style='color"; inline style attribute opened, + color"'>" inserts the color needed like: color:[red]
    //concatenated the color and message
    //https://stackoverflow.com/questions/73101376/how-to-change-text-color-of-li-item-only-using-inline-style
    document.getElementById("history").innerHTML += "<li style='color:" + color + "'>" + message + "</li>";
}