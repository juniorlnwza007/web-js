import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "bonanzav60000000",
                    "GameName": "Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/bonanzav60000000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "christmasnanzav1",
                    "GameName": "Christmas Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/christmasnanzav1.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "dangerhigltagev6",
                    "GameName": "Danger High Voltage",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/dangerhigltagev6.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "extrachilliv2000",
                    "GameName": "Extra Chilli",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/extrachilliv2000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "giftsoffortunev4",
                    "GameName": "Gifts of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/giftsoffortunev4.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "goldencatchv9000",
                    "GameName": "Golden Catch",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/goldencatchv9000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "maxmegaways2v100",
                    "GameName": "Max Megaways 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/maxmegaways2v100.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "maxmegawaysv1000",
                    "GameName": "Max Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/maxmegawaysv1000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "millionairev5000",
                    "GameName": "Millionaire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/millionairev5000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "outlawv100000000",
                    "GameName": "Outlaw",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/outlawv100000000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "overthemoonv1000",
                    "GameName": "Over The Moon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/overthemoonv1000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "starclustersv100",
                    "GameName": " Star Cluster",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/starclustersv100.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "theracev10000000",
                    "GameName": "The Race",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/theracev10000000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vegasmegawaysv10",
                    "GameName": "Vegas Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/vegasmegawaysv10.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "whiterabbitv4000",
                    "GameName": "White Rabbit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/whiterabbitv4000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wildportalsv1000",
                    "GameName": "Wild Portals",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/wildportalsv1000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "apollopaysv10000",
                    "GameName": "Apollo Pays DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/apollopaysv10000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "beeflightningv10",
                    "GameName": "Beef Lightning_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/beeflightningv10.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "bigbadbisonv1000",
                    "GameName": "Big Bad Bison DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/bigbadbisonv1000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "bonanzafallsv100",
                    "GameName": "Bonanza Falls_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/bonanzafallsv100.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "castleofterrorv1",
                    "GameName": "Castle Of Terror DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/castleofterrorv1.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "chocolatesv10000",
                    "GameName": "Chocolates_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/chocolatesv10000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "christmascatchv1",
                    "GameName": "Christmas Catch DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/christmascatchv1.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "diamondfruitsv10",
                    "GameName": "Diamond Fruits_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/diamondfruitsv10.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "donutsv100000000",
                    "GameName": "Donuts_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/donutsv100000000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "fireworksawaysv1",
                    "GameName": "Fireworks Megaways_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/fireworksawaysv1.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "goldmegawaysv100",
                    "GameName": "Gold Megaways DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/goldmegawaysv100.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "kingmakeroadedv1",
                    "GameName": "Kingmaker Fully Loaded_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/kingmakeroadedv1.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "kingofcatsv10000",
                    "GameName": "King of Cats Megaways_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/kingofcatsv10000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "lildevilv1000000",
                    "GameName": "Lil Devil_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/lildevilv1000000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "millionaierushv1",
                    "GameName": "Millionaire Rush_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/millionaierushv1.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "moreturkeyv10000",
                    "GameName": "More Turkey_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/moreturkeyv10000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "opalfruitsv10000",
                    "GameName": "Opal Fruits_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/opalfruitsv10000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "pandamoneyv10000",
                    "GameName": "Panda Money_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/pandamoneyv10000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "piratepaysv10000",
                    "GameName": "Pirate Pays DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/piratepaysv10000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "popv100000000000",
                    "GameName": "Pop DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/popv100000000000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "rasputinmegaways",
                    "GameName": "Rasputin Megaways DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/rasputinmegaways.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "royalmintv100000",
                    "GameName": "Royal Mint_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/royalmintv100000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sanctuaryv100000",
                    "GameName": "Sanctuary DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/sanctuaryv100000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "slotvegasoadedv1",
                    "GameName": "Slot Vegas - Fully Loaded DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/slotvegasoadedv1.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "spicymeatballsv1",
                    "GameName": "Spicy Meatballs_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/spicymeatballsv1.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "thefinalctdownv1",
                    "GameName": "The Final Countdown_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/thefinalctdownv1.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vegasrushv100000",
                    "GameName": "Vegas Rush_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/vegasrushv100000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wildflowerv10000",
                    "GameName": "Wild Flower_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/wildflowerv10000.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wildunicornsv100",
                    "GameName": "Wild Unicorns_V1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BTG_SLOT/wildunicornsv100.webp",
                    "ProviderCode": "BTG_SLOT",
                    "ProviderName": "BTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const BTG_SLOT = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default BTG_SLOT;