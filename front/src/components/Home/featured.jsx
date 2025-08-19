import { useEffect, useState } from "react";
import { Box, Sheet } from "@mui/joy";

import TestHero from "./testHero";
import InteractiveCard from "./interactiveCard";

export default function Featured({ authorsMap, topicMap }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/posts");
                const data = await res.json();

                // take 3 random unique posts
                const shuffled = data.sort(() => 0.5 - Math.random());
                setPosts(shuffled.slice(0, 3));
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "60% 40%" },
                gap: 3,
            }}
        >
            <TestHero authorsMap={authorsMap} />

            <Sheet
                sx={{
                    backgroundColor: "transparent",
                    display: "grid",
                    gap: 3,
                }}
            >
                {posts.map((post) => (
                    <InteractiveCard key={post._id} post={post} authorsMap={authorsMap} topicMap={topicMap}/>
                ))}
            </Sheet>
        </Box>
    );
}
