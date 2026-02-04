//define global variables "var" within calculateTotal function
function calculateTotal(){
    //customer name
    var customerName = document.getElementById("customerName").value;

    //drink prices
    var waterAmt = parseInt(document.getElementById("water").value);
    var icedTeaAmt = parseInt(document.getElementById("icedTea").value);
    var lemonadeAmt = parseInt(document.getElementById("lemonade").value);
    var cokeAmt = parseInt(document.getElementById("coke").value);
    var coffeeAmt = parseInt(document.getElementById("coffee").value);

    //totalforDrinks
    var drinksCost = (waterAmt * 2.00) + (icedTeaAmt * 2.50) + (lemonadeAmt * 2.25) 
    + (cokeAmt * 3.00) + (coffeeAmt * 4.00);

    //sandwich prices
    var hotdogAmt = parseInt(document.getElementById("hotdog").value);
    var burgerAmt = parseInt(document.getElementById("burger").value);
    var bltAmt = parseInt(document.getElementById("blt").value);
    var grilledcheeseAmt = parseInt(document.getElementById("grilledcheese").value);
    var cheeseburgerAmt = parseInt(document.getElementById("cheeseburger").value);

    //totalforSandwiches
    var sandwichesCost = (hotdogAmt * 6.00) + (burgerAmt * 7.00) + (bltAmt * 8.50) 
    + (grilledcheeseAmt * 6.50) + (cheeseburgerAmt * 7.50);

    //desserts & sides prices
    var friesAmt = parseInt(document.getElementById("fries").value);
    var chipsAmt = parseInt(document.getElementById("chips").value);
    var fruitAmt = parseInt(document.getElementById("fruit").value);
    var icecreamAmt = parseInt(document.getElementById("icecream").value);
    var saladAmt = parseInt(document.getElementById("salad").value);

    //totalforDesserts
    var dessertsCost = (friesAmt * 3.00) + (chipsAmt * 2.75) + (fruitAmt * 4.00) 
    + (icecreamAmt * 3.75) + (saladAmt * 4.50);

    //total for all items -> for receipt display
    var totalCost = drinksCost + sandwichesCost + dessertsCost;

    //display receipt
    document.getElementById("receipt").innerHTML = "Customer: " + customerName;
    document.getElementById("drinks-total").innerHTML = "Drinks: $" + drinksCost.toFixed(2);
    document.getElementById("sandwiches-total").innerHTML = "Sandwiches: $" + sandwichesCost.toFixed(2);
    document.getElementById("dessert-total").innerHTML = "Dessert: $" + dessertsCost.toFixed(2);
    document.getElementById("totalCost").innerHTML = "Total Cost: $" + totalCost.toFixed(2);
}