import React from 'react';
import { Container } from '@mui/material';
import ProviderList from '../components/List/ProviderList';

const Data = {
    "ProviderData": [
        {
            "CategoryName": "RACING",
            "ProviderList": [
              {
                "ProviderCode": "EVO_RACING",
                "ProviderName": "EVO RACING",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/EVO_RACING.webp"
              }
            ]
          }
    ]
};

const RacingDataPage = () => {
    return (
        <Container>
            <ProviderList providerData={Data.ProviderData} />
        </Container>
    );
}

export default RacingDataPage;