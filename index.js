#!/usr/bin/env node

const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000


const indexRoutes = ['/', '/index'];
app.get(indexRoutes, (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './views/about.html'));
})
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, './views/contact.html'));
})
const errorRoutes = ['/404', '*'];
app.get(errorRoutes, (req, res) => {
    res.sendFile(path.join(__dirname, './views/404.html'));
})


app.listen(port, () => {
    console.log(`Listening at port ${port}...`)
})