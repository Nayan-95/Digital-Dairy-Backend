import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "../../Models/user.mjs";

const userLogin =  async (req, res)=> {
        try {
          const { username, password } = req.body;
      
          // Find user by username
          const user = await User.findOne({ username });
          if (!user) return res.status(400).json({ message: "User not found" });
      
          // Check password
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
      
          // Generate JWT Token
          const token = jwt.sign({ id: user._id }, process.env.ACCESS_SECRET_KEY, { expiresIn: "1h" });
      
          return res.json({ message: "Login successful", token });
        } catch (error) {
          return res.status(500).json({ message: "Server Error", error });
        }
      };

export default userLogin;
