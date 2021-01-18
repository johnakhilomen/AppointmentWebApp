"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const serverErrorHandler_1 = require("./errorHandlers/serverErrorHandler");
const cors = require('cors');
const PORT = 3000;
const app = express();
const path = require('path').resolve('./');
app.use(cors());
//middleware setup
//Set Event handler middleware for server
app.use(serverErrorHandler_1.default);
app.set("view engine", "ejs");
app.set("views", path.join(path + '/public/views', "views"));
//Set path for html, css (files) and images
app.use(express.static(path + '/public'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/", function (req, res) {
    res.render('index');
});
app.listen(PORT, () => {
    console.log(`Server started and running on http://localhost:${PORT}`);
});
