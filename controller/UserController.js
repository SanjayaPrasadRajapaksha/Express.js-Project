const User = require('../model/User')

const createUser = async (req, res) => {

    try {
        const user = new User(req.body);
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



module.exports = {
    createUser,
    getUsers,
};