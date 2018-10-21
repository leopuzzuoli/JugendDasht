class TwitterStream{

	constructor() {
		var Twit = require('twit')
		this.twitter = new Twit ({
			consumer_key:			'',
			consumer_secret:		'',
			access_token:			'',
			access_token_secret:	''
		})

		//this.Stream = this.twitter.stream('statuses/filter', {track: '#JugendHackt'})
	}
	foo(err, data, resonse){

	}




	getTweets() {
		this.twitter.get('/search/tweets', {q: '#JugendHackt', count: 25}, this.callback)

	}

	
	callback(err, data) {
		for e in 
		d = data.statuses[].id

		//d = JSON.parse(data)
		console.log(d)
	}

	
	startStream(){


	}

	
}

e = new TwitterStream();
var A = e.getTweets()