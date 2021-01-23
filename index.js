const express = require('express');
const port = 3000;



const app = express();

const jsonBodyParser = express.json();


app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello from Home Page!')
})

app.post('/', jsonBodyParser, (req, res) => {
    res.send(req.body)
})