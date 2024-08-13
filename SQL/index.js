const {faker} = require("@faker-js/faker")
const mysql = require("mysql2")
const express = require("express")
const app = express()
const port = 8080
const path = require("path")
const { count } = require("console")
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,"views"))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Delta_app',
    password: 'Monis9451..com'
  });

app.listen(port,()=>{
  console.log("The port", port ,"is listening")
})

//Home route
app.get('/',(req, res)=>{
  let q = 'SELECT count(*) FROM user'
    try{
    connection.query(q, (err, result)=>{
      if(err) throw err
      let count = result[0]["count(*)"]
      res.render('users', {count})
    })
  }
  catch(err){
    console.log(err)
    res.send("Some error occurr")
  }
})

//Show route
app.get("/user", (req, res)=>{
  let q = `SELECT * FROM user`;
  try{
    connection.query(q,(err, result)=>{
      if(err) throw err
      res.render('show',{result})
    })
  }
  catch(err){
    console.log(err)
  }
})

//Edit route
app.get('/user/:id/edit', (req, res)=>{
  let {id} = req.params
  let q = `SELECT * FROM user WHERE id = '${id}'`
  try{
    connection.query(q, (err, result)=>{
      if(err) throw err
    })
  }
  catch(err){
    console.log(err)
  }
  res.render('edit')
})

  // Inserting new data
  
//   let getRandomUser = () => {
//     return [
//       faker.string.uuid(),
//     faker.internet.userName(),
//     faker.internet.email(),
//     faker.internet.password()
//   ];
// }

// let data = []
// for (let i=0; i<100; i++){
//   data.push(getRandomUser())
// }

// let q = "INSERT INTO user (id, username, email, password) VALUE ?"
// let users = [["102", "user_102", "user_102@gmail.com", "102"],
//             ["103", "user_103", "user_103@gmail.com", "103"]]
// try{
//   connection.query(q, [data], (err, results)=>{
//     if(err) throw err
//     console.log('Results:', results)
//     console.log(results.length)
//     console.log(results[0])
//   })
// }
// catch(err){
//   console.log(err)
// }

// connection.end()