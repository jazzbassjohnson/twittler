$(document).ready(function(){
	function build(Username, Message, timeStamp){
    return '<a href=""><img id="user_photo" src="unknown-person-48px.jpg"><span id="user_id">@'+Username+'</span></a><span id="timeStamp">'+timeStamp+'</span></br><span>'+Message+'</span>';
  }

	var lastestTweets;
	var $messageWindow = $('.messages');

        $messageWindow.html('');
  function populateTimeline(){
        var index = streams.home.length - 1;
        
        while(index >= $('.messages div').length){
          var tweet = streams.home[index];
          var $tweet = $('<div class = "tweet_message"></div>');
          var photo = "<img id='user_photo' src='unknown-person-48px.jpg'>"
          // $tweet.html(photo + '@' + tweet.user.bold() + '</br> </br>' + tweet.message.italics());
          $tweet.html(build(tweet.user, tweet.message, "Yesterday"));
          $tweet.appendTo($messageWindow);
          index -= 1;
        }
	}
    populateTimeline();
    setInterval(populateTimeline, 5000);
	
});

