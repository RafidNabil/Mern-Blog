import express from 'express';
import Category from '../models/Topic.js';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find({}, 'name').lean();
        res.json(categories.map(cat => cat.name));
    } catch (err) {
        console.error('Error fetching categories:', err);
        res.status(500).json({ error: 'Server error fetching categories' });
    }
});

export default router;
