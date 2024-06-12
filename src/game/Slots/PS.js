import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "PSS-ON-00155",
                    "GameName": "PYRAMID OF FLAMES",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00155.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00151",
                    "GameName": "ATHENA-LUCKY SPREAD",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00151.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00152",
                    "GameName": "CAISHEN DADDY",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00152.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00153",
                    "GameName": "MYSTIC LEGEND 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00153.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00154",
                    "GameName": "SUPER LUCKY",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00154.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00150",
                    "GameName": "CAISHEN-LUCKY SPREAD",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00150.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00149",
                    "GameName": "LUCKY ACE",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00149.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00148",
                    "GameName": "SUGAR BOOM",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00148.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00147",
                    "GameName": "TREASURES OF AZTEC Z",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00147.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00146",
                    "GameName": "MAHJONG WAYS 3+",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00146.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00141",
                    "GameName": "Mahjong Ways 3",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00141.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSM-ON-00001",
                    "GameName": "Caishen Dao",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSM-ON-00001.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSM-ON-00002",
                    "GameName": "Gold Leopard",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSM-ON-00002.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSM-ON-00003",
                    "GameName": "Running Buffalo",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSM-ON-00003.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSM-ON-00004",
                    "GameName": "Giant Shark",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSM-ON-00004.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00005",
                    "GameName": "India Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00005.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00008",
                    "GameName": "Butterfly",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00008.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00009",
                    "GameName": "Madame Caroline",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00009.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00010",
                    "GameName": "Little Kingdom",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00010.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00011",
                    "GameName": "Shadow Shows",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00011.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00014",
                    "GameName": "Lucky Panda",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00014.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00015",
                    "GameName": "Who's The Boss",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00015.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00016",
                    "GameName": "Kung Hei",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00016.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00019",
                    "GameName": "The Empire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00019.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00024",
                    "GameName": "Fa Fa Monkey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00024.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00025",
                    "GameName": "777",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00025.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00026",
                    "GameName": "Double Happiness",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00026.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00028",
                    "GameName": "Athena",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00028.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00029",
                    "GameName": "Glorious Kingdom",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00029.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00033",
                    "GameName": "Fortune God",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00033.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00035",
                    "GameName": "Werewolf",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00035.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00038",
                    "GameName": "Face Off",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00038.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00044",
                    "GameName": "Fortune Teller",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00044.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00047",
                    "GameName": "Elephant",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00047.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00051",
                    "GameName": "Halloween",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00051.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00054",
                    "GameName": "Rich & Happy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00054.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00059",
                    "GameName": "Vampire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00059.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00065",
                    "GameName": "Super Rich",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00065.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00067",
                    "GameName": "Dragon Boat Festival",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00067.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00070",
                    "GameName": "Alchemy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00070.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00073",
                    "GameName": "Moon Festival",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00073.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00079",
                    "GameName": "Money Meow",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00079.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00083",
                    "GameName": "My Lord",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00083.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00085",
                    "GameName": "Aurora Wolf",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00085.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00086",
                    "GameName": "Santa Claus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00086.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00091",
                    "GameName": "SUPER POWERFUL",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00091.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00092",
                    "GameName": "TOMB TREASURE",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00092.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00093",
                    "GameName": "Love",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00093.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00094",
                    "GameName": "PS Club",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00094.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00095",
                    "GameName": "Hand Of God",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00095.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00096",
                    "GameName": "FORTUNE BULL",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00096.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00099",
                    "GameName": "CHALLENGE・MAYAN CALENDAR",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00099.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00100",
                    "GameName": "ZUMA",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00100.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00101",
                    "GameName": "CHALLENGE・FU LU SHOU XI",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00101.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00102",
                    "GameName": "Golden Week",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00102.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00104",
                    "GameName": "KungFu",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00104.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00105",
                    "GameName": "Challenge・Golden Pig",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00105.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00106",
                    "GameName": "WU XIA",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00106.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00107",
                    "GameName": "SUPER BOOM",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00107.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00108",
                    "GameName": "RAT OF WEALTH",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00108.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00110",
                    "GameName": "MASTER HAHA",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00110.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00111",
                    "GameName": "DA FU GUI",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00111.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00112",
                    "GameName": "Super Win",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00112.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00114",
                    "GameName": "FISH PRAWN CRAB",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00114.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00115",
                    "GameName": "WHAT THE FA",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00115.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00116",
                    "GameName": "Burlesque 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00116.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00119",
                    "GameName": "Lucky Poker 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00119.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00123",
                    "GameName": "GOLDEN ZONGZI",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00123.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00124",
                    "GameName": "DIAO CHAN FA DA CAI",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00124.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00127",
                    "GameName": "SUPER AWESOME",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00127.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00129",
                    "GameName": "GOLDEN JADE",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00129.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00131",
                    "GameName": "FANTASY SOUTHEAST ASIA",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00131.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00132",
                    "GameName": "CRAZY 777",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00132.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00133",
                    "GameName": "COIN MANIAC",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00133.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00135",
                    "GameName": "FEATURE BUY・GOLDEN PIG",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00135.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00136",
                    "GameName": "FEATURE BUY・CHRISTMAS EXPRESS",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00136.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00137",
                    "GameName": "FEATURE BUY・SUPER POWERFUL",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00137.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSS-ON-00139",
                    "GameName": "CHEF HUSKY",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSS-ON-00139.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSTM-ON-00001",
                    "GameName": "Lucky Koin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSTM-ON-00001.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PSTM-ON-00003",
                    "GameName": "LUCKY CRUSH",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PS/PSTM-ON-00003.webp",
                    "ProviderCode": "PS",
                    "ProviderName": "PLAYSTAR SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const PS = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default PS;