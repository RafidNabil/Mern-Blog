import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import { Link, useNavigate } from 'react-router-dom';
import theme from '../components/theme';
import { Card, CardContent, Grid, Stack, Alert } from '@mui/joy';
import { CheckCircle, Warning } from '@mui/icons-material';
import backgroundImage from '../assets/cover.jpg';

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setIsSuccess(false);

        if (formData.password !== formData.confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/auth/signup', {
                fullName: formData.fullName,
                userName: formData.userName,
                email: formData.email,
                password: formData.password,
            });

            if (res.status === 201) {
                setMessage('Signup successful! Redirecting to login page...');
                setIsSuccess(true);
                setTimeout(() => navigate('/'), 1500);
            }
        } catch (err) {
            setMessage(err.response?.data?.message || 'Something went wrong');
            setIsSuccess(false);
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
                                Join Us!
                            </Typography>
                            <Typography level="body-md">
                                Create your account and start your journey.
                            </Typography>
                        </Stack>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={2}>
                                <FormControl required>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input
                                        name="fullName"
                                        placeholder="Enter your full name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <FormControl required>
                                    <FormLabel>Username</FormLabel>
                                    <Input
                                        name="userName"
                                        placeholder="Choose a unique username"
                                        value={formData.userName}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <FormControl required>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="you@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <FormControl required>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="Create a strong password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <FormControl required>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <Input
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Re-enter password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <Button
                                    sx={{ mt: 2 }}
                                    type="submit"
                                    fullWidth
                                >
                                    Sign Up
                                </Button>
                                {message && (
                                    <Alert
                                        color={isSuccess ? 'success' : 'danger'}
                                        startDecorator={isSuccess ? <CheckCircle /> : <Warning />}
                                        variant="soft"
                                        sx={{ mt: 2 }}
                                    >
                                        <Typography level="body-sm">{message}</Typography>
                                    </Alert>
                                )}
                            </Stack>
                        </form>
                        <Typography
                            level="body-sm"
                            sx={{ alignSelf: 'center', mt: 2 }}
                        >
                            Already have an account? <Link to="/">Log in</Link>
                        </Typography>
                    </Sheet>
                </Grid>
            </Grid>
        </CssVarsProvider>
    );
}