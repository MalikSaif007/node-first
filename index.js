const express = require("express");
const app = express();

app.use(express.static("public"))

app.get("/", (req,res) =>{
    res.send("welcome to express server")
});

app.get("/about",(req,res) =>{ 
    res.send("<h1>welcome to my 1st program</h1>")
});


app.get("/home", (req,res) => {
    const result = [
        { step: 1, action: "npm init" },
        { step: 2, action: "install express" },
        { step: 3, action: "load express" },
    ];
    res.send(result);
});
app.listen(5000, () => {
    console.log(" node server started on 5000");
});