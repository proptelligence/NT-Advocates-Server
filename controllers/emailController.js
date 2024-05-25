const nodemailer = require('nodemailer');
const Subscriber = require('../models/subscriberModel');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'workingajay7@gmail.com',
    pass: 'jhkq lndj hpyi kmns',
  },
});

exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    // Save subscriber to the database
    await Subscriber.create({ email });

    // Send thank you email to the subscriber
    await transporter.sendMail({
      from: 'workingajay7@gmail.com',
      to: email,
      subject: 'Thank you for subscribing to ntadvocates',
      text: 'Thank you for subscribing to ntadvocates!',
    });

    // Send notification email to info@gmail.com
    await transporter.sendMail({
      from: 'workingajay7@gmail.com',
      to: 'ajaymedidhi858@gmail.com',
      subject: 'New subscriber',
      text: `A new subscriber with email ${email} has subscribed to ntadvocates.`,
    });

    res.status(200).send('Subscription successful!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
