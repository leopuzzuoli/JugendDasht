 //Callback functions
var error = function (err, response, body) {
	console.log('ERROR [%s]', err);
};
var success = function (data) {
	console.log('Data [%s]', data);
};

var Twitter = require('twitter-node-client').Twitter;

//Get this data from your twitter apps dashboard
var config = {
	"consumerKey": "sprIwGqEZ4QFoJQFeaG6HJBfT",
	"consumerSecret": "pfeTjMTLbpS9qovbLw9u8dgGEmtS2LO9f3GHVHx1XvC8qernuB",
	"accessToken": "1053624276488806401-TrPHOGcKx8RcuINUrYLqK1DVVwgThV",
	"accessTokenSecret": "U4NowZeQVaAWKcbElQMiSF5iMgfLbSyh5hKDt3uGhiVvQ",
	"callBackUrl": ""
}

var twitter = new Twitter(config);