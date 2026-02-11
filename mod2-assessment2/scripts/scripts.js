/* I thought of this as more of a 
fun twist on recipes where 
ingredients = things going on + 
directions = how to improve or how to build on positive states of being*/

const emotion1 = {
name: "Kermit the Frog",
category: "Tired",
image: "images/kermit.jpg",
ingredients: "1 car payment overdue, 3 student loans in default, 1 minute on any news channel",
directions: 'First step, snack throughout the day\n' +
'exercise by doing a 15-minute walk, ' +
'sleep well and avoid napping, ' +
'listen to music, ' +
'cut out caffiene, ' +
'drink less alcohol, ' +
'and drink more water.',

source: "https://www.nhs.uk/live-well/sleep-and-tiredness/self-help-tips-to-fight-fatigue/#:~:text=Try%20these%20self%2Dhelp%20tips,which%20can%20make%20you%20tired."
};

function display() {
    let html = `<h2>${emotion1.name}</h2>` +
    `<h3>${emotion1.category}</h3>` + `<img src = ${emotion1.image}>` +
    `<h3>Ingredients</h3>` +
    `<p>${emotion1.ingredients}<p>` + `<h3>Directions</h3>` +
    `<p>${emotion1.directions}</p>` + `<h3>Source</h3>` +
    `<p>${emotion1.source}</p>`;
    document.getElementById('ob1').innerHTML = html;
}

const emotion2 = {
name: "Donkey",
category: "Longing",
image: "images/donkey.jpg",
ingredients: "4 hours of browsing on Zillow, 10 seconds of checking the bank, 3 refreshes of a credit score app",
directions: 'Settle into a comfortable position and close your eyes\n' +
'ask your body if there is anything it needs right now, ' +
'think about a recent experience where you really wanted something, ' +
'ask yourself where you feel it in your body, ' +
'ask yourself how you can meet this need, ' +
'take a few deep breaths, ' +
'and open your eyes.',

source: "https://www.mindful.org/explore-the-wisdom-behind-feelings-of-longing/"
};

function display2() {
    let html = `<h2>${emotion2.name}</h2>` +
    `<h3>${emotion2.category}</h3>` + `<img src = ${emotion2.image}>` +
    `<h3>Ingredients</h3>` +
    `<p>${emotion2.ingredients}<p>` + `<h3>Directions</h3>` +
    `<p>${emotion2.directions}</p>` + `<h3>Source</h3>` +
    `<p>${emotion2.source}</p>`;
    document.getElementById('ob2').innerHTML = html;
}

const emotion3 = {
name: "Just a Cool Guy",
category: "Chill",
image: "images/justacoolguy.jpg",
ingredients: "Reaching a zen state of being, 10 shrugs a day, nodding a lot",
directions: 'First of all do not be needy,\n' +
'be yourself, ' +
'practice self-disclosure, ' +
'be friendly but not excessively eager, ' +
'be a good conversationalist, ' +
'be funny, ' +
'and most importantly, keep your cool. ',

source: "https://www.wikihow.com/Be-Cool"
};

function display3() {
    let html = `<h2>${emotion3.name}</h2>` +
    `<h3>${emotion3.category}</h3>` + `<img src = ${emotion3.image}>` +
    `<h3>Ingredients</h3>` +
    `<p>${emotion3.ingredients}<p>` + `<h3>Directions</h3>` +
    `<p>${emotion3.directions}</p>` + `<h3>Source</h3>` +
    `<p>${emotion3.source}</p>`;
    document.getElementById('ob3').innerHTML = html;
}

const emotion4 = {
name: "Woody",
category: "Frustration",
image: "images/woody.jpg",
ingredients: "5 instances of being cut off in traffic, 2 beeped horns, 5 hours of bumper to bumper traffic",
directions: 'Make sure to do some breathing exercises,\n' +
'be yourself ,' +
'progessive muscle relaxation, ' +
'meditate, ' +
'vent, ' +
'turn on some music, ' +
'and try to manage your expectations of others.',

source: "https://mhanational.org/resources/18-ways-to-cope-with-frustration/#:~:text=Interacting%20with%20animals%20has%20been,powerful%20effect%20on%20our%20brains."
};

function display4() {
    let html = `<h2>${emotion4.name}</h2>` +
    `<h3>${emotion4.category}</h3>` + `<img src = ${emotion4.image}>` +
    `<h3>Ingredients</h3>` +
    `<p>${emotion4.ingredients}<p>` + `<h3>Directions</h3>` +
    `<p>${emotion4.directions}</p>` + `<h3>Source</h3>` +
    `<p>${emotion4.source}</p>`;
    document.getElementById('ob4').innerHTML = html;
}

const emotion5 = {
name: "Mrs. Puff",
category: "Irrational",
image: "images/mrspuff.jpg",
ingredients: "5 instances of being cut off in traffic, 2 beeped horns, 5 hours of bumper to bumper traffic",
directions: 'It is important to first accept your thoughts,\n' +
'then try to reframe them, ' +
'make some lifestyle changes such as doing yoga or finding new hobbies, ' +
'attempt cognitive behavioral therapy, ' +
'and in the case of a mental condition, doctor-approved, seek medication.',

source: "https://www.verywellmind.com/do-your-thoughts-cause-panic-disorder-2584063"
};

function display5() {
    let html = `<h2>${emotion5.name}</h2>` +
    `<h3>${emotion5.category}</h3>` + `<img src = ${emotion5.image}>` +
    `<h3>Ingredients</h3>` +
    `<p>${emotion5.ingredients}<p>` + `<h3>Directions</h3>` +
    `<p>${emotion5.directions}</p>` + `<h3>Source</h3>` +
    `<p>${emotion5.source}</p>`;
    document.getElementById('ob5').innerHTML = html;
}