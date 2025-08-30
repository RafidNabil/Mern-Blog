// routes/search.js
import express from "express";
import BlogPost from "../models/BlogPost.js";

const router = express.Router();

router.get("/api/search", async (req, res) => {
    try {
        const query = req.query.q || "";

        const posts = await BlogPost.find({
            $or: [
                { title: { $regex: query, $options: "i" } },
                { content: { $regex: query, $options: "i" } },
                { summary: { $regex: query, $options: "i" } },
                { topics: { $regex: query, $options: "i" } },
                { author: { $regex: query, $options: "i" } }
            ]
        }).limit(20);

        res.json(posts);
    } catch (err) {
        console.error("Unexpected error during search:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
