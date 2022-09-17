let express = require('express');
let app = express();

let absolutePath = __dirname + "/views/index.html"

let data = {"message": "Hello json"};

console.log("Hello World");
console.log("Hello, Dylan");

app.use((req, res, next) => {
    var string = req.method + " " + req.path + " - " + req.ip;

    console.log(string);
});

app.get("/", (req, res) => {
    res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
    res.json(data);
});

app.use("/public", express.static(__dirname + "/public"));

























 module.exports = app;
