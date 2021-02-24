const Sale = require('../models/sale.model');

// Create and Save a new Sale
exports.create = (req, res) => {
    // Validate request because in model we required the product

    if (!req.body.product) {
        return res.status(400).send({
            message: "Please enter sale product."
        });
    }

    // Create a Sale
    const sale = new Sale({
        product: req.body.product,
        customer: req.body.customer,
        unitprice: req.body.unitprice,
        city: req.body.city,
        quentity: req.body.quentity,
        total: req.body.total
    });

    // Save Sale
    sale.save()
        .then(oSale => {
            res.send(oSale);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Sale."
            });
        });
};


// Get a single sale with a saleId
exports.getById = (req, res) => {
    Sale.findById(req.params.saleId)
        .then(oSale => {
            if (oSale) {
                res.send(oSale);
            }
            return res.status(404).send({
                message: "Sale not exist with id " + req.params.saleId
            });
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Sale not exist with id " + req.params.saleId
                });
            }
            return res.status(500).send({
                message: "Some error occurred while retrieving the sale with saleId " + req.params.saleId
            });
        });
};

// Update a sale by the saleId
exports.update = (req, res) => {
    // Validate Request because product is required
    if (!req.body.product) {
        return res.status(400).send({
            message: "Please enter sale product."
        });
    }

    // Find sale and update it
    Sale.findByIdAndUpdate(req.params.saleId, {
        product: req.body.product,
        customer: req.body.customer,
        unitprice: req.body.unitprice,
        city: req.body.city,
        quentity: req.body.quentity,
        total: req.body.total

    }, { new: true })
        .then(oSale => {
            if (oSale) {
                res.send(oSale);
            }
            return res.status(404).send({
                message: "Sale does not exist with saleId " + req.params.saleId
            });

        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Sale does not exist with saleId " + req.params.saleId
                });
            }
            return res.status(500).send({
                message: "Some error occurred while updating the sale with saleId" + req.params.saleId
            });
        });
};
