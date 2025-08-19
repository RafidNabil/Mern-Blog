import React, { useEffect, useState } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from 'react-router-dom';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import IconButton from '@mui/joy/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import theme from '../components/theme';

export default function CreateBlogPost() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        summary: '',
        imageUrl: '',
        author: '',
        topics: [],
    });

    const [topics, setTopics] = useState([]);
    const [authors, setAuthors] = useState([]); // Corrected variable name from 'author' to 'authors'

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/topics');
                if (!res.ok) throw new Error('Failed to fetch topics');
                const data = await res.json();
                setTopics(data);
            } catch (error) {
                console.error('Error fetching topics:', error);
            }
        };

        const fetchAuthors = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/author');
                if (!res.ok) throw new Error('Failed to fetch authors');
                const data = await res.json();
                setAuthors(data);
            } catch (error) {
                console.error('Error fetching authors:', error);
            }
        };
        fetchTopics();
        fetchAuthors();
    }, []);

    const handleEditorChange = (content) => {
        setFormData((prev) => ({
            ...prev,
            content,
        }));
    };

    const handleTopicChange = (event, value) => {
        setFormData((prev) => ({
            ...prev,
            topics: value,
        }));
    };

    const handleAuthorChange = (event, value) => {
        setFormData((prev) => ({
            ...prev,
            author: value,
        }));
    };

    const handleCoverImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formDataUpload = new FormData();
            formDataUpload.append('file', file);

            const response = await fetch('http://localhost:5000/api/upload-cover-image', {
                method: 'POST',
                body: formDataUpload,
            });

            if (response.ok) {
                const result = await response.json();
                setFormData((prev) => ({
                    ...prev,
                    imageUrl: result.imageUrl,
                }));
            } else {
                console.error('Error uploading cover image');
            }
        }
    };

    const handleImageUpload = async (blobInfo, success, failure) => {
        try {
            const formDataUpload = new FormData();
            formDataUpload.append('file', blobInfo.blob(), blobInfo.filename());

            const response = await fetch('http://localhost:5000/api/upload-image', {
                method: 'POST',
                body: formDataUpload,
            });

            if (response.ok) {
                const result = await response.json();
                success(result.location);
            } else {
                failure('Failed to upload image');
            }
        } catch (error) {
            failure('Error uploading image');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/create-blog', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Blog post created:', result);
                navigate('/');
            } else {
                console.error('Error creating blog post');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    py: 8, // Added padding to prevent content from touching the edges
                }}
            >
                <Sheet
                    sx={{
                        width: '90%', // Increased width for a more spacious feel
                        maxWidth: '1200px', // Set a max-width for large screens
                        mx: 'auto',
                        py: 4,
                        px: { xs: 2, md: 6 }, // Responsive padding
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4, // Increased gap for better separation
                        borderRadius: 'lg', // Larger border radius
                        boxShadow: 'xl', // A more prominent shadow
                        backgroundColor: 'background.surface', // A slightly lighter background for contrast
                    }}
                    variant="outlined"
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            level="h2"
                            component="h1"
                            sx={{ fontWeight: 'xl', color: 'text.primary' }}
                        >
                            Create a new blog post
                        </Typography>
                        <IconButton
                            variant="plain"
                            color="neutral"
                            onClick={() => navigate('/')}
                            aria-label="Close"
                        >
                            <CloseRoundedIcon />
                        </IconButton>
                    </Box>

                    <form onSubmit={handleSubmit}>
                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' }, // Two-column layout on medium screens and up
                            gap: 4,
                        }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <FormControl required>
                                    <FormLabel>Post Title</FormLabel>
                                    <Input
                                        name="title"
                                        type="text"
                                        placeholder="Enter blog title"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Post Summary</FormLabel>
                                    <Input
                                        name="summary"
                                        type="text"
                                        placeholder="Write a brief summary for the post"
                                        value={formData.summary}
                                        onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Topics</FormLabel>
                                    <Select
                                        name="topics"
                                        value={formData.topics}
                                        onChange={handleTopicChange}
                                        placeholder="Select one or more topics"
                                        multiple
                                    >
                                        {topics.map((topic) => (
                                            <Option key={topic._id} value={topic._id}>
                                                {topic.label}
                                            </Option>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Author</FormLabel>
                                    <Select
                                        name="author"
                                        value={formData.author}
                                        onChange={handleAuthorChange}
                                        placeholder="Select author"
                                    >
                                        {authors.map((author) => (
                                            <Option key={author._id} value={author._id}>
                                                {author.userName}
                                            </Option>
                                        ))}
                                    </Select>
                                </FormControl>
                                
                                <FormControl>
                                    <FormLabel>Cover Image</FormLabel>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleCoverImageChange}
                                        />
                                        <Typography level="body-xs" sx={{ color: 'text.tertiary', textAlign: 'center' }}>
                                            or
                                        </Typography>
                                        <Input
                                            type="text"
                                            placeholder="Paste image URL here"
                                            value={formData.imageUrl}
                                            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                                        />
                                    </Box>
                                    {formData.imageUrl && (
                                        <Box sx={{ mt: 2, textAlign: 'center' }}>
                                            <img
                                                src={formData.imageUrl}
                                                alt="Cover Preview"
                                                style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: 'lg' }}
                                            />
                                        </Box>
                                    )}
                                </FormControl>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <FormControl required>
                                    <FormLabel>Content</FormLabel>
                                    <Box sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 'md', overflow: 'hidden' }}>
                                        <Editor
                                            apiKey="jtp7t1hjek69tycvowk8zb5v6wdhgxdw80xgwnyd1e9zqe1v"
                                            init={{
                                                height: 600, // Increased height for better editing experience
                                                plugins: 'image link code lists preview table emoticons',
                                                toolbar: 'undo redo | bold italic underline | alignleft aligncenter alignright | numlist bullist | image link | code table preview',
                                                images_upload_handler: handleImageUpload,
                                                automatic_uploads: true,
                                                images_reuse_filename: true,
                                                file_picker_types: 'image',
                                                paste_data_images: true,
                                            }}
                                            value={formData.content}
                                            onEditorChange={handleEditorChange}
                                        />
                                    </Box>
                                </FormControl>
                            </Box>
                        </Box>

                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                            <Button
                                variant="outlined"
                                color="neutral"
                                onClick={() => navigate('/')}
                                sx={{ borderRadius: 'md', px: 3, fontWeight: 'lg' }}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                sx={{
                                    borderRadius: 'md',
                                    px: 3,
                                    fontWeight: 'lg',
                                    bgcolor: 'primary.solidBg',
                                    '&:hover': { bgcolor: 'primary.solidHoverBg' },
                                }}
                            >
                                Publish Post
                            </Button>
                        </Box>
                    </form>
                </Sheet>
            </Box>
        </CssVarsProvider>
    );
}