import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ProviderCard from '../Card/ProviderCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const ProviderList = ({ providerData = [] }) => {
    return (
        <div>
            {providerData.map((category) => (
                <Box key={category.CategoryName} sx={{ p: 1 }}>
                    <Grid container
                        spacing={1}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start" >
                        {category.ProviderList.map((provider) => (
                            <Grid item xs={6} sm={4} md={3} key={provider.ProviderCode} >
                                <Item sx={{ bgcolor: '#212121', color: '#9e9d24', height: 100, border: '5px solid', borderColor: '#FFD700' }}>
                                    <ProviderCard provider={provider} />
                                </Item>

                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </div>
    );
};

export default ProviderList;