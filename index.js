const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;



// server health
app.get('/', (req, res) => {
    res.send('Hello from Click Fit Server..');
});

// start server
app.listen(port, () => {
    console.log(`Click Fit Server is running on port ${port}`);
});