//JSON
let text = '{ "tvShows" : [' +
'{ "title":"The Good Place", "mainCharacter":"Eleanor Shellstrop", "network":"NBC", "startDate":"2016"},' +
'{ "title":"Anne with an E", "mainCharacter":"Anne Shirley", "network":"Netflix", "startDate":"2017"},' +
'{ "title":"A Series of Unfortunate Events", "mainCharacter":"The Baudelaire Siblings", "network":"Netflix", "startDate":"2017"},' +
'{ "title":"Agent Carter", "mainCharacter":"Peggy Carter", "network":"ABC", "startDate":"2015"},' +
'{ "title":"Superstore", "mainCharacter":"Amy Dubanowski", "network":"NBC", "startDate":"2015"}]}';

const obj = JSON.parse(text);

let info = "";

obj.tvShows.forEach (function(value, key) {
    info += '📺 <i>Title:</i> ' + value.title + 
    ' ⭐ <i>Main Character:</i> ' + value.mainCharacter +
    ' 🎥 <i>Network/Streaming Service:</i> ' + value.network +
    ' ▶️ <i>Start date:</i> ' + value.startDate
    + "<br>";
})

document.getElementById("part-1").innerHTML = info;

//Animation + AJAX
$(document).ready(function() {

    $("#show").click(function() {
        $("#animate").animate({
            left: "30%"}, 
            "slow")
    });
    
    $("#display").click(function() {
        $("#ajax").load("jQuery2.txt");
    });
 });