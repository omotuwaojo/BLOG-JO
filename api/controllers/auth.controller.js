const User = require("../models/User.models.js")
const bcrypt = require('bcryptjs');

const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password || username === "" || email === "" || password === "") {
        next(errorHandler(400, "All fields are required"))
    }
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = new User({
        username, email, password: hashedPassword,
    })
   try{
    await newUser.save();
    res.json({message: "Signup successful"})
   }catch (error){
   res. status(500).json({message: error.message})
   }
}

module.exports = signup;