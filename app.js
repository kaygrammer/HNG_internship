const express = require('express');
const app = express()

app.use(express.json())

const port = 3000

const info = { "slackUsername": "kayode olaoye", "backend": true, "age": 25, "bio": "I am an aspiring software engineer" }

app.get('/', (req, res)=>{
    res.json(info)
})

const start = async () => {
    app.listen(port, console.log(`server running on port ${port}`))
}

start()