let express = require('express');
let app = express();

console.log("Hello World");
console.log("Hello, Dylan");

app.get("/", (req, res) => {
    res.send("Hello Express");
});


































 module.exports = app;
