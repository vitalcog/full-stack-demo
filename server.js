const express = require('express')
const app = express()
const fakeData = require('./fakeData')

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.get('/getData', (req,res)=>{
    console.log('server route done been tapped yo!')
    res.json(fakeData)
})

app.listen(3333, console.log('We\'re live!') )