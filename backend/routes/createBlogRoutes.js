import express from 'express';
import BlogPost from '../models/BlogPost.js';

const router = express.Router();

router.post('/create-blog', async (req, res) => {
    const { title, content, summary, topics, imageUrl, author, categories } = req.body;

    console.log(req.body);
    

    try {
        let finalImageUrl = imageUrl;

        // If no image URL is provided, set a default or uploaded image URL
        if (!imageUrl && req.file) {
            const protocol = req.protocol;
            const host = req.get('host');
            finalImageUrl = `${protocol}://${host}/uploads/${req.file.filename}`;
        }

        const newPost = new BlogPost({
            title,
            content,
            summary,
            topics,
            // imageUrl: finalImageUrl || 'https://cdn.oneesports.gg/cdn-data/2023/02/AttackOnTitan_Anime_ColossusTitan_Eren_fixed-1024x576.jpg', // Default image if none provided
            imageUrl: finalImageUrl, // Default image if none provided
            author: author || 'Anonymous',  // Fake name "Anonymous" if author is not provided
            categories: categories || [], // Default empty array if no categories are selected
        });

        await newPost.save();
        res.status(201).json(newPost); // Return the saved blog post
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ message: 'Error creating blog post' });
    }
});

export default router;
