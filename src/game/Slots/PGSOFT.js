import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
  "ProviderData": [
    {
      "GameList": [
        {
          "GameCode": "1397455",
          "GameName": "Fruity Candy",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1397455.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1432733",
          "GameName": "Mystical Spirits",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1432733.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1448762",
          "GameName": "Songkran Splash",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1448762.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1451122",
          "GameName": "Dragon Hatch 2",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1451122.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1473388",
          "GameName": "Cruise Royale",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1473388.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1489936",
          "GameName": "Ultimate Striker",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1489936.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1513328",
          "GameName": "Super Golf Drive",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1513328.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1529867",
          "GameName": "Ninja Racoon Frenzy",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1529867.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1555350",
          "GameName": "Forge of Wealth",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1555350.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1568554",
          "GameName": "Wild Heist Cashout",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1568554.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1572362",
          "GameName": "Gladiator's Glorye",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1572362.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1580541",
          "GameName": "Mafia Mayhem",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1580541.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1601012",
          "GameName": "Lucky Clover Lady",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1601012.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1615454",
          "GameName": "Werewolf's Hunt",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1615454.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1655268",
          "GameName": "Tsar Treasures",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1655268.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1695365",
          "GameName": "Fortune Dragon",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1695365.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "74",
          "GameName": "Mahjong Ways 2",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/74.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "65",
          "GameName": "Mahjong Ways",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/65.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "89",
          "GameName": "Lucky Neko",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/89.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "87",
          "GameName": "Treasures of Aztec",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/87.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "104",
          "GameName": "Wild Bandito",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/104.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "106",
          "GameName": "Ways of the Qilin",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/106.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "79",
          "GameName": "Dreams of Macau",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/79.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "71",
          "GameName": "Caishen Wins",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/71.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "110",
          "GameName": "Jurassic Kingdom",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/110.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "117",
          "GameName": "Cocktail Nights",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/117.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "75",
          "GameName": "Ganesha Fortune",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/75.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "53",
          "GameName": "The Great Icescape",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/53.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "57",
          "GameName": "Dragon Hatch",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/57.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "60",
          "GameName": "Leprechaun Riches",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/60.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "62",
          "GameName": "Gem Saviour Conquest",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/62.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "84",
          "GameName": "Queen of Bounty",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/84.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "92",
          "GameName": "Thai River Wonders",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/92.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "119",
          "GameName": "Spirited Wonders",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/119.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "83",
          "GameName": "Wild Fireworks",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/83.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "115",
          "GameName": "Supermarket Spree",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/115.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "95",
          "GameName": "Majestic Treasures",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/95.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "73",
          "GameName": "Egypt's Book of Mystery",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/73.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "101",
          "GameName": "Rise of Apollo",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/101.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "112",
          "GameName": "Oriental Prosperity",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/112.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "100",
          "GameName": "Candy Bonanza",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/100.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "54",
          "GameName": "Captain's Bounty",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/54.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "98",
          "GameName": "Fortune Ox",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/98.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "103",
          "GameName": "Crypto Gold",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/103.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "82",
          "GameName": "Phoenix Rises",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/82.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "105",
          "GameName": "Heist  Stakes",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/105.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1",
          "GameName": "Honey Trap of Diao Chan",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "102",
          "GameName": "Mermaid Riches",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/102.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "107",
          "GameName": "Legendary Monkey King",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/107.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "108",
          "GameName": "Buffalo Win",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/108.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "11",
          "GameName": "American Blackjack",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/11.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "113",
          "GameName": "Raider Jane's Crypt of Fortune",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/113.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "114",
          "GameName": "Emoji Riches",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/114.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "118",
          "GameName": "Mask Carnival",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/118.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "12",
          "GameName": "European Blackjack",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/12.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "120",
          "GameName": "The Queen's Banquet",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/120.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "121",
          "GameName": "Destiny of Sun & Moon",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/121.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "122",
          "GameName": "Garuda Gems",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/122.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "123",
          "GameName": "Rooster Rumble",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/123.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "124",
          "GameName": "Battleground Royale",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/124.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "125",
          "GameName": "Butterfly Blossom",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/125.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "126",
          "GameName": "Fortune Tiger",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/126.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "127",
          "GameName": "Speed Winner",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/127.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "128",
          "GameName": "Legend of Perseus",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/128.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "129",
          "GameName": "Win Win Fish Prawn Crab",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/129.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "130",
          "GameName": "Lucky Piggy",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/130.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1312883",
          "GameName": "Prosperity Fortune Tree",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1312883.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "132",
          "GameName": "Wild Coaster",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/132.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1338274",
          "GameName": "Totem Wonders",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1338274.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1340277",
          "GameName": "Asgardian Rising",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1340277.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "135",
          "GameName": "Wild Bounty Showdown",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/135.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1368367",
          "GameName": "Alchemy Gold",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1368367.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1372643",
          "GameName": "Diner Delights",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1372643.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1381200",
          "GameName": "Hawaiian Tiki",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1381200.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1402846",
          "GameName": "Midas Fortune",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1402846.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1418544",
          "GameName": "Bakery Bonanza",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1418544.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1420892",
          "GameName": "Rave Party Fever",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1420892.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1543462",
          "GameName": "Fortune Rabbit",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1543462.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "18",
          "GameName": "Hood vs Wolf",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/18.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "2",
          "GameName": "Gem Saviour",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/2.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "20",
          "GameName": "Reel Love",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/20.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "23",
          "GameName": "Fortune Gods - Mystical Treasure Jackpot",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/23.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "24",
          "GameName": "Win Win Won",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/24.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "25",
          "GameName": "Plushie Frenzy",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/25.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "26",
          "GameName": "Tree of Fortune",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/26.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "28",
          "GameName": "Hotpot",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/28.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "29",
          "GameName": "Dragon Legend",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/29.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "3",
          "GameName": "Fortune Gods",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/3.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "33",
          "GameName": "Hip Hop Panda",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/33.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "34",
          "GameName": "Legend of Hou Yi",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/34.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "35",
          "GameName": "Mr. Hallow-Win",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/35.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "36",
          "GameName": "Prosperity Lion",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/36.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "37",
          "GameName": "Santa's Gift Rush",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/37.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "38",
          "GameName": "Gem Saviour Sword",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/38.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "39",
          "GameName": "Piggy Gold",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/39.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "40",
          "GameName": "Jungle Delight",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/40.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "41",
          "GameName": "Symbols of Egypt",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/41.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "42",
          "GameName": "Ganesha Gold",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/42.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "44",
          "GameName": "Emperor's Favour",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/44.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "46",
          "GameName": "Prosperity Lion - Mythical Treasure Jackpot",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/46.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "47",
          "GameName": "Dragon Legend - Mythical Treasure Jackpot",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/47.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "48",
          "GameName": "Double Fortune",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/48.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "50",
          "GameName": "Journey to the Wealth",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/50.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "58",
          "GameName": "Vampire's Charm",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/58.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "59",
          "GameName": "Ninja vs Samurai",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/59.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "6",
          "GameName": "Medusa II",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/6.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "61",
          "GameName": "Flirting Scholar",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/61.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "63",
          "GameName": "Dragon Tiger Luck",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/63.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "64",
          "GameName": "Muay Thai Champion",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/64.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "67",
          "GameName": "Shaolin Soccer",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/67.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "68",
          "GameName": "Fortune Mouse",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/68.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "69",
          "GameName": "Bikini Paradise",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/69.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "7",
          "GameName": "Medusa",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/7.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "70",
          "GameName": "Candy Burst",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/70.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "80",
          "GameName": "Circus Delight",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/80.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "85",
          "GameName": "Genie's 3 Wishes",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/85.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "86",
          "GameName": "Galactic Gems",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/86.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "88",
          "GameName": "Jewels of Prosperity",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/88.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "9",
          "GameName": "Honey Trap of Diao Chan - Mythical Treasure Jackpot",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/9.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "90",
          "GameName": "Secret of Cleopatra",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/90.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "91",
          "GameName": "Guardians of Ice and Fire",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/91.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "93",
          "GameName": "Opera Dynasty",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/93.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "94",
          "GameName": "Bali Vacation",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/94.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "97",
          "GameName": "Jack Frost's Winter",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/97.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        },
        {
          "GameCode": "1594259",
          "GameName": "Safari Wilds",
          "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PGSOFT/1594259.webp",
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "CategoryName": "SLOTS"
        }
      ]
    }
  ]
};

const PGSOFT = () => {
  return (
    <Container>
      <GameList providerData={Data.ProviderData} />
    </Container>
  );
}

export default PGSOFT;
