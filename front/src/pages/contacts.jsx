import React from 'react';
import {
    CssVarsProvider,
    Sheet,
    Typography,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Box,
} from '@mui/joy';
import CssBaseline from '@mui/joy/CssBaseline';
import theme from '../components/theme';

const ContactForm = () => {
    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    bgcolor: 'background.body',
                    minHeight: '100vh',
                    p: { xs: 2, md: 8 },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        width: '100%',
                        maxWidth: '600px',
                        borderRadius: 'lg',
                        boxShadow: 'md',
                        p: { xs: 3, md: 6 },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        bgcolor: 'background.surface',
                    }}
                >
                    <Typography level="h1" sx={{ color: 'text.primary', textAlign: 'center' }}>
                        Get in Touch
                    </Typography>
                    <Typography level="body-md" sx={{ color: 'text.secondary', mb: 2, textAlign: 'center' }}>
                        We'd love to hear from you! Please fill out the form below.
                    </Typography>
                    <FormControl required>
                        <FormLabel>Your Name</FormLabel>
                        <Input
                            placeholder="Enter your name"
                            variant="outlined"
                            color="neutral"
                        />
                    </FormControl>
                    <FormControl required>
                        <FormLabel>Email Address</FormLabel>
                        <Input
                            placeholder="you@example.com"
                            variant="outlined"
                            color="neutral"
                            type="email"
                        />
                    </FormControl>
                    <FormControl required>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                            placeholder="Write your message here..."
                            variant="outlined"
                            color="neutral"
                            minRows={5}
                        />
                    </FormControl>
                    <Button
                        variant="solid"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        Send Message
                    </Button>
                </Sheet>
            </Box>
        </CssVarsProvider>
    );
};

export default ContactForm;