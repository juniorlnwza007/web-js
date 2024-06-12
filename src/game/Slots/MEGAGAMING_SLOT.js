import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "APP",
                    "GameName": null,
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/MEGAGAMING_SLOT/APP.webp",
                    "ProviderCode": "MEGAGAMING_SLOT",
                    "ProviderName": "MEGA888 V2 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/MEGAGAMING_SLOT.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const MEGAGAMING_SLOT = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default MEGAGAMING_SLOT;