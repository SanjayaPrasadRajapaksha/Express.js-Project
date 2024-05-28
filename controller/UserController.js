const User = require('../model/User');
const { hashPassword } = require('../security/security');

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = hashPassword(password.toString());

        await user.save();
        res.status(201).send(user);
    }
    catch (err) {
        res.status(400).send(err);
    }

};

const getUsers = async (req, res) => {

    try {
        const users = await User.find({});
        res.status(200).send(users);
    }
    catch (err) {
        res.status(400).send(err);
    }

};

const getUserById = async (req, res) => {

    const userId = req.params.id;
    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).send(user);
    }
    catch (err) {
        res.status(400).send(err);
    }
};

const updateUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send('User not found');
        }
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = hashPassword(req.body.password);
        res.status(200).send(user);
    }
    catch (err) {
        res.status(400).send(err);
    }

};

const deleteUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        await User.deleteOne({ _id: userId }); 
        res.status(200).send("User deleted successfully");
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUserById,
};