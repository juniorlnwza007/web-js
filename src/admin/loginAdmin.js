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

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_SERVER}/login`, {
                brandcode: 'THB1',
                username: username,
                password: password,
                language: 'th-TH',
                ip: '0.0.0.0'
            });
            if (response.status === 200 && response.data.status === "success") {
                alert("เข้าสู่ระบบสำเร็จ");
                navigate(`/viewAllUser-3000`);
            } else {
                alert('The username or password is incorrect.');
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred during login.');
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
