function addDate(){

    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
}

let numRooms;

function showRooms(){
    
    numRooms = document.getElementById("rooms").value;

    if (numRooms == 1) {
        document.getElementById("room2").style = "display:none";
        document.getElementById("room3").style = "display:none";
    }
    else if (numRooms == 2) {
        document.getElementById("room2").style = "display:block";
        document.getElementById("room3").style = "display:none";
    }
    else {
        document.getElementById("room2").style = "display:block";
        document.getElementById("room3").style = "display:block";
    }
}

function setRoom2() {
    let length2 = parseFloat(document.getElementById("rm2length").value);
    let width2 = parseFloat(document.getElementById("rm2width").value);
    let height2 = parseFloat(document.getElementById("rm2height").value);
    let totalSqft2 = parseFloat((length2 * height2 * 2) + (width2 * height2 * 2));
    let cost2 = (totalSqft2 * .65).toFixed(2);
    if (!isNaN(cost2)) {
        document.getElementById("rm2cost").value = cost2
    }
    return parseFloat(cost2); // https://www.w3schools.com/jsref/jsref_return.asp
}

function setRoom3() {
    let length3 = parseFloat(document.getElementById("rm3length").value);
    let width3 = parseFloat(document.getElementById("rm3width").value);
    let height3 = parseFloat(document.getElementById("rm3height").value);
    let totalSqft3 = parseFloat((length3 * height3 * 2) + (width3 * height3 * 2));
    let cost3 = (totalSqft3 * .65).toFixed(2);
    if (!isNaN(cost3)) {
        document.getElementById("rm3cost").value = cost3
    }
    return parseFloat(cost3); // https://www.w3schools.com/jsref/jsref_return.asp
}
function estimate() {
    
    let name = document.getElementById("name").value;
    let length = parseFloat(document.getElementById("rm1length").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let height = parseFloat(document.getElementById("rm1height").value);
    let totalSqft = ((length * height * 2) + (width * height * 2));
    let cost = (totalSqft * .65).toFixed(2);
    document.getElementById("rm1cost").value = cost;
    var totalCost = parseFloat(cost);

    numRooms = document.getElementById("rooms").value;

    if (numRooms == 2) {
        let cost2 = setRoom2(); //gets return value
        totalCost = (parseFloat(cost) + cost2).toFixed(2);
    }
    else if (numRooms == 3) {
        let cost2 = setRoom2(); //gets return value
        let cost3 = setRoom3(); //gets return value
        totalCost = (parseFloat(cost) + cost2 + cost3).toFixed(2);
    }
    if (!isNaN(totalCost)) {
        document.getElementById("estimate").innerHTML = (name + ", your estimate is: $" + totalCost);
    } else {
        document.getElementById("estimate").innerHTML = (name + ", some values are missing or incorrect");
    }
}
