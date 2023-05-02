// IMPORTING REQUIRED MODULES
const fs = require("fs");
const http = require("http");

// CREATING SERVER
const server = http.createServer(function (req, res) {
  // CONDITION FOR FILE READ
  if (req.url === "/") {
    const data = fs.readFileSync("./public/home.html", "utf8");
    res.end(data);
  } else if (req.url === "/about") {
    const data = fs.readFileSync("./public/about.html", "utf8");
    res.end(data);
  } else if (req.url === "/contact") {
    const data = fs.readFileSync("./public/contact.html", "utf8");
    res.end(data);
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("404 Not Found!!");
    res.end();
  }
});

// LISTENING THE SERVER TO LOCALHOST 3000
server.listen(3000);

// CONSOLING THE SUCCESS MESSAGE AFTER SERVER RUN SUCCESSFULLY
console.log("sever successfully running!!");
