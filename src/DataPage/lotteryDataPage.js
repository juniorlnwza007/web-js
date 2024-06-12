import React from 'react';
import { Container } from '@mui/material';
import ProviderList from '../components/List/ProviderList';

const Data = {
    "ProviderData": [
        {
            "CategoryName": "LOTTERY",
            "ProviderList": [
              {
                "ProviderCode": "CONNECT93",
                "ProviderName": "93 CONNECT LOTTERY",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CONNECT93.webp"
              },
              {
                "ProviderCode": "LIGATOGEL",
                "ProviderName": "LIGA TOGEL",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/LIGATOGEL.webp"
              },
              {
                "ProviderCode": "CQ9_LOTTERY",
                "ProviderName": "CQ9 LOTTERY",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9_LOTTERY.webp"
              }
            ]
          },
    ]
};

const LotteryDataPage = () => {
    return (
        <Container>
            <ProviderList providerData={Data.ProviderData} />
        </Container>
    );
}

export default LotteryDataPage;