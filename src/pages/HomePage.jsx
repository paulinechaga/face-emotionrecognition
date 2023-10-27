import React from 'react';
import './home.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Home = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='secondary'>
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="green"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
            </Typography>
            <Button color="inherit"><a href="/login">Login</a></Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
    
};

export default Home;