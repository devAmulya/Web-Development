const express = require('express')
const connectDB = require('./config/db')
connectDB()
const app = express()
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT
const productRoutes = require('./routes/productRouter')
app.use(express.json());

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.use('/api',productRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})