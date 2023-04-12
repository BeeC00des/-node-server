const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());


app.get("/", cors(), async(req,res) =>{
    res.send("this is working");
})

app.get("/record", cors(), async(req,res) =>{
    res.send("you can do excellent works");
})

app.get("/builds", cors(), async(req,res) =>{
    res.send("Keep on moving");
})

app.listen(port, ()=>{
    console.log(`listen at http:localhost:${port}`);
})