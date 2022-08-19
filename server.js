const express = require('express')
const app = express()
const userRouter = require('./routers/users')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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

app.use(middleware1)
app.use(middleware2)

app.use('/users', userRouter)

app.get('/api', specificMiddleware3, specificMiddleware4, (req, res) => {
    // res.status(500).send('There is an error')
    res.status(200).json({"message": 'welcome'})
    // res.download('/path/to/file')
})

app.get('/render', (req, res) => {
    res.render('dummy', {mytext: 'A quick brown fox' })
})



app.listen(3000)