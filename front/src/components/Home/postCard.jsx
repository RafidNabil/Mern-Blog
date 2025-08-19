import React, { useState, useEffect, useMemo } from 'react';
import { Card, Typography, Box, Chip, Button, AspectRatio, Skeleton } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

const PostCards = ({ post }) => {
    const navigate = useNavigate();
    const [topics, setTopics] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
        Promise.all([fetchTopics(), fetchAuthors()]).finally(() => setLoading(false));
    }, []);

    const topicMap = useMemo(() => {
        const map = {};
        topics.forEach((t) => (map[t._id] = t.label));
        return map;
    }, [topics]);

    const authorMap = useMemo(() => {
        const map = {};
        authors.forEach((a) => (map[a._id] = a.fullName));
        return map;
    }, [authors]);

    return (
        <Card
            variant="outlined"
            orientation="horizontal"
            onClick={() => navigate(`/blogpage/${post._id}`)}
            sx={{
                width: '100%',
                maxWidth: '800px',
                maxHeight: '350px',
                gap: 2,
                cursor: 'pointer',
                bgcolor: 'background.surface',
                color: 'text.primary',
                borderRadius: 'lg',
                display: 'flex',
                alignItems: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: 'lg',
                    borderColor: 'primary.main',
                },
            }}
        >
            <AspectRatio ratio="4/3" sx={{ width: { xs: '100%', md: '50%' }, borderRadius: 'lg', overflow: 'hidden' }}>
                {loading ? (
                    <Skeleton variant="rectangular" sx={{ width: '100%', height: '100%' }} />
                ) : (
                    <img
                        src={post.imageUrl || 'https://via.placeholder.com/300x200'}
                        alt={post.title || 'Blog Post'}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                )}
            </AspectRatio>

            <Box
                sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 2,
                    width: { xs: '100%', md: '50%' },
                }}
            >
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {loading
                        ? Array(2)
                            .fill(0)
                            .map((_, i) => <Skeleton key={i} variant="rounded" width={60} height={24} />)
                        : post.topics.map((id) => (
                            <Chip
                                key={id}
                                variant="soft"
                                size="sm"
                                sx={{
                                    alignSelf: 'flex-start',
                                    bgcolor: 'neutral.solidBg',
                                    color: 'neutral.plainColor',
                                    textTransform: 'uppercase',
                                    fontWeight: 'bold',
                                }}
                            >
                                {topicMap[id] || id}
                            </Chip>
                        ))}
                </Box>

                <Box>
                    {loading ? (
                        <>
                            <Skeleton width="50%" height={24} />
                            <Skeleton width="80%" height={32} />
                            <Skeleton width="100%" height={60} />
                        </>
                    ) : (
                        <>
                            <Typography level="body-sm" sx={{ mb: 1, color: 'text.tertiary' }}>
                                <span style={{ color: 'text.primary', fontWeight: 'bold', fontSize: '16px' }}>
                                    {authors.find((a) => a._id === post.author)?.fullName || 'Unknown'}
                                </span>{' '}
                                on{' '}
                                <span style={{ color: 'text.secondary', fontSize: '14px' }}>
                                    {new Date(post.createdAt).toLocaleDateString()}
                                </span>
                            </Typography>

                            <Typography
                                level="h3"
                                fontWeight="bold"
                                sx={{ mb: 1, lineHeight: 1.2, color: 'text.primary', '&:hover': { color: 'primary.main' } }}
                            >
                                {post.title}
                            </Typography>

                            <Typography
                                level="body-md"
                                sx={{
                                    color: 'text.secondary',
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 3,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {post.summary}...
                            </Typography>
                        </>
                    )}
                </Box>

                <Button
                    variant="soft"
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/blogpage/${post._id}`);
                    }}
                    sx={{
                        mt: 'auto',
                        color: 'text.primary',
                        borderColor: 'divider',
                        borderRadius: 'lg',
                        px: 3,
                        py: 1,
                        fontWeight: 'bold',
                        bgcolor: 'primary.main',
                        '&:hover': { bgcolor: 'primary.dark' },
                    }}
                >
                    {loading ? <Skeleton width={80} /> : 'Read More'}
                </Button>
            </Box>
        </Card>
    );
};

export default PostCards;
