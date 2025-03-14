import User from "../models/userModal.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const Register = async (req, res) => {
    try {
        const { userName, userEmail, userPassword, userRole } = req.body;
        const existingUser = await User.findOne({ userEmail });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(userPassword, 10);
        const user = new User({
            userName,
            userEmail,
            userPassword: hashedPassword,
            userRole
        });

        await user.save();
        const token = jwt.sign({ id: user._id, userRole: user.userRole, userEmail:user.userEmail }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        res.status(201).json({
            message: "Account created successfully!",
            user: user,
            token:token
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to register user", error: error.message });
    }
};

export const Login = async (req, res) => {
    try {
        const { userEmail, userPassword } = req.body;
        const user = await User.findOne({ userEmail });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(userPassword, user.userPassword);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id, userRole: user.userRole, userEmail:user.userEmail }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        res.status(200).json({
            user: user,
            token: token,
            message:'Login Successfully'
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
