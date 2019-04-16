const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'preflightContinue': 'true',
    'methods': 'POST'
}));

exports.handler = function (event, context, callback) {

    if (event.httpMethod !== "POST") {
        console.log('method not allowed');
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const params = JSON.parse(event.body);
    console.log('new email received', params);

    var smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.email,
            pass: process.env.password
        }
    });
    smtpTransport.sendMail({
        from: `"${params.formName}" <${params.formEmail}>`,
        to: `Rajaton <rajatonproducts@gmail.com>`,
        subject: `${params.formSubject}`,
        html: `<p>${params.formMessage}</p>
             <p>${params.formName}, ${params.formEmail}</p>`
    }, function (error, response) {
        if (error) {
            smtpTransport.close();
            console.log('error', error);
            return {
                statusCode: 500,
                body: 'sending the message failed'
            };
        }
        smtpTransport.close();
        console.log('worked');
        return {
            statusCode: 200,
            body: 'sending the message worked'
        };
    });
}