import { Card, Box, Typography, Chip, AspectRatio } from '@mui/joy';

const ArticleHeroCard = () => {
    return (
        <Card
            variant="plain"
            sx={{
                bgcolor: 'background.surface',
                maxWidth: '800px',
                height: '100%',
                p: 0,
                overflow: 'hidden',
            }}
        >
            <AspectRatio
                ratio="2/1"
                sx={{
                    borderRadius: '16px',
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        p: 3,
                    }}
                >
                    {/* Tags on top of the image */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 16,
                            left: 16,
                            display: 'flex',
                            gap: 1,
                            zIndex: 2, // Keep above the image
                        }}
                    >
                        <Chip
                            size="sm"
                            variant="soft"
                            sx={{
                                bgcolor: 'neutral.solidBg',
                                color: 'neutral.50',
                                '&:hover': { bgcolor: 'neutral.solidHoverBg' },
                            }}
                        >
                            BUSINESS
                        </Chip>
                        <Chip
                            size="sm"
                            variant="soft"
                            sx={{
                                bgcolor: 'neutral.solidBg',
                                color: 'neutral.50',
                                '&:hover': { bgcolor: 'neutral.solidHoverBg' },
                            }}
                        >
                            NEWS
                        </Chip>
                    </Box>

                    {/* Background image */}
                    <img
                        src="https://images.pexels.com/photos/10194138/pexels-photo-10194138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Red modern speaker"
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            objectFit: 'cover',
                            zIndex: 1, // Place image behind the tags
                        }}
                    />
                </Box>
            </AspectRatio>

            <Box sx={{ overflow: 'clip', pt: 3, pl: 4, pr: 4 }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Typography level="body-sm" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                        Ethan Caldwell
                    </Typography>
                    <Typography level="body-sm" sx={{ color: 'text.tertiary' }}>
                        on October 16, 2024
                    </Typography>
                </Box>

                <Typography
                    level="h1"
                    sx={{
                        color: 'text.primary',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        mb: 2,
                        lineHeight: 1.2,
                    }}
                >
                    How Tech Shapes the Future of Work in 2024
                </Typography>

                <Typography
                    level="body-md"
                    sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    In today's ever-evolving world, storytelling has become a powerful tool for connection. Revision provides a unique platform for individuals to share...
                </Typography>
            </Box>
        </Card>
    );
};

export default ArticleHeroCard;