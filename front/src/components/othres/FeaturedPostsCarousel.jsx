import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, Chip } from '@mui/joy';

const FeaturedPostsCarousel = () => {
    const posts = [
        {
            id: 1,
            category: 'MANAGEMENT',
            date: 'Ethan Caldwell on July 7, 2024',
            title: 'AI in Business Management: Improving Efficiency and Decision Making',
            image: '/path-to-featured-post-image-1.jpg',
        },
        {
            id: 2,
            category: 'TECHNOLOGY',
            date: 'Sarah Johnson on July 15, 2024',
            title: 'Revolutionizing Industries with Cutting-edge AI Technologies',
            image: '/path-to-featured-post-image-2.jpg',
        },
        {
            id: 3,
            category: 'TRAVEL',
            date: 'Alex Carter on August 1, 2024',
            title: 'Exploring the Future of AI-assisted Travel Experiences',
            image: '/path-to-featured-post-image-3.jpg',
        },
    ];

    // Slider settings for react-slick
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Remove arrow navigation
        appendDots: (dots) => (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 3,
                }}
            >
                <ul style={{ display: 'flex', gap: '10px' }}>{dots}</ul>
            </Box>
        ),
        customPaging: () => (
            <Box
                sx={{
                    width: '10px',
                    height: '10px',
                    bgcolor: 'rgba(255, 255, 255, 0.5)',
                    borderRadius: '50%',
                    transition: '0.3s',
                }}
            />
        ),
    };

    return (
        <Box>
            {/* Section Title */}
            <Typography
                level="title-sm"
                sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    mb: 3,
                    letterSpacing: '0.1em',
                }}
            >
                FEATURED POSTS
            </Typography>

            {/* Carousel */}
            <Slider {...settings}>
                {posts.map((post) => (
                    <Card
                        key={post.id}
                        variant="plain"
                        sx={{
                            bgcolor: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: 'xl',
                            overflow: 'hidden',
                            position: 'relative',
                            aspectRatio: '16/9',
                        }}
                    >
                        {/* Background Image */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundImage: `url(${post.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        {/* Content Overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)',
                                p: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Chip
                                size="sm"
                                sx={{
                                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    mb: 2,
                                    width: 'fit-content',
                                }}
                            >
                                {post.category}
                            </Chip>
                            <Box sx={{ mb: 1 }}>
                                <Typography level="body-xs" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                    {post.date}
                                </Typography>
                            </Box>
                            <Typography
                                level="h3"
                                sx={{
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    lineHeight: 1.3,
                                }}
                            >
                                {post.title}
                            </Typography>
                        </Box>
                    </Card>
                ))}
            </Slider>
        </Box>
    );
};

export default FeaturedPostsCarousel;
