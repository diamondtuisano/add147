// Dog objects
const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket."
};

const dog2 = {
    heading: "Golden Puppy",
    image: "images/gold-dog.jpg",
    caption: "Enjoying the Dog Days of Summer",
    altTag: "Gold dog on grass."
}

const dog3 = {
    heading: "Snow Dog",
    image: "images/snow-dog.jpg",
    caption: "I think you took MY stick!",
    altTag: "Dog in snow."
}

const dog4 = {
    heading: "Sweet hearts",
    image: "images/white-dogs.jpg",
    caption: "Summer lovin...having a blast!",
    altTag: "Two dogs showing affection",
}

function chooseDog(dog) {
     if (dog == 1) {
        loadMe(dog1, 1)
            } // don't put dog1 in quotes or it will pass a string and not the object
            else if (dog == 2) {
                loadMe(dog2, 2)
             }
            else if (dog == 3) {
            loadMe(dog3, 3)
            }
                else {
                loadMe(dog4, 4)
                }
    }

function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
}