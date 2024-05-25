const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

exports.sendEmail = async (req, res) => {
    try {
        const { name,email,subject, message } = req.body;

        await Contact.create({ name, email,subject, message });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'workingajay7@gmail.com',
                pass: 'jhkq lndj hpyi kmns', // Use the App Password generated from Google Account
            },
        });

        const mailOptions = {
            from: 'workingajay7@gmail.com',
            to: 'info@ntadvocates.in',
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nsubject: ${subject}\nMessage: ${message}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).send('Internal Server Error');
            } else {
                console.log('Email sent successfully!', info.response);
                res.status(200).send('Email sent successfully!');
            }
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Internal Server Error');
    }
};
