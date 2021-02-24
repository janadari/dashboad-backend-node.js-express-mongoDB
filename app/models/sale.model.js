const mongoose = require('mongoose');

const SaleSchema = mongoose.Schema({
    product: {
     type: String,
     required: true
    },
    customer: String,
    unitprice: Number,
    city: String,
    quentity: Number,
    total: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Sale', SaleSchema);