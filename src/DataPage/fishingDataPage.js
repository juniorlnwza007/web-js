import React from 'react';
import { Container } from '@mui/material';
import ProviderList from '../components/List/ProviderList';

const Data = {
    "ProviderData": [
        {
            "CategoryName": "FISHING",
            "ProviderList": [
              {
                "ProviderCode": "AFBGAMING_FISHING",
                "ProviderName": "AFB GAMING FISHING",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING_FISHING.webp"
              },
              {
                "ProviderCode": "CQ9_FISHING",
                "ProviderName": "CQ9 FISHING",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9_FISHING.webp"
              },
              {
                "ProviderCode": "JDB_FISHING",
                "ProviderName": "JDB FISHING",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_FISHING.webp"
              },
              {
                "ProviderCode": "KA_FISHING",
                "ProviderName": "KA FISHING",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_FISHING.webp"
              },
              {
                "ProviderCode": "JOKER_FISHING",
                "ProviderName": "JOKER FISHING",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JOKER_FISHING.webp"
              }
            ]
          },
    ]
};

const FishingDataPage = () => {
    return (
        <Container>
            <ProviderList providerData={Data.ProviderData} />
        </Container>
    );
}

export default FishingDataPage;