/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {}; //adding "streams" to the window object makes it a global variable
streams.home = [];
streams.users = {};
streams.users.shawndrost = [];
streams.users.sharksforcheap = [];
streams.users.mracus = [];
streams.users.douglascalhoun = [];
window.users = Object.keys(streams.users);//adding "users" to the window object makes it a global variable

// utility function for adding tweets to our data structures
// expects an object
var addTweet = function(newTweet){
  var username = newTweet.user;
  streams.users[username].push(newTweet);
  //the purpose of this home variable is to store the tweets in the order they were received
  streams.home.push(newTweet);
};

// utility function
// could be used to randomly choose a tweet object from 'stream.users[user]' array
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['drank', 'drunk', 'deployed', 'got', 'developed', 'built', 'invented', 'experienced', 'fought off', 'hardened', 'enjoyed', 'developed', 'consumed', 'debunked', 'drugged', 'doped', 'made', 'wrote', 'saw'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.created_at = new Date();
  addTweet(tweet);
};

//generates 10 tweets as soon as this file is ready
for(var i = 0; i < 10; i++){
  generateRandomTweet();
}

var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)

//the user name is collected via the prompt on load then the message is passed to this function through fom the value of the input box
var writeTweet = function(message){
  if(!visitor){
    // throw new Error('set the global visitor property!');//implying that I should add window.visitor = input/prompt(What's your name?)
    window.visitor = prompt("Welcome to Twittler. What's your name?").toLowerCase();
    streams.users[window.visitor] = [];
    writeTweet(message);
  }else{
    var tweet = {};
    tweet.user = visitor;
    tweet.message = message;
    tweet.created_at = new Date();
    addTweet(tweet);
  }
};
