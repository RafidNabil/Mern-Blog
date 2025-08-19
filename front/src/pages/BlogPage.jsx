import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { Box, Typography } from '@mui/joy';
import Divider from '@mui/joy/Divider';
import { useParams } from 'react-router-dom';
import { useState, useMemo } from 'react';

import theme from '../components/theme';
import BlogHeader from '../components/Post/postHeader';
import ReadNextSection from '../components/Post/readNext';
import SocialShare from '../components/Post/socialShare';
import ProfileSection from '../components/Home/ProfileSection';


function BlogPage() {
    const { id } = useParams();
    const [post, setPost] = React.useState(null);
    const [topics, setTopics] = useState([]);
    const [authors, setAuthors] = useState([]);

    React.useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/posts/${id}`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        const fetchTopics = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/topics');
                if (!res.ok) throw new Error('Failed to fetch categories');
                const data = await res.json();
                setTopics(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
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
        fetchPost();
    }, [id]);

    const topicMap = useMemo(() => {
        const map = {};
        topics.forEach((t) => {
            map[t._id] = t.label;
        });
        return map;
    }, [topics]);

    const authorMap = useMemo(() => {
        const map = {};
        authors.forEach((a) => {
            map[a._id] = a.fullName;
        });
        return map;
    }, [authors]);

    if (!post) return <Typography>Loading...</Typography>;

    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    bgcolor: 'background.body',
                    minHeight: '100vh',

                    px: { xs: 2, md: 4 },
                }}
            >
                <BlogHeader
                    title={post.title}
                    image={post.imageUrl}
                    summary={post.summary}
                    topics={Array.isArray(post.topics) ? post.topics.map((id) => topicMap[id]) : []}
                    author={authorMap[post.author] || 'Unknown'}
                    createdat={post.createdAt}
                />
                <Divider sx={{ my: 3 }} />

                {/* Main Content and Profile Section container with max-width */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '70% 30%' },
                        gap: 4,
                        alignItems: 'start',
                        maxWidth: 'lg', // Prevents content from going out of the box
                        mx: 'auto', // Centers the content horizontally
                    }}
                >
                    {/* Main Content */}
                    <Box
                        sx={{
                            fontFamily: 'jaro',
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                            // Add these new styles to fix the overflow
                            overflowWrap: 'break-word',
                            wordWrap: 'break-word',
                            wordBreak: 'break-word',
                            'img': {
                                maxWidth: '100%',
                                height: 'auto',
                                display: 'block',
                                margin: '20px auto',
                                borderRadius: '8px',
                            },
                            'p': {
                                marginBottom: '16px',
                            },
                            // Add specific styles for pre and code blocks
                            'pre, code': {
                                whiteSpace: 'pre-wrap', // This is key for wrapping code
                                wordBreak: 'break-word',
                                overflowX: 'auto', // Adds a horizontal scrollbar for extremely long lines
                                display: 'block', // Ensures they take up full width
                            }
                        }}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Social Share and Profile Section */}
                    <Box sx={{
                        position: 'sticky', // Makes the box stick
                        top: 24, // Sticks it 24px from the top of the viewport
                        alignSelf: 'start', // Ensures it stays at the top of the grid cell
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                    }}>
                        <SocialShare />
                        <ProfileSection topics={topicMap} authors={authorMap} />
                    </Box>
                </Box>

                <Divider sx={{ my: 4 }} />
                <ReadNextSection topics={topicMap} authors={authorMap}/>
            </Box>
        </CssVarsProvider>
    );
}

export default BlogPage;