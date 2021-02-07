const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// Merchant blueprint
const MerchantSchema = new mongoose.Schema({
    company_name: {
            type: String,
            required: true 
        },
        owner_first: {
            type: String,
            required: false
        },
        owner_last: {
            type: String,
            required: false
        },
        primary_address: {
            type: String,
            required: false
        },
        primary_postalcode: {
            type: String,
            required: false
        },
        primary_province: {
            type: String,
            required: false
        },
        primary_phone: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // does not allow multiple accounts with the same email to be created
            dropDups: true,
        },
        status: { 
            type: String,
            enum: ['DRAFT', 'PUBLISHED'],
            default: 'DRAFT'
        }
    }, {
        timestamps: true,
        toJSON: {
            getters: true
        }
});

module.exports = mongoose.model('Merchant', MerchantSchema);