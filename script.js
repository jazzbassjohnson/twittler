$(document).ready(function(){
	function populateTimeline(user){
		var lastestTweet = streams.users[user][streams.users[user].length -1];
		console.log(lastestTweet);
	}
	populateTimeline('shawndrost');

});