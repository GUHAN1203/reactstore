const mongoose = require("mongoose");

const schema = mongoose.Schema;
const productSchema = new schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imgPath:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Products", productSchema)
