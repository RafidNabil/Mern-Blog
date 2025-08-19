import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/joy';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'background.surface',
                color: 'text.primary',
                padding: '32px',
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '24px',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                {/* Left Section */}
                <Box sx={{ maxWidth: '300px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: '16px' }}>
                        <Box
                            component="img"
                            src="/path-to-logo.png"
                            alt="Revision"
                            sx={{ height: 32 }}
                        />
                        <Typography
                            sx={{ fontWeight: 'bold', fontSize: '20px', color: 'text.primary' }}
                        >
                            REVISION
                        </Typography>
                    </Box>
                    <Typography level="body2" sx={{ color: 'text.secondary', lineHeight: '1.5' }}>
                        Welcome to the ultimate source for fresh perspectives! Explore curated content to enlighten, entertain, and engage global readers.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, marginTop: '16px' }}>
                        <IconButton
                            variant="plain"
                            sx={{ color: 'text.secondary', '&:hover': { bgcolor: 'background.level1' } }}
                        >
                            <Facebook />
                        </IconButton>
                        <IconButton
                            variant="plain"
                            sx={{ color: 'text.secondary', '&:hover': { bgcolor: 'background.level1' } }}
                        >
                            <Twitter />
                        </IconButton>
                        <IconButton
                            variant="plain"
                            sx={{ color: 'text.secondary', '&:hover': { bgcolor: 'background.level1' } }}
                        >
                            <Instagram />
                        </IconButton>
                        <IconButton
                            variant="plain"
                            sx={{ color: 'text.secondary', '&:hover': { bgcolor: 'background.level1' } }}
                        >
                            <LinkedIn />
                        </IconButton>
                    </Box>
                </Box>

                {/* Middle and Right Sections */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 8,
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Homepages */}
                    <Box>
                        <Typography
                            sx={{ fontWeight: 'bold', marginBottom: '12px', color: 'text.primary' }}
                        >
                            HOMEPAGES
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" color="neutral" underline="hover" sx={{ color: 'text.secondary' }}>
                                Classic List
                            </Link>
                            <Link href="#" color="neutral" underline="hover" sx={{ color: 'text.secondary' }}>
                                Classic Grid
                            </Link>
                            <Link href="#" color="neutral" underline="hover" sx={{ color: 'text.secondary' }}>
                                Classic Overlay
                            </Link>
                            <Link href="#" color="neutral" underline="hover" sx={{ color: 'text.secondary' }}>
                                Hero Slider
                            </Link>
                            <Link href="#" color="neutral" underline="hover" sx={{ color: 'text.secondary' }}>
                                Featured Posts
                            </Link>
                        </Box>
                    </Box>

                    {/* Categories */}
                    <Box>
                        <Typography
                            sx={{ fontWeight: 'bold', marginBottom: '12px', color: 'text.primary' }}
                        >
                            CATEGORIES
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" color="neutral" underline="hover" sx={{ color: 'text.secondary' }}>
                                Technology
                            </Link>
                            <Link href="#" color="neutral" underline="hover" sx={{ color: 'text.secondary' }}>
                                Travel
                            </Link>
                            <Link href="#" color="neutral" underline="hover" sx={{ color: 'text.secondary' }}>
                                Sport
                            </Link>
                            <Link href="#" color="neutral" underline="hover" sx={{ color: 'text.secondary' }}>
                                Business
                            </Link>
                        </Box>
                    </Box>

                    {/* Pages */}
                    <Box>
                        <Typography
                            sx={{ fontWeight: 'bold', marginBottom: '12px', color: 'text.primary' }}
                        >
                            PAGES
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" color="neutral" underline="hover" sx={{ color: 'text.secondary' }}>
                                About
                            </Link>
                            <Link href="#" color="neutral" underline="hover" sx={{ color: 'text.secondary' }}>
                                Categories
                            </Link>
                            <Link href="#" color="neutral" underline="hover" sx={{ color: 'text.secondary' }}>
                                Contacts
                            </Link>
                            <Link href="/login" color="neutral" underline="hover" sx={{ color: 'text.secondary' }}>
                                Log In
                            </Link>
                            <Link href="/signup" color="neutral" underline="hover" sx={{ color: 'text.secondary' }}>
                                Sign Up
                            </Link>
                            <Link href="/createpost" color="neutral" underline="hover" sx={{ color: 'text.secondary' }}>
                                Create Post
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Footer Bottom */}
            <Box
                sx={{
                    textAlign: 'center',
                    marginTop: '32px',
                    paddingTop: '16px',
                    color: 'text.tertiary',
                    fontSize: '14px',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                © 2024 — Revision. All Rights Reserved.
            </Box>
        </Box>
    );
};

export default Footer;