import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "150709",
                    "GameName": "Titan Strike",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150709.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150710",
                    "GameName": "Mystic Spells",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150710.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150711",
                    "GameName": "Viking Lock",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150711.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150712",
                    "GameName": "Wild Unicorns",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150712.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150713",
                    "GameName": "Devil's Deal",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150713.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150714",
                    "GameName": "Darkness",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150714.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150715",
                    "GameName": "Snakes Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150715.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150722",
                    "GameName": "Bonanza Falls",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150722.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150723",
                    "GameName": "Hercules 10K Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150723.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150725",
                    "GameName": "Bucks and Doe 10K Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150725.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150726",
                    "GameName": "21 Thor Lightning Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150726.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150727",
                    "GameName": "Pine of Plinko 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150727.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150728",
                    "GameName": "Christmas Catch",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150728.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150730",
                    "GameName": "Bill & Coin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150730.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150732",
                    "GameName": "Money Cart 4",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150732.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150733",
                    "GameName": "Panda Money",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150733.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150734",
                    "GameName": "Wins of Mermaid Multipower",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150734.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150735",
                    "GameName": "Cyber Vault",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150735.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150736",
                    "GameName": "Thor 10K Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150736.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150737",
                    "GameName": "Tarasque ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150737.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150738",
                    "GameName": "Sweetopia Royale",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150738.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150739",
                    "GameName": "Firewins Factory",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150739.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150740",
                    "GameName": "Gnomes & Giants",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150740.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150741",
                    "GameName": "Sultan Spins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150741.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150743",
                    "GameName": "Bonanza Megapays",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150743.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150744",
                    "GameName": "King of Cats",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150744.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150745",
                    "GameName": "Sanctuary",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150745.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150746",
                    "GameName": "Star Clusters Megapays",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150746.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150747",
                    "GameName": "Aussie vs Emus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150747.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150748",
                    "GameName": "Orca's Wild Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150748.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150749",
                    "GameName": "The Trolls'Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150749.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150750",
                    "GameName": "Pirate Multi Coins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150750.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150751",
                    "GameName": "High Card Flush",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150751.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150752",
                    "GameName": "Age of Huracan",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150752.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150753",
                    "GameName": "Big Bounty Bill",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150753.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150754",
                    "GameName": "Blazing Bull",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150754.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150755",
                    "GameName": "Blazing Bull 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150755.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150756",
                    "GameName": "Caribbean Anne",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150756.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150757",
                    "GameName": "Caribbean Anne 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150757.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150758",
                    "GameName": "Crystal Cavern",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150758.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150759",
                    "GameName": "Doctor Electro",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150759.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150760",
                    "GameName": "Ducks Till Dawn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150760.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150761",
                    "GameName": "Finnegans's Formula",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150761.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150762",
                    "GameName": "Goblins & Gemstones",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150762.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150763",
                    "GameName": "Hong Bao (Exclusive Relax Platform)",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150763.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150764",
                    "GameName": "Machina",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150764.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150765",
                    "GameName": "Maui Millions",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150765.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150766",
                    "GameName": "Midas Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150766.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150767",
                    "GameName": "Monkey God",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150767.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150768",
                    "GameName": "Operation: Diamond Hunt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150768.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150769",
                    "GameName": "Pyro Pixie",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150769.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150770",
                    "GameName": "Vegas Blast",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150770.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150771",
                    "GameName": "Zombie Queen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150771.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150772",
                    "GameName": "Bananaz 10k Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150772.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150774",
                    "GameName": "Fruit Combinator",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150774.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150775",
                    "GameName": "The Wild Drifter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150775.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150776",
                    "GameName": "Attila The Hun",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150776.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150777",
                    "GameName": "La Fiesta 5K",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150777.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150778",
                    "GameName": "La Fiesta 10K",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150778.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150779",
                    "GameName": "Plunderland 5K",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150779.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150780",
                    "GameName": "Plunderland 10K",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150780.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150781",
                    "GameName": "The Great Pigsby Megapays",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150781.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150782",
                    "GameName": "TNT Tumble 5K",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150782.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150783",
                    "GameName": "TNT Tumble 10K",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150783.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150784",
                    "GameName": "Wild Chapo 5K",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150784.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150785",
                    "GameName": "Wild Chapo 10K",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150785.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150786",
                    "GameName": "Payday Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150786.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150787",
                    "GameName": "Epic Dreams",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150787.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150788",
                    "GameName": "Curse of Ra",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150788.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150700",
                    "GameName": "Torii Tumble",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150700.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150707",
                    "GameName": "Joker Split",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150707.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150704",
                    "GameName": "Pinata Popper",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150704.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150662",
                    "GameName": "Sloth Tumble",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150662.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150213",
                    "GameName": "Temple Tumble",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150213.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150000",
                    "GameName": "6 Wild Sharks",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150000.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150003",
                    "GameName": "123 Boom!",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150003.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150004",
                    "GameName": "Royal Mint",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150004.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150005",
                    "GameName": "Donuts",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150005.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150010",
                    "GameName": "White Rabbit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150010.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150011",
                    "GameName": "KingMaker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150011.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150012",
                    "GameName": "Extra Chilli",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150012.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150013",
                    "GameName": "Opal Fruits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150013.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150014",
                    "GameName": "Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150014.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150017",
                    "GameName": "Slot Vegas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150017.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150018",
                    "GameName": "Star Clusters",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150018.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150019",
                    "GameName": "Book Of Gods",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150019.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150020",
                    "GameName": "White Rabbit (NFD)",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150020.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150021",
                    "GameName": "Extra Chilli (NFD)",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150021.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150022",
                    "GameName": "Lucky Streak Mk2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150022.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150023",
                    "GameName": "Chocolates",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150023.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150024",
                    "GameName": "Cyberslot Megaclusters",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150024.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150025",
                    "GameName": "Temple Quest Spinfinity",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150025.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150026",
                    "GameName": "Holy Diver",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150026.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150027",
                    "GameName": "Pop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150027.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150174",
                    "GameName": "Mermaid Reef",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150174.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150177",
                    "GameName": "Hypernova Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150177.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150178",
                    "GameName": "Dragon 50000",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150178.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150179",
                    "GameName": "Joker Super Reels ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150179.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150181",
                    "GameName": "Hypernova Radial Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150181.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150183",
                    "GameName": "Zodiac Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150183.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150187",
                    "GameName": "Caveman Bob",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150187.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150188",
                    "GameName": "Dragons Awakening",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150188.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150189",
                    "GameName": "Emerald's Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150189.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150190",
                    "GameName": "Epic Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150190.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150191",
                    "GameName": "Erik the Red",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150191.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150192",
                    "GameName": "Frequent Flyer",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150192.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150193",
                    "GameName": "Hellcatraz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150193.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150194",
                    "GameName": "Heroe's Gathering ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150194.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150195",
                    "GameName": "Ignite The Night",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150195.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150196",
                    "GameName": "Iron Bank",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150196.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150197",
                    "GameName": "It's Time",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150197.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150198",
                    "GameName": "King of Kings",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150198.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150199",
                    "GameName": "Kluster Krystals Megaclusters",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150199.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150200",
                    "GameName": "La Fiesta",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150200.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150201",
                    "GameName": "Let's get ready to Rumble",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150201.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150202",
                    "GameName": "Marching Legions",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150202.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150203",
                    "GameName": "Mega Flip",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150203.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150204",
                    "GameName": "Mega Masks",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150204.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150205",
                    "GameName": "Money Train",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150205.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150206",
                    "GameName": "Money Train 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150206.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150207",
                    "GameName": "Multiplier Odyssey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150207.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150208",
                    "GameName": "Powerspin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150208.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150209",
                    "GameName": "Ramses Revenge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150209.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150211",
                    "GameName": "Snake Arena",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150211.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150212",
                    "GameName": "Templar Tumble",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150212.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150214",
                    "GameName": "The Great Pigsby",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150214.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150215",
                    "GameName": "TNT Tumble",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150215.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150216",
                    "GameName": "Tower Tumble",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150216.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150217",
                    "GameName": "Wildchemy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150217.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150218",
                    "GameName": "Zombie Circus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150218.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150231",
                    "GameName": "Book of 99",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150231.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150232",
                    "GameName": "Sails of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150232.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150233",
                    "GameName": "Wild Chapo",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150233.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150235",
                    "GameName": "Top Dawg$",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150235.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150236",
                    "GameName": "Spirit of The Beast",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150236.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150237",
                    "GameName": "Chip Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150237.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150238",
                    "GameName": "Beef Lightning",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150238.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150239",
                    "GameName": "3 Secret Cities",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150239.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150242",
                    "GameName": "Money Cart 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150242.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150243",
                    "GameName": "Deep Descent",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150243.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150244",
                    "GameName": "Trolls Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150244.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150245",
                    "GameName": "Spicy Meatballs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150245.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150246",
                    "GameName": "Dragon Born",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150246.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150248",
                    "GameName": "Dead Man's Trail",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150248.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150249",
                    "GameName": "Volatile Vikings",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150249.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150250",
                    "GameName": "Helios Fury",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150250.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150251",
                    "GameName": "Mega Mine",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150251.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150252",
                    "GameName": "Pirate Pays",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150252.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150256",
                    "GameName": "Joker Jackpot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150256.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150257",
                    "GameName": "Super Boost",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150257.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150258",
                    "GameName": "Sherlock Bones",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150258.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150259",
                    "GameName": "Desert Shark",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150259.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150260",
                    "GameName": "Heroes Hunt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150260.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150261",
                    "GameName": "Twisted Turbine",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150261.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150262",
                    "GameName": "Serpent Shrine",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150262.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150263",
                    "GameName": "Maze Escape",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150263.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150264",
                    "GameName": "Elemento",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150264.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150265",
                    "GameName": "Golden Castle",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150265.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150266",
                    "GameName": "Hades River of Souls",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150266.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150267",
                    "GameName": "Bounty Showdown",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150267.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150268",
                    "GameName": "Heroes Hunt 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150268.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150290",
                    "GameName": "Fruit Strike",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150290.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150291",
                    "GameName": "Splendour Forest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150291.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150293",
                    "GameName": "Christmas Santa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150293.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150294",
                    "GameName": "Book of Destiny",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150294.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150295",
                    "GameName": "Crystal Golem",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150295.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150299",
                    "GameName": "Van Gogh",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150299.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150307",
                    "GameName": "10,000 Wonders",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150307.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150311",
                    "GameName": "Atlantis Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150311.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150312",
                    "GameName": "Big Bucks Bandits Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150312.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150316",
                    "GameName": "Cluster Tumble",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150316.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150318",
                    "GameName": "El Dorado Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150318.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150319",
                    "GameName": "Gems Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150319.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150320",
                    "GameName": "Giza Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150320.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150326",
                    "GameName": "Odin Infinity Reels Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150326.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150328",
                    "GameName": "Santa's Stack",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150328.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150331",
                    "GameName": "Thor Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150331.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150332",
                    "GameName": "Tiki Infinity Reels Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150332.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150333",
                    "GameName": "Towering Pays Valhalla",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150333.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150335",
                    "GameName": "Gems of Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150335.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150336",
                    "GameName": "Golden Gods",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150336.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150339",
                    "GameName": "Jaguar Super Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150339.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150340",
                    "GameName": "Lady Merlin Lightning Chase",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150340.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150341",
                    "GameName": "Legion Hot 1",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150341.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150342",
                    "GameName": "Medusa Hot 1",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150342.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150343",
                    "GameName": "Money Cart",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150343.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150344",
                    "GameName": "Money Mariachi Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150344.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150345",
                    "GameName": "Not Now Norman",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150345.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150346",
                    "GameName": "Olympus Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150346.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150347",
                    "GameName": "Royal Dragon Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150347.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150348",
                    "GameName": "Royal Potato",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150348.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150349",
                    "GameName": "Spirits of the Storm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150349.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150350",
                    "GameName": "Temple Frenzy Lightning Chase",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150350.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150351",
                    "GameName": "Towering Pays Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150351.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150352",
                    "GameName": "Valkyrie Wild Storm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150352.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150353",
                    "GameName": "Wild Joker Stacks",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150353.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150354",
                    "GameName": "Plunderland",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150354.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150355",
                    "GameName": "Medallion Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150355.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150356",
                    "GameName": "Star Pops",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150356.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150357",
                    "GameName": "Hazakura Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150357.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150358",
                    "GameName": "Golden Haul Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150358.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150359",
                    "GameName": "Arto And The Seven Deadly Spins Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150359.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150360",
                    "GameName": "Wild 9s",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150360.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150361",
                    "GameName": "Space Miners",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150361.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150362",
                    "GameName": "Beast Mode",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150362.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150363",
                    "GameName": "Tiger Kingdom Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150363.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150364",
                    "GameName": "Caravan of Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150364.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150365",
                    "GameName": "Apollo Pays",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150365.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150366",
                    "GameName": "Diamond Fruits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150366.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150367",
                    "GameName": "HEX",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150367.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150368",
                    "GameName": "Wild Esqueleto Lightning Chase",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150368.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150369",
                    "GameName": "Bounty 98 Hot 1",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150369.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150370",
                    "GameName": "Alice in Adventureland",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150370.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150371",
                    "GameName": "Super Massive Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150371.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150372",
                    "GameName": "7 Elements",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150372.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150374",
                    "GameName": "Jurassic Party",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150374.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150375",
                    "GameName": "Age of Beasts Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150375.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150376",
                    "GameName": "Magikspell",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150376.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150377",
                    "GameName": "Megaways Mob",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150377.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150378",
                    "GameName": "Alchemy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150378.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150379",
                    "GameName": "Out Of The Ice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150379.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150390",
                    "GameName": "Temple Tumble 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150390.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150391",
                    "GameName": "Midnight Marauder",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150391.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150392",
                    "GameName": "Golden Catch",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150392.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150393",
                    "GameName": "Treasure Pirates",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150393.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150464",
                    "GameName": "Clover Fortunes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150464.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150466",
                    "GameName": "Blender Blitz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150466.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150467",
                    "GameName": "Flower Fortunes Supreme",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150467.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150468",
                    "GameName": "Banana Town",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150468.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150469",
                    "GameName": "Spin Warrior Boom Pot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150469.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150470",
                    "GameName": "Wild Portals",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150470.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150506",
                    "GameName": "Checkmate Hot 1",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150506.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150516",
                    "GameName": "4 Secret Pyramids",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150516.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150517",
                    "GameName": "Crystal Wolf Lightning Chase",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150517.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150518",
                    "GameName": "Vegas Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150518.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150519",
                    "GameName": "Shamrock Money Pot 10K Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150519.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150529",
                    "GameName": "Lucky Money",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150529.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150530",
                    "GameName": "Dead Riders Trail",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150530.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150531",
                    "GameName": "Animal Carnival",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150531.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150532",
                    "GameName": "Wild Buccaneers Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150532.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150533",
                    "GameName": "Money Train 3",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150533.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150534",
                    "GameName": "4 Deals With The Devil",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150534.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150535",
                    "GameName": "ARRR! 10K Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150535.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150536",
                    "GameName": "Max Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150536.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150537",
                    "GameName": "Wild Donuts",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150537.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150538",
                    "GameName": "Diamonds",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150538.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150540",
                    "GameName": "Volatile Vikings 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150540.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150542",
                    "GameName": "Huntress: Wild Vengeance",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150542.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150543",
                    "GameName": "Great Pigsby Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150543.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150544",
                    "GameName": "Professor Clank's Combinator",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150544.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150545",
                    "GameName": "Castle of Terror",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150545.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150547",
                    "GameName": "Templar Tumble 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150547.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150548",
                    "GameName": "9K Kong in Vegas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150548.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150549",
                    "GameName": "Hot Rod Racers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150549.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150550",
                    "GameName": "Remember Remember",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150550.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150551",
                    "GameName": "Wild Yield",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150551.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150552",
                    "GameName": "Wins of Winter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150552.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150553",
                    "GameName": "Christmas Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150553.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150554",
                    "GameName": "Reapers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150554.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150556",
                    "GameName": "Net Gains",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150556.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150557",
                    "GameName": "Outlaw",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150557.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150558",
                    "GameName": "We$t Coa$t Ca$h Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150558.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150559",
                    "GameName": "Pine of Plinko",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150559.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150561",
                    "GameName": "Rasputin Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150561.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150625",
                    "GameName": "Towering Pays Excalibur",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150625.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150626",
                    "GameName": "Book of Power",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150626.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150627",
                    "GameName": "Grim The Splitter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150627.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150628",
                    "GameName": "Horror Hotel",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150628.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150629",
                    "GameName": "Volatile Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150629.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150630",
                    "GameName": "Gifts of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150630.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150631",
                    "GameName": "Wild Hike",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150631.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150632",
                    "GameName": "Wild Chapo 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150632.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150633",
                    "GameName": "Holy Hand Grenade",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150633.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150634",
                    "GameName": "Fortune Llama",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150634.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150637",
                    "GameName": "Neko Night",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150637.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150638",
                    "GameName": "Beellionaires",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150638.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150639",
                    "GameName": "Ticket to Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150639.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150640",
                    "GameName": "The Race",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150640.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150641",
                    "GameName": "Volcanic Strike",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150641.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150642",
                    "GameName": "Festival 10K Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150642.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150643",
                    "GameName": "Money Cart 3",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150643.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150644",
                    "GameName": "5K Gold Mine",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150644.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150645",
                    "GameName": "Over The Moon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150645.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150646",
                    "GameName": "Hellcatraz 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150646.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150647",
                    "GameName": "Mega Heist",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150647.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150648",
                    "GameName": "Fly Cat$",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150648.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150649",
                    "GameName": "Vegas Rush",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150649.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150650",
                    "GameName": "Dueling Jokers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150650.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150651",
                    "GameName": "Cash Defense",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150651.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150653",
                    "GameName": "Money Train Origins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150653.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150654",
                    "GameName": "Towering Ways Aztec",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150654.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150655",
                    "GameName": "Hyper Respins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150655.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150656",
                    "GameName": "Shark Wash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150656.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150657",
                    "GameName": "Everest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150657.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150658",
                    "GameName": "Big Bad Bison",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150658.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150659",
                    "GameName": "Rich Raptors",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150659.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150660",
                    "GameName": "5 Doggy Dollars",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150660.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150661",
                    "GameName": "Shinobi Spirit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150661.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150663",
                    "GameName": "Abrakadabra",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150663.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150696",
                    "GameName": "Max Megaways 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150696.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150697",
                    "GameName": "Joker Loot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150697.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150698",
                    "GameName": "5 Monsters",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150698.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150699",
                    "GameName": "Safari Sun",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150699.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150701",
                    "GameName": "Temple of Fury",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150701.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150702",
                    "GameName": "Cloverland Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150702.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150703",
                    "GameName": "Phoneix up Cash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150703.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150705",
                    "GameName": "Money Train 4",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150705.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150706",
                    "GameName": "Royal Potato 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/RELAX_SLOT/150706.webp",
                    "ProviderCode": "RELAX_SLOT",
                    "ProviderName": "RELAX SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const RELAX_SLOT = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default RELAX_SLOT;
