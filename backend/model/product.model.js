const mongoose = require("mongoose");

const schema = mongoose.Schema;
const productSchema = new schema({
    name:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
    
    colorram:{
        type:String,
        required:true
    },
    rate:{
        type:String,
        required:true
    },
    offprice:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }
    
    
})

module.exports = mongoose.model("Products", productSchema)
