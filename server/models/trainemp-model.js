const mongoose = require('mongoose');

const trainempSchema = new mongoose.Schema({
    supervisorName: { type: String, required: true },
    trainNo: { type: String, required: true },
    date: { type: String, required: true },
    timeStarted: { type: String, required: true },
    timeEnded: { type: String, required: true },
    numCoachesRake: { type: String, required: true },
    numCoachesAttended: { type: String, required: true },
    department: { type: String, required: true },
    numCoachesAllotted: { type: String, required: true },
    trainCardObhsDivision: { type: String, required: true },
    trainCardObhsRailway: { type: String, required: true },
    tableData: [{
        name: { type: String, required: true },
        designation: { type: String, required: true },
        travellingAuthority: { type: String, required: true },
        uniform: { type: String, required: true },
        presenceOfStaff: { type: String, required: true }
    }],
    footerData: [{
        brush: { type: String, required: true },
        mop: { type: String, required: true },
        toiletBrush: { type: String, required: true },
        bucket: { type: String, required: true },
        mask: { type: String, required: true },
        shoes: { type: String, required: true },
        other: { type: String, required: true }
    }]
});

const TrainEmp = mongoose.model('TrainEmp', trainempSchema);

module.exports = TrainEmp;