/******************************
 * SOCKETTER
 *  Sampler Sockets webserver
 ******************************/
const express = require("express")
const hbs = require('express-handlebars')
const app = express()

app.engine('hbs', hbs({defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

app.get('/', (req, res)=>{
    res.render("index")
})
app.listen("8345", ()=>{
    console.log("Socketter listening on port 8345")
})