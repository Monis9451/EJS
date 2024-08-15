const express = require("express")
const app = express()
const port = 8080
const path = require("path")
const mysql = require("mysql2")
app.set("veiw engine", "ejs")
app.set("veiws", path.join(__dirname,"/views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const { v4: uuidv4 } = require('uuid')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'todoList',
    password: 'Monis9451..com'
  });

app.listen(port,()=>{
    console.log("Port", port, "is listening")
})
app.get("/",(req, res)=>{
    let result1, result2
    let q1 = `SELECT * FROM data`
    let q2 = `SELECT * FROM completed`
    try{
        connection.query(q1,(err, result1)=>{
            if(err) throw err
            console.log(result1)
            
            try{
                connection.query(q2,(err, result2)=>{
                    if(err) throw err
                    console.log(result2)
                    res.render('home.ejs', {result1,result2})
                })
            }
            catch(err){
                console.log(err)
            }
                })
    }
    catch(err){
        console.log(err)
    }
})

app.get("/add",(req, res)=>{
    res.render('add.ejs')
})

app.post("/add",(req, res)=>{
    let {task} = req.body
    let id = uuidv4()
    let q = `INSERT INTO data (id, task) VALUES (?, ?)`
    let combine = [id, task]
    try{
        connection.query(q,combine,(err, result)=>{
            if(err) throw err
            res.redirect('http://localhost:8080/')
        })
    }
    catch(err){
        console.log(err)
    }
})