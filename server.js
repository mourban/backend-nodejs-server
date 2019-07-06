var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

var Users = require("./routes/Users");
var Tasks = require("./routes/Tasks");

app.use("/user", Users);
app.use("/task", Tasks);
app.listen(port, () => {
    console.log("Servidor de prueba-tec-back esta corriendo en puerto: "+port);
});

