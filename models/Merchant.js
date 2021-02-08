const mongoose = require('mongoose');

// Merchant blueprint
const MerchantSchema = new mongoose.Schema({
    company_name: {
            type: String,
            required: true 
        },
        owner_first: {
            type: String,
            required: true
        },
        owner_last: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        postalcode: {
            type: String,
            required: true
        },
        province: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
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

MerchantSchema.query.draft = function() {
    return this.where({
        status: 'DRAFT'
    })
};
MerchantSchema.query.published = function() {
    return this.where({
        status: 'PUBLISHED'
    })
};

module.exports = mongoose.model('Merchant', MerchantSchema);