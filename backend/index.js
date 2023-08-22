const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
require("dotenv").config();
const url = process.env.ATLAS_URL;

app.use("/", (req, res)=>{
    res.send("varrataa ");
})

mongoose.connect(url)
.then(()=>{
    app.listen(8000);
    console.log("Mongoose connected.")
})
.catch((err) =>{
    console.log(err)
})