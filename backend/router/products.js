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
    const title=req.body.title;
    const price=req.body.price;
    const description=req.body.description;
    const imgFile=req.file.filename; 
    const newProduct =new Products({
        title:title,
        price:price,
        description:description,
        imgPath:imgFile

    })
})
newProduct.save(){
    .then(result=>
    res.status(200).json(result);
    )}

module.exports=router;