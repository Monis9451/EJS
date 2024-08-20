const mongoose = require("mongoose")

main().then((res)=>{console.log("Connection successfull")}).catch(err => console.log(err));

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
    min:[1, 'Price is too low for amazon selling'],
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
Book.create({title:'Try try again', author:"John", price: 0, discount: 99})
.then((res)=>{
  console.log(res)
})
.catch((err)=>{
  console.log(err.errors.price.properties.message)
})