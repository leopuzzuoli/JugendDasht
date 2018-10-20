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
	"consumerKey": "",
	"consumerSecret": "",
	"accessToken": "",
	"accessTokenSecret": "",
	"callBackUrl": ""
}

var twitter = new Twitter(config);

//twitter.getSearch({'q':'#jugendhackt','count': 10}, error, success);
