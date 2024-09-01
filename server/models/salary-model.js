const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
    uan: { type: String, required: true },
    ecr: { type: String, required: true },
    uanRepository: { type: String, required: true },
    gross: { type: String, required: true },
    epf: { type: String, required: true },
    eps: { type: String, required: true },
    edli: { type: String, required: true },
    ee: { type: String, required: true },
    epsContribution: { type: String, required: true },
    er: { type: String, required: true },
    ncpDays: { type: String, required: true },
    refunds: { type: String, required: true }
});

// const Employee = mongoose.model('Salary', salarySchema);

// module.exports = salarySchema;


// Correctly create and export the model
const Salary = mongoose.model('Salary', salarySchema);
module.exports = Salary;