const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors())

// set up multer for file uploads
const storage = multer.diskStorage({
    destination: 'upload_images/',
    filename: (req, file, cb) => {
        const fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        console.log('Received file:', fileName);
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage });

// serve static files from the upload_images folder
app.use('/upload_images', express.static('upload_images'));

// handling file upload
app.post('/upload', upload.array('images'), (req, res) => {
    console.log('Upload route hit');

    // if files are successfully uploaded, respond with a success message
    if (req.files && req.files.length > 0) {
        console.log('Files uploaded:', req.files);
        res.status(200).json({ message: 'Images uploaded successfully!' });
    } else {
        console.log('No files received.');
        res.status(400).json({ error: 'No files received.' });
    }
});

// server health
app.get('/', (req, res) => {
    res.send('Hello from Click Fit Server..');
});

// start server
app.listen(port, () => {
    console.log(`Click Fit Server is running on port ${port}`);
});