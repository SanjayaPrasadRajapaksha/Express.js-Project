const Product = require('../model/Product');

const createProduct = async (req, res) => {
    const {name,price,description,qty} = req.body;
    try{
        const product = new Product();
        product.name = name;
        product.price = price;
        product.description = description;
        product.qty = qty;

        await product.save();

        res.status(201).send(product);

        
    }catch(err){
        res.status(400).send(err);
    }
}

const getProducts = async (req, res) => {

    try {
        const products = await Product.find();
        res.status(200).send(products);
    }
    catch (err) {
        res.status(400).send(err);
    }

};

const getProductById = async (req, res) => {

   // const productId = req.params.id;
    try {
        const product = await Product.findById(req.params.id);

        if(!product){
            return res.status(404).send('Product not found');
        }
        res.status(200).send(product);
    }
    catch (err) {
        res.status(400).send(err);
    }
};

const updateProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).send('Product not found');
        }
        product.name = req.body.name;
        product.price = req.body.price;
        product.description = req.body.description;
        product.qty = req.body.qty;

        res.status(200).send(product);
    }
    catch (err) {
        res.status(400).send(err);
    }

};
const deleteProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        await Product.deleteOne({ _id: productId }); 
        res.status(200).send("Product deleted successfully");
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProductById
};
