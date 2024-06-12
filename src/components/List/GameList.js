import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import GameCard from '../Card/GameListCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const GameList = ({ providerData }) => {
    return (
        <div>
            {providerData.map(provider => (
                <Box sx={{ p: 1 }} key={provider.ProviderName}>
                    <Grid container
                        spacing={1}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start" >
                        {provider.GameList.map(game => (
                            <Grid justifyContent="center"
                                alignItems="center" item xs={6} sm={4} md={2} key={provider.ProviderCode} >
                                <Item sx={{ bgcolor: '#212121', color: '#9e9d24', height: 120 }}>
                                    <GameCard key={game.GameCode} game={game} />
                                </Item>
                                <Typography variant="body2" sx={{ textAlign: 'center', mt: 1, }}>
                                    {game.GameName.length > 20 ? `${game.GameName.substring(0, 20)}...` : game.GameName}
                                </Typography>

                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </div>
    );
}

export default GameList;