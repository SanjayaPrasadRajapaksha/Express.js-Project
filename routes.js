const express = require('express');
const { createUser, getUsers, getUserById, updateUser, deleteUserById } = require('./controller/UserController');
const { createProduct, getProducts, getProductById, updateProduct } = require('./controller/ProductController');
const { createOrder, addProductToOrder } = require('./controller/OrderController');
const { login } = require('./controller/AuthController');
const router = express.Router();
const { verifyJwtToken } = require('./security/security.js');


//AuthRoutes
router.post('/auth/login', login);

//middleware applies to all routes below this line
router.use(verifyJwtToken);

//UserRoutes`
router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUserById);

//ProductRoutes
router.post('/products', createProduct);
router.get('/products', getProducts);
router.get('/product/:id', getProductById);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteUserById);


//OrderRouts
router.post('/orders', createOrder);
router.post('/orders/:id/products', addProductToOrder);




module.exports = router;