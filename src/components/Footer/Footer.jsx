import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 3,
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">
        © 2024 PokerAPI. 
      </Typography>
      <Typography variant="body2">
        Desenvolvido por Davi Maroto
        
      </Typography>
    </Box>
  );
};

export default Footer;
