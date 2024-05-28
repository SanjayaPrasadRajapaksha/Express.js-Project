const User = require('../model/User');
const { comparePassword, generateJwtToken } = require('../security/security');

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({
             email:email 
            }); // find the user from users collection

        if (!user) {
            return res.status(404).send('User not found');
        }

        if (comparePassword(password.toString(), user.password)) { // compare the password with hash in db 
            const tokenPayload = {
                id: user._id,
                email: user.email
            }

            const token = generateJwtToken(tokenPayload);

            res.status(200).send({ token });
        } else {
            return res.status(401).send('Invalid Password');
        }
    }
    catch (err) {
        res.status(400).send(err);
    }
}

module.exports = {
    login,
};