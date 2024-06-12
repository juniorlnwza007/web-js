import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "110164",
                    "GameName": "Blessed Flame",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110164.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110165",
                    "GameName": "Camino de Chili",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110165.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110166",
                    "GameName": "Tree Of Light Bonus Buy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110166.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110167",
                    "GameName": "Money Minter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110167.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110168",
                    "GameName": "Wolf Hiding",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110168.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110169",
                    "GameName": "Camino de Chili Bonus Buy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110169.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110170",
                    "GameName": "Hot Volcano",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110170.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110171",
                    "GameName": "Candy Dreams: Sweet Planet Bonus Buy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110171.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110172",
                    "GameName": "Mega Greatest Catch",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110172.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110173",
                    "GameName": "Massive Luck",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110173.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110000",
                    "GameName": "Candy Dreams",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110000.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110001",
                    "GameName": "Elven Princesses",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110001.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110002",
                    "GameName": "Egypt Gods",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110002.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110003",
                    "GameName": "Talismans of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110003.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110004",
                    "GameName": "Robin Hood",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110004.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110005",
                    "GameName": "Chinese New Year",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110005.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110006",
                    "GameName": "Indiana's Quest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110006.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110007",
                    "GameName": "Journey to the West",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110007.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110008",
                    "GameName": "The Emperor's Tomb",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110008.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110009",
                    "GameName": "Hot Triple Sevens",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110009.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110010",
                    "GameName": "Clash of Pirates",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110010.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110011",
                    "GameName": "The Slavs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110011.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110012",
                    "GameName": "Basketball",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110012.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110013",
                    "GameName": "Red Cliff",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110013.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110014",
                    "GameName": "Prohibition",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110014.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110015",
                    "GameName": "Epic Gladiators",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110015.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110016",
                    "GameName": "Vegas Nights",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110016.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110017",
                    "GameName": "Reign Of Dragons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110017.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110018",
                    "GameName": "Dungeon Immortal Evil",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110018.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110019",
                    "GameName": "Fluffy Rangers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110019.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110020",
                    "GameName": "The Great Wall Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110020.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110021",
                    "GameName": "Fruits Land",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110021.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110022",
                    "GameName": "Battle Tanks",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110022.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110023",
                    "GameName": "Charming Queens",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110023.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110024",
                    "GameName": "Dolphins Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110024.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110025",
                    "GameName": "Ace Round",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110025.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110027",
                    "GameName": "Lucky Girls",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110027.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110028",
                    "GameName": "Legend of Ra",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110028.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110029",
                    "GameName": "Trip to the Future",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110029.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110030",
                    "GameName": "Necromancer",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110030.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110031",
                    "GameName": "Jewellery store",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110031.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110032",
                    "GameName": "Fruit Burst",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110032.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110033",
                    "GameName": "Football",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110033.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110034",
                    "GameName": "Atlantis",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110034.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110035",
                    "GameName": "E.T. Lost Socks",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110035.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110037",
                    "GameName": "The Great Conflict",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110037.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110038",
                    "GameName": "Syndicate",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110038.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110039",
                    "GameName": "Naughty Girls Cabaret",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110039.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110041",
                    "GameName": "Aeronauts",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110041.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110042",
                    "GameName": "Robots: Energy Conflict",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110042.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110043",
                    "GameName": "Mystery Planet",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110043.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110044",
                    "GameName": "USSR Seventies",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110044.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110045",
                    "GameName": "Robinson",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110045.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110047",
                    "GameName": "Totem Island",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110047.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110048",
                    "GameName": "Monster Lab",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110048.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110049",
                    "GameName": "Sprinkle",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110049.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110050",
                    "GameName": "Nuke World",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110050.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110051",
                    "GameName": "Brutal Santa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110051.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110052",
                    "GameName": "Maze: Desire for Power",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110052.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110053",
                    "GameName": "Book of Rest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110053.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110054",
                    "GameName": "Hungry Night",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110054.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110055",
                    "GameName": "Season Sisters",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110055.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110056",
                    "GameName": "Legend of Kaan",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110056.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110057",
                    "GameName": "Irish Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110057.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110058",
                    "GameName": "Rich Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110058.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110059",
                    "GameName": "Rise of Horus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110059.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110060",
                    "GameName": "Western Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110060.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110061",
                    "GameName": "Animal Quest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110061.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110062",
                    "GameName": "Rocket Stars",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110062.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110063",
                    "GameName": "Midnight Show",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110063.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110064",
                    "GameName": "Exploding Fruits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110064.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110065",
                    "GameName": "Sea of Spins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110065.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110066",
                    "GameName": "Surf Zone",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110066.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110067",
                    "GameName": "Jelly Boom",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110067.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110068",
                    "GameName": "Forest Dreams",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110068.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110069",
                    "GameName": "Raccoon Tales",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110069.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110070",
                    "GameName": "Forgotten Fable",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110070.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110071",
                    "GameName": "Jolly Treasures",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110071.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110102",
                    "GameName": "Night Of The Living Tales",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110102.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110104",
                    "GameName": "Ice Mania",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110104.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110105",
                    "GameName": "Valley of Dreams",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110105.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110106",
                    "GameName": "Fruit Nova",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110106.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110107",
                    "GameName": "Tree of Light",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110107.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110109",
                    "GameName": "Wild Bullets",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110109.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110110",
                    "GameName": "Treasure Mania",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110110.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110111",
                    "GameName": "Temple of Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110111.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110114",
                    "GameName": "Fruit Super Nova",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110114.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110116",
                    "GameName": "Runes Of Destiny",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110116.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110117",
                    "GameName": "Ellen's Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110117.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110118",
                    "GameName": "Unlimited Wishes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110118.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110119",
                    "GameName": "Epic Legends",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110119.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110120",
                    "GameName": "Sweet Sugar",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110120.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110122",
                    "GameName": "Food Feast",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110122.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110125",
                    "GameName": "Cycle of Luck",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110125.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110128",
                    "GameName": "Gangster Night",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110128.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110129",
                    "GameName": "Gold of Sirens",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110129.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110130",
                    "GameName": "Bloody Brilliant",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110130.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110131",
                    "GameName": "Fruit Super Nova 40",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110131.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110133",
                    "GameName": "Temple of Dead Bonus Buy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110133.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110134",
                    "GameName": "Shadow Of Luxor",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110134.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110136",
                    "GameName": "Fruit Super Nova 30",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110136.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110137",
                    "GameName": "Fruit Disco",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110137.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110138",
                    "GameName": "Anubis Moon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110138.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110139",
                    "GameName": "Curse of Pharaoh",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110139.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110140",
                    "GameName": "Triple Chili",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110140.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110141",
                    "GameName": "Gold of Sirens Bonus Buy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110141.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110142",
                    "GameName": "Cycle of Luck Bonus Buy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110142.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110143",
                    "GameName": "Fruit Super Nova 60",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110143.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110144",
                    "GameName": "Curse of the Pharaoh Bonus Buy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110144.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110146",
                    "GameName": "Fruit Super Nova 100",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110146.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110147",
                    "GameName": "Hot Triple Sevens Special",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110147.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110148",
                    "GameName": "Christmas Reach",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110148.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110149",
                    "GameName": "Fruit Super Nova 80",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110149.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110150",
                    "GameName": "Dragon's Tavern",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110150.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110151",
                    "GameName": "Christmas Reach Bonus Buy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110151.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110152",
                    "GameName": "Wild Overlords",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110152.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110153",
                    "GameName": "Budai Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110153.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110154",
                    "GameName": "Dragon's Tavern Bonus Buy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110154.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110155",
                    "GameName": "Budai Reels Bonus Buy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110155.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110156",
                    "GameName": "Temple of Thunder",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110156.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110157",
                    "GameName": "Wild Overlords Bonus Buy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110157.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110158",
                    "GameName": "The Greatest Catch",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110158.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110159",
                    "GameName": "The Greatest Catch Bonus Buy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110159.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110160",
                    "GameName": "Juicy Gems",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110160.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110161",
                    "GameName": "Burning Aces",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110161.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110162",
                    "GameName": "Juicy Gems Bonus Buy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110162.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "110163",
                    "GameName": "Candy Dreams: Sweet Planet",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/ATA_EVOPLAY_SLOT/110163.webp",
                    "ProviderCode": "ATA_EVOPLAY_SLOT",
                    "ProviderName": "EVOPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const ATA_EVOPLAY_SLOT = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default ATA_EVOPLAY_SLOT;