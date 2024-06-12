import React from 'react';
import { Container } from '@mui/material';
import ProviderList from '../components/List/ProviderList';

const Data = {
    "ProviderData": [
        {
            "CategoryName": "POKER",
            "ProviderList": [
              {
                "ProviderCode": "WE1POKER",
                "ProviderName": "WE1 POKER",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/WE1POKER.webp"
              },
              {
                "ProviderCode": "POKERV",
                "ProviderName": "POKER V",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/POKERV.webp"
              }
            ]
          },
    ]
};

const PokerDataPage = () => {
    return (
        <Container>
            <ProviderList providerData={Data.ProviderData} />
        </Container>
    );
}

export default PokerDataPage;