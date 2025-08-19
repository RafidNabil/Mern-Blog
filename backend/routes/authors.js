import express from 'express';
import Users from '../models/user.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const authors = await Users.find({},).lean();
        res.json(authors);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error fetching categories' });
    }
});

export default router;
