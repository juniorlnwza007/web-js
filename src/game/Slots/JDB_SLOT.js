import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "0-14085",
                    "GameName": "FRUITY BONANZA",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14085.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14086",
                    "GameName": "OPEN SESAME MEGA",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14086.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14087",
                    "GameName": "POP POP CANDY",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14087.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14089",
                    "GameName": "Dragon Soar",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14089.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14090",
                    "GameName": "Wealthway",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14090.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14091",
                    "GameName": "Piggy Bank",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14091.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14033",
                    "GameName": "BirdsParty",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14033.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14055",
                    "GameName": "Kong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14055.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14042",
                    "GameName": "TreasureBowl",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14042.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14045",
                    "GameName": "SuperNiubiDeluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14045.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14041",
                    "GameName": "Mjolnir",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14041.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14036",
                    "GameName": "SuperNiubi",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14036.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14077",
                    "GameName": "TrumpCard",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14077.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14027",
                    "GameName": "LuckySeven",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14027.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14047",
                    "GameName": "Moneybags Man",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14047.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14084",
                    "GameName": "CAISHEN COMING",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14084.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14079",
                    "GameName": "Moneybags Man 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14079.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8048",
                    "GameName": "OpenSesameII",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8048.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14061",
                    "GameName": "MayaGoldCrazy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14061.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14067",
                    "GameName": "Glamorous Girl",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14067.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14063",
                    "GameName": "BigThreeDragons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14063.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14065",
                    "GameName": "Blossom of Wealth",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14065.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14003",
                    "GameName": "Panda Panda",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14003.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14005",
                    "GameName": "Mr. Bao",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14005.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14006",
                    "GameName": "Billionaire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14006.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14007",
                    "GameName": "One Punch Man",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14007.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14008",
                    "GameName": "Dragon Warrior",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14008.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14010",
                    "GameName": "Dragon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14010.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14012",
                    "GameName": "Street Fighter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14012.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14016",
                    "GameName": "Kingsman",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14016.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14018",
                    "GameName": "Daji",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14018.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14021",
                    "GameName": "Rolling In Money",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14021.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14022",
                    "GameName": "Mining Upstart",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14022.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14025",
                    "GameName": "Lucky Racing",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14025.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14029",
                    "GameName": "OrientAnimals",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14029.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14030",
                    "GameName": "TripleKingKong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14030.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14034",
                    "GameName": "GoLaiFu",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14034.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14035",
                    "GameName": "DragonsWorld",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14035.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14038",
                    "GameName": "EgyptTreasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14038.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14039",
                    "GameName": "Fortune Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14039.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14040",
                    "GameName": "PirateTreasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14040.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14043",
                    "GameName": "GoldenDisco",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14043.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14044",
                    "GameName": "FunkyKingKong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14044.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14046",
                    "GameName": "MinerBabe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14046.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14048",
                    "GameName": "DoubleWilds",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14048.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14050",
                    "GameName": "Spindrift",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14050.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14051",
                    "GameName": "DragonsGate",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14051.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14052",
                    "GameName": "JungleJungle",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14052.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14053",
                    "GameName": "Spindrift2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14053.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14054",
                    "GameName": "LuckyDiamond",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14054.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14058",
                    "GameName": "Wonder Elephant",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14058.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14059",
                    "GameName": "MarvelousIV",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14059.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14060",
                    "GameName": "LanternWealth",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14060.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14064",
                    "GameName": "Boom Fiesta",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14064.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14068",
                    "GameName": "ProsperityTiger",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14068.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14070",
                    "GameName": "Book of Mystery",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14070.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14075",
                    "GameName": "Fortune Neko",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14075.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14080",
                    "GameName": "Elemental Link Fire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14080.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14081",
                    "GameName": "BIRDSPARTY DELUXE",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14081.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14082",
                    "GameName": "Elemental Link Water",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14082.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-14083",
                    "GameName": "CooCoo Farm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-14083.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-15001",
                    "GameName": "Rooster In Love",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-15001.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-15002",
                    "GameName": "Monkey King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-15002.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-15005",
                    "GameName": "Wealthy Fuwa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-15005.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-15010",
                    "GameName": "Chef Panda",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-15010.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-15012",
                    "GameName": "Legendary5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-15012.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8001",
                    "GameName": "Lucky Dragons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8001.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8002",
                    "GameName": "Flirting Scholar Tang",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8002.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8003",
                    "GameName": "Winning Mask",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8003.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8004",
                    "GameName": "Wukong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8004.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8005",
                    "GameName": "The Llama Adventure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8005.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8006",
                    "GameName": "Formosa Bear",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8006.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8007",
                    "GameName": "Lucky Qilin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8007.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8014",
                    "GameName": "Lucky Lion",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8014.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8015",
                    "GameName": "Moonlight Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8015.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8017",
                    "GameName": "New Year",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8017.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8018",
                    "GameName": "Napoleon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8018.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8019",
                    "GameName": "Four Treasures",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8019.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8020",
                    "GameName": "Open Sesame",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8020.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8021",
                    "GameName": "Banana Saga",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8021.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8022",
                    "GameName": "Mahjong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8022.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8023",
                    "GameName": "Olympian Temple",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8023.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8028",
                    "GameName": "Lucky Miner",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8028.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8035",
                    "GameName": "Lucky Phoenix",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8035.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8044",
                    "GameName": "Beauty And The Kingdom",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8044.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8046",
                    "GameName": "Guan Gong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8046.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8047",
                    "GameName": "Winning Mask II",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8047.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8049",
                    "GameName": "Flirting Scholar Tang II",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8049.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8050",
                    "GameName": "FortuneHorse",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8050.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "0-8051",
                    "GameName": "XiYangYang",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/JDB_SLOT/0-8051.webp",
                    "ProviderCode": "JDB_SLOT",
                    "ProviderName": "JDB SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const JDB_SLOT = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default JDB_SLOT;