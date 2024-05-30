import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function createData(name, lastName, phone, credit) {
    return { name, lastName, phone, credit };
}

const rows = [
    createData('โจจิงฉื่อ', 'ลือจังจัง', '086-6548512', 20,),
    createData('หลี่เกียวงวด', 'มังปี่เวา', '075-1747474', 100,),
    createData('หลงเปาวิน', 'เลาเกง', '077-57525757', 5200,),
    createData('กินจกยิง', 'อังโล', '065-249522', 3000,),
    createData('เปาอำม้ง', 'อับดุล', '091-4586254', 120,),
];

export default function ViewAllUser() {

    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };


    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        if (/^\d*$/.test(newValue)) { // ตรวจสอบว่ามีเฉพาะตัวเลข
            setValue(newValue);
        }
    };


    return (
        <Container sx={{ maxWidth: '90%' }}>
            <Box mt={5}>
            <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ minWidth: 50, border: '1px solid #000' }} align="center">ชื่อ</TableCell>
                        <TableCell sx={{ maxWidth: 50, border: '1px solid #000' }} align="center">นามสกุล</TableCell>
                        <TableCell sx={{ maxWidth: 50, border: '1px solid #000' }} align="center">เบอร์โทรศัพท์</TableCell>
                        <TableCell sx={{ maxWidth: 50, border: '1px solid #000' }} align="center">เครดิต</TableCell>
                        <TableCell sx={{ maxWidth: 50, border: '1px solid #000' }} align="center">การดำเนินการ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell sx={{ maxWidth: 50, border: '1px solid #000' }} align="center">{row.name}</TableCell>
                            <TableCell sx={{ maxWidth: 50, border: '1px solid #000' }} align="center">{row.lastName}</TableCell>
                            <TableCell sx={{ maxWidth: 50, border: '1px solid #000' }} align="center">{row.phone}</TableCell>
                            <TableCell sx={{ maxWidth: 50, border: '1px solid #000' }} align="center">{row.credit}</TableCell>
                            <TableCell sx={{ maxWidth: 50, border: '1px solid #000' }} align="center">
                                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                                    <Button variant="contained"
                                        onClick={handleClickOpen1}
                                        sx={{
                                            color: '#212121', bgcolor: '#76ff03',
                                            '&:hover': {
                                                bgcolor: '#33691e',
                                                color: '#FFEB3B',
                                            },
                                        }}>ฝาก</Button>
                                    <Button variant="contained"
                                        onClick={handleClickOpen2}
                                        sx={{
                                            color: '#212121', bgcolor: '#ff1744',
                                            '&:hover': {
                                                bgcolor: '#c51162',
                                                color: '#FFEB3B',
                                            },
                                        }}>ถอน</Button>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

            </Box>

            <Dialog
                open={open1}
                onClose={handleClose1}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography variant="h6" sx={{ marginTop: 2 }}>
                        จำนวนเครดิตที่จะ 'ฝาก'
                    </Typography>
                </DialogTitle>
                <Box>
                    <DialogContent >
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="ระบุจำนวนเงิน"
                            variant="outlined"
                    
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        />
                    </DialogContent>
                </Box>
                <DialogActions>
                    <Button
                        sx={{
                            color: '#FFFFFF', bgcolor: '#212121',
                            '&:hover': {
                                bgcolor: '#424242',
                                color: '#FFEB3B',
                            },
                        }}
                        onClick={handleClose1} variant="contained" >ยกเลิก</Button>
                    <Button
                        sx={{
                            color: '#212121', bgcolor: '#FFFFFF',
                            '&:hover': {
                                bgcolor: '#33691e',
                                color: '#FFEB3B',
                            },
                        }}
                        onClick={handleClose1} variant="outlined" autoFocus>
                        ตกลง
                    </Button>
                </DialogActions>
            </Dialog>


            <Dialog
                open={open2}
                onClose={handleClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle >
                    <Typography variant="h6" sx={{ marginTop: 2 }}>
                        จำนวนเครดิตที่จะ 'ถอน'
                    </Typography>
                </DialogTitle>
                <Box>
                    <DialogContent >
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="ระบุจำนวนเงิน"
                            variant="outlined"
                   
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        />
                    </DialogContent>
                </Box>
                <DialogActions>
                    <Button
                        sx={{
                            color: '#FFFFFF', bgcolor: '#212121',
                            '&:hover': {
                                bgcolor: '#424242',
                                color: '#FFEB3B',
                            },
                        }}
                        onClick={handleClose2} variant="contained" >ยกเลิก</Button>
                    <Button
                        sx={{
                            color: '#212121', bgcolor: '#FFFFFF',
                            '&:hover': {
                                bgcolor: '#33691e',
                                color: '#FFEB3B',
                            },
                        }}
                        onClick={handleClose2} variant="outlined" autoFocus>
                        ตกลง
                    </Button>
                </DialogActions>
            </Dialog>

        </Container>
    );
}
