import React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';

export default function BlogHeader({ title, image, summary, topics, author, createdat }) {
    const navigate = useNavigate();

    return (
        <Sheet
            sx={{
                bgcolor: 'background.body',
                minHeight: '50vh',
                borderRadius: 0,
                p: 0,
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    bgcolor: 'black',
                    color: 'white',
                    p: { xs: 2, md: 4 },
                    maxWidth: '1400px',
                    margin: '0 auto',
                }}
            >
                {/* Breadcrumbs */}
                <Breadcrumbs
                    size="sm"
                    separator={<ChevronRightRoundedIcon fontSize="small" />}
                    sx={{
                        mb: 3,
                        '& .MuiLink-root': { color: 'grey.300' },
                        '& .MuiTypography-root': { color: 'grey.300' },
                    }}
                >
                    <Link component={RouterLink} to="/">Home</Link>
                    <Link>{topics[0]}</Link>
                    
                    <Typography level="body-sm">{title}</Typography>
                </Breadcrumbs>

                {/* Author and Date */}
                <Box sx={{ mb: 2 }}>
                    <Typography level="body-sm" sx={{ color: 'grey.400' }}>
                        {author}{' '}
                        <span style={{ color: 'grey.500' }}>
                            on {new Date(createdat).toLocaleDateString()}
                        </span>
                    </Typography>
                </Box>

                {/* Main Content Grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: 4,
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Typography
                            level="h1"
                            sx={{
                                fontSize: { xs: '2rem', md: '3.5rem' },
                                fontWeight: 'bold',
                                mb: 2,
                            }}
                        >
                            {title}
                        </Typography>

                        <Typography
                            level="body-md"
                            sx={{
                                color: 'grey.300',
                                mb: 3,
                                maxWidth: '600px',
                            }}
                        >
                            {summary}
                        </Typography>

                    </Box>

                    <AspectRatio
                        ratio="16/9"
                        sx={{
                            borderRadius: 'xl',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={image || 'https://via.placeholder.com/600x400'}
                            alt="Blog Header"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: 'xl',
                            }}
                        />
                    </AspectRatio>
                </Box>
            </Box>
        </Sheet>
    );
}
