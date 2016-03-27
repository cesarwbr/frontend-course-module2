var express = require('express');
var data = require('./data.js');

express()
    .get('/api/customer', function(req, res) {
        res.json(data.customers);
    })
    .listen(3000, function() {
        console.log('Listen to port 3000');
    });
