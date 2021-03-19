const mongoose = require('mongoose');

// Check-in blueprint
const CheckInSchema = new mongoose.Schema({
    merchantId: {
        type: String,
        required: true 
    },
    bookingId: {
        type: String,
        required: true 
    },
    status: { 
        type: String,
        enum: ['BOOKED', 'CANCEL', 'CHECKIN'],
        default: 'BOOKED'
    }
}, {
    timestamps: true,
    toJSON: {
        getters: true
    }
});

CheckInSchema.query.booked = function() {
return this.where({
    status: 'BOOKED'
    })
};

CheckInSchema.query.cancel = function() {
return this.where({
    status: 'CANCEL'
    })
};

CheckInSchema.query.checkin = function() {
    return this.where({
        status: 'CHECKIN'
    })
};

module.exports = mongoose.model('CheckIn', CheckInSchema);