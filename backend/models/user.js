import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
    },
    password: {
        type: String,
        required: true,
    },
    title: { 
        type: String,
    },
    location: {
        type: String,
    },
    bio: {
        type: String,
    },
    social: { 
        x: { type: String }, 
        facebook: { type: String },
        linkedin: { type: String },
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
