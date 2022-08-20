const express = require('express')
const app = express()
const userRouter = require('./routers/users')

// set view engine to use ejs
app.set('view engine', 'ejs')

// set static folder
app.use(express.static('public'))

// see https://expressjs.com/en/api.html  for full detail on options
app.use(express.urlencoded({ extended: true }))
app.use(express.json({limit: '2mb'}))

// declare middleware functions
function middleware1(req, res, next) {
    console.log('-- middleware 1 --')

    const protocol = req.protocol
    const host = req.hostname
    const url = req.originalUrl
    console.log(protocol + '://' + host + url)
    next()
}

function middleware2(req, res, next) {
    console.log('-- middleware 2 --')
    next()
}

function specificMiddleware3(req, res, next) {
    console.log('-- specific middleware 3 --')
    next()
}

function specificMiddleware4(req, res, next) {
    console.log('-- specific middleware 4 --')
    next()
}

// global middleware
app.use(middleware1)
app.use(middleware2)

// routers
app.use('/users', userRouter)

// end points
app.get('/api', specificMiddleware3, specificMiddleware4, (req, res) => {
    // res.status(500).send('There is an error')
    res.status(200).json({message: 'welcome'})
    // res.download('/path/to/file')
})

app.get('/render', (req, res) => {
    res.render('dummy', {mytext: 'A quick brown fox' })
})

app.get('/test_redirect', (req, res) => {
    res.redirect('/redirected')
})

app.get('/redirected', (req, res) => {
    res.send('you have been redirected to this page.')
})

// start server
app.listen(3000)