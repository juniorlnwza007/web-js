import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "231",
                    "GameName": "Striker WILD",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/231.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "241",
                    "GameName": "The Chicken House",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/241.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "242",
                    "GameName": "Treasure Pirate",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/242.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "243",
                    "GameName": "Mafia",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/243.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GB15",
                    "GameName": "Hero of the 3 Kingdoms - Cao Cao",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/GB15.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GB16",
                    "GameName": "CHICAGO 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/GB16.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "10",
                    "GameName": "Lucky Bats",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/10.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "1010",
                    "GameName": "Lucky Bats JP",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/1010.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "102",
                    "GameName": "FruityCarnival",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/102.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "103",
                    "GameName": "JewelLuxury",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/103.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "104",
                    "GameName": "ChickyParmParm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/104.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "105",
                    "GameName": "Jumping Mobile",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/105.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "1067",
                    "GameName": "Golden Eggs JP",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/1067.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "1074",
                    "GameName": "Treasure Bowl JP",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/1074.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "108",
                    "GameName": "Jump Higher mobile",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/108.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "109",
                    "GameName": "Rave Jump mobile",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/109.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "111",
                    "GameName": "Fly Out",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/111.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "112",
                    "GameName": "Pyramid Raider",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/112.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "113",
                    "GameName": "Flying Cai Shen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/113.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "115",
                    "GameName": "Snow Queen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/115.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "116",
                    "GameName": "Wonderland",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/116.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "117",
                    "GameName": "5 God beasts",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/117.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "118",
                    "GameName": "SkrSkr",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/118.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "12",
                    "GameName": "Treasure House",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/12.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "121",
                    "GameName": "Rave Jump 2 M",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/121.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "122",
                    "GameName": "Zuma Wild",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/122.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "123",
                    "GameName": "Lucky Bats M",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/123.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "124",
                    "GameName": "Invincible Elephant",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/124.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "125",
                    "GameName": "Zeus M",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/125.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "127",
                    "GameName": "God of War M",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/127.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "128",
                    "GameName": "WheelMoney",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/128.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "129",
                    "GameName": "Gu Gu Gu 2 M",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/129.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "13",
                    "GameName": "Sakura Legend",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/13.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "130",
                    "GameName": "Gold Stealer",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/130.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "131",
                    "GameName": "Fa Cai Shen M",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/131.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "132",
                    "GameName": "Meow",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/132.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "133",
                    "GameName": "Good Fortune M",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/133.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "135",
                    "GameName": "Gu Gu Gu M",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/135.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "136",
                    "GameName": "Running Animals",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/136.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "137",
                    "GameName": "Disco Night M",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/137.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "138",
                    "GameName": "Move n' Jump",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/138.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "139",
                    "GameName": "Fire Chibi M",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/139.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "140",
                    "GameName": "Fire Chibi 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/140.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "141",
                    "GameName": "Xmas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/141.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "142",
                    "GameName": "Hephaestus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/142.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "143",
                    "GameName": "Fa Cai Fu Wa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/143.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "144",
                    "GameName": "Diamond Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/144.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "146",
                    "GameName": "Sky Lantern",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/146.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "147",
                    "GameName": "Flower Fortunes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/147.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "148",
                    "GameName": "Fortune Totem",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/148.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "15",
                    "GameName": "GuGuGu",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/15.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "150",
                    "GameName": "Shou-Xin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/150.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "152",
                    "GameName": "Double Fly",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/152.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "153",
                    "GameName": "Six Candy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/153.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "154",
                    "GameName": "Kronos",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/154.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "157",
                    "GameName": "5 Boxing",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/157.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "16",
                    "GameName": "Super5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/16.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160",
                    "GameName": "Fa Cai Shen2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/160.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "161",
                    "GameName": "Hercules",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/161.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "163",
                    "GameName": "Ne Zha Advent",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/163.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "17",
                    "GameName": "Great Lion",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/17.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "171",
                    "GameName": "Greek Gods",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/171.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "173",
                    "GameName": "6 Toros",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/173.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "177",
                    "GameName": "Aladdin's lamp",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/177.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "179",
                    "GameName": "Jump High 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/179.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "180",
                    "GameName": "Gu Gu Gu 3",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/180.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "182",
                    "GameName": "Thor 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/182.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "183",
                    "GameName": "Wolf Disco",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/183.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "184",
                    "GameName": "Six Gacha",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/184.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "185",
                    "GameName": "Dragon Ball",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/185.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "186",
                    "GameName": "Fire Queen 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/186.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "187",
                    "GameName": "Wing Chun",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/187.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "188",
                    "GameName": "Cricket Fever",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/188.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "19",
                    "GameName": "Hot Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/19.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "194",
                    "GameName": "Fortune Dragon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/194.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "195",
                    "GameName": "Lord Ganesha",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/195.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "197",
                    "GameName": "Dragon’s Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/197.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "199",
                    "GameName": "Songkran Festival",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/199.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "2",
                    "GameName": "God Of Chess",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/2.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "20",
                    "GameName": "888",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/20.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "201",
                    "GameName": "MuayThai",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/201.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "202",
                    "GameName": "OrientalBeauty",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/202.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "203",
                    "GameName": "Rave High",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/203.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "204",
                    "GameName": "LuckyBoxes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/204.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "205",
                    "GameName": "DiscoNight",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/205.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "206",
                    "GameName": "Sweet POP",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/206.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "208",
                    "GameName": "Money Tree",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/208.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "209",
                    "GameName": "The Cupids",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/209.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "21",
                    "GameName": "Big Wolf",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/21.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "210",
                    "GameName": "Oo Ga Cha Ka",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/210.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "211",
                    "GameName": "King of Atlantis",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/211.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "212",
                    "GameName": "Burning Xi-You",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/212.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "214",
                    "GameName": "Ninja Raccoon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/214.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "215",
                    "GameName": "Hot Pinatas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/215.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "218",
                    "GameName": "Dollar Bomb",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/218.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "219",
                    "GameName": "King Kong Shake",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/219.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "22",
                    "GameName": "Monkey Office Legend",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/22.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "220",
                    "GameName": "Floating Market",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/220.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "221",
                    "GameName": "Detective Dee 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/221.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "222",
                    "GameName": "Loy Krathong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/222.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "223",
                    "GameName": "Acrobatics",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/223.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "225",
                    "GameName": "Mr. Miser",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/225.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "226",
                    "GameName": "Lucky Tigers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/226.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "227",
                    "GameName": "888 Cai Shen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/227.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "228",
                    "GameName": "Mirror Mirror",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/228.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "229",
                    "GameName": "Night City",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/229.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "23",
                    "GameName": "Yuan Bao",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/23.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "230",
                    "GameName": "Baseball Fever",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/230.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "24",
                    "GameName": "Rave Jump2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/24.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "26",
                    "GameName": "777",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/26.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "27",
                    "GameName": "Magic World",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/27.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "29",
                    "GameName": "WaterWorld",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/29.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "3",
                    "GameName": "Vampire Kiss",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/3.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "31",
                    "GameName": "God of War",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/31.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "32",
                    "GameName": "Detective Dee",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/32.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "33",
                    "GameName": "Fire Chibi",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/33.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "34",
                    "GameName": "Gophers War",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/34.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "35",
                    "GameName": "Crazy Nuozha",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/35.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "36",
                    "GameName": "Pub Tycoon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/36.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "38",
                    "GameName": "All Wilds",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/38.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "39",
                    "GameName": "Apsaras",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/39.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "4",
                    "GameName": "Wild Tarzan",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/4.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "42",
                    "GameName": "Sherlock Holmes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/42.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "44",
                    "GameName": "Fruit King II",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/44.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "46",
                    "GameName": "Wolf Moon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/46.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "47",
                    "GameName": "Pharaoh's Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/47.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "49",
                    "GameName": "Loneyly Planet",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/49.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5",
                    "GameName": "Mr. Rich",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/5.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "50",
                    "GameName": "Good Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/50.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5007",
                    "GameName": "Da Fa Cai",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/5007.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5008",
                    "GameName": "Da Hong Zhong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/5008.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5009",
                    "GameName": "Uproar In Heaven",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/5009.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "51",
                    "GameName": "Ecstatic Circus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/51.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "52",
                    "GameName": "Jump High",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/52.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "54",
                    "GameName": "Funny Alpaca",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/54.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "55",
                    "GameName": "Dragon Heart",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/55.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "57",
                    "GameName": "The Beast War",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/57.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "58",
                    "GameName": "Gu Gu Gu 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/58.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "59",
                    "GameName": "Summer Mood",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/59.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "64",
                    "GameName": "Zeus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/64.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "66",
                    "GameName": "Fire 777",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/66.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "67",
                    "GameName": "Golden Eggs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/67.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "68",
                    "GameName": "Wukong & Peaches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/68.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "69",
                    "GameName": "Fa Cai Shen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/69.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "7",
                    "GameName": "Rave Jump",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/7.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "70",
                    "GameName": "Wanbao Dino",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/70.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "72",
                    "GameName": "Happy Rich Year",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/72.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "74",
                    "GameName": "Treasure Bowl",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/74.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "76",
                    "GameName": "WonWonWon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/76.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "77",
                    "GameName": "Red Phoenix",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/77.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "78",
                    "GameName": "Apollo",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/78.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "79",
                    "GameName": "Chameleon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/79.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "8",
                    "GameName": "So Sweet",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/8.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "80",
                    "GameName": "Poseidon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/80.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "81",
                    "GameName": "Treasure Island",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/81.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "83",
                    "GameName": "Fire Queen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/83.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "86",
                    "GameName": "RunningToro",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/86.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "89",
                    "GameName": "Thor",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/89.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "9",
                    "GameName": "Zhong Kui",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/9.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "92",
                    "GameName": "World Cup Russia2018",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/92.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "95",
                    "GameName": "Football Boots",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/95.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "96",
                    "GameName": "Football Baby",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/96.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "98",
                    "GameName": "All Star Team",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/98.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "99",
                    "GameName": "Jump Higher",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/99.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AS01",
                    "GameName": "Boots of Luck",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/AS01.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AS02",
                    "GameName": "Cirque de fous",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/AS02.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AS03",
                    "GameName": "Dragon Hunters",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/AS03.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AS04",
                    "GameName": "Fortune Spirits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/AS04.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AS08",
                    "GameName": "Golden Mayan",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/AS08.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AS09",
                    "GameName": "Hollywood Pets",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/AS09.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AS10",
                    "GameName": "Lucky 3",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/AS10.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AS17",
                    "GameName": "Treasure of Seti",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/AS17.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AS18",
                    "GameName": "Wild Fudge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/AS18.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AS19",
                    "GameName": "Xmas Tales",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/AS19.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AS20",
                    "GameName": "Queen Of Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/AS20.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AS33",
                    "GameName": "Pig Of Luck",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/AS33.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GB12",
                    "GameName": "Myeong-ryang",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/GB12.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GB13",
                    "GameName": "Football Fever M",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/GB13.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GB2",
                    "GameName": "Monster Hunter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/GB2.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GB3",
                    "GameName": "Coin Spinner",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/GB3.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GB5",
                    "GameName": "Hot DJ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/GB5.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GB6",
                    "GameName": "Ganesha Jr.",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/GB6.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GB8",
                    "GameName": "Dragon Koi",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/GB8.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GB9",
                    "GameName": "Football Fever",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CQ9/GB9.webp",
                    "ProviderCode": "CQ9",
                    "ProviderName": "CQ9 SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const CQ9 = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default CQ9;