import React, { useState } from 'react';
import axios from 'axios';
import {
    Button, CssBaseline, TextField, Grid, Box, Typography,
    Container, InputLabel, MenuItem, FormControl, Select,
    Stack, CircularProgress
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        phone: '',
        pin: '',
        bankid: '71',
        accountname: '',
        accountnumber: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8088/register', formData);
            if (response.status === 200 && response.data.success) {
                alert("Registration successful");
                navigate('/viewAllUser');
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (err) {
            if (err.response && err.response.status === 401) {
                alert('Invalid data provided.');
            } else {
                console.error('Registration error:', err);
                alert('An error occurred during registration.');
            }
        } finally {
            setLoading(false);
        }
    };


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6" sx={{ marginTop: 2 }}>
                        สมัครสมาชิก
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    label="ชื่อธนาคาร"
                                    variant="outlined"
                                    fullWidth
                                    name="bankid"
                                    type="bankid"
                                    value={formData.bankid}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="ชื่อบัญชี"
                                    name="accountname"
                                    value={formData.accountname}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="ชื่อบัญชี"
                                    name="accountnumber"
                                    value={formData.accountnumber}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{
                                            color: '#FFFFFF', bgcolor: '#212121',
                                            '&:hover': {
                                                bgcolor: '#424242',
                                                color: '#FFEB3B',
                                            },
                                        }}
                                        disabled={loading}
                                    >
                                        {loading ? <CircularProgress size={24} color="inherit" /> : 'ลงทะเบียน'}
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}