import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    IconButton,
    Switch,
    Typography,
    Container,
    Input,
} from '@mui/joy';
import { Search, Person, Menu, DarkMode, LightMode } from '@mui/icons-material';

function Navbar({ toggleTheme, isDarkMode }) {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <Box
            component="nav"
            sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.surface',
                py: 2,
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'nowrap',
                    width: '100%',
                    px: { xs: 2, md: 4 },
                }}
            >
                {/* Left Section - Logo */}
                <Box
                    onClick={() => navigate('/')}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                >
                    <Typography
                        level="h3"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                            color: 'text.primary',
                        }}
                    >
                        REVISION
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        gap: 3,
                        flexGrow: 1,
                        justifyContent: 'center',
                    }}
                >
                    {['About', 'Contact'].map((label) => (
                        <Button
                            key={label}
                            variant="plain"
                            color="neutral"
                            onClick={() => navigate(`/${label.toLowerCase()}`)}
                            sx={{
                                color: 'text.primary',
                                fontSize: 'md',
                                fontWeight: 'md',
                                '&:hover': {
                                    backgroundColor: 'background.level1',
                                    color: 'primary.main',
                                },
                            }}
                        >
                            {label}
                        </Button>
                    ))}
                </Box>

                {/* Right Section - Action Buttons and Icons */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    {/* Search Bar for Desktop */}
                    <Input
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                        endDecorator={
                            <IconButton variant="plain" onClick={handleSearch}>
                                <Search />
                            </IconButton>
                        }
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                    />

                    <Button
                        variant="solid"
                        color="primary"
                        onClick={() => navigate('/createpost')}
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            px: 3,
                            fontWeight: 'lg',
                            borderRadius: 'md',
                        }}
                    >
                        Create Post
                    </Button>
                    {/* Mobile Search Icon */}
                    <IconButton
                        variant="plain"
                        color="neutral"
                        onClick={() => {
                            // You can navigate to a search page/modal for mobile
                            navigate('/search');
                        }}
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                    >
                        <Search />
                    </IconButton>
                    <Switch
                        checked={isDarkMode}
                        onChange={toggleTheme}
                        size="lg"
                        slotProps={{ input: { 'aria-label': 'toggle theme' } }}
                        endDecorator={isDarkMode ? <DarkMode /> : <LightMode />}
                        sx={{
                            '--Switch-track-background': 'neutral.300',
                            '--Switch-thumb-color': 'white',
                            '--Switch-track-width': '50px',
                            '--Switch-track-height': '28px',
                        }}
                    />
                    <IconButton
                        variant="plain"
                        color="neutral"
                        onClick={() => navigate('/profile')}
                    >
                        <Person />
                    </IconButton>

                    {/* Hamburger Menu for Mobile */}
                    <IconButton
                        variant="plain"
                        color="neutral"
                        onClick={() => {
                            /* Logic to open mobile menu */
                        }}
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
}

export default Navbar;