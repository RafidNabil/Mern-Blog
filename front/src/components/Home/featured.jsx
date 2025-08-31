import { useEffect, useState } from "react";
import { Box, Sheet } from "@mui/joy";

import TestHero from "./testHero";
import InteractiveCard from "./interactiveCard";

export default function Featured({ authorsMap, topicMap }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // The three specific post IDs to fetch
                const postIds = [
                    "689e1c610a1215038328851a",
                    "689e19c2180c323b19ccd486",
                    "689e1cde0a12150383288580"
                ];

                const res = await fetch("/api/posts");
                const data = await res.json();

                // Filter the posts to only show the ones with the specified IDs
                const filteredPosts = data.filter(post => postIds.includes(post._id));
                setPosts(filteredPosts);

            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
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
                {loading ? (
                    // Display 3 skeleton placeholders while loading
                    [...Array(3)].map((_, index) => (
                        <InteractiveCard key={index} />
                    ))
                ) : (
                    // Map through the actual posts once loaded
                    posts.map((post) => (
                        <InteractiveCard key={post._id} post={post} authorsMap={authorsMap} topicMap={topicMap}/>
                    ))
                )}
            </Sheet>
        </Box>
    );
}
