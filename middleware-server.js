const http = require("http");
const fs = require("fs");
const path = require("path");
const io = require("socket.io")();
const app = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.resolve(__dirname, "midleware-cli.html"), (err, data) => {
      if (err) {
        res.writeHead(500);
        return void res, end();
      }
      res.writeHead(200);
      res.end();
    });
  } else {
    res.writeHead(403);
    res.end();
  }
});

io.path("/socketio");

const users = [
  { username: "huangjx", password: "cfgybhji" },
  { username: "johnstm", password: "mkonjiuh" },
  { username: "jackson", password: "qscwdvb" },
];
