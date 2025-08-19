import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const {
            userName,
            fullName,
            email,
            password,
            headline = "",
            location = "",
            bio = "",
            social = {}
        } = req.body;

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: `Invalid email: ${email}` });
        }

        const existingUser = await User.findOne({ userName });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email already in use" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password should be at least 6 characters long" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            userName,
            fullName,
            email,
            headline,
            location,
            bio,
            social: {
                x: social.x || "",
                facebook: social.facebook || "",
                linkedin: social.linkedin || ""
            },
            password: hashedPassword
        });

        if (newUser) {
            generateToken(newUser._id, res);
            return res.status(201).json({
                _id: newUser._id,
                userName: newUser.userName,
                fullName: newUser.fullName,
                headline: newUser.headline,
                location: newUser.location,
                bio: newUser.bio,
                social: newUser.social,
                email: newUser.email
            });
        } else {
            return res.status(400).json({ error: "Failed to create user" });
        }

    } catch (error) {
        console.error("Error in signup controller", error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        console.log("UserName", userName);

        const user = await User.findOne({ userName });
        const validPassword = await bcrypt.compare(password, user.password)

        console.log("User", user.userName);

        if (!user || !validPassword) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            userName: user.userName,
            fullName: user.fullName,
            email: user.email
        });

    } catch (error) {
        console.log("Error in login controller", error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error);
        res.status(500).json({ error: "Something went wrong" });

    }
};

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        res.status(200).json(user);
    } catch (error) {
        console.log("Error in getMe controller", error);
        res.status(500).json({ error: "Something went wrong" });
    }
}