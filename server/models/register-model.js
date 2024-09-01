const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    empname: { type: String, required: true },
    fathersname: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
    address: { type: String, required: true },
    phoneNo: { type: String, required: true },
    aadhar: { type: String, required: true, unique: true },
    pan: { type: String, required: true, unique: true },
    acc: { type: String, required: true },
    ifsc: { type: String, required: true },
    post: { type: String },
    qual: { type: String },
    pver: { type: String, required: true, enum: ['Yes', 'No'] },
    pverdate: { type: Date, default: null },
    pvertime: { type: String, default: null },
    pverval: { type: String, default: null },
    uanno: { type: String },
    esicno: { type: String },
    skill: { type: String, default: '' }, 
    employeeId: { type: String, required: true, unique: true }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
