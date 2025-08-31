import React, { useEffect, useState } from 'react';
import { Box, Typography, Chip } from '@mui/joy';
import axios from 'axios';
import * as Icons from "./icons";

const TrendingTopics = ({ onTopicSelect }) => {
    const [topics, setTopics] = useState([]);

    const iconMap = {
        AllEngineeringTopics: <Icons.AllEngineeringIcon />,
        BackEnd: <Icons.BackEndIcon />,
        WebFrontEnd: <Icons.WebFrontEndIcon />,
        Mobile: <Icons.MobileIcon />,
        Freelancing: <Icons.FreelancingIcon />,
        DataScienceandDatabases: <Icons.DataScienceandDatabasesIcon />,
        Technology: <Icons.TechnologyIcon />,
        TeamsandProcesses: <Icons.TeamsandProcessesIcon />,
        EngineeringManagement: <Icons.EngineeringManagementIcon />,
    };

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await axios.get('/api/topics');
                const fetchedTopics = response.data.map((topic) => ({
                    label: topic.label.replace(/\s+/g, ''),
                    icon: iconMap[topic.label.replace(/\s+/g, '')] || null,
                }));
                setTopics(fetchedTopics);
            } catch (error) {
                console.error('Error fetching topics:', error);
            }
        };
        fetchTopics();
    }, []);

    const handleClick = (topic) => {
        if (onTopicSelect) onTopicSelect(topic.label);
    };

    return (
        <Box sx={{
            padding: '32px',
            textAlign: 'center',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: 'background.body', // Use body background
        }}>
            <Typography
                level="h6"
                sx={{
                    color: 'text.tertiary',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '24px',
                    fontWeight: 'bold',
                }}
            >
                Explore Trending Topics
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, width: '60%' }}>
                {topics.map((topic, index) => (
                    <Chip
                        onClick={() => handleClick(topic)}
                        key={index}
                        variant="outlined"
                        startDecorator={topic.icon}
                        sx={{
                            borderRadius: 'xl',
                            borderColor: 'divider',
                            color: 'text.secondary',
                            bgcolor: 'background.surface',
                            fontWeight: 500,
                            fontSize: '18px',
                            padding: '8px 16px',
                            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: 'md',
                                bgcolor: 'background.level1',
                                borderColor: 'divider',
                                cursor: 'pointer',
                            },
                        }}
                    >
                        {topic.label}
                    </Chip>
                ))}
            </Box>
        </Box>
    );
};

export default TrendingTopics;