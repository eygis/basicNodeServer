#!/usr/bin/env node

const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let path = './views/';
    switch(req.url) {
        case '/':
        case '/index':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact':
            path += 'contact.html';
            break;
        default:
            path += '404.html';
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            res.statusCode = 404;
            console.log(err)
            res.end()
        }
        else {
            res.statusCode = 200;
            res.end(data);
        }
    })
    
})

server.listen(port, () => {
    console.log(`Listening at port ${port}...`)
})