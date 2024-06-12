import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
    return (
        <Box sx={{ flexGrow: 1, color: '#9e9d24' }} >
            <AppBar position="static" sx={{ color: '#9e9d24', bgcolor: '#212121' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        TTEST69
                    </Typography>
                
                    <Button color="inherit" href="/login" >หน้าหลัก</Button>
                    <Button color="inherit" href="/login" >โปรโมชั่น</Button>
                    <Button color="inherit" href="/login" >ติดต่อ</Button>
                    <Box sx={{ mx: 2, borderLeft: '2px solid #FFD700', height: '24px' }} />
                    <Button color="inherit" href="/login" >เข้าสู่ระบบ</Button>
                    <Button color="inherit" href="/register" >สมัครสมาชิก</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
