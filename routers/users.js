const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // http://localhost:3000/users?name=John
    console.log(req.query.name)

    res.send('user list')
})

router.post('/', (req, res) => {
    res.send(`Create user ..... ${req.body.firstName}`)
})

router.get('/new', (req, res) => {
    res.render('users/new', {firstName: 'Your name'})
})

// router.get('/:id', (req, res) => {
//     res.send(`your id is ${req.params.id}`)
// })

router
    // http://localhost:3000/users/1234
    .route('/:id')
    .get((req, res) => {
        console.log(`data from req.user = ${req.user}`)
        res.send(`Get user with id = ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update user with id = ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with id = ${req.params.id}`)
    })

    
// this function will execute when it find parameter named id
router.param('id', (req, res, next, id) => {
    console.log(`from router.param() ... ${id}`)
    req.user = 'Peter Smith'
    next()
})

module.exports = router