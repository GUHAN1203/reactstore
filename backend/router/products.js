const express=require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Products = require("../model/product.model")


const Storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/image")
    },
    filename: function(req,file,cb){
        cb(null.file.fieldname+"-"+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({storage:Storage})
router.post("/add-product",upload.single("imageFile"),(req,res)=>{

})

module.exports=router;