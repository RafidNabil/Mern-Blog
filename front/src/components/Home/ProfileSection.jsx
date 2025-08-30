import { Box, Typography, Avatar, IconButton, Button } from '@mui/joy';
import { LocationOn } from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardCarousel from './cardCarousel';

const ProfileSection = ({ topics, authors }) => {
    const userId = "689df9bc7fc4d953b46c5d2d";
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/users/${userId}`);
                if (!res.ok) throw new Error('Failed to fetch user');
                const data = await res.json();
                setUser(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUser();
    }, [userId]);

    if (!user) {
        return <Typography sx={{ textAlign: 'center', mt: 5 }}>Loading profile...</Typography>;
    }

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
                        src={user.avatar || 'https://via.placeholder.com/150'}
                        sx={{ width: 56, height: 56, border: '2px solid', borderColor: 'divider' }}
                    />
                    <Box>
                        <Box onClick={() => navigate('/profile')} sx={{ cursor: 'pointer' }}>
                            <Typography level="h4" sx={{ mb: 0.5 }}>
                                {user.fullName}
                            </Typography>
                        </Box>
                        <Typography
                            level="body-sm"
                            sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                        >
                            {user.title}
                        </Typography>
                    </Box>
                </Box>

                <Typography
                    level="body-md"
                    sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}
                >
                    {user.bio}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <LocationOn sx={{ color: 'text.tertiary' }} />
                    <Typography level="body-sm" sx={{ color: 'text.tertiary' }}>
                        {user.location}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    {(user.social?.twitter || user.social?.x) && (
                        <IconButton
                            variant="plain"
                            sx={{
                                color: 'text.secondary',
                                '&:hover': { bgcolor: 'background.level1', color: 'text.primary' },
                            }}
                        >
                            <a href={user.social.twitter || user.social.x} target="_blank" rel="noopener noreferrer">
                                <TwitterIcon />
                            </a>
                        </IconButton>
                    )}
                    {user.social?.facebook && (
                        <IconButton
                            variant="plain"
                            sx={{
                                color: 'text.secondary',
                                '&:hover': { bgcolor: 'background.level1', color: 'text.primary' },
                            }}
                        >
                            <a href={user.social.facebook} target="_blank" rel="noopener noreferrer">
                                <FacebookIcon />
                            </a>
                        </IconButton>
                    )}
                    {user.social?.instagram && (
                        <IconButton
                            variant="plain"
                            sx={{
                                color: 'text.secondary',
                                '&:hover': { bgcolor: 'background.level1', color: 'text.primary' },
                            }}
                        >
                            <a href={user.social.instagram} target="_blank" rel="noopener noreferrer">
                                <InstagramIcon />
                            </a>
                        </IconButton>
                    )}
                    {user.social?.linkedin && (
                        <IconButton
                            variant="plain"
                            sx={{
                                color: 'text.secondary',
                                '&:hover': { bgcolor: 'background.level1', color: 'text.primary' },
                            }}
                        >
                            <a href={user.social.linkedin} target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon />
                            </a>
                        </IconButton>
                    )}
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
