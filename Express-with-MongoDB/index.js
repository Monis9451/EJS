const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const Chat = require('./models/chat.js')
const methodOverride = require("method-override")

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

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

//Index route
app.get('/chats',async (req, res)=>{
    let chats = await Chat.find();
    res.render("index.ejs", {chats});
})

//new route
app.get('/chats/new', (req, res)=>{
    res.render('new.ejs');
})

//Create route
app.post('/chats', (req, res)=>{
    let{from, msg, to} = req.body;
    Chat.create({from:from, to:to, msg:msg, created_at:new Date()}).then(res.redirect('http://localhost:8080/chats'));
})

//Edit message
app.get('/chats/:id/edit', async(req, res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render('edit.ejs',{chat});
})

//update message
app.put('/chats/:id', async(req, res)=>{
    let {id} = req.params;
    let {newMsg} = req.body;
    await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators:true, new:true});
    res.redirect('/chats');
})

//delete message
app.delete('/chats/del/:id', async(req, res)=>{
    let {id} = req.params;
    await Chat.findByIdAndDelete(id).then((res)=>{console.log(res)})
    res.redirect('/chats')
})

// Chat.create({from:"Monis", to:'Mohsin', msg:"Uni kab ana ha?", created_at:new Date()})
// .then((result)=>{
//     console.log(result)
// })
