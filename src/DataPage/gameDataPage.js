import React from 'react';
import { Container } from '@mui/material';
import ProviderList from '../components/List/ProviderList';

const Data = {
    "ProviderData": [
        {
            "CategoryName": "GAMES",
            "ProviderList": [
              {
                "ProviderCode": "SV388",
                "ProviderName": "SV388 COCK FIGHT",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SV388.webp"
              },
              {
                "ProviderCode": "CF361",
                "ProviderName": "CF361 COCK FIGHT",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CF361.webp"
              }
            ]
          },
    ]
};

const GameDataPage = () => {
    return (
        <Container>
            <ProviderList providerData={Data.ProviderData} />
        </Container>
    );
}

export default GameDataPage;