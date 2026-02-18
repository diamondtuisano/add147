//4. Change the array of game to hold 10 answers
let game = [ 
    "ACDC", "ABBA", "QUEEN", "BEATLES",
    "ZZTOP", "DEVO", "JAM", "WHO",
    "YES", "NIRVANA"
]; 
let choice = Math.floor(Math.random() * 10); //4. Related code - added 10 for 10 choices
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6; 
let output = '';
let userLetter = '';
let guessedLetters = []; //5. Add an array of used letters - added guessed letters array to be displayed below 'Word:'
let wrongLetters = 0; //6. Make the images work - added wrong letters that impact hangman images started at 0

function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value.toUpperCase(); //translates it to uppercase so it matches games array
    document.getElementById("guess").value = ''; 

    //if the user has already guessed a letter; wasn't included in assignment requirements but thought it would be a good addition!
    if (guessedLetters.includes(userLetter)){ //https://www.w3schools.com/jsref/jsref_includes_array.asp
        alert("Already Guessed " + userLetter + "!") //alert pop-out box as shown in video
        return; // stops execution of function and returns value; please let me know if I am overexplaining myself
    } 

    //5. Make the array show in HTML
    guessedLetters.push(userLetter); //adds guessed letters 
    document.getElementById("guessed").innerHTML = "Guessed letters: " + guessedLetters; //and displays them

    let found = false;

    for (let c = 0; c < answer.length; c++) {
        if (userLetter == letters[c]) {
            display[c] = userLetter;
            win--;
            found = true;
        }
        output = output + display[c] + ' ';
    }

    //6. Make the images work = if letter is wrong, update image
    if (found == false) {
        attemptsLeft --; //lose 1 attempt
        wrongLetters++; //increase amount of wrong letters by 1
        document.getElementById("hangman").src="images/" + wrongLetters + ".png"; //renamed images to change with increasingly wrong letters starting at 0
    } //https://www.w3schools.com/jsref/prop_img_src.asp
    
    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
    
    document.getElementById("word").innerHTML = output;
    output = '';
});