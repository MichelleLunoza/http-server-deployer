'use strict';

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'user@gmail.com',
        pass: 'password'
    }
});

var emailBody = req.body.emailBody;

var mailOptions = {
    from: 'user@gmail.com',
    to: '',
    subject: 'Graduate Tracer Deployment Notification',
    text: emailBody
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Message sent: ' + info.response);
    };
});