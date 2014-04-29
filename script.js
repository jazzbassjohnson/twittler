$(document).ready(function(){
  //Utility Functions
  function build(Username, Message, timeStamp){
      var div = '<a ><img id="user_photo" src="unknown-person-48px.jpg"><span id="user_id">@'+Username+'</span></a><span id="timeStamp" class="timeago" title="'+timeStamp.toISOString()+'" data-ts="'+ timeStamp.toISOString()+'">'+$.timeago(timeStamp)+'</span></br><span>'+Message+'</span>';
          // $("span.timeago").timeago()
    return div;
  }
  var $messageWindow = $('.messages');
  //refactoring populateTimeline to take any argument
  function populateTimeline(arrayOfMessages){
        var index = arrayOfMessages.length - 1;//stream.home
        if(index >= $('.messages div').length){
          var diff = index - $('.messages div').length;
          for(var i = index - diff; i<=index; i++){
            var tweet = arrayOfMessages[i];
            var $tweet = $('<div class = "tweet_message"></div>');
            $tweet.html(build(tweet.user, tweet.message, tweet.created_at));
            $tweet.appendTo($messageWindow);
          }
        }
        $('.messages a').on('click', loadUserTimeline);
  }

  var homepageStream;
  function initiate(){
    clearInterval(homepageStream);
    clearInterval(userTimelineStream);
    $('.messages').html('');

    populateTimeline(streams.home);
    homepageStream = setInterval(function(){
      populateTimeline(streams.home);
    }, 5000);
    $('.messages a').on('click', loadUserTimeline);
  }

  initiate();
  var name;
  var userTimelineStream;

  function loadUserTimeline(){
    clearInterval(userTimelineStream);
    clearInterval(homepageStream);
    name = $(this).find("#user_id").text();
    name = name.slice(1, name.length);
    $('.messages').html('');
    populateTimeline(streams.users[name]);
    userTimelineStream = setInterval(function(){
      populateTimeline(streams.users[name]);
    }, 5000);
  }
  // Event Handlers
  $("#twittler, #logo").on('click', initiate);
  
  
  $('#send').on('click', function(){
    writeTweet($('#field').val());
    $('#field').val('');
  });

  $('.timeago').each(function() {
      var $this = $(this);
      $this.attr('title', $this.data('ts'));
  }).timeago();

  
  
});

