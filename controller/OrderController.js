const Order = require('../model/Order');

const createOrder = async (req, res) => {
    //const {user} = req.body;
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).send(order);
    }
    catch (err) {
        res.status(400).send(err);
    }
};

//Add products to order

const addProductToOrder = async (req, res) => {
    const orderId = req.params.id;//get order id from path variable (url)
    const { product, qty } = req.body;//get product id from path variable (url)
    try {
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).send('Order not found');
        }
        order.products.push({ product, qty });
        await order.save();
        res.status(200).send(order);
    }
    catch (err) {
        res.status(400).send(err);
    }

};

module.exports = {
    createOrder,
    addProductToOrder,
}