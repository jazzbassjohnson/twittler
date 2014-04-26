$(document).ready(function(){
	var lastestTweets;
	var $messageWindow = $('.messages');
	function populateTimeline(){
        $messageWindow.html('');
        var index = streams.home.length - 1;
        
        while(index >= (index-10)){
          var tweet = streams.home[index];
          var $tweet = $('<div class = "tweet_message"></div>');
          var photo = "<img id='user_photo' src='unknown-person-48px.jpg'>"
          $tweet.html(photo + '@' + tweet.user.bold() + '</br> </br>' + tweet.message.italics());
          $tweet.appendTo($messageWindow);
          index -= 1;
        }
	}
    populateTimeline();
    setInterval(populateTimeline, 5000);
	
});