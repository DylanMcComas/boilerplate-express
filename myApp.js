let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const { application } = require('express');


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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.use((req, res, next) => {
//     bodyParser.json(req.body);
//     next();
// });


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

// Get Query Parameter Input from the Client
app.get("/name", (req, res) => {
    var firstName = req.query.first;
    var lastName = req.query.last;

    res.json({
        name: `${firstName} ${lastName}`
    });
});

// Get Data from POST Requests
app.post("/name", (req, res) => {
    var string = req.body.first + " " + req.body.last;
    res.json({ name: string });
});






























 module.exports = app;
