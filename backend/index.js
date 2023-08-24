const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const productRouter =require ("./router/products")

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
require("dotenv").config();
const url = process.env.ATLAS_URL;
app.use("/product",productRouter)
app.use("/", (req, res)=>{
    res.send("Hello Node");
})

mongoose.connect(url)
.then(()=>{
    app.listen(8000);
    console.log("Mongoose connected.")
})
.catch((err) =>{
    console.log(err)
})


