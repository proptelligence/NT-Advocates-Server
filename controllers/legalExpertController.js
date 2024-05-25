const LegalExpert = require('../models/LegalExpert');
const nodemailer = require('nodemailer');

exports.submitForm = async (req, res) => {
    try {
        const { name, email, mobile } = req.body;

        // Save form data to MongoDB
        const legalExpert = new LegalExpert({
            name,
            email,
            mobile
        });
        await legalExpert.save();

        // Send data to email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'workingajay7@gmail.com',
                pass: 'jhkq lndj hpyi kmns'
            }
        });

        const mailOptions = {
            from: 'workingajay7@gmail.com',
            to: 'ajaymedidhi858@gmail.com',
            subject: 'Thank you for contacting our legal expert',
            text: 'We have received your information and will get back to you soon.'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (err) {
        console.error('Error submitting form:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
