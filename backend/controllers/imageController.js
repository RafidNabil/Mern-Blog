// import multer from 'multer';

// // Configure multer storage for file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'backend/uploads/'); // Directory where files will be stored
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname); // Unique filename for each upload
//     },
// });

// const upload = multer({ storage });

// // Upload single file (used for both content images and cover images)
// export const uploadImage = upload.single('file');

// export const handleImageUpload = async (req, res) => {
//     if (req.file) {
//         const imageUrl = `/uploads/${req.file.filename}`; // URL of the uploaded file
//         res.json({ imageUrl });
//     } else {
//         res.status(400).json({ error: 'No file uploaded.' });
//     }
// };


import multer from 'multer';

// Configure multer storage for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'backend/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
});

export const uploadImage = upload.single('file');

export const handleImageUpload = async (req, res) => {
    if (req.file) {
        const imageUrl = `/uploads/${req.file.filename}`;
        res.json({ location: `/uploads/${req.file.filename}` });
    } else {
        res.status(400).json({ error: 'No file uploaded.' });
    }
};
