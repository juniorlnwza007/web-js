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

export default function LoginAdmin() {

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
                            spacing={1}
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
                                <TextField label="Username" variant="outlined" />
                            </Grid>

                            <Grid item>
                                <TextField label="Password" variant="outlined" />
                            </Grid>

                            <Grid item>
                                <Stack spacing={2} direction="row">
                                    <Button sx={{
                                        color: '#FFFFFF', bgcolor: '#212121',
                                        '&:hover': {
                                            bgcolor: '#424242',
                                            color: '#FFEB3B',
                                        },
                                    }}
                                        href="/HomePage-3000"
                                        variant="contained"> Login </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </main>
        </ThemeProvider>
    );
}
