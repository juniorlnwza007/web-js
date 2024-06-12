import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "arcane0000000000",
                    "GameName": "Arcane: Reel Chaos",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/arcane0000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "archangels000000",
                    "GameName": "Archangels Salvation",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/archangels000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "beehivebonanza00",
                    "GameName": "Bee Hive Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/beehivebonanza00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "berryburst000000",
                    "GameName": "Berryburst",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/berryburst000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "berryburstmax000",
                    "GameName": "Berryburst MAX",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/berryburstmax000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "bollywoodstory00",
                    "GameName": "Bollywood Story",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/bollywoodstory00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "copycats00000000",
                    "GameName": "Copy Cats",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/copycats00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "corneliusf100000",
                    "GameName": "Cornelius",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/corneliusf100000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "cupcakesf1000000",
                    "GameName": "Cupcakes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/cupcakesf1000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "eastseadrgonking",
                    "GameName": "East Sea Dragon King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/eastseadrgonking.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "firesiege0000000",
                    "GameName": "Fire Siege Fortress",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/firesiege0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "flowerschristmas",
                    "GameName": "Flowers Christmas Edition",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/flowerschristmas.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "fruitsne00000000",
                    "GameName": "Fruit Case",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/fruitsne00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "funkmaster000000",
                    "GameName": "Funk Master",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/funkmaster000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ghostpirates0000",
                    "GameName": "Ghost Pirates",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/ghostpirates0000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "goldengrimoire00",
                    "GameName": "Golden Grimoire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/goldengrimoire00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "happyriches00000",
                    "GameName": "Happy Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/happyriches00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "hiddencoiofegypt",
                    "GameName": "Coins of Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/hiddencoiofegypt.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "hooksheroes00000",
                    "GameName": "Hook's Heroes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/hooksheroes00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "kingof3kingdoms0",
                    "GameName": "King of 3 Kingdoms",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/kingof3kingdoms0.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "letitburnr96f100",
                    "GameName": "Let It Burn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/letitburnr96f100.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "longpao000000000",
                    "GameName": "Long Pao",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/longpao000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "luckyangler00000",
                    "GameName": "Lucky Angler: A Snowy Catch",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/luckyangler00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "magicportals0000",
                    "GameName": "Magic Portals",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/magicportals0000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "milkshakexxr94f0",
                    "GameName": "Milkshake XXXtreme",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/milkshakexxr94f0.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "monkeys000000000",
                    "GameName": "Go Bananas!",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/monkeys000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "moonshine0000000",
                    "GameName": "Moonshine Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/moonshine0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "piratefrotheeast",
                    "GameName": "Pirate From the East",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/piratefrotheeast.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "reelrush20000000",
                    "GameName": "Reel Rush 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/reelrush20000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "robinhood0000000",
                    "GameName": "Robin Hood: Shifting Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/robinhood0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "santavsrudolf000",
                    "GameName": "Santa vs Rudolf",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/santavsrudolf000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sparks0000000000",
                    "GameName": "Sparks",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/sparks0000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "spinsane00000000",
                    "GameName": "Spinsane",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/spinsane00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "stickers00000000",
                    "GameName": "Stickers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/stickers00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "strollingstaxx00",
                    "GameName": "Strolling Staxx: Cubic Fruits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/strollingstaxx00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "superstarsf10000",
                    "GameName": "Superstars",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/superstarsf10000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "superstrikerf100",
                    "GameName": "Super Striker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/superstrikerf100.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "swipe00000000000",
                    "GameName": "Swipe and Roll",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/swipe00000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "templeofnudges00",
                    "GameName": "Temple of Nudges",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/templeofnudges00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "themepark0000000",
                    "GameName": "Theme Park: Tickets of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/themepark0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "twinhappiness000",
                    "GameName": "Twin Happiness",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/twinhappiness000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "twinspindeluxe00",
                    "GameName": "Twin Spin Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/twinspindeluxe00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "whosthebride0000",
                    "GameName": "Who's the Bride",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/whosthebride0000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wildotron3000000",
                    "GameName": "Wild-O-Tron 3000",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/wildotron3000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wildturkey000000",
                    "GameName": "Wild Turkey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/wildturkey000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wishmasteroct000",
                    "GameName": "The Wish Master",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/wishmasteroct000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "witchcrafacademy",
                    "GameName": "Witchcraft Academy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/witchcrafacademy.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wizards000000000",
                    "GameName": "Spellcast",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/wizards000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wonderlanotector",
                    "GameName": "Wonderland Protector",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/wonderlanotector.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wondersofmasr2f0",
                    "GameName": "Wonders of Christmas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/wondersofmasr2f0.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wondersofstmasf0",
                    "GameName": "Wonders of Christmas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/wondersofstmasf0.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "alohaj0r00000000",
                    "GameName": "Aloha! Cluster Pays",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/alohaj0r00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "alohaxmas0000000",
                    "GameName": "Aloha! Christmas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/alohaxmas0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "asgardianstones0",
                    "GameName": "Asgardian Stones",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/asgardianstones0.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "blacklagoon00000",
                    "GameName": "Creature from the Black Lagoon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/blacklagoon00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "bloodsuckers0000",
                    "GameName": "Blood Suckers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/bloodsuckers0000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "bloodsuckers2000",
                    "GameName": "Blood Suckers II",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/bloodsuckers2000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "bloodsuckersj0r2",
                    "GameName": "Blood Suckers™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/bloodsuckersj0r2.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "butterflystaxx00",
                    "GameName": "Butterfly Staxx",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/butterflystaxx00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "butterflystaxx20",
                    "GameName": "Butterfly Staxx 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/butterflystaxx20.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "cashnoire0000000",
                    "GameName": "Cash Noire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/cashnoire0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "cashomatic000000",
                    "GameName": "Cash-o-Matic",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/cashomatic000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "codexoffortune00",
                    "GameName": "Codex of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/codexoffortune00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "colossalpinatas0",
                    "GameName": "Spinata Grande",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/colossalpinatas0.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "darkking00000000",
                    "GameName": "Dark King: Forbidden Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/darkking00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "dazzle0000000000",
                    "GameName": "Dazzle Me",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/dazzle0000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "dazzlemwr3000000",
                    "GameName": "Dazzle Me Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/dazzlemwr3000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "deadoralive00000",
                    "GameName": "Dead or Alive",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/deadoralive00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "deadoralive20000",
                    "GameName": "Dead or Alive 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/deadoralive20000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "deadoralive2fb00",
                    "GameName": "Dead or Alive 2 Feature Buy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/deadoralive2fb00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "discodanny000000",
                    "GameName": "Disco Danny",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/discodanny000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "divinemegaways00",
                    "GameName": "Divine Fortune Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/divinemegaways00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "doublestacks0000",
                    "GameName": "Double Stacks",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/doublestacks0000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "dracula000000000",
                    "GameName": "Dracula",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/dracula000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "druidsdream00000",
                    "GameName": "Druids' Dream",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/druidsdream00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "eggomatic0000000",
                    "GameName": "EggOMatic",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/eggomatic0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "eldorado00000000",
                    "GameName": "Gonzo's Quest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/eldorado00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "elements00000000",
                    "GameName": "Elements: The Awakening",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/elements00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "excalibur0000000",
                    "GameName": "Excalibur",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/excalibur0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "fairyhansel00000",
                    "GameName": "Fairytale Legends: Hansel and Gretel",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/fairyhansel00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "fairymirror00000",
                    "GameName": "Fairytale Legends: Mirror Mirror",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/fairymirror00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "fairyred00000000",
                    "GameName": "Fairytale Legends: Red Riding Hood",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/fairyred00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "finn000000000000",
                    "GameName": "Finn and the Swirly Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/finn000000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "fireflies0000000",
                    "GameName": "Lights",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/fireflies0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "flowers000000000",
                    "GameName": "Flowers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/flowers000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "football00000000",
                    "GameName": "Football: Champions Cup",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/football00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "fruitblazef1r300",
                    "GameName": "Fruit Blaze",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/fruitblazef1r300.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "fruitshop0000000",
                    "GameName": "Fruit Shop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/fruitshop0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "fruitshopawaysr1",
                    "GameName": "Fruit Shop Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/fruitshopawaysr1.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "fruitshopchristm",
                    "GameName": "Fruit Shop Christmas Edition",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/fruitshopchristm.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "funkmaster00000",
                    "GameName": "funkmaster00000",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/funkmaster00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "godsofgold000000",
                    "GameName": "Gods Of Gold: InfiniReels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/godsofgold000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "goldentavern0000",
                    "GameName": "Finn's Golden Tavern",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/goldentavern0000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "gonzosgoldr30000",
                    "GameName": "Gonzo’s Gold™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/gonzosgoldr30000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "gorillakingdom00",
                    "GameName": "Gorilla Kingdom",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/gorillakingdom00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "grandspinn000000",
                    "GameName": "Grand Spinn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/grandspinn000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "gunsnroses000000",
                    "GameName": "Guns N' Roses Video Slots",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/gunsnroses000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "halloweenjack000",
                    "GameName": "Halloween Jack",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/halloweenjack000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "hellskitchenr300",
                    "GameName": "Gordon Ramsay Hell’s Kitchen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/hellskitchenr300.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "highlights000000",
                    "GameName": "Secrets of Atlantis",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/highlights000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "hotline000000000",
                    "GameName": "Hotline",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/hotline000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "hotline2f1g10000",
                    "GameName": "Hotline 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/hotline2f1g10000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "invisibleman0000",
                    "GameName": "The Invisible Man",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/invisibleman0000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "irishpotluck0000",
                    "GameName": "Irish Pot Luck",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/irishpotluck0000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "jackandbeanstalk",
                    "GameName": "Jack and the Beanstalk",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/jackandbeanstalk.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "jackhammer000000",
                    "GameName": "Jack Hammer",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/jackhammer000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "jackhammer200000",
                    "GameName": "Jack Hammer 2: Fishy Business",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/jackhammer200000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "jackpot600000000",
                    "GameName": "Jackpot 6000",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/jackpot600000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "jewelfruits00000",
                    "GameName": "Fruit Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/jewelfruits00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "jimihendrix00000",
                    "GameName": "Jimi Hendrix Online Slot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/jimihendrix00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "jinglespin000000",
                    "GameName": "Jingle Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/jinglespin000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "jokerpro00000000",
                    "GameName": "Joker Pro",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/jokerpro00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "jumanji000000000",
                    "GameName": "Jumanji",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/jumanji000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "junglespirit0000",
                    "GameName": "Jungle Spirit: Call of the Wild",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/junglespirit0000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "kingofslots00000",
                    "GameName": "King of Slots",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/kingofslots00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "knightrider00000",
                    "GameName": "Knight Rider™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/knightrider00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "koiprincess00000",
                    "GameName": "Koi Princess",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/koiprincess00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "lostrelics000000",
                    "GameName": "Lost Relics",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/lostrelics000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "magicmaidcafe000",
                    "GameName": "Magic Maid Cafe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/magicmaidcafe000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "motorhead0000000",
                    "GameName": "Motorhead Video Slot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/motorhead0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "multipliermayhem",
                    "GameName": "Drive: Multiplier Mayhem",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/multipliermayhem.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "mythicmaiden0000",
                    "GameName": "Mythic Maiden",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/mythicmaiden0000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "narcos0000000000",
                    "GameName": "Narcos",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/narcos0000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "neonstaxx0000000",
                    "GameName": "Neon Staxx",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/neonstaxx0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "oceanstreasure00",
                    "GameName": "Ocean's Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/oceanstreasure00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ozzy000000000000",
                    "GameName": "Ozzy Osbourne Video Slots",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/ozzy000000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "parthenonr100000",
                    "GameName": "Parthenon: Quest for Immortality",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/parthenonr100000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "piggyriches00000",
                    "GameName": "Piggy Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/piggyriches00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "pyramid000000000",
                    "GameName": "Pyramid: Quest for Immortality",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/pyramid000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "rageoftheseas000",
                    "GameName": "Rage of the Seas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/rageoftheseas000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "reefraiderr30000",
                    "GameName": "Reef Raider\t",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/reefraiderr30000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "reelrush00000000",
                    "GameName": "Reel Rush",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/reelrush00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "reelsteal0000000",
                    "GameName": "Reel Steal™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/reelsteal0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "richesofmdgardf1",
                    "GameName": "Riches of Midgard: Land and Expand",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/richesofmdgardf1.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "riseofmaya000000",
                    "GameName": "Rise of Maya",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/riseofmaya000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "romer20000000000",
                    "GameName": "Rome: The Golden Age",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/romer20000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "scruffyduck00000",
                    "GameName": "Scruffy Duck",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/scruffyduck00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "scudamore0000000",
                    "GameName": "Scudamore's Super Stakes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/scudamore0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "secretofthestone",
                    "GameName": "Secret of the Stones",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/secretofthestone.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "secretsofchristm",
                    "GameName": "Secrets of Christmas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/secretsofchristm.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "serengetikings00",
                    "GameName": "Serengeti Kings",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/serengetikings00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "shangrila0000000",
                    "GameName": "The Legend of Shangri-La: Cluster Pays",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/shangrila0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "silverback000000",
                    "GameName": "Silverback Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/silverback000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "spacewars0000000",
                    "GameName": "Space Wars",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/spacewars0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "spacewars2000000",
                    "GameName": "Space Wars 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/spacewars2000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "starburst0000000",
                    "GameName": "Starburst",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/starburst0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "starbursttremef1",
                    "GameName": "Starburst XXXtreme",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/starbursttremef1.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "steamtower000000",
                    "GameName": "Steam Tower",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/steamtower000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "streetfighter200",
                    "GameName": "Street Fighter II: The World Warrior Slot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/streetfighter200.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "streetfighter2f1",
                    "GameName": "Street Fighter™ II: The World Warrior Slot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/streetfighter2f1.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "superstriker0000",
                    "GameName": "Super Striker™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/superstriker0000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sweetyhoneyfruit",
                    "GameName": "Sweety Honey Fruity™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/sweetyhoneyfruit.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "thewolfsnight000",
                    "GameName": "The Wolf's Bane™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/thewolfsnight000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "trollpot00000000",
                    "GameName": "Trollpot 5000™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/trollpot00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "turnyourfortune0",
                    "GameName": "Turn Your Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/turnyourfortune0.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "twinspin00000000",
                    "GameName": "Twin Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/twinspin00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "twinspinmw000000",
                    "GameName": "Twin Spin Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/twinspinmw000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "victorious000000",
                    "GameName": "Victorious",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/victorious000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vikings000000000",
                    "GameName": "Vikings Video Slot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/vikings000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "warlords00000000",
                    "GameName": "Warlords: Crystals of Power",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/warlords00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wildbazaar000000",
                    "GameName": "Wild Bazaar™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/wildbazaar000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wilderland000000",
                    "GameName": "Wilderland™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/wilderland000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wildwater0000000",
                    "GameName": "Wild Water",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/wildwater0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wildwildwest0000",
                    "GameName": "Wild Wild West: The Great Train Heist",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/wildwildwest0000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wildworlds000000",
                    "GameName": "Wild Worlds",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/wildworlds000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "willyshotchillie",
                    "GameName": "Willy's Hot Chillies",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/willyshotchillie.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wingsofriches000",
                    "GameName": "Wings of Riches™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/wingsofriches000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wolfcub000000000",
                    "GameName": "Wolf Cub™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/wolfcub000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "101candiesr96f00",
                    "GameName": "101 Candies_R96_F0 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/101candiesr96f00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "101candiesr96f10",
                    "GameName": "101 Candies_R96_F1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/101candiesr96f10.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "aloha00000000000",
                    "GameName": "Aloha! Cluster Pays DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/aloha00000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "beachinvaders000",
                    "GameName": "Beach Invaders DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/beachinvaders000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "bigbangboomr96f1",
                    "GameName": "Big Bang Boom_R96_F1_DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/bigbangboomr96f1.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "buckshotwilr96f1",
                    "GameName": "Buckshot Wilds R96_F1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/buckshotwilr96f1.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "bustersboesr96f1",
                    "GameName": "Buster's Bones_R96_F1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/bustersboesr96f1.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "crabtrapr96f1000",
                    "GameName": "Crab Trap_R96_F1_DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/crabtrapr96f1000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "cursedtreasr96f1",
                    "GameName": "Cursed Treasure_R96_F1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/cursedtreasr96f1.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "dazzlemw00000000",
                    "GameName": "Dazzle Me Megaways DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/dazzlemw00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "donteatthecandy0",
                    "GameName": "Don’t Eat the Candy™ DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/donteatthecandy0.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "druidsmagic00000",
                    "GameName": "Druid's Magic DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/druidsmagic00000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "elkhunterr96f100",
                    "GameName": "Elk Hunter R96_F1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/elkhunterr96f100.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "finncandyspr96f1",
                    "GameName": "Finn And the Candy Spin_R96_F1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/finncandyspr96f1.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "fortunerangers00",
                    "GameName": "Fortune Rangers DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/fortunerangers00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "fruitshopfrenzy0",
                    "GameName": "Fruit Shop Frenzy DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/fruitshopfrenzy0.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "fruitshopmegaway",
                    "GameName": "Fruit Shop Megaways DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/fruitshopmegaway.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "gemcrush00000000",
                    "GameName": "Gem Crush DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/gemcrush00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "goldenwheelr96f1",
                    "GameName": "Golden Wheels of Egypt™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/goldenwheelr96f1.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "goodold7s0000000",
                    "GameName": "Good Old 7’s DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/goodold7s0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "hellskitchen0000",
                    "GameName": "Gordon Ramsay Hell's Kitchen DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/hellskitchen0000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "hotline200000000",
                    "GameName": "Hotline 2 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/hotline200000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "jackandbeanr96f1",
                    "GameName": "Jack and the Beanstalk Remastered DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/jackandbeanr96f1.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "jackhammer3r96f1",
                    "GameName": "Jack Hammer™ 3: Diamond Affair",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/jackhammer3r96f1.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "jellybellymegawa",
                    "GameName": "Jelly Belly™ MegaWays™ DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/jellybellymegawa.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "jinglebellsbonan",
                    "GameName": "Jingle Bells Bonanza DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/jinglebellsbonan.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "leprechaunjoy000",
                    "GameName": "Leprechaun Joy™ DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/leprechaunjoy000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "lightscameracash",
                    "GameName": "Lights Camera Cash DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/lightscameracash.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "lockandpopr88f00",
                    "GameName": "Lock And Pop_R88_F0 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/lockandpopr88f00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "lockandpopr94f00",
                    "GameName": "Lock And Pop_R94_F0 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/lockandpopr94f00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "lockandpopr94f10",
                    "GameName": "Lock And Pop_R94_F1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/lockandpopr94f10.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "lockandpopr96f00",
                    "GameName": "Lock And Pop_R96_F0 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/lockandpopr96f00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "lockandpopr96f10",
                    "GameName": "Lock And Pop_R96_F1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/lockandpopr96f10.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "lostrelics200000",
                    "GameName": "Lost Relics 2 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/lostrelics200000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "magiclab00000000",
                    "GameName": "Magic Lab DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/magiclab00000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "milkshakexxr96f1",
                    "GameName": "Milkshake XXXtreme_R96_F1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/milkshakexxr96f1.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "parthenon0000000",
                    "GameName": "Parthenon: Quest for Immortality DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/parthenon0000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "piratesparty0000",
                    "GameName": "Pirates Party DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/piratesparty0000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "rager96f10000000",
                    "GameName": "Rage_R96_F1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/rager96f10000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "rainforestgold00",
                    "GameName": "Rainforest Gold™ DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/rainforestgold00.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "richesofmidgard0",
                    "GameName": "Riches of Midgard: Land and Expand DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/richesofmidgard0.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "rome000000000000",
                    "GameName": "Rome: The Golden Age DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/rome000000000000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "tacofuryr96f1000",
                    "GameName": "Taco Fury Xxxtreme_R96_F1_DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/tacofuryr96f1000.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "thewishmastermeg",
                    "GameName": "The Wish Master Megaways DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/thewishmastermeg.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "thrilltogrir96f0",
                    "GameName": "Thrill to Grill_R96_F0 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/thrilltogrir96f0.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "thrilltogrir96f1",
                    "GameName": "Thrill to Grill_R96_F1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/thrilltogrir96f1.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "twinspinextr96f1",
                    "GameName": "Twin Spin XXXtreme_R96_F1 DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/twinspinextr96f1.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "wildturkeymegawa",
                    "GameName": "Wild Turkey Megaways DNT",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NETENT/wildturkeymegawa.webp",
                    "ProviderCode": "NETENT",
                    "ProviderName": "NETENT SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const NETENT = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default NETENT;