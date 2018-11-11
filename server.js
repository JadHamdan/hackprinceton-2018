var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000
const Chatkit = require('@pusher/chatkit-server')

const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:3b31d86f-e2f8-4671-92e2-3a0e2d460298',
    key: '57202e98-fea7-41e0-8720-7ecf6aefeb74:Hi1uucW/XBI8xzwVF3LaRL+cttw+KC6wu7PZoXyv6qg=',
})

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({'extended': 'true'}))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.post('/users', (req, res) => {
    const { username } = req.body
    chatkit
        .createUser({
            id: username,
            name: username
        })
        .then(() => res.sendStatus(201))
        .catch(error => {
            if (error.error_type === 'services/chatkit/user_already_exists') {
                res.sendStatus(200)
            } else {
                res.status(error.status).json(error)
            }
        })
})

app.post('/authenticate', (req, res) => {
    const authData = chatkit.authenticate({userId: req.query.user_id })
    res.status(authData.status).send(authData.body)
})

app.get('/test', (req, res) => {
    res.sendStatus(200)
})

app.get('/*', function response(req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(port)
console.log('App listing on port ' + port)

module.exports = app