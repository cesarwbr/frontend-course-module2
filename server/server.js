var express = require('express');
var data = require('./data.js');

express()
    .get('/api/customer', function(req, res) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);

        res.json(data.customers);
    })
    .listen(3000, function() {
        console.log('Listen to port 3000');
    });
