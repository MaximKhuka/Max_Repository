// *** task1 *** (Server)

let os = require('os');
let path = require('path');
let personalModule = require('./personalmodule.js');

let uptimeSeconds = os.uptime();
let uptimeMinutes = uptimeSeconds / 60;

let userInfo = os.userInfo();
let username = userInfo.username;
let welcome = personalModule.welcomeUser(username); 
let todayDate = new Date().toString();

let http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});

    res.write("<h1>System information\n</h1>");
    res.write("<p>Current user name: " + os.userInfo().username + "\n</p>");
    res.write("<p>OS type: " + os.type() + "\n</p>");
    res.write("<p>System work time: " + uptimeMinutes.toFixed(2) + " minutes\n</p>");
    res.write("<p>Current work directory: " + __dirname + "\n</p>");
    res.write("<p>Server file name: " + path.basename(__filename) + "\n</p>");

    res.write("<p>Date of request: " + todayDate + "\n</p>");
    res.write("<p>" + welcome + "\n</p>");

    res.end();
}).listen(5000);

console.log("Server is listening at http://localhost:5000");