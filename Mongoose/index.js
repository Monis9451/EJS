const mongoose = require('mongoose');

main().then((res)=>{
    console.log("Connection successfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model('User', userSchema)
// const Employee = mongoose.model('Employee', userSchema)

// const user1 = new User({
//     name: 'Adam',
//     email: 'adam@yahoo.in',
//     age: 48,
// })

// const user2 = new User({
//     name: 'Eve',
//     email: 'Eve@yahoo.in',
//     age: 38,
// })

// user2.save()

User.find({age: {$gt: 40}}).then((res)=>{
    console.log(res)
})