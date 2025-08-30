import Slider from "react-slick";
import { Card, Box, Typography, Chip, Skeleton } from "@mui/joy";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CardCarousel({ topicMap, authorMap }) {
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: "ease-in-out"
    };

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/posts');
                const data = await response.json();

                // pick 3 random posts
                const shuffled = data.sort(() => 0.5 - Math.random());
                const selected = shuffled.slice(0, 3);

                setPosts(selected);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (isLoading) {
        return (
            <Slider {...settings}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <Box key={index} sx={{ px: 1 }}>
                        <Card
                            variant="plain"
                            sx={{
                                bgcolor: "background.surface",
                                borderRadius: "xl",
                                overflow: "hidden",
                                position: "relative",
                                width: "100%",
                                height: 0,
                                paddingTop: "100%"
                            }}
                        >
                            <Skeleton variant="overlay" animation="wave" sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)",
                                    p: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end",
                                    zIndex: 1
                                }}
                            >
                                <Skeleton variant="rectangular" sx={{ width: "80px", height: "24px", mb: 2 }} />
                                <Skeleton variant="text" sx={{ width: "90%", height: "1rem", mb: 1, bgcolor: 'neutral.400' }} />
                                <Skeleton variant="text" level="h3" sx={{ width: "70%", height: "1.5rem", bgcolor: 'neutral.400' }} />
                            </Box>
                        </Card>
                    </Box>
                ))}
            </Slider>
        );
    }

    return (
        <Slider {...settings}>
            {posts.map((card) => (
                <Box key={card._id} sx={{ px: 1 }}>
                    <Card
                        variant="plain"
                        onClick={() => navigate(`/blogpage/${card._id}`)}
                        sx={{
                            cursor: "pointer",
                            bgcolor: "background.surface",
                            borderRadius: "xl",
                            overflow: "hidden",
                            position: "relative",
                            width: "100%",
                            height: 0,
                            paddingTop: "100%"
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundImage: `url(${card.imageUrl || "https://picsum.photos/600/400"})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)",
                                p: 3,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end"
                            }}
                        >
                            <Chip
                                size="sm"
                                sx={{
                                    bgcolor: "neutral.500",
                                    color: "neutral.50",
                                    mb: 2,
                                    width: "fit-content"
                                }}
                            >
                                {topicMap[card.topics[0]] || "GENERAL"}
                            </Chip>

                            <Box sx={{ mb: 1 }}>
                                <Typography level="body-xs" sx={{ color: "neutral.300" }}>
                                    {authorMap[card.author] || "Unknown"} on {card.createdAt ? new Date(card.createdAt).toLocaleDateString() : "Unknown"}
                                </Typography>
                            </Box>

                            <Typography
                                level="h3"
                                sx={{
                                    color: "neutral.50",
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                    lineHeight: 1.3
                                }}
                            >
                                {card.title || "Untitled Post"}
                            </Typography>
                        </Box>
                    </Card>
                </Box>
            ))}
        </Slider>
    );
}
