class TwitterStream{

	constructor() {
		var Twit = require('twit')
		this.twitter = new Twit ({
			consumer_key:			'sprIwGqEZ4QFoJQFeaG6HJBfT',
			consumer_secret:		'pfeTjMTLbpS9qovbLw9u8dgGEmtS2LO9f3GHVHx1XvC8qernuB',
			access_token:			'1053624276488806401-TrPHOGcKx8RcuINUrYLqK1DVVwgThV',
			access_token_secret:	'U4NowZeQVaAWKcbElQMiSF5iMgfLbSyh5hKDt3uGhiVvQ'
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