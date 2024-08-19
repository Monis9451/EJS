const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const Chat = require('./models/chat.js')

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

main().then(()=>{console.log("Connection successfull")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

app.listen(8080, ()=>{
    console.log("Port 8080 is listening.\n");
});

app.get('/', (req, res)=>{
    res.send("This port is working");
});

Chat.create({from:"Monis", to:'Mohsin', msg:"Uni kab ana ha?", created_at:new Date()})
.then((result)=>{
    console.log(result)
})

