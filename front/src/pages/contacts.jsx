import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';

import theme from '../components/theme';

export default function ContactForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        });
        alert('Form submitted!'); // Replace with actual functionality
    };

    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    bgcolor: 'neutral.900',
                    color: 'common.white',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 2,
                }}
            >
                <Card
                    sx={{
                        maxWidth: 500,
                        width: '100%',
                        p: 3,
                        bgcolor: 'neutral.800',
                        borderRadius: '12px',
                        boxShadow: 'lg',
                    }}
                >
                    <Typography level="h3" sx={{ textAlign: 'center', mb: 2 }}>
                        Feel Free to Contact Me
                    </Typography>
                    <Typography level="body2" sx={{ textAlign: 'center', mb: 3 }}>
                        Have a question or just want to say hi? Fill out the form below!
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="name"
                            placeholder="Your Name"
                            label="Name"
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            label="Email"
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            name="message"
                            placeholder="Your Message"
                            label="Message"
                            required
                            multiline
                            minRows={3}
                            sx={{ mb: 3 }}
                        />
                        <Button type="submit" fullWidth variant="solid" color="primary">
                            Submit
                        </Button>
                    </form>
                </Card>
            </Box>
        </CssVarsProvider>
    );
}
