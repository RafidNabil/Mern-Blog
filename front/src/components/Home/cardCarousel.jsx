import Slider from "react-slick";
import { Card, Box, Typography, Chip } from "@mui/joy";
import { useEffect, useState } from "react";

export default function CardCarousel({topicMap, authorMap}) {
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
            }
        };
        fetchPosts();
    }, []);

    return (
        <Slider {...settings}>
            {posts.map((card, index) => (
                <Box key={index} sx={{ px: 1 }}>
                    <Card
                        variant="plain"
                        sx={{
                            // Use neutral.solidBg for a solid background on top of body
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