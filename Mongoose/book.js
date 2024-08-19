const mongoose = require("mongoose")

main().then((res)=>{
    console.log("Connection successfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  author:{
    type:String,
  },
  price:{
    type:Number,
  },
  discount:{
    type:Number,
    default:0
  }
})

const Book = mongoose.model('Book', bookSchema)

// Book.create({title:'Mathematics XII', author:"Monis", price: 800}).then((res)=>{
//   console.log(res)
// })
Book.create({title:'Rich Dad Poor Dad', author:"David", price: 999}).then((res)=>{
  console.log(res)
})