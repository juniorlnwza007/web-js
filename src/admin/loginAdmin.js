import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const theme = createTheme();

export default function LoginAdmin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        if (username === '' || password === '') {
            setError('Username and password are required');
            return;
        }
        try {
            const response = await axios.post('https://ggapi-uat.5k2an3or4q209.xyz/ggapi/login', {
                username,
                password,
                brandcode: 'THB1',
                ip: '0.0.0.0',
                language: 'th',
            }, {
                headers: {
                    Authorization: 'Bearer r7k8fGbeYkmeffoMaK8Tl637xpmd9toHZ7D21Wok5WyLqnPU5ChWUVSAcR0y90on'
                }
            });

            if (response.data.success) {
                window.location.href = '/HomePage-3000';
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            setError('An error occurred during login');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 10,
                    }}
                >
                    <Container maxWidth="sm">
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item>
                                <AdminPanelSettingsIcon sx={{ fontSize: 80 }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" component="h2">
                                    ADMIN
                                </Typography>
                            </Grid>
                            {error && (
                                <Grid item>
                                    <Typography color="error">{error}</Typography>
                                </Grid>
                            )}
                            <Grid item>
                                <TextField
                                    label="Username"
                                    variant="outlined"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item>
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item>
                                <Stack spacing={2} direction="row">
                                    <Button
                                        sx={{
                                            color: '#FFFFFF',
                                            bgcolor: '#212121',
                                            '&:hover': {
                                                bgcolor: '#424242',
                                                color: '#FFEB3B',
                                            },
                                        }}
                                        onClick={handleLogin}
                                        variant="contained"
                                    >
                                        Login
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </main>
        </ThemeProvider>
    );
}
