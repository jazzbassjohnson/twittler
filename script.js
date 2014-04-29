$(document).ready(function(){
  var $messageWindow = $('.messages');
  populateTimeline();
  setInterval(populateTimeline, 5000);
  streams.users[window.visitor] = [];

  //Utility Functions
  function build(Username, Message, timeStamp){
      var div = '<a href=""><img id="user_photo" src="unknown-person-48px.jpg"><span id="user_id">@'+Username+'</span></a><span id="timeStamp" class="timeago" title="'+timeStamp.toISOString()+'" data-ts="'+ timeStamp.toISOString()+'">'+$.timeago(timeStamp)+'</span></br><span>'+Message+'</span>';
          // $("span.timeago").timeago()
    return div;
  }

  function populateTimeline(){
        var index = streams.home.length - 1;
        while(index >= $('.messages div').length){
          var tweet = streams.home[index];
          var $tweet = $('<div class = "tweet_message"></div>');
          $tweet.html(build(tweet.user, tweet.message, tweet.created_at));
          $tweet.appendTo($messageWindow);
          index -= 1;
        }
  }

  // Event Handlers
  $('#send').on('click', function(){
    writeTweet($('#field').val());
    $('#field').val('');
  });

  $('.timeago').each(function() {
      var $this = $(this);
      $this.attr('title', $this.data('ts'));
  }).timeago();

  $(window).scroll(function(){
    if ($(window).scrollTop() > 100){
        $("#message_header").css({"top": ($(window).scrollTop()) - 100 + "px"});
    }
  });
  
});

