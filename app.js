var express = require('express')
var app = express()

function welcomeMessage() {
  var message = 'Welcome to the CircleCI Demo!'
  return message
}

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', { message: welcomeMessage() })
})

var server = app.listen(3000, function () {
  console.log('Node server is running...')
})

module.exports - server

module.exports.welcomeMessage = welcomeMessage
