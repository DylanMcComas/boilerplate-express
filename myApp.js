let express = require('express');
let app = express();

let absolutePath = __dirname + "/views/index.html"

let data = {"message": "Hello json"};

console.log("Hello World");
console.log("Hello, Dylan");

// MIDDLEWARE

app.use((req, res, next) => {
    var string = req.method + " " + req.path + " - " + req.ip;

    console.log(string);
    next();
});

app.use("/public", express.static(__dirname + "/public"));


// ROUTES
app.get("/", (req, res) => {
    res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
    res.json(data);
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.send({time: req.time});
})

app.get("/:word/echo", (req, res) => {
    const { word } = req.params;
    res.json({
        echo: word
    });
});




























 module.exports = app;
