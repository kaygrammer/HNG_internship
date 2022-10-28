const express = require('express');
const app = express()
const cor = require('cors')

app.use(express.json())


var corsOptions = {
    origin: '',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

const port = process.env.PORT || 3000

const info = { "slackUsername": "kayode olaoye", "backend": true, "age": 25, "bio": "I am an aspiring software engineer" }

app.get('/', cors(corsOptions), (req, res)=>{
    res.json(info)
})

const start = async () => {
    app.listen(port, console.log(`server running on port ${port}`))
}

start()