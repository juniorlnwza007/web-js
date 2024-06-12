import { Box, Button, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AllDataPage from "../DataPage/allDataPage";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#212121',
    textAlign: 'center',
    color: '#9e9d24',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25
}));

const style = {
    color: '#FFEB3B',
    bgcolor: '#212121',
    '&:hover': {
        bgcolor: '#424242',
        color: '#FFFFFF',
    },
    border: '2px solid', borderColor: '#FFD700'
}

export default function MinePage() {
    return (
        <div>
            <Container>
                <Box sx={{ flexGrow: 1, mt: 1 }}>
                    <Box sx={{ flexGrow: 1, p: 1,  }}>
                        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={12} >
                                    <Item sx={{border: '2px solid', borderColor: '#FFD700' }}>
                                        TEST69
                                    </Item>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1, p: 1 }}>
                        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                                <Grid item xs={1.5} md={1.5} >
                                    <Button sx={{ ...style }} fullWidth variant="contained">ยอดนิยม</Button>
                                </Grid>
                                <Grid item xs={1.5} md={1.5}>
                                    <Button
                                        component={Link}
                                        to="/SlotsDataPage"
                                        sx={{ ...style }}
                                        fullWidth
                                        variant="contained"
                                    >
                                        สล็อต
                                    </Button>
                                </Grid>
                                <Grid item xs={1.5} md={1.5}>
                                    <Button sx={{ ...style }} fullWidth variant="contained">กีฬา</Button>
                                </Grid>
                                <Grid item xs={1.5} md={1.5}>
                                    <Button sx={{ ...style }} fullWidth variant="contained">คาสิโน</Button>
                                </Grid>
                                <Grid item xs={1.5} md={1.5}>
                                    <Button sx={{ ...style }} fullWidth variant="contained">ไพ่</Button>
                                </Grid>
                                <Grid item xs={1.5} md={1.5}>
                                    <Button sx={{ ...style }} fullWidth variant="contained">อีสปร์อต</Button>
                                </Grid>
                                <Grid item xs={1.5} md={1.5}>
                                    <Button sx={{ ...style }} fullWidth variant="contained">หวย</Button>
                                </Grid>
                                {/* <Grid item xs={2} md={2}>
                                    <Button sx={{ ...style }} fullWidth variant="contained">GAMES</Button>
                                </Grid>
                                <Grid item xs={2} md={2}>
                                    <Button sx={{ ...style }} fullWidth variant="contained">RACING</Button>
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <AllDataPage />
            </Container>
        </div>
    )
}