import BlogPost from "../models/BlogPost.js";

// Get all posts or posts by topic
export const getPosts = async (req, res) => {
    try {
        const { topic } = req.query; // optional topic filter
        let posts;

        if (topic) {
            // Filter posts by topic
            posts = await BlogPost.find({ topic });
        } else {
            posts = await BlogPost.find();
        }

        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ message: "Failed to fetch posts" });
    }
};

export const getPostById = async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.status(200).json(post);
    } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const deletePostById = async (req, res) => {
    try {
        const deletedPost = await BlogPost.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: "Post not found" });
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).json({ message: "Server error" });
    }
};
