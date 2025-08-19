import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import { useNavigate } from 'react-router-dom';

export default function OverflowCard({ authorsMap }) {
    const [post, setPost] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/posts/689e1666180c323b19ccd2cc`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, []);

    if (!post) return null;

    return (
        <Card
            variant="outlined"
            sx={{ height: 'auto', cursor: 'pointer' }}
            onClick={() => navigate(`/blogpage/${post._id}`)}
        >
            <CardOverflow>
                <AspectRatio ratio="2">
                    <img
                        src={post.imageUrl}
                        loading="lazy"
                        alt={post.title}
                    />
                </AspectRatio>
            </CardOverflow>

            <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <Typography level="body-sm" sx={{ color: 'white', fontWeight: 'bold' }}>
                        {authorsMap[post.author] || "Unknown Author"}
                    </Typography>
                    <Typography level="body-sm" sx={{ color: 'neutral.400' }}>
                        on {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "Unknown"}
                    </Typography>
                </Box>

                <Typography
                    level="h1"
                    sx={{
                        color: 'white',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        mb: 2,
                        lineHeight: 1.2,
                    }}
                >
                    {post.title}
                </Typography>

                <Typography
                    level="body-md"
                    sx={{
                        color: 'neutral.400',
                        lineHeight: 1.6,
                    }}
                >
                    {post.summary}
                </Typography>
            </CardContent>
        </Card>
    );
}
