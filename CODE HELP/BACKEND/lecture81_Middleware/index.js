const express = require('express')
const app = express()
const port = 3000

app.use(express.json()); //loading

// app.use('/assets',express.static('public'));

// middleware - logging, auth, validation

// const loggingMiddleware = function (req, res, next) {
//     console.log('LOGGING is in process');
//     next();
// }

// const authMiddleware = function (req, res, next){
//     console.log('AUTH is in process');
//     res.send("Auth failed");
//     // next();
// }

// const validationMiddleware = function (req, res, next){
//     console.log('VALIDATION is in process');
//     next();
// }

// app.use(loggingMiddleware);
// app.use(authMiddleware);
// app.use(validationMiddleware);

const route = require('./routes/route')
app.use('/api',route);

app.get('/',(req,res) => {
    console.log("Inside Route Handler")
    console.log(req.body);
    res.send('Hello !')
})



app.listen(port,'localhost', () => {
    console.log(`Example app listening on port ${port}`)
})