const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const letterCombination = require('./script');

app.use(express.static(__dirname))

app.post('/lettercomb',(req, res) => {
  const input = req.body.num
  const answer = letterCombination(input) 
  res.send({message:JSON.stringify(answer)})
})

module.exports = app;