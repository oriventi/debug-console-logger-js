const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const app = express();
const server = http.createServer(app);

app.use(cors());

// Serve the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Endpoint to capture logs
app.post('/log', (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const logMessage = JSON.parse(body).message;
        console.log(logMessage); 
        res.sendStatus(200);
    });
});

//Serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});