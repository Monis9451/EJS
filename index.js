const express = require('express')
const app = express()
const port = 8080
const path = require('path')

app.set("view engine", "ejs")
app.set("viewa",path.join(__dirname, "/views"))

app.get('/', (req, res)=>{
    res.render("home.ejs")
})

app.get('/ig/:username', (req, res)=>{
    let {username} = req.params
    const instaData = require('./data.json')
    const data = instaData[username]
    res.render("instagram.ejs", {data})
})

app.get('/rolldice', (req, res)=>{
    let dice = Math.floor(Math.random()*6)+1
    res.render("rollDice.ejs", {dice})
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

