import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "140008",
                    "GameName": "lolli-pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140008.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140009",
                    "GameName": "monkey-pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140009.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140010",
                    "GameName": "raging-pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140010.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140011",
                    "GameName": "cherry-pop deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140011.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140012",
                    "GameName": "critter-pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140012.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140013",
                    "GameName": "Zombie aPOPalypse",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140013.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140014",
                    "GameName": "kokeshi-pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140014.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140015",
                    "GameName": "hiphop-pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140015.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140016",
                    "GameName": "heliopopolis",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140016.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140017",
                    "GameName": "looney-pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140017.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140018",
                    "GameName": "reef-pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140018.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140019",
                    "GameName": "Pop O'Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140019.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140020",
                    "GameName": "Kitty-Poppins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140020.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140021",
                    "GameName": "pixie-pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140021.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140022",
                    "GameName": "Donkey and the Goats",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140022.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140023",
                    "GameName": "Witchy Poppins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140023.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140024",
                    "GameName": "GemPops",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140024.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140000",
                    "GameName": "pop-rocks",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140000.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140001",
                    "GameName": "wild-pops",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140001.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140002",
                    "GameName": "cherry-pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140002.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140003",
                    "GameName": "bounty-pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140003.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140004",
                    "GameName": "tiki-pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140004.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140005",
                    "GameName": "hippo-pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140005.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140006",
                    "GameName": "papaya-pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140006.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140007",
                    "GameName": "piggy-pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AUX_SLOT/140007.webp",
                    "ProviderCode": "AUX_SLOT",
                    "ProviderName": "AUX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const AUX_SLOT = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default AUX_SLOT;