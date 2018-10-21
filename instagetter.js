const https = require('https');
let fs = require("fs");
let delay = require("delay");

let images = [];

function dataminer() {
  (async () => {
    while (true) {
      https.get('https://www.instagram.com/explore/tags/jugendhackt/?__a=1', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          let jsondata = JSON.parse(data);
          for (var i = 0; i < 6; i++) {
            images.push(jsondata.graphql.hashtag.edge_hashtag_to_media.edges[i].node.display_url);
          }
          console.log(images);
          console.log(JSON.stringify(images));
          fs.writeFile('./website/daten/instafiles.txt', images, 'utf8', function() {
            console.log("Toll gemacht");
          });
        });

      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
      await delay(5000);
    }
  })();
}

dataminer();
