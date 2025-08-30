import React from 'react';
import { Box } from '@mui/joy';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Box
                component="main"
                sx={{
                    px: { xs: '4%', md: '16%' },
                    mt: 10
                }}
            >
                {children}
            </Box>
            <Footer />
        </>
    );
}