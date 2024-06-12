import React from 'react';
import { Container } from '@mui/material';
import ProviderList from '../components/List/ProviderList';

const Data = {
    "ProviderData": [
        {
            "CategoryName": "LIVECASINO",
            "ProviderList": [
                {
                    "ProviderCode": "AFBCASINO",
                    "ProviderName": "AFB CASINO",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBCASINO.webp"
                },
                {
                    "ProviderCode": "DIAMONDCLUB",
                    "ProviderName": "GD88 CASINO",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/DIAMONDCLUB.webp"
                },
                {
                    "ProviderCode": "LG88",
                    "ProviderName": "LG88 CASINO",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/LG88.webp"
                },
                {
                    "ProviderCode": "WM",
                    "ProviderName": "WM CASINO",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/WM.webp"
                },
                {
                    "ProviderCode": "AESEXY",
                    "ProviderName": "AESEXY CASINO",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AESEXY.webp"
                },
                {
                    "ProviderCode": "CQ9_LIVE_CASINO",
                    "ProviderName": "YAXING LIVE CASINO",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9_LIVE_CASINO.webp"
                },
                {
                    "ProviderCode": "DREAMGAME",
                    "ProviderName": "DREAMGAMING CASINO",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/DREAMGAME.webp"
                },
                {
                    "ProviderCode": "SA",
                    "ProviderName": "SA GAMING CASINO",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SA.webp"
                },
                {
                    "ProviderCode": "PPLAY_CASINO",
                    "ProviderName": "PRAGMATICPLAY CASINO",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY_CASINO.webp"
                },
                {
                    "ProviderCode": "EVOLUTION_CASINO",
                    "ProviderName": "EVOLUTION CASINO",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/EVOLUTION_CASINO.webp"
                },
                {
                    "ProviderCode": "EBET",
                    "ProviderName": "EBET CASINO",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/EBET.webp"
                }
            ]
        },
    ]
};

const LiveCasinoDataPage = () => {
    return (
        <Container>
            <ProviderList providerData={Data.ProviderData} />
        </Container>
    );
}

export default LiveCasinoDataPage;