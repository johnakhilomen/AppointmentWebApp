const express = require("express");
require('dotenv').config();
import { NextFunction, Request, Response } from "express";
import serverErrorHandler from "./errorHandlers/serverErrorHandler";
const cors = require('cors');

const PORT : any = process.env.PORT;

const app: any = express();
const path = require('path').resolve('./');

app.use(cors())
//middleware setup
//Set Event handler middleware for server
app.use(serverErrorHandler);

app.set("view engine", "ejs");
app.set("views", path + '/public/views');

//Set path for html, css (files) and images
app.use(express.static(path + '/public'));

app.use(function(req: Request, res: Response, next: NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/authenticated", function (req: Request, res: Response) {
    //console.log(req.query);
    const {token} = req.query;
    res.redirect(`/${token}`);
    //We render Dashboard here
});

app.get("/:id", function (req: Request, res: Response) {
    //res.send("Welcome to your Dashboard");
    res.render('index');
    //We render Dashboard here
});

//All routes run on index.html
app.get("/*", function (req: Request, res: Response) {
    res.render('index');
});

app.listen(PORT, ()=>{
    console.log(`Server started and running on http://localhost:${PORT}`)
});