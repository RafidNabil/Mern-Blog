import React from 'react';
import {
    CssVarsProvider,
    Sheet,
    Typography,
    Box,
    Link,
    Divider,
} from '@mui/joy';
import CssBaseline from '@mui/joy/CssBaseline';
import theme from '../components/theme';

const AboutPage = () => {
    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    bgcolor: 'background.body',
                    minHeight: '100vh',
                    p: { xs: 2, md: 8 },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        width: '100%',
                        maxWidth: '1200px',
                        borderRadius: 'lg',
                        boxShadow: 'md',
                        p: { xs: 3, md: 6 },
                        bgcolor: 'background.surface',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                    }}
                >
                    {/* Header Section */}
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography level="h1" sx={{ color: 'text.primary', mb: 1 }}>
                            About Us
                        </Typography>
                        <Typography level="body-lg" sx={{ color: 'text.secondary' }}>
                            Our mission is to deliver insightful content that inspires, informs, and connects a global audience.
                        </Typography>
                    </Box>

                    <Divider />

                    {/* Our Story Section */}
                    <Box>
                        <Typography level="h2" sx={{ color: 'text.primary', mb: 2 }}>
                            Our Story
                        </Typography>
                        <Typography level="body-md" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                            Founded in 2024, our platform was created to be a beacon for thoughtful journalism and diverse perspectives. We started as a small team of passionate writers and have since grown into a vibrant community of contributors from various backgrounds. Our journey has been guided by a simple principle: to make complex topics accessible and engaging for everyone. We believe that a well-informed society is a stronger one, and we are committed to providing content that enriches lives and sparks meaningful conversations.
                        </Typography>
                    </Box>

                    <Divider />

                    {/* Our Team Section */}
                    <Box>
                        <Typography level="h2" sx={{ color: 'text.primary', mb: 2 }}>
                            Our Team
                        </Typography>
                        <Typography level="body-md" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                            Our diverse team is composed of seasoned journalists, industry experts, and creative storytellers. Each member brings a unique voice and perspective, contributing to a rich tapestry of content that covers technology, travel, sports, and business. We are united by a shared dedication to journalistic integrity and a passion for creating high-quality, impactful content.
                        </Typography>
                    </Box>

                    <Divider />

                    {/* Our Values Section */}
                    <Box>
                        <Typography level="h2" sx={{ color: 'text.primary', mb: 2 }}>
                            Our Values
                        </Typography>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                                gap: 4,
                            }}
                        >
                            <Box>
                                <Typography level="h3" sx={{ color: 'text.primary' }}>
                                    Integrity
                                </Typography>
                                <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                                    We are committed to honest and accurate reporting, maintaining the highest standards of journalistic ethics.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography level="h3" sx={{ color: 'text.primary' }}>
                                    Diversity
                                </Typography>
                                <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                                    We celebrate diverse voices and perspectives, providing a platform for a wide range of topics and ideas.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography level="h3" sx={{ color: 'text.primary' }}>
                                    Innovation
                                </Typography>
                                <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                                    We embrace technology and new storytelling formats to keep our content fresh, engaging, and relevant.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Divider />

                    {/* Call to Action */}
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography level="body-md" sx={{ color: 'text.tertiary', mb: 1 }}>
                            Ready to explore?
                        </Typography>
                        <Link
                            href="/"
                            sx={{
                                fontSize: 'lg',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                color: 'primary.solidBg',
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                            Start Reading Now
                        </Link>
                    </Box>
                </Sheet>
            </Box>
        </CssVarsProvider>
    );
};

export default AboutPage;