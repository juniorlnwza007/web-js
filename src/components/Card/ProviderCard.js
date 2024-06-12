import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ProviderCard = ({ provider }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
      <Box
        component={Link}
        to={provider.ProviderLink}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100px',
          height: '100px',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '1px',
        }}
        >
        <CardMedia
          component="img"
          image={provider.ProviderLogo}
          alt={provider.ProviderName}
          sx={{
            marginTop: 5,
            //bgcolor:"#FFFFFF",
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain'
          }}
        />
      </Box>
      <CardContent sx={{ textAlign: 'center', padding: '0' }}>
        <Typography variant="subtitle1">
          {provider.ProviderName}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default ProviderCard;