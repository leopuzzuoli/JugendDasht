
window.onload = (function(){
	var id = '1053909698641084416'
	var tweet = document.getElementById("tweet");
	//var id = tweet.getAttribute("tweetID");

	twttr.widgets.createTweet(
	id, tweet, 
	{
	conversation : 'none',// or all
	cards: 'hidden',// or visible 
	linkColor: '#cc0000', // default is blue
	theme: 'light'// or dark
})





});