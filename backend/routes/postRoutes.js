import express from "express";
import { getPosts, getPostById, deletePostById } from "../controllers/postController.js";

const router = express.Router();

// Define routes for fetching posts
router.get("/posts", getPosts);
router.get("/posts/:id", getPostById);
router.delete("/posts/:id", deletePostById);

export default router;
