const express = require('express')
const app = express()
const port = 3000

const items = require('./routes/item');
const birds = require('./routes/birds');

app.use('/api', items);
app.use('/apiTwo',birds);

// app.get('/',(req,res) => {
//     res.send('Hello World!')
// })

// Requests : 
// app.get('/', (req,res) => {
//     // res.send("Got a GET Request")
//     // res.sendFile('./dummy.html',{root:__dirname});
//     res.json({x:1, y:2, z:3});
// });

// app.post('/items', (req,res) => {
//     res.send("Got A POST Request")
// });

// app.put('/items/:id',(req,res) => {
//     res.send("Got a PUT Requests");
// })

// app.delete('/items/:id',(req,res) => {
//     res.send("Got a Delete Requests");
// })


app.listen(port,'localhost', () => {
    console.log(`Example app listening on port ${port}`)
})