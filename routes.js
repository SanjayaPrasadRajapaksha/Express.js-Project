const express = require('express');
const { createUser, getUsers } = require('./controller/UserController');
const router = express.Router();



//UserRoutes

router.post('/users',createUser);
router.get('/users',getUsers);

module.exports = router;