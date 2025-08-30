import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import imageRoutes from "./routes/imageRoutes.js";
import createBlogPost from "./routes/createBlogRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import topicsRoutes from "./routes/topics.js";
import authorRoutes from "./routes/authors.js"
import userRoutes from "./routes/user.js";
import searchRoutes from "./routes/search.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(searchRoutes);


app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("This is the Server");
});

// Get the directory name of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from 'uploads' folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use image routes for image uploads
app.use("/api", imageRoutes);
app.use("/api", createBlogPost);
app.use("/api", postRoutes);
app.use("/api/users", userRoutes);
app.use('/api/topics', topicsRoutes);
app.use('/api/author', authorRoutes);
app.use('/images', express.static('uploads'));
app.use('/uploads', express.static('backend/uploads'));

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
    connectDB();
});
