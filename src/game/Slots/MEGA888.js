import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "mega888",
                    "GameName": null,
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/MEGA888/mega888.webp",
                    "ProviderCode": "MEGA888",
                    "ProviderName": "MEGA888",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/MEGA888.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const MEGA888 = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default MEGA888;