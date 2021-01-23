const express = require('express');
const path = require('path');
const port = 3000;



const app = express();
app.use('/static', express.static('./static'))

const jsonBodyParser = express.json();


app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
})

app.post('/', jsonBodyParser, (req, res) => {
    res.send(req.body)
})