const express = require("express");
const ejsMate = require("ejs-mate");

const app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/home",(req,res)=>
{
    res.render("home.ejs")
})
app.get("/weather",(req,res)=>
{
    res.render("weather.ejs")
})
app.get("/api",(req,res)=>
{
    res.render("api.ejs")
})
app.get("/about",(req,res)=>
{
    res.render("about.ejs")
})


app.listen("8000",(req,res)=>
{
    console.log("hehe")
})