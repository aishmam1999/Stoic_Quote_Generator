



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
var quotes = [
	{
		quote: "Sometimes in life we must fight not only without fear, but also without hope.", 
		source: "Alessandro Pertini"

	},

	{
		quote: "Feeling too much is a hell of a lot better than feeling nothing.",
		source: "Nora Roberts"
	},

	{
		quote: "We suffer more in imagination than in reality.",
		source: "Seneca"
	},

	{
		quote: "Death remembered should be like a mirror, Who tells us life's but breath, to trust it error.",
		source: "William Shakespeare"
	},

	{
		quote: "It is impossible for a man to learn what he thinks he already knows.",
		source: "Epictetus"
	},

]



/***
 * `getRandomQuote` function
***/
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
  index += '<p calss = "source">' + randomQuote.source;
    if ( randomQuote.citation ){
     index += '<span class = "citation">' + randomQuote.citation + '</span>'
    };
    if ( randomQuote.year ){
     index += '<span class = "year">' + randomQuote.year + '</span>'
    };
    index += '</P>';
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = index;
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);