import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputMask from 'react-input-mask';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';

const theme = createTheme();

export default function Register() {

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
                    <Box component="form" noValidate sx={{ mt: 2 }}>
                        <Grid justifyContent="center" alignItems="center" container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="ชื่อ"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="fname"
                                    label="นามสกุล"
                                />
                            </Grid>
                            <Grid item xs={8} sm={8}>
                                <InputMask mask="999 999 9999" maskChar=" ">
                                    {() => (
                                        <TextField
                                            required
                                            fullWidth
                                            label="เบอร์โทรศัพท์"
                                            name="phone"
                                            type="tel"
                                        />
                                    )}
                                </InputMask>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <Button sx={{
                                    color: '#FFFFFF', bgcolor: '#212121',
                                    '&:hover': {
                                        bgcolor: '#424242',
                                        color: '#FFEB3B',
                                    },
                                }} fullWidth variant="contained"> ส่งรหัส </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="PIN Code"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="bank-select-label">ชื่อธนาคาร</InputLabel>
                                    <Select
                                        labelId="bank-select-label"
                                        id="bank-select"
                                        label="ชื่อธนาคาร"
                                    >
                                        <MenuItem value={"Bangkok Bank"}>ธนาคารกรุงเทพ</MenuItem>
                                        <MenuItem value={"Krung Thai Bank"}>ธนาคารกรุงไทย</MenuItem>
                                        <MenuItem value={"Siam Commercial Bank"}>ธนาคารไทยพาณิชย์</MenuItem>
                                        <MenuItem value={"Kasikornbank"}>ธนาคารกสิกรไทย</MenuItem>
                                        <MenuItem value={"Bank of Ayudhya"}>ธนาคารกรุงศรีอยุธยา</MenuItem>
                                        <MenuItem value={"TMBThanachart Bank"}>ทีเอ็มบีธนชาต</MenuItem>
                                        <MenuItem value={"Government Savings Bank"}>ธนาคารออมสิน</MenuItem>
                                        <MenuItem value={"Government Housing Bank"}>ธนาคารอาคารสงเคราะห์</MenuItem>
                                        <MenuItem value={"Islamic Bank of Thailand"}>ธนาคารอิสลามแห่งประเทศไทย</MenuItem>
                                        <MenuItem value={"Land and Houses Bank"}>ธนาคารแลนด์ แอนด์ เฮ้าส์</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <InputMask mask="9999 9999 9999 9999" maskChar=" ">
                                    {() => (
                                        <TextField
                                            required
                                            fullWidth
                                            label="เลขบัญชี"
                                            name="phone"
                                            type="tel"
                                        />
                                    )}
                                </InputMask>
                            </Grid>

                            <Grid item xs={12} sx={{ mb: '5px' }}></Grid>
                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                                <Grid item xs={12} sm={12}>
                                    <Button
                                        type="submit"
                                        href="/HomePage-3000"
                                        variant="contained"
                                        sx={{
                                            color: '#FFFFFF', bgcolor: '#212121',
                                            '&:hover': {
                                                bgcolor: '#424242',
                                                color: '#FFEB3B',
                                            },
                                        }}
                                    >
                                        ลงทะเบียน
                                    </Button>
                                </Grid>
                            </Stack>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
