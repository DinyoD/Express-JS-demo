const express = require('express');
const port = 3000;

let app = express();

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
})