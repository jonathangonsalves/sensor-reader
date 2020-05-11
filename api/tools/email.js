const nodemailer = require('nodemailer');

module.exports = function(email, msg){
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: "lpgSuport@gmail.com",
            pass: "lpgSuport123"
        }
    });

    var mailOptions = {
        from: "sensor_reader@suport.com",
        to: email,
        subject: "Sensor-reader password",
        html: `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Instituição inscrita com sucesso!</title><style type="text/css">:root{--main-bg-color: #272822;--main-text-color: #F8F8F2;--main-second-text-color: #75715E;--main-border-color: #66D9EF;--main-pink-color: #F92672;--main-orange-color: #FD971F;--main-green-color: #A6E22E;}* {margin: 0;padding: 0;box-sizing: border-box;}body {background: var(--main-bg-color);font-family: Monospace, sans-serif;color: var(--main-text-color);}.container {width: 400px;margin: 0 auto;}.email-container {background-color: var(--main-bg-color);background: linear-gradient(var(--main-bg-color), var(--main-second-text-color), 90deg);border-radius: 10px;padding: 10px;border: 2px solid var(--main-border-color);margin-top: 10%;box-shadow: 0px 0px 12px var(--main-pink-color);}section.body-email {padding: 16px;}section.body-email h2 {text-align: center;padding-top: 16px;padding-bottom: 16px;}section.body-email p {padding-top: 24px;padding-bottom: 24px;line-height: 1.45em;}@media (max-width: 767px) {.container {width: 100%;padding-left: 16px;padding-right: 16px;}.email-container {box-shadow: none;}section.body-email p {text-align: center;}}  </style></head><body><div class="container"><div class="email-container"><section class="body-email"><h2>Password Recover</h2><p>${msg}</p></section></div></div></body></html>`
    };

    
    
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}