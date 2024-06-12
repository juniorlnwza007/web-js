import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
  "ProviderData": [
    {
      "GameList": [
        {
            "GameCode": "EG-SLOT-A051",
            "GameName": "Golden Legacy",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A051.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A052",
            "GameName": "World Cup Night",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A052.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A053",
            "GameName": "Bunny Beauty",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A053.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A041",
            "GameName": "Mother of Dragons",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A041.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A046",
            "GameName": "Vanessa",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A046.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A048",
            "GameName": "Candy Witch",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A048.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A050",
            "GameName": "Guardian of Flame",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A050.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A049",
            "GameName": "Myth of Phoenix",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A049.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A047",
            "GameName": "Chang Thai",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A047.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A042",
            "GameName": "Shu Dynasty",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A042.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A045",
            "GameName": "Three Musketeers",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A045.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A044",
            "GameName": "Bomber Squad",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A044.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A043",
            "GameName": "Mystical Lamp",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A043.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-S008",
            "GameName": "Cage Fight",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-S008.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A040",
            "GameName": "Dragon Slayer",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A040.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A037",
            "GameName": "Gold of Egypt",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A037.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A038",
            "GameName": "Sparta's Honor",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A038.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-C003",
            "GameName": "Hoo Hey How",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-C003.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-C004",
            "GameName": "Big Three Dragons",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-C004.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A030",
            "GameName": "Three Star God 2",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A030.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A039",
            "GameName": "Six Swords",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A039.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A036",
            "GameName": "Zues",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A036.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A035",
            "GameName": "Maya's Miracle",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A035.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A034",
            "GameName": "Lucky Clovers",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A034.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A033",
            "GameName": "Pigsy",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A033.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A029",
            "GameName": "Cai Shen Dao",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A029.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A032",
            "GameName": "The Masked Prince",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A032.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A027",
            "GameName": "Shanghai Godfather",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A027.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A028",
            "GameName": "Double Happiness",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A028.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A031",
            "GameName": "World Cup Fever",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A031.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-C002",
            "GameName": "Dragon 8",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-C002.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A026",
            "GameName": "Child of Wealth",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A026.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A025",
            "GameName": "Fortune Lion",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A025.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A024",
            "GameName": "Lucky Fa",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A024.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-C001",
            "GameName": "Super 7",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-C001.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A021",
            "GameName": "Fortune Cat",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A021.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A022",
            "GameName": "Saint of Mahjong",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A022.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A023",
            "GameName": "Prosperity Tree",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A023.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A008",
            "GameName": "Red Chamber",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A008.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-S006",
            "GameName": "Volley Beauties",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-S006.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-S007",
            "GameName": "Zombie Hunter",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-S007.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A018",
            "GameName": "Cheung Po Tsai",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A018.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-S005",
            "GameName": "Angels & Demons",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-S005.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A020",
            "GameName": "Golden Chicken",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A020.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A006",
            "GameName": "Ji Gong",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A006.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A003",
            "GameName": "The Guard",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A003.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A015",
            "GameName": "Fruit Poppers",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A015.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A014",
            "GameName": "Diamond Crush",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A014.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A016",
            "GameName": "Tropical Treasure",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A016.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A017",
            "GameName": "North South Lions",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A017.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A011",
            "GameName": "Red Dragon",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A011.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A010",
            "GameName": "Funny Farm",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A010.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A009",
            "GameName": "Innocent Classmates",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A009.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A004",
            "GameName": "Dragon & Tiger",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A004.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A005",
            "GameName": "Fantasy Goddess",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A005.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A013",
            "GameName": "Bikini Chaser",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A013.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A012",
            "GameName": "Creepy Cuddlers",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A012.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A002",
            "GameName": "Three Star God",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A002.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "EG-SLOT-A001",
            "GameName": "New Year Rich",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SIMPLEPLAY_SLOT/EG-SLOT-A001.webp",
            "ProviderCode": "SIMPLEPLAY_SLOT",
            "ProviderName": "SIMPLEPLAY SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
            "CategoryName": "SLOTS"
        }
      ]
    }
  ]
};

const SIMPLEPLAY_SLOT = () => {
  return (
    <Container>
      <GameList providerData={Data.ProviderData} />
    </Container>
  );
}

export default SIMPLEPLAY_SLOT;
