import React from 'react';
import { Box, AspectRatio, Card, CardContent, Typography, Chip, Skeleton } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

export default function InteractiveCard({ post, authorsMap, topicMap }) {
    const navigate = useNavigate();

    if (!post) {
        // Skeleton placeholder
        return (
            <Card
                variant="outlined"
                orientation="horizontal"
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: { xs: 1.5, sm: 2 },
                    borderRadius: 'lg',
                }}
            >
                <CardContent sx={{ flex: 1, padding: 0 }}>
                    <Box sx={{ display: 'flex', gap: 1, mb: 1, alignItems: 'center' }}>
                        <Skeleton variant="text" width="100px" height="16px" />
                        <Skeleton variant="text" width="60px" height="16px" />
                    </Box>
                    <Skeleton variant="text" width="80%" height="24px" sx={{ mb: 1 }} />
                    <Skeleton variant="text" width="100%" height="40px" sx={{ mb: 1.5 }} />
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                        <Skeleton variant="rectangular" width={50} height={24} />
                        <Skeleton variant="rectangular" width={50} height={24} />
                        <Skeleton variant="rectangular" width={50} height={24} />
                    </Box>
                </CardContent>
                <Skeleton variant="rectangular" width={120} height={90} sx={{ borderRadius: 'md', ml: { xs: 1.5, sm: 2 } }} />
            </Card>
        );
    }

    return (
        <Card
            variant="outlined"
            orientation="horizontal"
            onClick={() => navigate(`/blogpage/${post._id}`)}
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: { xs: 1.5, sm: 2 },
                borderRadius: 'lg',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 'lg',
                    borderColor: 'primary.outlinedHoverBorder',
                },
            }}
        >
            <CardContent sx={{ flex: 1, padding: 0 }}>

                {/* Author + Date */}
                <Box sx={{ display: 'flex', gap: 1, mb: 1, alignItems: 'center' }}>
                    <Typography
                        level="body-xs"
                        textColor="neutral.500"
                        sx={{ fontWeight: 'md', letterSpacing: '0.5px', textTransform: 'uppercase' }}
                    >
                        {authorsMap[post.author] || "Unknown Author"}
                    </Typography>
                    <Typography
                        level="body-xs"
                        textColor="neutral.400"
                        sx={{
                            fontSize: '0.75rem',
                            '&::before': {
                                content: '"•"',
                                mx: 0.5,
                                color: 'neutral.300',
                            },
                        }}
                    >
                        {new Date(post.createdAt).toLocaleDateString()}
                    </Typography>
                </Box>

                {/* Title */}
                <Typography level="h5" sx={{ fontWeight: 'lg', mb: 0.5 }}>
                    {post.title}
                </Typography>

                {/* Excerpt */}
                <Typography
                    level="body-sm"
                    textColor="neutral.500"
                    sx={{
                        mb: 1.5,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {post.summary || post.content?.slice(0, 100) + "..."}
                </Typography>

                {/* Tags */}
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                    {post.topics?.map((tag) => (
                        <Chip
                            key={tag}
                            variant="soft"
                            color="primary"
                            size="sm"
                            sx={{
                                fontWeight: 'lg',
                                textTransform: 'uppercase',
                                fontSize: '0.7rem',
                                letterSpacing: '0.5px',
                            }}
                        >
                            {topicMap[tag]}
                        </Chip>
                    ))}
                </Box>
            </CardContent>

            {post.imageUrl && (
                <AspectRatio
                    ratio="4/3"
                    sx={{ width: { xs: 120, sm: 150 }, borderRadius: 'md', ml: { xs: 1.5, sm: 2 } }}
                >
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        loading="lazy"
                        style={{ objectFit: 'cover' }}
                    />
                </AspectRatio>
            )}
        </Card>
    );
}
