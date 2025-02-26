const express= require("express");
const app = express();

const PORT = process.env.PORT|| 8000;

app.get("/", (req,res) =>{
    return res.json({message: "Hey I am NodeJs from Docker Container"});
})

app.listen(PORT, ()=> console.log(`server listening on port:${PORT}`));