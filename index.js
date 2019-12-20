const express = require('express')
const app = express()
const port = process.env.PORT || 3000
//tells express to serve the js or css files form fronted folder
app.use(express.static('frontend'))
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))
app.get('/login', (req, res) => res.send('Login!'))
app.get('/Register', (req, res) => res.send('Register!'))
var student={
    "name":"manikanth reddy",
    "college":"vnrvjiet",
    "regno":"17071A12A2"
};
app.get('/data',(req,res)=>res.json(student))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))