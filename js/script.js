



/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
/*contains all the data for the random quote generator, these will be displayed randomly when the user clicks on the button*/
var quotes = [
	{
		quote: "Sometimes in life we must fight not only without fear, but also without hope.", 
		source: "Alessandro Pertini",
		citation: "daily stoic"
	},

	{
		quote: "Feeling too much is a hell of a lot better than feeling nothing.",
		source: "Nora Roberts",
		citation: "daily stoic"
	},

	{
		quote: "We suffer more in imagination than in reality.",
		source: "Seneca",
		year: "65 AD"
	},

	{
		quote: "Death remembered should be like a mirror, Who tells us life's but breath, to trust it error.",
		source: "William Shakespeare"
	},

	{
		quote: "It is impossible for a man to learn what he thinks he already knows.",
		source: "Epictetus"
	},

	{
		quote: "The basic philosophy of stoicism is that you have nothing real external to your own consciousness, that the only thing real is in fact your consciousness.",
		source: "Roger Avery"
	},

	{
		quote: "Once we accept our limits, we go beyond them.",
		source: "Albert Einstein",
		year : "1945"
	},

	{
		quote: "What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him.",
		source: "Victor Frank"
	}

]

/***
 * `getRandomQuote` function
***/
/*a function that will generate a random whole number based on how many quotes exist in the array of objects*/
function getRandomQuote() {
 var random = Math.floor( Math.random () * quotes.length );
  var printRandom = quotes[random]; 
 return printRandom;
}
//another function for way of print random quotes generator.
//using getRandomQuote function and if statement
//so if the object has citation or year property, it shows up on web.
//connect div in html file classed "quote-box"
function printQuote () {
  var randomQuote = getRandomQuote();
  var index = '';
  index += '<p class = "quote">' + randomQuote.quote + '</p>'
  index += '<p class = "source">' + randomQuote.source;
  	if (randomQuote.citation){
  		index += '<span class = "citation">' + randomQuote.citation;
  	}
  	if (randomQuote.year){
  		index += '<span class = "citation">' + randomQuote.year;
  	}
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = index;
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);