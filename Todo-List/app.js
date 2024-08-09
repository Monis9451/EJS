const express = require("express")
const app = express()
const port = 8080
const path = require("path")
app.set("veiw engine", "ejs")
app.set("veiws", path.join(__dirname,"/views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express(express.urlencoded({extended:true})))
app.use(express.json())

let list = ["Want to do some chores", "Do the assignment", "Go to market"]
let doneWork = ["Final year project"]

app.listen(port,()=>{
    console.log("Port", port, "is listening")
})
app.get("/",(req, res)=>{
    res.render('home.ejs',{list,doneWork})
})

app.get("/add",(req, res)=>{
    console.log("This is an art router")
    res.render('add.ejs')
})

let addBtn = document.querySelector(".add")
addBtn.addEventListener("click", ()=>{
    res.render('/add')
})