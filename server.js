const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

require('dotenv').config({quiet:true});

app.use(express.urlencoded());


app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`*****Server listening on port ${port}!`))