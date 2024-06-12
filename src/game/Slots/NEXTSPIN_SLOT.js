import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "sMahDrg",
                    "GameName": "Mahjong Dragon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sMahDrg.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sMahPhe",
                    "GameName": "Mahjong Phoenix",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sMahPhe.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sAztecGolT",
                    "GameName": "Aztec Gold Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sAztecGolT.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sPrincessR",
                    "GameName": "Princess of Ra",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sPrincessR.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sRomaII",
                    "GameName": "Roma II",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sRomaII.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sCaiShen",
                    "GameName": "Big Cai Shen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sCaiShen.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sLightnDrg",
                    "GameName": "Lightning Dragon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sLightnDrg.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sRoma",
                    "GameName": "Roma",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sRoma.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sLongX3",
                    "GameName": "Long Long Long",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sLongX3.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "s7Dragons",
                    "GameName": "7 Dragons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/s7Dragons.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sLuckyGems",
                    "GameName": "Lucky Gems",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sLuckyGems.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sCandyBona",
                    "GameName": "Candy Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sCandyBona.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sBuffK",
                    "GameName": "Buffalo King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sBuffK.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sGolWest",
                    "GameName": "Golden West",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sGolWest.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sClaFruit7",
                    "GameName": "Classic Fruits 7",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sClaFruit7.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "s5ForStar",
                    "GameName": "5 Fortune Stars",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/s5ForStar.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sForToad",
                    "GameName": "Fortune Toad",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sForToad.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sHotSmash",
                    "GameName": "Hot Smash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sHotSmash.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sCandyXmas",
                    "GameName": "Candy Bonanza Xmas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sCandyXmas.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sLightnWmn",
                    "GameName": "Lightning Woman",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sLightnWmn.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sSweetLava",
                    "GameName": "Sweet Lava",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sSweetLava.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sGoldenFa",
                    "GameName": "Golden Fa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sGoldenFa.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sDiamond7",
                    "GameName": "Diamond 7",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sDiamond7.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sTaiga88",
                    "GameName": "Taiga 88",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sTaiga88.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sGoldenWar",
                    "GameName": "Golden War",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sGoldenWar.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sHighwayB",
                    "GameName": "Highway Bee",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sHighwayB.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sShkThaiX2",
                    "GameName": "Shake Thai Thai",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sShkThaiX2.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sCrazyMkDx",
                    "GameName": "Crazy Monkey Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sCrazyMkDx.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sMayaQuest",
                    "GameName": "Maya Quest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sMayaQuest.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sHolyGoat",
                    "GameName": "Holy Goat",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sHolyGoat.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sDrgBlitz",
                    "GameName": "Dragon Blitz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sDrgBlitz.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sJokerKing",
                    "GameName": "Joker King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sJokerKing.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sOceanChes",
                    "GameName": "Ocean Chest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sOceanChes.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sTriMnky",
                    "GameName": "Triple Monkey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sTriMnky.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sShkBoomX2",
                    "GameName": "Shake Boom Boom",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sShkBoomX2.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sEternalFi",
                    "GameName": "Eternal Fire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sEternalFi.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sSuperFor",
                    "GameName": "Super Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sSuperFor.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sHoney888",
                    "GameName": "Honey 888",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sHoney888.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sFruitTyc",
                    "GameName": "Fruit Tycoon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sFruitTyc.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "aDonkiKong",
                    "GameName": "Donki Kong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/aDonkiKong.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sDolphDive",
                    "GameName": "Dolphin Dive",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sDolphDive.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sRickyTyco",
                    "GameName": "Ricky Tycoon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sRickyTyco.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sTwinkleIc",
                    "GameName": "Twinkle Ice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sTwinkleIc.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sDblMnky",
                    "GameName": "Double Monkey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sDblMnky.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sCrazyMnky",
                    "GameName": "Crazy Monkey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sCrazyMnky.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sForestSec",
                    "GameName": "Forest Secret",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sForestSec.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sSoccerK",
                    "GameName": "Soccer King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sSoccerK.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sTriKfMnky",
                    "GameName": "Triple Kung Fu Monkey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sTriKfMnky.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sPrinCrime",
                    "GameName": "Princess of Crime",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sPrinCrime.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sMrHippo",
                    "GameName": "Mr. Hippo",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sMrHippo.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "aMnkyJump",
                    "GameName": "Monkey Jump",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/aMnkyJump.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "sProsDrg",
                    "GameName": "Prosperity Dragon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/NEXTSPIN_SLOT/sProsDrg.webp",
                    "ProviderCode": "NEXTSPIN_SLOT",
                    "ProviderName": "NEXTSPIN SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const NEXTSPIN_SLOT = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default NEXTSPIN_SLOT;