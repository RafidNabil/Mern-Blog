import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Link, Divider, Grid } from '@mui/joy';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/topics');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'background.surface',
                color: 'text.primary',
                padding: { xs: '32px 16px', md: '64px 32px' },
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            {/* The main grid container */}
            <Grid container spacing={4} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Left Section - Brand and Social Links */}
                <Grid xs={12} md={5}>
                    <Typography
                        level="h3"
                        component="div"
                        sx={{ fontWeight: 'bold', fontSize: '2rem', color: 'text.primary', mb: 2 }}
                    >
                        REVISION
                    </Typography>
                    <Typography level="body2" sx={{ color: 'text.secondary', lineHeight: '1.5', mb: 2 }}>
                        Welcome to the ultimate source for fresh perspectives! Explore curated content to enlighten, entertain, and engage global readers.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton variant="plain" color="neutral" sx={{ color: 'text.secondary' }}>
                            <Facebook />
                        </IconButton>
                        <IconButton variant="plain" color="neutral" sx={{ color: 'text.secondary' }}>
                            <Twitter />
                        </IconButton>
                        <IconButton variant="plain" color="neutral" sx={{ color: 'text.secondary' }}>
                            <Instagram />
                        </IconButton>
                        <IconButton variant="plain" color="neutral" sx={{ color: 'text.secondary' }}>
                            <LinkedIn />
                        </IconButton>
                    </Box>
                </Grid>

                {/* This spacer Grid item pushes the following items to the right on medium and larger screens */}
                <Grid md={1} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>

                {/* Middle Section - Dynamic Categories */}
                <Grid xs={12} md={3}>
                    <Typography
                        level="h4"
                        sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}
                    >
                        CATEGORIES
                    </Typography>
                    <Grid container spacing={2}>
                        {categories.map((cat) => (
                            <Grid key={cat._id} xs={6}>
                                <Link
                                    href={`/topics/${cat.label.toLowerCase().replace(/\s+/g, '')}`}
                                    color="neutral"
                                    underline="hover"
                                    sx={{ color: 'text.secondary', fontWeight: 'md' }}
                                >
                                    {cat.label}
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* Right Section - Pages */}
                <Grid xs={12} md={3}>
                    <Typography
                        level="h4"
                        sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}
                    >
                        PAGES
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Link href="/login" color="neutral" underline="hover" sx={{ color: 'text.secondary', fontWeight: 'md' }}>
                            Log In
                        </Link>
                        <Link href="/signup" color="neutral" underline="hover" sx={{ color: 'text.secondary', fontWeight: 'md' }}>
                            Sign Up
                        </Link>
                        <Link href="/createpost" color="neutral" underline="hover" sx={{ color: 'text.secondary', fontWeight: 'md' }}>
                            Create Post
                        </Link>
                    </Box>
                </Grid>
            </Grid>

            {/* Footer Bottom */}
            <Divider sx={{ my: 4 }} />
            <Typography
                level="body-xs"
                sx={{
                    textAlign: 'center',
                    color: 'text.tertiary',
                    fontSize: '14px',
                }}
            >
                © 2024 — Revision. All Rights Reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
