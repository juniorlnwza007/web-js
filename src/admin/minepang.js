import { Box, Button, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react";
import axios from "axios";
import Container from '@mui/material/Container';

import ButtonGroup from '@mui/material/ButtonGroup';

import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MinePage() {
    const [gameData, setGameData] = useState(null);

    useEffect(() => {
        const getGame = async () => {
            try {
                const response = await axios.post('http://localhost:8088/gamelist');
                if (response && response.data) {
                    setGameData(response.data);
                    console.log('response', response);
                }
            } catch (err) {
                console.error(err);
            }
        };

        getGame();
    }, []);

    if (!gameData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Container>
                <Box sx={{ p: 2 }} textAlign={"center"} >
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}>
                            {gameData.ProviderData.map((category, index) => (
                                <Grid item xs={2} md={2}>
                                    <Button fullWidth variant="outlined"
                                        sx={{
                                            bgcolor: '#212121',
                                            color: '#9e9d24'
                                        }}>{category.CategoryName}</Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>

                <Box>
                    {gameData.ProviderData.map((category, index) => (
                        <Grid key={index} container columns={{ xs: 4, sm: 8, md: 12 }}>
                            {category.ProviderList.map((provider, providerIndex) => (
                                <Grid item xs={2} sm={2} md={2} key={providerIndex}>
                                    <Paper
                                        key={providerIndex}
                                        sx={{
                                            m: 1,
                                            height: 100,
                                            width: 150,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            bgcolor: '#212121'
                                        }}
                                    >
                                        <img
                                            src={provider.ProviderLogo}
                                            alt={provider.ProviderName}
                                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                        />
                                        <Typography variant="subtitle2"
                                            sx={{
                                                textAlign: 'center', position: 'absolute',
                                                bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                color: '#ffffff', padding: '4px 0'
                                            }}>
                                            {provider.ProviderName}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Box>
                
            </Container>
        </div>
    )
}