const mongoose=require("mongoose")

const schema =mongoose.Schema;

const productSchema = new schema({
    title:{
        type:String,
        require:true,
    },
    price:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    imgPath:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("Products",productSchema)