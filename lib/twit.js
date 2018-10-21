var fs = require("fs")
var tweetlist = []
class TwitterStream{

	constructor() {
		var Twit = require('twit')
		this.tweetlist = []
		this.twitter = new Twit ({
			consumer_key:			'wGmlJcWIOLCBbC41ISqLwsTro',
			consumer_secret:		'l8T5PV4GpkHu8WCkSlXmjWPJdCpW714a0T8FpwAHzEATGXToFK',
			access_token:			'1053624276488806401-TrPHOGcKx8RcuINUrYLqK1DVVwgThV',
			access_token_secret:	'U4NowZeQVaAWKcbElQMiSF5iMgfLbSyh5hKDt3uGhiVvQ'
		})

		//this.Stream = this.twitter.stream('statuses/filter', {track: '#JugendHackt'})
	}
	foo(err, data, resonse){

	}




	getTweets() {
		this.twitter.get('/search/tweets', {q: '#JugendHackt', count: 25}, this.callback)
		return tweetlist
	}

	
	callback(err, data) {
		for (var i = 0; i < data.statuses.length; i++) {
			tweetlist.push(data.statuses[i].id)	
		}
	}
}
	
	function listeSpeichern(liste){
		fs.writeFile("../website/daten/tẃeets.txt", liste.tweetlist, (err) => {
			if (err) console.log(err)
		})
			}





	




var e = new TwitterStream();
var bruv = e.getTweets()
listeSpeichern(bruv)