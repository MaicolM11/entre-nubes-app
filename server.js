const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

var app = express()

var port = process.env.PORT

app.use(morgan(':method :url - :referrer :status :response-time ms'));
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.get('/names', (req, res) => {
    res.json([{name: "Lola"}, {name: "Pedro"} ])
})

app.listen(port, () => {
    console.log("server is running on port "+ port);
})