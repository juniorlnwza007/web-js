import React from 'react';
import { Container } from '@mui/material';
import ProviderList from '../components/List/ProviderList';

const Data = {
    "ProviderData": [
        {
            "CategoryName": "ECASINO",
            "ProviderList": [
              {
                "ProviderCode": "EBET_E_CASINO",
                "ProviderName": "EBET E CASINO",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/EBET_E_CASINO.webp"
              },
              {
                "ProviderCode": "CQ9_CASINO",
                "ProviderName": "CQ9 E CASINO",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9_CASINO.webp"
              },
              {
                "ProviderCode": "JOKER_CASINO",
                "ProviderName": "JOKER E CASINO",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JOKER_CASINO.webp"
              },
              {
                "ProviderCode": "CG_E_CASINO",
                "ProviderName": "CG E CASINO",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG_E_CASINO.webp"
              },
              {
                "ProviderCode": "YGGDRASIL_E_CASINO",
                "ProviderName": "YGGDRASIL E CASINO",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL_E_CASINO.webp"
              },
              {
                "ProviderCode": "RELAX_E_CASINO",
                "ProviderName": "RELAX E CASINO",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_E_CASINO.webp"
              },
              {
                "ProviderCode": "PPLAY_E_CASINO",
                "ProviderName": "PRAGMATICPLAY E CASINO",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY_E_CASINO.webp"
              },
              {
                "ProviderCode": "ARCADIA_GAMING",
                "ProviderName": "ARCADIA GAMING E CASINO",
                "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ARCADIA_GAMING.webp"
              }
            ]
          },
    ]
};

const CasinoDataPage = () => {
    return (
        <Container>
            <ProviderList providerData={Data.ProviderData} />
        </Container>
    );
}

export default CasinoDataPage;