const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    trainCoachtype: { type: String, required: true },
    pname: { type: String, required: true },
    contact: { type: String, required: true },
    pnr: { type: String, required: true },
    gender: { type: String, required: true },
    coachBerthno: { type: String, required: true },
    cleanlinessToilets: { type: String, required: true },
    cleanlinessArea: { type: String, required: true },
    cleanlinessWashbasin: { type: String, required: true },
    cleanlinessDustbins: { type: String, required: true },
    mosquitoRepelient: { type: String, required: true },
    availabilitySoap: { type: String, required: true },
    wipingWindowglasses: { type: String, required: true },
    staffBehaviour: { type: String, required: true },
    additionalComments: { type: String }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
