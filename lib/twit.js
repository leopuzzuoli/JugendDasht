var fs = require("fs")
let tweetlist = []
class TwitterStream {

  constructor() {
    var Twit = require('twit')
    //this.tweetlist = []
    this.twitter = new Twit({
      consumer_key: 'wGmlJcWIOLCBbC41ISqLwsTro',
      consumer_secret: 'l8T5PV4GpkHu8WCkSlXmjWPJdCpW714a0T8FpwAHzEATGXToFK',
      access_token: '1053624276488806401-TrPHOGcKx8RcuINUrYLqK1DVVwgThV',
      access_token_secret: 'U4NowZeQVaAWKcbElQMiSF5iMgfLbSyh5hKDt3uGhiVvQ'
    })

    //this.Stream = this.twitter.stream('statuses/filter', {track: '#JugendHackt'})
  }
  foo(err, data, resonse) {

  }




  getTweets() {
    this.twitter.get('/search/tweets', {
      q: '#JugendHackt',
      count: 25
    }, this.callback)
    return tweetlist
  }


  callback(err, data) {
    if (err) {
			console.log("err: " + err);
    }
    if (data) {
      for (var i = 0; i < data.statuses.length; i++) {
        //console.log(data.statuses[i].id);
        tweetlist.push(data.statuses[i].id);
      }
      console.log(tweetlist);
			fs.writeFile("../website/daten/tẃeets.txt", tweetlist, (err) => {
		    if (err) console.log(err)
		  });
    }
  }
}

function all() {
  var e = new TwitterStream();
  e.getTweets();
}



all();
