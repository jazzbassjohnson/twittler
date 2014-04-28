$(document).ready(function(){
  function build(Username, Message, timeStamp){
      $("span.timeago").timeago()

    return '<a href=""><img id="user_photo" src="unknown-person-48px.jpg"><span id="user_id">@'+Username+'</span></a><span id="timeStamp" class="timeago" title="'+timeStamp.toISOString()+'" data-ts="'+ timeStamp.toISOString()+'">'+$.timeago(timeStamp)+'</span></br><span>'+Message+'</span>';
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
          $tweet.html(build(tweet.user, tweet.message, tweet.created_at));
          $tweet.appendTo($messageWindow);
          index -= 1;

        }
  }
  // window.username = prompt("What's your name?");
    populateTimeline();
    setInterval(populateTimeline, 5000);

  streams.users[window.username] = [];
    function postMessage(){
      var message = $('#field').val();
      $('#field').val('');
      var tweet = {};
      tweet.user = window.username;
      tweet.message = message;
      tweet.created_at = new Date();
      addTweet(tweet);
    }
    $('#send').on('click', postMessage);
    $('.timeago').each(function() {
        var $this = $(this);
        $this.attr('title', $this.data('ts'));
    }).timeago();
  
});

