const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ProductRouter = require("./router/products");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));

require("dotenv").config();
const url = process.env.ATLAS_URL;

//Routers
app.use("/product", ProductRouter);

mongoose.connect(url)

.then(()=>{
    app.listen(8000);
    console.log("Mongoose connected.")
})
.catch((err) =>{
    console.log(err)
})
