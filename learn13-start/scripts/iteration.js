/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/

const movies = 
["Eternity", 
"My Cousin Vinny",
"The Half of It",
"The Whale",
"Wake Up Dead Man: A Knives Out Mystery",
"We Live in Time",
];

let titles = "";
for (const x of movies) {
    titles += x + "<br>";
}

document.getElementById("list").innerHTML = titles;

/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/

const songs = new Set([
    "360",
    "A Sunday Kind of Love",
    "Crooked the Road",
    "Sight of the Sun",
    "Wishing Well",
    "Would That I"
]);

let words = "";
for (const x of songs) {
    words += x + "<br>";
}

document.getElementById("set1").innerHTML = words;

// add two more songs to the set then display in the set2 paragraph

songs.add("I Will Always Love You");
songs.add("Faithfully");

let words2 = "";
for (const x of songs) {
    words2 += x + "<br>";
}

document.getElementById("set2").innerHTML = words2;

/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

const contact = new Map([
    ["Jane Doe", "j.doe@aol.com"],
    ["Jack Black", "j.black@gmail.com"],
    ["Joe Schmoe", "j.schmoe@hotmail.com"],
    ["Jane Eyre", "j.eyre@yahoo.com"],
    ["Jerry Mander", "j.mander@politico.com"]
]);

let info = "";
contact.forEach (function(value, key) {
    info += 'Name: ' + key + ' // Email: ' + value + "<br>"
})

document.getElementById("map1").innerHTML = info;
// add two new names and emails and display in map2 use the forEach() method

contact.set('Jake From', 'j.from@statefarm.com');
contact.set('Jenny From', 'j.from@theblock.com');

let info2 = "";
contact.forEach(function(value, key) {
    info2 += 'Name: ' + key + ' // Email: ' + value + "<br>"
})

document.getElementById("map2").innerHTML = info2;
// get and display the email of one person, display in map3

let info3 = contact.get("Jake From");

document.getElementById("map3").innerHTML = 
"To contact your local State Farm Representative email: " + info3;