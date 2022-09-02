import React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

interface NavbarProps {
  title: string
  showBackButton?: boolean
  onBackClick: () => void
}

function Navbar({ title, showBackButton = false, onBackClick }: NavbarProps) {
  return (
    <AppBar position="static">
        <Toolbar variant="dense">
          {showBackButton && (
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={onBackClick}>
              <KeyboardBackspaceIcon />
            </IconButton>
          )}
          <Typography variant="h6" color="inherit" component="div">
            { title }
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar;
