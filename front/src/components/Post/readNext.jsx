import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import { Box, Typography, Card, AspectRatio, Chip, Link, Grid, Stack, Skeleton } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

export default function ReadNextSection({ topics, authors }) {
    const [posts, setPosts] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/posts'); 
                if (!res.ok) throw new Error('Failed to fetch posts');
                const data = await res.json();
                const shuffled = data.sort(() => 0.5 - Math.random());
                setPosts(shuffled.slice(0, 3));
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    const handleCardClick = (id) => {
        navigate(`/blogpage/${id}`);
    };

    return (
        <CssVarsProvider>
            <Box sx={{ bgcolor: 'background.body', p: { xs: 2, md: 4 }, maxWidth: '1400px', mx: 'auto' }}>
                <Typography level="h1" sx={{ fontSize: '2rem', fontWeight: 'bold', color: 'text.primary', mb: 4 }}>
                    Read Next
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {(posts ? posts : Array.from({ length: 3 })).map((post, index) => (
                        <Grid xs={12} sm={6} md={4} key={index}>
                            <Card
                                onClick={() => post && handleCardClick(post._id)}
                                variant="outlined"
                                sx={{
                                    cursor: 'pointer',
                                    bgcolor: 'background.surface',
                                    borderColor: 'divider',
                                    color: 'text.primary',
                                    p: 2,
                                    borderRadius: 'lg',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 'md', borderColor: 'divider' },
                                }}
                            >
                                <AspectRatio ratio="16/9" sx={{ borderRadius: 'md', mb: 1.5 }}>
                                    {post ? <img src={post.imageUrl} alt={post.title} /> : <Skeleton variant="rectangular" />}
                                </AspectRatio>

                                <Stack spacing={1}>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        {post
                                            ? (post.topics || []).map((id) => (
                                                  <Chip key={id} size="sm" variant="soft" sx={{ fontWeight: 'bold' }}>
                                                      {topics[id] || 'Unknown'}
                                                  </Chip>
                                              ))
                                            : Array.from({ length: 2 }).map((_, i) => <Skeleton key={i} width={40} height={24} />)}
                                    </Box>

                                    <Typography level="body-sm" sx={{ color: 'text.tertiary' }}>
                                        {post ? `${authors[post.author] || 'Unknown'} on ${new Date(post.createdAt).toLocaleDateString()}` : <Skeleton width="80%" />}
                                    </Typography>

                                    <Typography level="h2" sx={{ fontSize: '1.1rem', fontWeight: 'lg', lineHeight: 1.2 }}>
                                        {post ? post.title : <Skeleton width="90%" />}
                                    </Typography>

                                    <Typography level="body-md" sx={{ color: 'text.secondary', lineHeight: 1.4 }}>
                                        {post ? (post.summary.length > 80 ? post.summary.slice(0, 77) + '...' : post.summary) : <Skeleton width="100%" />}
                                    </Typography>
                                </Stack>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </CssVarsProvider>
    );
}
