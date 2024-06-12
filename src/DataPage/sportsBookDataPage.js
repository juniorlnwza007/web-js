import React from 'react';
import { Container } from '@mui/material';
import ProviderList from '../components/List/ProviderList';

const Data = {
    "ProviderData": [
        {
            "CategoryName": "SPORTSBOOK",
            "ProviderList": [
              {
                "ProviderCode": "AFB1188",
                "ProviderName": "AFB SPORTS",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFB1188.webp"
              },
              {
                "ProviderCode": "SBO_SPORTSBOOK",
                "ProviderName": "SBO SPORTS",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SBO_SPORTSBOOK.webp"
              }
            ]
          },
    ]
};

const SportsBookDataPage = () => {
    return (
        <Container>
            <ProviderList providerData={Data.ProviderData} />
        </Container>
    );
}

export default SportsBookDataPage;