import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Chip,
    AspectRatio,
    CircularProgress,
    Alert
} from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import theme from '../components/theme';

function SearchPage() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [authors, setAuthors] = useState([]);
    const [topics, setTopics] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchResults = async () => {
            const queryParams = new URLSearchParams(location.search);
            const searchQuery = queryParams.get('q');

            if (!searchQuery) {
                setResults([]);
                return;
            }

            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`http://localhost:5000/api/search?q=${encodeURIComponent(searchQuery)}`);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setResults(data);
            } catch (err) {
                console.error('Failed to fetch search results:', err);
                setError('Failed to load search results. Please try again.');
                setResults([]);
            } finally {
                setLoading(false);
            }
        };

        const fetchAuthorsAndTopics = async () => {
            try {
                const [authorsRes, topicsRes] = await Promise.all([
                    fetch('http://localhost:5000/api/author'),
                    fetch('http://localhost:5000/api/topics')
                ]);
                const authorsData = await authorsRes.json();
                const topicsData = await topicsRes.json();
                setAuthors(authorsData);
                setTopics(topicsData);
            } catch (err) {
                console.error('Failed to fetch authors/topics:', err);
            }
        };

        fetchResults();
        fetchAuthorsAndTopics();
    }, [location.search]);

    const authorMap = useMemo(() => {
        const map = {};
        authors.forEach(a => {
            map[a._id] = a.fullName;
        });
        return map;
    }, [authors]);

    const topicMap = useMemo(() => {
        const map = {};
        topics.forEach(t => {
            map[t._id] = t.label;
        });
        return map;
    }, [topics]);

    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: 'background.body' }}>
                <Container>
                    <Typography level="h1" sx={{ textAlign: 'center', mb: 4, color: 'text.primary' }}>
                        Search Results
                    </Typography>

                    {loading && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
                            <CircularProgress />
                        </Box>
                    )}

                    {error && (
                        <Alert color="danger" sx={{ textAlign: 'center' }}>
                            {error}
                        </Alert>
                    )}

                    {!loading && !error && (
                        results.length > 0 ? (
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                                    gap: 4,
                                }}
                            >
                                {results.map((post) => (
                                    <Card 
                                        key={post._id}
                                        onClick={() => navigate(`/blogpage/${post._id}`)}
                                        variant="outlined" 
                                        sx={{
                                            borderRadius: 'md',
                                            boxShadow: 'md',
                                            cursor: 'pointer',
                                            bgcolor: 'background.surface',
                                            color: 'text.primary'
                                        }}
                                    >
                                        {post.imageUrl && (
                                            <AspectRatio ratio="16/9">
                                                <img
                                                    src={post.imageUrl}
                                                    alt={`Image for ${post.title}`}
                                                    loading="lazy"
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </AspectRatio>
                                        )}
                                        <CardContent>
                                            <Typography level="h3" component="div" sx={{ mb: 1, color: 'text.primary' }}>
                                                {post.title}
                                            </Typography>
                                            <Typography level="body-md" sx={{ mb: 2, color: 'text.secondary' }}>
                                                {post.summary}
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                                {post.topics?.map((topicId, index) => (
                                                    <Chip 
                                                        key={index} 
                                                        variant="solid" 
                                                        color="primary" 
                                                        size="sm"
                                                    >
                                                        {topicMap[topicId] || 'Unknown'}
                                                    </Chip>
                                                ))}
                                            </Box>
                                            <Typography 
                                                level="body-sm" 
                                                sx={{ mt: 2, color: 'text.tertiary' }}
                                            >
                                                By {authorMap[post.author] || 'Unknown'} • {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'Unknown'}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    py: 10,
                                    color: 'text.secondary',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <SearchIcon sx={{ fontSize: '3rem', mb: 2, color: 'inherit' }} />
                                <Typography level="body-lg" sx={{ color: 'text.secondary' }}>
                                    No posts found for your search query.
                                </Typography>
                            </Box>
                        )
                    )}
                </Container>
            </Box>
        </CssVarsProvider>
    );
}

export default SearchPage;
