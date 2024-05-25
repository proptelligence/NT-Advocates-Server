const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    scheduledDate: {
        type: Date,
        required: true,
    },
    scheduledTime: {
        type: String,
        required: true,
    },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
