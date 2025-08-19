import React from 'react';
import { useEffect, useState } from 'react';
import { Box, IconButton, Button, Modal, ModalClose, Typography, Sheet } from '@mui/joy';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';


const SocialShare = () => {

    const [open, setOpen] = React.useState(false);

    const handleShare = (platform) => {
        switch (platform) {
            case 'twitter':
                window.open('https://twitter.com/share', '_blank');
                break;
            case 'facebook':
                window.open('https://facebook.com/sharer/sharer.php', '_blank');
                break;
            case 'linkedin':
                window.open('https://linkedin.com/shareArticle', '_blank');
                break;
            case 'copy':
                navigator.clipboard.writeText(window.location.href);
                setOpen(true); // Open the modal instead of an alert
                break;
            default:
                break;
        }
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '50%',
                left: 16,
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.5,
                bgcolor: 'background.surface',
                padding: 1,
                borderRadius: 2,
            }}
        >
            <IconButton
                variant="soft"
                onClick={() => handleShare('twitter')}
                sx={{ color: 'text.secondary' }}
            >
                <TwitterIcon />
            </IconButton>
            <IconButton
                variant="soft"
                onClick={() => handleShare('facebook')}
                sx={{ color: 'text.secondary' }}
            >
                <FacebookIcon />
            </IconButton>
            <IconButton
                variant="soft"
                onClick={() => handleShare('linkedin')}
                sx={{ color: 'text.secondary' }}
            >
                <LinkedInIcon />
            </IconButton>
            <React.Fragment>
                <IconButton
                    variant="soft"
                    onClick={() => handleShare('copy')}
                    sx={{ color: 'text.secondary' }}
                >
                    <LinkIcon />
                </IconButton>
                <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={open}
                    onClose={() => setOpen(false)}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Sheet
                        variant="outlined"
                        sx={{
                            maxWidth: 500,
                            borderRadius: 'md',
                            p: 3,
                            boxShadow: 'lg',
                            bgcolor: 'background.body',
                            color: 'text.primary',
                        }}
                    >
                        <ModalClose variant="plain" sx={{ m: 0 }} />
                        <Typography
                            id="modal-title"
                            level="h4"
                            textColor="inherit"
                            sx={{ fontWeight: 'lg', m: 2 }}
                        >
                            Link copied to clipboard!
                        </Typography>
                    </Sheet>
                </Modal>
            </React.Fragment>
        </Box>
    );
};

export default SocialShare;