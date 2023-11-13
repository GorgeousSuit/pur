export default function (req, res) {
    require('dotenv').config();

    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        },
        secure: true
    });
    const mailData = {
        from: 'gorgeoussuit573@gmail.com',
        to: 'vyacheslav.ivanchenko573@gmail.com',
        subject: `Message From ${req.body.firstName}`,
        text: req.body.message + ' | Sent from: ' + req.body.email,
        html: `<div style="background-color: #fff; width: 720px; height: 100vh; padding: 98px 64px 57px;">
    <h1 style="text-transform: uppercase; font-size: 32px; color: #0F110C; width: 100%; border-bottom: 1px solid #000000; padding-bottom: 24px; margin-bottom: 80px;">New order</h1>
    <div style="margin-bottom: 64px;">
        <h2 style="text-transform: uppercase; font-size: 24px; color: #0F110C; margin-bottom: 40px;">contact information</h2>
        <p style="font-size: 16px; color: #3F3F3F; border-bottom: 1px solid #E9E9E9; width: 100%; margin-bottom: 40px;">${req.body.firstName}</p>
        <p style="font-size: 16px; color: #3F3F3F; border-bottom: 1px solid #E9E9E9; width: 100%; margin-bottom: 40px;">${req.body.lastName}</p>
        <p style="font-size: 16px; color: #3F3F3F; border-bottom: 1px solid #E9E9E9; width: 100%; margin-bottom: 40px;">${req.body.middleName}</p>
        <p style="font-size: 16px; color: #3F3F3F; border-bottom: 1px solid #E9E9E9; width: 100%; margin-bottom: 40px;">${req.body.email}</p>
        <p style="font-size: 16px; color: #3F3F3F; border-bottom: 1px solid #E9E9E9; width: 100%; margin-bottom: 40px;">${req.body.number}</p>
    </div>
    <div style="margin-bottom: 64px;">
        <h2 style="text-transform: uppercase; font-size: 24px; color: #0F110C; margin-bottom: 40px;">Delivery</h2>
        <p style="font-size: 16px; color: #3F3F3F; border-bottom: 1px solid #E9E9E9; width: 100%; margin-bottom: 40px;">${req.body.country}</p>
        <p style="font-size: 16px; color: #3F3F3F; border-bottom: 1px solid #E9E9E9; width: 100%; margin-bottom: 40px;">${req.body.city}</p>
        <p style="font-size: 16px; color: #3F3F3F; border-bottom: 1px solid #E9E9E9; width: 100%; margin-bottom: 40px;">${req.body.delivery}</p>
        <p style="font-size: 16px; color: #3F3F3F; border-bottom: 1px solid #E9E9E9; width: 100%; margin-bottom: 40px;">${req.body.zip}</p>
    </div>
    <p style="font-size: 32px; color: #0F110C;">Cash on delivery</p>
</div>
      `
    };
    transporter.sendMail(mailData, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
    });
    res.status(200);
}
