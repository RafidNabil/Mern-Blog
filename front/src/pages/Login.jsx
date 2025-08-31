import * as React from 'react';
import { useState } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Box, Grid, Stack, Alert } from '@mui/joy';
import { Warning } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import backgroundImage from '../assets/cover.jpg';

import theme from '../components/theme';

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setError(''); 
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('/api/auth/login', formData);
            console.log('Login successful:', response.data);
            setError('Login successful! Redirecting to dashboard...');

            if (response.status === 200) {
                navigate('/home');
            }
        } catch (err) {
            console.error('Login error:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Grid container sx={{ minHeight: '100vh' }}>
                <Grid
                    xs={12}
                    md={6}
                    sx={(theme) => ({
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: { xs: 'none', md: 'block' },
                    })}
                />
                <Grid
                    xs={12}
                    md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        py: { xs: 4, md: 0 },
                    }}
                >
                    <Sheet
                        sx={{
                            width: 380,
                            p: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            borderRadius: 'lg',
                            boxShadow: 'lg',
                        }}
                        variant="outlined"
                    >
                        <Stack spacing={1} sx={{ my: 2, textAlign: 'center' }}>
                            <Typography level="h2">
                                Welcome!
                            </Typography>
                            <Typography level="body-md">
                                Sign in to continue.
                            </Typography>
                        </Stack>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={2}>
                                <FormControl required>
                                    <FormLabel>Username</FormLabel>
                                    <Input
                                        name="userName"
                                        type="text"
                                        placeholder="e.g., johndoe"
                                        value={formData.userName}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <FormControl required>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="At least 6 characters"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <Button type="submit" sx={{ mt: 1 }} fullWidth>Log in</Button>
                                {error && (
                                    <Alert
                                        color="danger"
                                        startDecorator={<Warning />}
                                        variant="soft"
                                        sx={{ mt: 2 }}
                                    >
                                        <Typography level="body-sm">{error}</Typography>
                                    </Alert>
                                )}
                            </Stack>
                        </form>
                        <Typography
                            level="body-sm"
                            sx={{ alignSelf: 'center', mt: 2 }}
                        >
                            Don&apos;t have an account? <Link to="/signup">Sign up</Link>
                        </Typography>
                    </Sheet>
                </Grid>
            </Grid>
        </CssVarsProvider>
    );
}