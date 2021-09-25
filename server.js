const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;
const fs = require('fs')
const dist = path.resolve(__dirname, "dist")

app.use(express.static(path.resolve(__dirname, "dist")))

app.get("/",(req,res)=>{
    // console.log(path.join(dist,"index.html"))
    // const file = fs.readFileSync(path.join(dist,"index.html"))
    // console.log(file)
    // res.send(file)
    // res.end();

    res.sendFile(path.join(dist,"index.html"))
})
app.get("/about",(req,res)=>{
    res.send("hello")
    res.end();
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})