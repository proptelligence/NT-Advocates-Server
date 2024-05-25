const mongoose = require('mongoose');

const legalExpertSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true }
});

module.exports = mongoose.model('LegalExpert', legalExpertSchema);
