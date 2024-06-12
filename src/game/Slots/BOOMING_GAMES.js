import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "62053097befa3700135380a1",
                    "GameName": "Treasure Vault",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/62053097befa3700135380a1.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "6261c2b227d185001376cc68",
                    "GameName": "Roll the Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/6261c2b227d185001376cc68.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "6272e427a81ac80014974472",
                    "GameName": "The Jungle Empire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/6272e427a81ac80014974472.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "627384b0a81ac80010974472",
                    "GameName": "Starlight Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/627384b0a81ac80010974472.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "62bde4e756dc080014ae001e",
                    "GameName": "Let it Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/62bde4e756dc080014ae001e.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "62bde50056dc080011ae001e",
                    "GameName": "The Rodfather Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/62bde50056dc080011ae001e.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "62fe444a6db4f70014a6342d",
                    "GameName": "TNT Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/62fe444a6db4f70014a6342d.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "6304806e5f550b000e4eeaf1",
                    "GameName": "Golden Strawberries",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/6304806e5f550b000e4eeaf1.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "630dc4a95f550b000f4eeaf1",
                    "GameName": "The Mighty Toro",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/630dc4a95f550b000f4eeaf1.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "63205f57313c900016e560dd",
                    "GameName": "Super Duper",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/63205f57313c900016e560dd.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "633c437186f7f10001c8f847",
                    "GameName": "King Cobra",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/633c437186f7f10001c8f847.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "6346e6fb33c14000011d2f4b",
                    "GameName": "Go Bananza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/6346e6fb33c14000011d2f4b.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "634807c733c14000011d2f51",
                    "GameName": "Power of Olympus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/634807c733c14000011d2f51.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "63566b0c26625500019175d7",
                    "GameName": "Gold Gold Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/63566b0c26625500019175d7.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "6357e1bf23ea5a000133a3fe",
                    "GameName": "Payday Pig",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/6357e1bf23ea5a000133a3fe.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "6358de4723ea5a000133a404",
                    "GameName": "Piñata Wildz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/6358de4723ea5a000133a404.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "63b450475e59b8000118d58f",
                    "GameName": "Bamboo Wilds",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/63b450475e59b8000118d58f.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "580dc69068712a00a9000018",
                    "GameName": "Classico",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/580dc69068712a00a9000018.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "58231b3d381e0c00c400000d",
                    "GameName": "Booming Seven Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/58231b3d381e0c00c400000d.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "59316ea1f54229000900000c",
                    "GameName": "Valley of Pharaohs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/59316ea1f54229000900000c.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "594780d85f97bf001b000001",
                    "GameName": "Golden Profits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/594780d85f97bf001b000001.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "594791455f97bf001b00000d",
                    "GameName": "Booming Bananas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/594791455f97bf001b00000d.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "59677eea7d5d7c002400001c",
                    "GameName": "Vegas Wins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/59677eea7d5d7c002400001c.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "59b9221dbc5a81001700000a",
                    "GameName": "Wild Pride",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/59b9221dbc5a81001700000a.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5a007c32ed1496001100000d",
                    "GameName": "Royal Wins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5a007c32ed1496001100000d.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5a032814ed1496000800000f",
                    "GameName": "Big Apple Wins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5a032814ed1496000800000f.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5a37d2355397390011000013",
                    "GameName": "Paris Nights",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5a37d2355397390011000013.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5a37d2585397390020000013",
                    "GameName": "Asia Wins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5a37d2585397390020000013.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5ac73df903726f000e000190",
                    "GameName": "Wild Diamond 7x",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5ac73df903726f000e000190.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5b558e83ad47ec000d000066",
                    "GameName": "Disco Bar 7s",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5b558e83ad47ec000d000066.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5b8f8fc5408b77001600015d",
                    "GameName": "Sugar Skulls",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5b8f8fc5408b77001600015d.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5bc6f2806b226f000e0000ab",
                    "GameName": "Boomshakalaka",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5bc6f2806b226f000e0000ab.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5bd80c17b4d3b9000f00001b",
                    "GameName": "VIP Filthy Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5bd80c17b4d3b9000f00001b.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5c811b24362176000fa6a2e2",
                    "GameName": "Gold Vein",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5c811b24362176000fa6a2e2.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5ce681bb55e49c00148a86a5",
                    "GameName": "Aztec Palace",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5ce681bb55e49c00148a86a5.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5d2c76dfa15bc900160c6a30",
                    "GameName": "Witches' Wild Brew",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5d2c76dfa15bc900160c6a30.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5d7a278f0b32f4001923b215",
                    "GameName": "Danger Zone",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5d7a278f0b32f4001923b215.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5dba8c3e57fc8c001af595f7",
                    "GameName": "Wild Energy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5dba8c3e57fc8c001af595f7.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5de6616dfc94b4001af9e08e",
                    "GameName": "Arabian Spins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5de6616dfc94b4001af9e08e.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5dee2eb29db4d9001cd9ee9c",
                    "GameName": "Hooked",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5dee2eb29db4d9001cd9ee9c.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5e4b02abe711300015eb83e6",
                    "GameName": "Gunspinner",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5e4b02abe711300015eb83e6.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5e732986ba03bd00171b05bb",
                    "GameName": "Burning Classics",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5e732986ba03bd00171b05bb.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5e9dab9cd04d620016b4906e",
                    "GameName": "Howling Wolves",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5e9dab9cd04d620016b4906e.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5ec22e4ad04d620015b4906e",
                    "GameName": "Lucky Scarabs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5ec22e4ad04d620015b4906e.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5efc87eb737b430014d75bac",
                    "GameName": "Wombaroo",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5efc87eb737b430014d75bac.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5f0440d7737b43008ed75bab",
                    "GameName": "Jesters Joy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5f0440d7737b43008ed75bab.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5f3153ec737b43008ed75bb6",
                    "GameName": "Freezing Classics",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5f3153ec737b43008ed75bb6.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5f3510b5737b43001a2e8ff2",
                    "GameName": "Cash Pig",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5f3510b5737b43001a2e8ff2.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5f48c770f2a091001423728c",
                    "GameName": "Book of Tombs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5f48c770f2a091001423728c.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5f7ec229f7447a0018f91ae4",
                    "GameName": "Sphinx Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5f7ec229f7447a0018f91ae4.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5f9ad932f7447a001df72349",
                    "GameName": "Wizarding Wins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5f9ad932f7447a001df72349.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5fbb633befcba9001c85f940",
                    "GameName": "Diamond Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5fbb633befcba9001c85f940.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5fca4cf5efcba9001685f940",
                    "GameName": "Buffalo Hold and Win",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5fca4cf5efcba9001685f940.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "5ff41d50efcba9001a85f940",
                    "GameName": "Majestic Safari",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/5ff41d50efcba9001a85f940.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "6025058defcba9001885f942",
                    "GameName": "Gold Hunter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/6025058defcba9001885f942.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "602a6703efcba9001485f940",
                    "GameName": "Bang Bang",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/602a6703efcba9001485f940.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "604b38b89e1ee60016fdf21e",
                    "GameName": "Wild Wild Vegas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/604b38b89e1ee60016fdf21e.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "606d52719e1ee6001cfdf21e",
                    "GameName": "Greek Legends",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/606d52719e1ee6001cfdf21e.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "6087befc9e1ee6001afdf220",
                    "GameName": "Crystal Classics",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/6087befc9e1ee6001afdf220.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "6093eb819e1ee60017fdf21e",
                    "GameName": "Howling Wolves Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/6093eb819e1ee60017fdf21e.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "60ae48669e1ee60015fdf22a",
                    "GameName": "Red Hot Volcano",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/60ae48669e1ee60015fdf22a.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "60c8728fdbc1440017518e05",
                    "GameName": "Mighty Gorilla",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/60c8728fdbc1440017518e05.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "60e58c90dbc14400186d67d4",
                    "GameName": "Wild Bonus Re-Spins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/60e58c90dbc14400186d67d4.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "60faa3b0589d2900175cb98e",
                    "GameName": "Rhino Hold and Win ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/60faa3b0589d2900175cb98e.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "612776dfe58605001ac445e9",
                    "GameName": "Ocean Drive",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/612776dfe58605001ac445e9.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "6139c9740cc9a00015ece6fb",
                    "GameName": "Money Moose",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/6139c9740cc9a00015ece6fb.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "61616851befa370018538076",
                    "GameName": "Book of Poseidon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/61616851befa370018538076.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "61787a29befa370016538076",
                    "GameName": "Flaming Chilies",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/61787a29befa370016538076.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "61787b92befa370019538086",
                    "GameName": "Kim's Wild Journey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/61787b92befa370019538086.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "61787ba0befa370011538076",
                    "GameName": "Sticky Bombs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/61787ba0befa370011538076.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "61787bffbefa370011538086",
                    "GameName": "Blockchain Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/61787bffbefa370011538086.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "61debc32befa370011538096",
                    "GameName": "Khan's Wild Quest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/61debc32befa370011538096.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "6202363cbefa370016538086",
                    "GameName": "Gamblelicious Hold and Win ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/6202363cbefa370016538086.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "623dbc6a90e1870012b59236",
                    "GameName": "Legendary Diamonds",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/623dbc6a90e1870012b59236.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "623f4cee90e187000eb59236",
                    "GameName": "Monster Truck Madness",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/623f4cee90e187000eb59236.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "6256ba20584e2d001065a312",
                    "GameName": "Burning Classics go Wild ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/6256ba20584e2d001065a312.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "62738aa3a81ac8000e974472",
                    "GameName": "Crack the Bank Hold and Win ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/62738aa3a81ac8000e974472.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "628215226698440014bd3bd9",
                    "GameName": "The Wild Wings of Phoenix",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/628215226698440014bd3bd9.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "6294abf79b2d00000e180197",
                    "GameName": "Megahops Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/6294abf79b2d00000e180197.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "62e1137c76d612000c06bb20",
                    "GameName": "Dice Dice Baby",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/BOOMING_GAMES/62e1137c76d612000c06bb20.webp",
                    "ProviderCode": "BOOMING_GAMES",
                    "ProviderName": "BOOMING GAMES SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const BOOMING_GAMES = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default BOOMING_GAMES;