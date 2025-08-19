import express from 'express';
import { uploadImage } from '../controllers/imageController.js';

const router = express.Router();

// Handle image upload for TinyMCE content images
router.post("/upload-image", uploadImage, (req, res) => {
    if (req.file) {
        const protocol = req.protocol;
        const host = req.get("host");
        const fileUrl = `${protocol}://${host}/uploads/${req.file.filename}`;

        res.json({ location: fileUrl }); // Return the image URL
    } else {
        res.status(400).json({ error: "No file uploaded." });
    }
});

// Handle cover image upload for blog post creation
router.post("/upload-cover-image", uploadImage, (req, res) => {
    if (req.file) {
        const protocol = req.protocol;
        const host = req.get("host");
        const fileUrl = `${protocol}://${host}/uploads/${req.file.filename}`;

        res.json({ imageUrl: fileUrl }); // Return the cover image URL
    } else {
        res.status(400).json({ error: "No file uploaded." });
    }
});

export default router;
