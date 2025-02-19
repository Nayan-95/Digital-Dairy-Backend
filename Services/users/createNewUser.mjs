import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../../Models/user.mjs'; // Ensure the correct capitalization of the model

// Function to create a new user
export const createNewUser = async (req, res) => {
    try {
        // Hash the password manually before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
        // Create a new user with the hashed password
        const newUser = new User(req.body);
        await newUser.save();

        return res.status(201).json({ success: true, message: 'User created successfully', user: newUser });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export default createNewUser;
