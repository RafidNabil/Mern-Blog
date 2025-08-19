import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import Chip from '@mui/joy/Chip';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useEffect, useState } from 'react';

import theme from '../components/theme';

const SportPage = () => {
    const articles = [
        {
            image: '/api/placeholder/400/300',
            tags: ['SPORT', 'TRAVEL'],
            author: 'Ethan Caldwell',
            date: 'on September 29, 2024',
            title: 'The Future of Work: Tech and Remote Trends',
            description: 'Find out why 2024 is predicted to be a pivotal year for sports technology and its impact on the industry.',
            backgroundColor: '#e6e6ff'
        },
        {
            image: '/api/placeholder/400/300',
            tags: ['SPORT'],
            author: 'Ethan Caldwell',
            date: 'on September 24, 2024',
            title: 'Key Sports Trends for 2024: From AI to Virtual Reality',
            description: 'Dive into the key sports trends like AI and virtual reality set to redefine the sports industry in 2024.',
            backgroundColor: '#ffcc99'
        },
        {
            image: '/api/placeholder/400/300',
            tags: ['SPORT'],
            author: 'Ethan Caldwell',
            date: 'on September 15, 2024',
            title: 'Startups Disrupting the Sports Industry with Innovative Tech',
            description: 'Discover how startups are leveraging technology to disrupt and innovate within the sports industry.',
            backgroundColor: '#99ff99'
        },
        // Additional articles...
    ];

    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ bgcolor: 'black', minHeight: '100vh', color: 'white' }}>
                {/* Header Section */}
                <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: '1400px', margin: '0 auto' }}>
                    {/* Breadcrumbs */}
                    <Breadcrumbs
                        separator={<ChevronRightRoundedIcon fontSize="small" />}
                        sx={{ mb: 4, color: 'grey.300' }}
                    >
                        <Link color="neutral">Home</Link>
                        <Typography color="neutral">Sport</Typography>
                    </Breadcrumbs>

                    {/* Category Icon and Title */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 4, alignItems: 'center' }}>
                        <AspectRatio
                            ratio="1"
                            sx={{
                                width: 80,
                                borderRadius: 'xl',
                                bgcolor: '#9966ff',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Placeholder for basketball icon */}
                            <Box sx={{ p: 2 }} />
                        </AspectRatio>

                        <Box>
                            <Typography level="h1" sx={{ fontSize: '2rem', mb: 1 }}>
                                Sport
                            </Typography>
                            <Typography level="body-md" sx={{ color: 'grey.300', maxWidth: '600px' }}>
                                Catch up on the latest sporting events, match highlights, and in-depth analysis across various sports, including football, basketball, tennis, and more.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Articles Grid */}
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'repeat(2, 1fr)',
                                lg: 'repeat(3, 1fr)'
                            },
                            gap: 3
                        }}
                    >
                        {articles.map((article, index) => (
                            <Card
                                key={index}
                                variant="outlined"
                                sx={{
                                    bgcolor: 'transparent',
                                    borderColor: 'transparent',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                                        transition: 'all 0.2s ease-in-out'
                                    }
                                }}
                            >
                                <AspectRatio
                                    ratio="16/9"
                                    sx={{
                                        borderRadius: 'xl',
                                        mb: 1.5,
                                        bgcolor: article.backgroundColor,
                                    }}
                                >
                                    <Box />
                                </AspectRatio>

                                <Box sx={{ display: 'flex', gap: 1, mb: 1.5 }}>
                                    {article.tags.map((tag) => (
                                        <Chip
                                            key={tag}
                                            size="sm"
                                            variant="soft"
                                            sx={{
                                                bgcolor: 'white',
                                                color: 'black',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {tag}
                                        </Chip>
                                    ))}
                                </Box>

                                <Box sx={{ mb: 1 }}>
                                    <Typography level="body-sm" sx={{ color: 'grey.300' }}>
                                        {article.author} {article.date}
                                    </Typography>
                                </Box>

                                <Typography
                                    level="h2"
                                    sx={{
                                        fontSize: '1.25rem',
                                        fontWeight: 'bold',
                                        mb: 1.5,
                                        lineHeight: 1.2,
                                    }}
                                >
                                    <Link
                                        overlay
                                        sx={{
                                            color: 'white',
                                            textDecoration: 'none',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                            }
                                        }}
                                    >
                                        {article.title}
                                    </Link>
                                </Typography>

                                <Typography
                                    level="body-sm"
                                    sx={{
                                        color: 'grey.300',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {article.description}
                                </Typography>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Box>
        </CssVarsProvider>
    );
};

export default SportPage;