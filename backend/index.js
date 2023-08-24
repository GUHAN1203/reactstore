
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Kamalnath2003:Kamalnath2003@cluster0.d3btq94.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
require("dotenv").config();
const url = process.env.ATLAS_URL;

app.use("/", (req, res)=>{
    res.send("Hello Node");
    var col = db.getSiblingDB('Cluster0').getCollection(colName);

  for (i = 0; i < num; i++) {
    col.insert({x:i});
  }

  print(col.count());

})

mongoose.connect(url)
.then(()=>{
    app.listen(8000);
    console.log("Mongoose connected.")
    
})
.catch((err) =>{
    console.log(err)
})
