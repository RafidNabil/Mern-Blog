import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String, 
        required: false,
    },
    author: {
        type: String,
        required: true,
    },
    summary: {
        type: String, 
        required: true, 
    },
    topics: {
        type: [String], 
        required: false, 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

const BlogPost = mongoose.model('BlogPost', blogPostSchema);
export default BlogPost;
