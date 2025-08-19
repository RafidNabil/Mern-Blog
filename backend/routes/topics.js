import express from 'express';
import Category from '../models/Topic.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find({}, 'label _id').lean();
        res.json(categories);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error fetching categories' });
    }
});

export default router;
