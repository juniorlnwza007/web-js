import * as React from 'react';
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

export default function HomePage() {

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
                        //spacing={0}
                        >
                            <Grid item>
                                <AdminPanelSettingsIcon sx={{ fontSize: 80 }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="h2"
                                    sx={{ fontFamily: 'Roboto, sans-serif' }}
                                >
                                    ADMIN
                                </Typography>
                            </Grid>
                            <Box mt={1} sx={{ width: '100%' }}>
                                <Grid container justifyContent="center" alignItems="center" spacing={1}>
                                    <Grid item xs={4} sm={4} md={4}>
                                        <Button
                                            href="/register-3000"
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                color: '#FFFFFF',
                                                bgcolor: '#212121',
                                                '&:hover': {
                                                    bgcolor: '#424242',
                                                    color: '#FFEB3B',
                                                },
                                            }}
                                        >
                                            สมัครสมาชิก
                                        </Button>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            href="/viewAllUser-3000"
                                            sx={{
                                                color: '#FFFFFF',
                                                bgcolor: '#212121',
                                                '&:hover': {
                                                    bgcolor: '#424242',
                                                    color: '#FFEB3B',
                                                },
                                            }}
                                        >
                                            รายชื่อทั้งหมด
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Container>
                </Box>
            </main>
        </ThemeProvider>
    );
}
