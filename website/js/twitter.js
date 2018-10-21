
window.onload = (function(){
	
	
	var tweet = $(".tweet");
	console.log(tweet)
	for (var i = 0; i < tweet.length; i++) {

		twttr.widgets.createTweet(
			$(tweet[i]).attr("tweetid"), tweet[i], 
			{
			conversation : 'none',// or all
			cards: 'hidden',// or visible 
			linkColor: '#cc0000', // default is blue
			theme: 'light'// or dark
		})

	}

	





});