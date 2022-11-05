const express = require('express');
const app = express()
const cors = require('cors')
const operationRouter = require('./routes/task')

app.use(express.json())


app.use('/api/v1/operation', operationRouter);


const port = process.env.PORT || 3000

const info = { "slackUsername": "kayode olaoye", "backend": true, "age": 25, "bio": "I am an aspiring software engineer" }

app.get('/', cors(), (req, res)=>{
    res.json(info)
})

const start = async () => {
    app.listen(port, console.log(`server running on port ${port}`))
}

start()