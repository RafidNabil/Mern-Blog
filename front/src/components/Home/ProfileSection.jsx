import { Box, Typography, Avatar, IconButton } from '@mui/joy';
import { LocationOn } from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import CardCarousel from './cardCarousel';

const ProfileSection = ({ topics, authors }) => {
    return (
        <Box>
            {/* Profile Section */}
            <Box sx={{ bgcolor: 'background.surface', p: 3, color: 'text.primary', borderRadius: '1rem', mb: 4 }}>
                <Typography
                    level="title-sm"
                    sx={{ color: 'text.tertiary', mb: 3, letterSpacing: '0.1em' }}
                >
                    ABOUT
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                    <Avatar
                        src="/path-to-profile-image.jpg"
                        sx={{ width: 56, height: 56, border: '2px solid', borderColor: 'divider' }}
                    />
                    <Box>
                        <Typography level="h4" sx={{ mb: 0.5 }}>
                            Ethan Caldwell
                        </Typography>
                        <Typography
                            level="body-sm"
                            sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                        >
                            REFLECTIVE BLOGGER
                        </Typography>
                    </Box>
                </Box>

                <Typography
                    level="body-md"
                    sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}
                >
                    Ethan Caldwell shares thoughtful insights and reflections on life, culture, and personal growth.
                    His work explores the intersections of creativity and experience, offering readers unique perspectives.
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <LocationOn sx={{ color: 'text.tertiary' }} />
                    <Typography level="body-sm" sx={{ color: 'text.tertiary' }}>
                        Paris, France
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    {[TwitterIcon, FacebookIcon, InstagramIcon, LinkedInIcon].map((Icon, idx) => (
                        <IconButton
                            key={idx}
                            variant="plain"
                            sx={{
                                color: 'text.secondary',
                                '&:hover': { bgcolor: 'background.level1', color: 'text.primary' },
                            }}
                        >
                            <Icon />
                        </IconButton>
                    ))}
                </Box>
            </Box>

            {/* Carousel */}
            <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto' }}>
                <CardCarousel topicMap={topics} authorMap={authors} />
            </Box>
        </Box>
    );
};

export default ProfileSection;