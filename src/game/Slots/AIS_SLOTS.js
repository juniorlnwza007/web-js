import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "48",
                    "GameName": "Infinity Stones",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/48.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "49",
                    "GameName": "Hoga",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/49.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "50",
                    "GameName": "Triton's Trove",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/50.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "51",
                    "GameName": "Thor Ragnarok",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/51.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "52",
                    "GameName": "Galactic Sign",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/52.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "29",
                    "GameName": "Visor of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/29.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "38",
                    "GameName": "Timun Mas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/38.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "34",
                    "GameName": "Naga's Blessing",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/34.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "37",
                    "GameName": "Forgotten Legend",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/37.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "36",
                    "GameName": "Emperor's Wealth",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/36.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "30",
                    "GameName": "Deity of The Sea",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/30.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "32",
                    "GameName": "Death Benediction",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/32.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "35",
                    "GameName": "Chamber of God",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/35.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "31",
                    "GameName": "Bounty",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/31.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "27",
                    "GameName": "Ambrosia",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/27.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "2",
                    "GameName": "National Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/2.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "1",
                    "GameName": "Nusantara Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/1.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "43",
                    "GameName": "Three Kings",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/43.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "40",
                    "GameName": "Lutung Kasarung",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/40.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "39",
                    "GameName": "Rainbow Arwana",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/39.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "42",
                    "GameName": "Fortune Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/42.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "41",
                    "GameName": "Kukulkan",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/41.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "45",
                    "GameName": "Queen of Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/45.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "44",
                    "GameName": "Cemilan",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/44.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "53",
                    "GameName": "Fluffy Fable",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/53.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "46",
                    "GameName": "Srikandi",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/46.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "47",
                    "GameName": "Margasatwa Park",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/47.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "54",
                    "GameName": "Crazy Rich Pinoy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/54.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "33",
                    "GameName": "Concubine's Lust",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AIS_SLOTS/33.webp",
                    "ProviderCode": "AIS_SLOTS",
                    "ProviderName": "AIS SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const AIS_SLOTS = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default AIS_SLOTS;