import React from 'react';
import { Container } from '@mui/material';
import { Box, Button, Typography } from "@mui/material";
import ProviderList from '../components/List/ProviderList';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import AllDataPage from "../DataPage/allDataPage";

const Data = {
    "ProviderData": [
        {
            "CategoryName": "SLOTS",
            "ProviderList": [
                {
                    "ProviderCode": "AFBGAMING",
                    "ProviderName": "AFB GAMING SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
                    "ProviderLink": "/AFBGAMING"
                },
                {
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "ProviderLink": "/PS"
                },
                {
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "ProviderLink": "/AUX_SLOT"
                },
                {
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "ProviderLink": "/TTG"
                },
                {
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "ProviderLink": "/CQ9"
                },
                {
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "ProviderLink": "/PPLAY"
                },
                {
                    "ProviderCode": "PGSOFT",
                    "ProviderName": "PGSOFT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
                    "ProviderLink": "/PGSOFT"
                },
                {
                    "ProviderCode": "JOKER",
                    "ProviderName": "JOKER SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JOKER.webp",
                    "ProviderLink": "/JOKER",
                },
                {
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "ProviderLink": "/HABANERO",
                },
                {
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "ProviderLink": "/NETENT",
                },
                {
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "ProviderLink": "/SPINOMENAL_SLOT",
                },
                {
                    "ProviderCode": "REDTIGER",
                    "ProviderName": "REDTIGER SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
                    "ProviderLink": "/REDTIGER",
                },
                {
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "ProviderLink": "/CG",
                },
                {
                    "ProviderCode": "SIMPLEPLAY_SLOT",
                    "ProviderName": "SIMPLEPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
                    "ProviderLink": "/SIMPLEPLAY_SLOT",
                },
                {
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "ProviderLink": "/JDB_SLOT",
                },
                {
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "ProviderLink": "/KA_SLOT",
                },
                {
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "ProviderLink": "/YGGDRASIL",
                },
                {
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "ProviderLink": "/PNG_SLOT",
                },
                {
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "ProviderLink": "/RELAX_SLOT",
                },
                {
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "ProviderLink": "/AIS_SLOTS",
                },
                {
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "ProviderLink": "/ATA_EVOPLAY_SLOT",
                },
                {
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "ProviderLink": "/BOOMING_GAMES",
                },
                {
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "ProviderLink": "/BTG_SLOT",
                },
                {
                    "ProviderCode": "MEGA888",
                    "ProviderName": "MEGA888",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/MEGA888.webp",
                    "ProviderLink": "/MEGA888",
                },
                {
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "ProviderLink": "/NEXTSPIN_SLOT",
                },
                {
                    "ProviderCode": "MEGAGAMING_SLOT",
                    "ProviderName": "MEGA888 V2 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/MEGAGAMING_SLOT.webp",
                    "ProviderLink": "/MEGAGAMING_SLOT",
                }
            ]
        }
    ]
};

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
}

const SlotsDataPage = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, mt: 1 }}>
                <Box sx={{ flexGrow: 1, p: 1 }}>
                    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={12} >
                                <Item>
                                    --- SLOT ---
                                </Item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <ProviderList providerData={Data.ProviderData} />
            </Box>
        </Container>
    );
}

export default SlotsDataPage;