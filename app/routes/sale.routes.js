
     module.exports = (app) => {
        const sales = require('../controller/sale.controller.js');
    
        // Create a new Sale
        app.post('/sales', sales.create);
    
        // Get a single Sale with saleId
        app.get('/sales/:saleId', sales.getById);
    
        // Update a Sale with saleId
        app.put('/sales/:saleId', sales.update);
    
    }