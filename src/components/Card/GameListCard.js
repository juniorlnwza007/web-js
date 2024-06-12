import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
      <Box
        component={Link}
        to={game.ProviderLink}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          //width: '450px',
          height: '500px',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '1px',
          //borderRadius: '20px',
          //bgcolor: '#9e9d24'
        }}
      >
        <img
          src={game.GameLogo}
          alt={game.GameName}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '18px',
          }}
        />
      </Box>
      {/* {game.GameName} */}
    </Box>
  );
}

export default GameCard;
