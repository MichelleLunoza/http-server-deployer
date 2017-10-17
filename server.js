'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors');
var helmet = require('helmet');
var ip = require('ip');
var port = process.env.Port || 3100;
var host = ip.address();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.get('/api', function(req, res) {
    res.send("Initialized server deployer api");
});

eval(fs.readFileSync('scripts/deploy.js').toString());

app.listen(port, host, function() {
    console.log("Listening to " + host + ":" + port);
});