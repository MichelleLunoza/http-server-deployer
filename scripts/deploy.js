'use strict';

var shell = require('shelljs');

app.post('/api/deploy', function(req, res) {
    var command = req.body.cmd;
    shell.exec(command, { async: true }, function(code, stdout, stderr) {
        if (code == 0) {
            res.send(stdout)
        } else {
            res.send(stderr);
        }
    });
});