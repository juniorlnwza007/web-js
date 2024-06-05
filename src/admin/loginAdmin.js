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
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function LoginAdmin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            if (!username || !password) {
                alert('Please enter both username and password.');
                setLoading(false);
                return;
            }

            const response = await axios.post(`http://localhost:8088/login`, {
                username: username,
                password: password
            });
            if (response.status === 200 && response.data.success === true) {
                alert("Login successful");
                navigate(`/viewAllUser`);
            } else {
                alert('The username or password is incorrect.');
            }

        } catch (err) {
            if (err.response && err.response.status === 401) {
                alert('Invalid username or password.');
            } else {
                console.error('Login error:', err);
                alert('An error occurred during login.');
            }
        } finally {
            setLoading(false);
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
                            <Grid item>
                                <TextField
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    name="password"
                                    fullWidth
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
                                        variant="contained"
                                        onClick={handleLogin}
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