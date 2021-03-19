const mongoose = require('mongoose');

// Booking blueprint
const BookingSchema = new mongoose.Schema({
    merchantId: {
        type: String,
        required: true 
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String, // set it as a string for now, we can change it to a better type when we incoorperate the calendar into the form
        required: true
    },
    time: {
        type: String, // set it as a string for now, we can change it to a better type when we incoorperate the calendar into the form
        required: true
    },
    service: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    },
    status: { 
        type: String,
        enum: ['PENDING', 'APPROVED', 'DENIED'],
        default: 'PENDING'
    }
}, {
    timestamps: true,
    toJSON: {
        getters: true
    }
});

BookingSchema.query.pending = function() {
return this.where({
    status: 'PENDING'
    })
};

BookingSchema.query.approved = function() {
return this.where({
    status: 'APPROVED'
    })
};

BookingSchema.query.denied = function() {
    return this.where({
        status: 'DENIED'
    })
};

module.exports = mongoose.model('Booking', BookingSchema);