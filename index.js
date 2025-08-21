require('dotenv').config()

const express = require('express');
const app = express();
const PORT=5000;

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get('/twitter',(req,res)=>{
    res.send(www.google.com);
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at chai aur code</h1>');
})
app.get('/signup',(req,res)=>{
    res.send('<h1>Please Login at chai aur code</h1>');
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur Code</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${PORT}`);
});
