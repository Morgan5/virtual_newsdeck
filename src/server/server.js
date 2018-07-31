"use strict";

// Modules
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// Middleware
app.use(bodyParser.json({limit: "10mb"}));
app.use(bodyParser.urlencoded({limit: "10mb", parameterLimit: 1000, extended: true}));

// Routes
app.use("/", express.static(path.join(__dirname, "../")));
app.get("/newspapers", require("./routes/newspapers.js"));
app.get("/currentArrangement", require("./routes/currentArrangement.js"));
app.get("/predictedSales", require("./routes/predictedSales.js"));


// Catch-all route
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"), err => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

module.exports = app;
