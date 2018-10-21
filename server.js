//initialize the server
let http = require("http");
let https = require("https");
let url = require("url");
let fs = require("fs");
let addons = require("./addons");
let rightsaccess = require("./checkaccessrights");
let config = require("./content/server_only/config.js");
let runnode = require("./runnode.js");
let io = require("socket.io")(http);
let server;

if (process.argv[2] === "-s") {
  //CHANGE THESE OPTIONS IN THE /content/server_only/config.js FILE IF YOU WANT TO USE SSL
  if (process.argv[3] === "pem") {
    const options = {
      key: fs.readFileSync(config.key),
      cert: fs.readFileSync(config.cert)
    };
  } else if (process.argv[3] === "pfx") {
    const options = {
      pfx: fs.readFileSync(config.pfx),
      passphrase: config.passphrase
    };
  }
  else{
    console.log("the argument following -s is incorrect, it has to either be 'pem' or 'pfx'");
  }
server = https.createServer(options, (req, res) => runs(req, res));
}
else {
  server = http.createServer((req, res) => runs(req, res));
}


function runs(req, res) {
  //give back 200 code and set the content to website
  res.writeHead(200, {
    "Content-type": "text/html"
  });
  //write the get request
  console.log(url.parse(req.url, true));
  //analyze the GET request
  let get = url.parse(req.url, true);

  if(get.pathname.contains("/redirect.html")){
    try{
    console.log("GOT OAUTH 2.0 REQUEST WITH GET PARAM code: " + get.query.code);
    // Now we can run a script and invoke a callback when complete, e.g.
    runnode.runScript('./OAuth.js', function (err) {
        if (err) throw err;
        console.log('Error running Oauth script');
    });
    runnode.runScript('./.js', function (err) {
        if (err) throw err;
        console.log('Error running Oauth script');
    });
  }
  catch(Error){
    console.log("Error in oauth code");
  }
}
  //if the requests does not ask for a specific site:
  if (get.pathname === "/") {
    console.log("NO REQUEST: Pathname " + __dirname + "/website/index.html");
    fs.readFile(__dirname + "/website/index.html", (err, data) => {
      if (data) {
        res.writeHead(200, {
          "Content-type": addons.getMT(get.pathname)
        });
        res.write(data);
        res.end();
        return
      }
      if (err) {
        console.log(err.toString());
      }
    });
  } else {
    //clean input
    if (!get.pathname === "[a-zA-Z./]" || get.pathname.indexOf("..") !== -1) {
      console.log("Illegal charachters in request");
      res.writeHead(400, {
        "Content-type": "text/html"
      });

      res.end("400 - Bad Request");
      return
    } else {
      //User request control rights
      rightsaccess.allow("user", get.pathname, function(tf) {
        if (tf) {
          //if Input is clean read file and return it if it exists
          //add extension automatically
          if (!get.pathname.contains(".")) {
            fs.readdirSync(__dirname + "/website").every(file => {
              if ("/" + file.split(".")[0] === get.pathname) {
                get.pathname = "/" + file.toString();
                return false;
              } else {
                return true;
              }
            });
          }
          //if the request is not a content request
          if (!get.pathname.contains("content")) {
            get.pathname = "/website" + get.pathname;
          }
          fs.readFile(__dirname + get.pathname, (err, data) => {
            if (data) {
              res.writeHead(200, {
                "Content-type": addons.getMT(get.pathname)
              });
              res.write(data);
              res.end();
              return
            } else {
              console.log("404");
              //res.status = 404;
              res.writeHead(404, {
                "Content-type": "text/html"
              });
              res.end("404 - not found");
              return
            }
          });
        } else { //not the required rights
          res.writeHead(401, {
            "Content-type": "text/html"
          });
          res.end("401 - not authorized");
        }
      });
    }
  }

}

server.listen(8080);
console.log("Server running on localhost:8080");
