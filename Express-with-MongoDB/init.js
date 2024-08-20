const mongoose = require("mongoose");
const Chat = require('./models/chat.js')

main().then(()=>{console.log("Connection successfull")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

Chat.insertMany([{
    from:"Faizan",
    to:"Bilal",
    msg:"AoA, bhai kya hal hain",
    created_at: new Date()
},
{
    from:"Bilal",
    to:"Faizan",
    msg:"Ws, Ma fit tu suna",
    created_at: new Date()
},
{
    from:"Faizan",
    to:"Bilal",
    msg:"Or suna chutian kesi guzar rahi hain?",
    created_at: new Date()
},
{
    from:"Bilal",
    to:"Faizan",
    msg:"Boht achi guzr rahi hain tu apna bta",
    created_at: new Date()
},
{
    from:"Faizan",
    to:"Bilal",
    msg:"Meri b achi guzar rahi hain",
    created_at: new Date()
}
])