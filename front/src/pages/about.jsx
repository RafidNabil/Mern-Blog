import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

import theme from '../components/theme';

export default function About() {
    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ color: 'common.white', p: 4, minHeight: '100vh' }}>
                <Typography variant="h1" sx={{ textAlign: 'center', mb: 3 }}>
                    Hey, Wonderful to Meet You
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {[1, 2, 3].map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <img
                                    src="https://via.placeholder.com/300"
                                    alt={`Placeholder ${index}`}
                                    style={{ width: '100%', borderRadius: '8px' }}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="body1" sx={{ mt: 4, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
                    By 2016, we began to see the fruits of our labor as word spread about our work, leading us to our first major client — a regional retail chain. This was a pivotal moment for us, as it allowed us to hire our first employee. Emma stepped up to lead user experience design, while Liam and I focused on coding and project management.
                    As we gathered to reflect on our incredible journey, hosting a community event to showcase local tech talent felt like the perfect way to give back and inspire the next generation of innovators. It reminded us that with passion, collaboration, and a bit of code, anything is possible.
                </Typography>
                <Grid container spacing={2} sx={{ mt: 4 }}>
                    {[
                        { title: 'Innovation', desc: 'Pushing boundaries...' },
                        { title: 'Community', desc: 'Giving back...' },
                        { title: 'Flexibility', desc: 'Adapting to change...' },
                    ].map((feature, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Card sx={{ bgcolor: 'neutral.800' }}>
                                <CardContent>
                                    <Typography variant="h6">{feature.title}</Typography>
                                    <Typography variant="body2">{feature.desc}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Box>
        </CssVarsProvider>
    );
}
