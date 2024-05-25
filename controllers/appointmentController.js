const Appointment = require('../models/appointmentModel');
const nodemailer = require('nodemailer');

exports.createAppointment = async (req, res) => {
    try {
        const { username, email, phone, scheduledDate, scheduledTime } = req.body;

        await Appointment.create({ username, email, phone, scheduledDate, scheduledTime });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'workingajay7@gmail.com',
                pass: 'jhkq lndj hpyi kmns', // Use the App Password generated from Google Account
            },
        });

        const mailOptions = {
            from: 'workingajay7@gmail.com',
            to: 'ajaymedidhi858@gmail.com',
            subject: 'New Appointment',
            text: `Username: ${username}\nEmail: ${email}\nPhone: ${phone}\nScheduled Date: ${scheduledDate}\nScheduled Time: ${scheduledTime}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).send('Internal Server Error');
            } else {
                console.log('Email sent successfully!', info.response);
                res.status(200).send('Appointment created and email sent successfully!');
            }
        });
    } catch (error) {
        console.error('Error creating appointment:', error);
        res.status(500).send('Internal Server Error');
    }
};
