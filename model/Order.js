const mongoose = require('mongoose');

const OrederSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            qty: {
                type: Number,
                required: true
            }
        }],

    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Order', OrederSchema);