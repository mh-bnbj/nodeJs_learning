const nodemailer = require('nodemailer')

const sendMail = async ({ to, subject, text, html }) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
        },
    })

    const info = await transporter.sendMail({
        from: process.env.SMTP_FROM, // sender address
        to: to, // 'bar@example.com, baz@example.com', // list of receivers
        subject: subject, // 'Hello ✔', // Subject line
        text: text, //'Hello world?', // plain text body
        html: html, //'<b>Hello world?</b>', // html body
    })
    console.log('Message sent: %s', info.messageId)
    return info.messageId
}

module.exports = sendMail
