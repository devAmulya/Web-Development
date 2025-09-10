const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    // res.send("Got a GET Request")
    // res.sendFile('./dummy.html',{root:__dirname});
    res.json({x:1, y:2, z:3});
});

router.post('/items', (req,res) => {
    res.send("Got A POST Request")
});

router.put('/items/:id',(req,res) => {
    res.send("Got a PUT Requests");
})

router.delete('/items/:id',(req,res) => {
    res.send("Got a Delete Requests");
})

module.exports = router