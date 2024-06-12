import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "vs20fruitswx",
                    "GameName": "Sweet Bonanza 1000",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20fruitswx.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20olympx",
                    "GameName": "Gates of Olympus 1000™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20olympx.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20starlightx",
                    "GameName": "Starlight Princess 1000",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20starlightx.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20fruitsw",
                    "GameName": "Sweet Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20fruitsw.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20olympgate",
                    "GameName": "Gates of Olympus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20olympgate.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20starlight",
                    "GameName": "Starlight Princess",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20starlight.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20gatotx",
                    "GameName": "Gates of Gatot Kaca 1000",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20gatotx.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20sugarrushx",
                    "GameName": "Sugar Rush 1000",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20sugarrushx.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5aztecgems",
                    "GameName": "Aztec Gems",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5aztecgems.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20gatotgates",
                    "GameName": "Gates of Gatot Kaca",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20gatotgates.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20sugarrush",
                    "GameName": "Sugar Rush",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20sugarrush.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20sbxmas",
                    "GameName": "Sweet Bonanza Xmas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20sbxmas.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1024mahjwins",
                    "GameName": "Mahjong Wins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1024mahjwins.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5joker",
                    "GameName": "Joker's Jewels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5joker.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20procount",
                    "GameName": "Wisdom of Athena",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20procount.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1024mjwinbns",
                    "GameName": "Mahjong Wins Bonus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1024mjwinbns.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20pbonanza",
                    "GameName": "Pyramid Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20pbonanza.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayslions",
                    "GameName": "5 Lions Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayslions.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20rujakbnz",
                    "GameName": "Rujak Bonanza™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20rujakbnz.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20bonzgold",
                    "GameName": "Bonanza Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20bonzgold.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20olympdice",
                    "GameName": "Gates of Olympus Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20olympdice.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40wildwest",
                    "GameName": "Wild West Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40wildwest.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20ninjapower",
                    "GameName": "Power of Ninja",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20ninjapower.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20schristmas",
                    "GameName": "Starlight Christmas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20schristmas.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20candybltz2",
                    "GameName": "Candy Blitz Bombs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20candybltz2.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysrhino",
                    "GameName": "Great Rhino Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysrhino.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20bnnzdice",
                    "GameName": "Sweet Bonanza Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20bnnzdice.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20candvil",
                    "GameName": "Candy Village",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20candvil.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20aztecgates",
                    "GameName": "Gates of Aztec™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20aztecgates.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs9aztecgemsdx",
                    "GameName": "Aztec Gems Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs9aztecgemsdx.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayshammthor",
                    "GameName": "Power of Thor Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayshammthor.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20fruitparty",
                    "GameName": "Fruit Party",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20fruitparty.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20portals",
                    "GameName": "Fire Portals",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20portals.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20candyblitz",
                    "GameName": "Candy Blitz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20candyblitz.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20sugrux",
                    "GameName": "Sugar Rush Xmas™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20sugrux.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs7776aztec",
                    "GameName": "Aztec Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs7776aztec.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20doghouse2",
                    "GameName": "The Dog House - Dog or Alive",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20doghouse2.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20mkrush",
                    "GameName": "Monkey King Rush",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20mkrush.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs15godsofwar",
                    "GameName": "Zeus vs Hades – Gods of War",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs15godsofwar.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20porbs",
                    "GameName": "Santa's Great Gifts",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20porbs.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysbufking",
                    "GameName": "Buffalo King Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysbufking.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20dhcluster",
                    "GameName": "Twilight Princess",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20dhcluster.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20sugarnudge",
                    "GameName": "Sugar Supreme Powernudge™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20sugarnudge.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20cbrhst",
                    "GameName": "Cyber Heist",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20cbrhst.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysrabbits",
                    "GameName": "5 Rabbits Megaways™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysrabbits.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20forge",
                    "GameName": "Forge of Olympus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20forge.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysmadame",
                    "GameName": "Madame Destiny Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysmadame.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20olympgrace",
                    "GameName": "Grace of Ebisu",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20olympgrace.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20sbpnudge",
                    "GameName": "Aztec Powernudge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20sbpnudge.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayswildwest",
                    "GameName": "Wild West Gold Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayswildwest.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25scarabqueen",
                    "GameName": "John Hunter and the Tomb of the Scarab Queen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25scarabqueen.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysdogs",
                    "GameName": "The Dog House Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysdogs.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20cjcluster",
                    "GameName": "Candy Jar Clusters™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20cjcluster.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10firestrike",
                    "GameName": "Fire Strike",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10firestrike.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20xmascarol",
                    "GameName": "Christmas Carol Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20xmascarol.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysxjuicy",
                    "GameName": "Extra Juicy Megaways™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysxjuicy.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1024fortune",
                    "GameName": "Fortune Ace",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1024fortune.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysjapan",
                    "GameName": "Starlight Princess Pachi",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysjapan.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayslight",
                    "GameName": "Lucky Lightning",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayslight.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20clustext",
                    "GameName": "Gear of Horus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20clustext.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysmegareel",
                    "GameName": "Pompeii Megareels Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysmegareel.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20goldfever",
                    "GameName": "Gems Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20goldfever.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysstampede",
                    "GameName": "Fire Stampede™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysstampede.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs15samurai4",
                    "GameName": "Rise of Samurai 4",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs15samurai4.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20doghouse",
                    "GameName": "The Dog House",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20doghouse.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1dragon8",
                    "GameName": "888 Dragons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1dragon8.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243fdragon",
                    "GameName": "Fortune Dragon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243fdragon.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1024mahjpanda",
                    "GameName": "Mahjong Panda",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1024mahjpanda.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20goldclust",
                    "GameName": "Rabbit Garden™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20goldclust.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20muertos",
                    "GameName": "Muertos Multiplier Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20muertos.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysstrlght",
                    "GameName": "Fortunes of Aztec",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysstrlght.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20heartcleo",
                    "GameName": "Heart of Cleopatra",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20heartcleo.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysaztecking",
                    "GameName": "Aztec King Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysaztecking.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayswildgang",
                    "GameName": "The Wild Gang™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayswildgang.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20midas",
                    "GameName": "The Hand of Midas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20midas.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20tweethouse",
                    "GameName": "The Tweety House",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20tweethouse.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs15seoultrain",
                    "GameName": "Train to Seoul",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs15seoultrain.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayspowzeus",
                    "GameName": "Power of Merlin Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayspowzeus.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20sugarcoins",
                    "GameName": "Viking Forge™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20sugarcoins.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20swordofares",
                    "GameName": "Sword of Ares™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20swordofares.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20bison",
                    "GameName": "Release the Bison",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20bison.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "cs5moneyroll",
                    "GameName": "Money Roll",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/cs5moneyroll.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20mochimon",
                    "GameName": "Mochimon™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20mochimon.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25mustang",
                    "GameName": "Mustang Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25mustang.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20stckwldsc",
                    "GameName": "Pot of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20stckwldsc.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20santawonder",
                    "GameName": "Santa's Wonderland™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20santawonder.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20multiup",
                    "GameName": "Wheel O’Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20multiup.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5jjwild",
                    "GameName": "Joker's Jewels Wild",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5jjwild.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40stckwldlvl",
                    "GameName": "Ripe Rewards",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40stckwldlvl.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs15diamond",
                    "GameName": "Diamond Strike",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs15diamond.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20doghousemh",
                    "GameName": "The Dog House Multihold™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20doghousemh.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243lionsgold",
                    "GameName": "5 Lions Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243lionsgold.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysmegahays",
                    "GameName": " Barnyard Megahays Megaways™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysmegahays.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayssamurai",
                    "GameName": "Rise of Samurai Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayssamurai.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243lions",
                    "GameName": "5 Lions",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243lions.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243fortseren",
                    "GameName": "Greek Gods",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243fortseren.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20pistols",
                    "GameName": "Wild West Duels™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20pistols.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10bblotgl",
                    "GameName": "Big Bass Secrets of the Golden Lake",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10bblotgl.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayswwriches",
                    "GameName": "Wild Wild Riches Megaways™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayswwriches.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10bbbonanza",
                    "GameName": "Big Bass Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10bbbonanza.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25hotfiesta",
                    "GameName": "Hot Fiesta",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25hotfiesta.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10txbigbass",
                    "GameName": "Big Bass Splash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10txbigbass.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayselements",
                    "GameName": "Elemental Gems Megaways™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayselements.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20mammoth",
                    "GameName": "Mammoth Gold Megaways™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20mammoth.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20shootstars",
                    "GameName": "Heroic Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20shootstars.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20asgard",
                    "GameName": "Kingdom of Asgard",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20asgard.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20trsbox",
                    "GameName": "Treasure Wild",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20trsbox.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs4096bufking",
                    "GameName": "Buffalo King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs4096bufking.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20mustanggld2",
                    "GameName": "Clover Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20mustanggld2.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10bburger",
                    "GameName": "Big Burger Load it up with Xtra cheese",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10bburger.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs576hokkwolf",
                    "GameName": "Hokkaido Wolf",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs576hokkwolf.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5jokerdice",
                    "GameName": "Joker Jewels Dice™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5jokerdice.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243goldfor",
                    "GameName": "888 Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243goldfor.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20dugems",
                    "GameName": "Hot Pepper™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20dugems.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20superlanche",
                    "GameName": "Monster Superlanche™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20superlanche.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20fparty2",
                    "GameName": "Fruit Party 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20fparty2.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10bxmasbnza",
                    "GameName": "Christmas Big Bass Bonanza™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10bxmasbnza.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayshexhaus",
                    "GameName": "Rise of Pyramids",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayshexhaus.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10amm",
                    "GameName": "Amazing Money Machine",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10amm.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10cowgold",
                    "GameName": "Cowboys Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10cowgold.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs7fire88",
                    "GameName": "Fire 88",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs7fire88.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20bigdawgs",
                    "GameName": "The Big Dawgs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20bigdawgs.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20gatotfury",
                    "GameName": "Gatot Kaca's Fury™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20gatotfury.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25goldparty",
                    "GameName": "Gold Party™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25goldparty.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20rhinoluxe",
                    "GameName": "Great Rhino Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20rhinoluxe.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20stickypos",
                    "GameName": "Ice Lobster",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20stickypos.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20treesot",
                    "GameName": "Trees of Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20treesot.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysbewaretd",
                    "GameName": "Beware The Deep Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysbewaretd.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25pandagold",
                    "GameName": "Panda's Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25pandagold.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1tigers",
                    "GameName": "Triple Tigers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1tigers.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20superx",
                    "GameName": "Super X ™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20superx.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs576treasures",
                    "GameName": "Wild Wild Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs576treasures.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10floatdrg",
                    "GameName": "Floating Dragon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10floatdrg.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243empcaishen",
                    "GameName": "Emperor Caishen™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243empcaishen.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10bbfloats",
                    "GameName": "Big Bass Floats My Boat (Reel Kingdom Gaming)",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10bbfloats.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysfuryodin",
                    "GameName": "Fury of Odin Megaways™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysfuryodin.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25copsrobbers",
                    "GameName": "Cash Patrol™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25copsrobbers.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysfirewmw",
                    "GameName": "Blazing Wilds Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysfirewmw.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20clspwrndg",
                    "GameName": "Sweet Powernudge™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20clspwrndg.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20farmfest",
                    "GameName": "Barn Festival",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20farmfest.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20eightdragons",
                    "GameName": "8 Dragons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20eightdragons.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20amuleteg",
                    "GameName": "Fortune of Giza™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20amuleteg.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayscryscav",
                    "GameName": "Crystal Caverns Megaways™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayscryscav.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10gizagods",
                    "GameName": "Gods of Giza™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10gizagods.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysyumyum",
                    "GameName": "Yum Yum Powerways™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysyumyum.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10bbhas",
                    "GameName": "Big Bass - Hold & Spinner™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10bbhas.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20phoenixf",
                    "GameName": "Phoenix Forge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20phoenixf.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs12bbb",
                    "GameName": "Bigger Bass Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs12bbb.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25aztecking",
                    "GameName": "Aztec King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25aztecking.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20clustwild",
                    "GameName": "Sticky Bees",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20clustwild.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysspltsym",
                    "GameName": "Dwarf & Dragon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysspltsym.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1024lionsd",
                    "GameName": "5 Lions Dance",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1024lionsd.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20framazon",
                    "GameName": "Fruits of the Amazon™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20framazon.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysrockblst",
                    "GameName": "Rocket Blast Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysrockblst.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25chilli",
                    "GameName": "Chilli Heat",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25chilli.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysoldminer",
                    "GameName": "Old Gold Miner Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysoldminer.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25rlbank",
                    "GameName": "Reel Banks™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25rlbank.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10trail",
                    "GameName": "Mustang Trail",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10trail.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5ultra",
                    "GameName": "Ultra Hold and Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5ultra.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysultrcoin",
                    "GameName": "Cowboy Coins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysultrcoin.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20yotdk",
                    "GameName": "Year of the Dragon King (Reel Kingdom Game)",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20yotdk.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20jewelparty",
                    "GameName": "Jewel Rush",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20jewelparty.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20stickywild",
                    "GameName": "Wild Bison Charge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20stickywild.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243caishien",
                    "GameName": "Caishen's Cash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243caishien.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1money",
                    "GameName": "Money Money Money",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1money.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20vegasmagic",
                    "GameName": "Vegas Magic",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20vegasmagic.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10bhallbnza",
                    "GameName": "Big Bass Halloween",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10bhallbnza.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25gldox",
                    "GameName": "Golden Ox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25gldox.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25rio",
                    "GameName": "Heart of Rio",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25rio.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20wildparty",
                    "GameName": "3 Buzzing Wilds",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20wildparty.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20cleocatra",
                    "GameName": "Cleocatra",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20cleocatra.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs12bbbxmas",
                    "GameName": "Bigger Bass Blizzard - Christmas Catch",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs12bbbxmas.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10fruity2",
                    "GameName": "Extra Juicy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10fruity2.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10bblpop",
                    "GameName": "Bubble Pop™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10bblpop.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1024temuj",
                    "GameName": "Temujin Treasures",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1024temuj.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20lobseafd",
                    "GameName": "Lobster Bob's Sea Food and Win It",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20lobseafd.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10nudgeit",
                    "GameName": "Rise of Giza PowerNudge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10nudgeit.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20kraken2",
                    "GameName": "Release the Kraken 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20kraken2.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20drgbless",
                    "GameName": "Dragon Hero™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20drgbless.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayspizza",
                    "GameName": "PIZZA! PIZZA? PIZZA!™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayspizza.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20magicpot",
                    "GameName": "The Magic Cauldron\r",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20magicpot.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25pandatemple",
                    "GameName": "Panda Fortune 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25pandatemple.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10coffee",
                    "GameName": "Coffee Wild",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10coffee.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20bermuda",
                    "GameName": "John Hunter and the Quest for Bermuda Riches™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20bermuda.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25btygold",
                    "GameName": "Bounty Gold ™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25btygold.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayschilheat",
                    "GameName": "Chilli Heat Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayschilheat.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40cosmiccash",
                    "GameName": "Cosmic Cash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40cosmiccash.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10bbbnz",
                    "GameName": "Big Bass Day at the Races (Reel Kingdom Gaming)",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10bbbnz.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10bbextreme",
                    "GameName": "Big Bass Amazon Xtreme™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10bbextreme.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10bbkir",
                    "GameName": "Big Bass Bonanza - Keeping it Reel™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10bbkir.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20dhdice",
                    "GameName": "The Dog House Dice Show™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20dhdice.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20rhino",
                    "GameName": "Great Rhino",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20rhino.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1masterjoker",
                    "GameName": "Master Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1masterjoker.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10fdrasbf",
                    "GameName": "Floating Dragon - Dragon Boat Festival",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10fdrasbf.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysalterego",
                    "GameName": "The Alter Ego",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysalterego.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayslofhero",
                    "GameName": "Legend of Heroes Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayslofhero.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysluckyfish",
                    "GameName": "Lucky Fishing Megaways™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysluckyfish.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20kraken",
                    "GameName": "Release the Kraken",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20kraken.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs50juicyfr",
                    "GameName": "Juicy Fruits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs50juicyfr.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10strawberry",
                    "GameName": "Strawberry Cocktail",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10strawberry.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10bbsplxmas",
                    "GameName": "Big Bass Christmas Bash™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10bbsplxmas.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20chickdrop",
                    "GameName": "Chicken Drop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20chickdrop.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25kfruit",
                    "GameName": "Aztec Blaze™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25kfruit.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysexpandng",
                    "GameName": "Castle of Fire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysexpandng.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs9chen",
                    "GameName": "Master Chen's Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs9chen.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20cashmachine",
                    "GameName": "Cash Box",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20cashmachine.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20loksriches",
                    "GameName": "Loki’s Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20loksriches.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25tigeryear",
                    "GameName": "Lucky New Year Tiger Treasures™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25tigeryear.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs12tropicana",
                    "GameName": "Club Tropicana",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs12tropicana.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25mmouse",
                    "GameName": "Money Mouse",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25mmouse.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25wildspells",
                    "GameName": "Wild Spells",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25wildspells.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs50jfmulthold",
                    "GameName": "Juicy Fruits Multihold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs50jfmulthold.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysbook",
                    "GameName": "Book of Golden Sands",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysbook.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "cs5triple8gold",
                    "GameName": "888 Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/cs5triple8gold.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20bchprty",
                    "GameName": "Wild Beach Party",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20bchprty.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20mergedwndw",
                    "GameName": "Blade & Fangs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20mergedwndw.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20maskgame",
                    "GameName": "Cash Chips",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20maskgame.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysjkrdrop",
                    "GameName": "Tropical Tiki",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysjkrdrop.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysmoneyman",
                    "GameName": "The Money Men Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysmoneyman.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysbbhas",
                    "GameName": "Big Bass Hold & Spinner Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysbbhas.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysconcoll",
                    "GameName": "Firebird Spirit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysconcoll.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20sparta",
                    "GameName": "Shield Of Sparta™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20sparta.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25jokrace",
                    "GameName": "Joker Race",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25jokrace.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysfltdrg",
                    "GameName": "Floating Dragon Megaways™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysfltdrg.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20nilefort",
                    "GameName": "Nile Fortunes™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20nilefort.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysfltdrgny",
                    "GameName": "Floating Dragon New Year Festival Ultra Megaways™ Hold & Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysfltdrgny.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20hburnhs",
                    "GameName": "Hot to Burn Hold and Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20hburnhs.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5hotburn",
                    "GameName": "Hot to Burn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5hotburn.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20trswild2",
                    "GameName": "Black Bull",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20trswild2.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25lagoon",
                    "GameName": "Great Lagoon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25lagoon.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1600drago",
                    "GameName": "Drago - Jewels of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1600drago.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25goldpig",
                    "GameName": "Golden Pig",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25goldpig.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10frontrun",
                    "GameName": "Front Runner Odds On",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10frontrun.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20mparty",
                    "GameName": "Wild Hop & Drop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20mparty.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs50dmdcascade",
                    "GameName": "Diamond Cascade",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs50dmdcascade.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10runes",
                    "GameName": "Gates of Valhalla™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10runes.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40samurai3",
                    "GameName": "Rise Of Samurai III ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40samurai3.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25pyramid",
                    "GameName": "Pyramid King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25pyramid.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayscharms",
                    "GameName": "5 Frozen Charms Megaways™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayscharms.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1024dtiger",
                    "GameName": "Dragon Tiger",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1024dtiger.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20beefed",
                    "GameName": "Fat Panda™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20beefed.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaystut",
                    "GameName": "John Hunter and the Book of Tut Megawayst",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaystut.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20octobeer",
                    "GameName": "Octobeer Fortunes™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20octobeer.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20wildman",
                    "GameName": "Wildman Super Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20wildman.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25dragonkingdom",
                    "GameName": "Dragon Kingdom",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25dragonkingdom.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25wolfgold",
                    "GameName": "Wolf Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25wolfgold.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayszombcarn",
                    "GameName": "Zombie Carnival",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayszombcarn.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs4096magician",
                    "GameName": "Magician's Secrets™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs4096magician.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysfrywld",
                    "GameName": "Spin & Score Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysfrywld.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysstrwild",
                    "GameName": "Candy Stars",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysstrwild.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243queenie",
                    "GameName": "Queenie",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243queenie.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10bookfallen",
                    "GameName": "Book of Fallen™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10bookfallen.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10fisheye",
                    "GameName": "Fish Eye",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10fisheye.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysmonkey",
                    "GameName": "3 Dancing Monkeys™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysmonkey.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1fortunetree",
                    "GameName": "Tree of Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1fortunetree.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs432congocash",
                    "GameName": "Congo Cash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs432congocash.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20gravity",
                    "GameName": "Gravity Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20gravity.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs4096robber",
                    "GameName": "Robber Strike",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs4096robber.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40bigjuan",
                    "GameName": "Big Juan™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40bigjuan.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs50jucier",
                    "GameName": "Kraken's Sky Bounty",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs50jucier.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs100sh",
                    "GameName": "Shining Hot 100",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs100sh.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5super7",
                    "GameName": "Super 7s",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5super7.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20wildboost",
                    "GameName": "Wild Booster",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20wildboost.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40spartaking",
                    "GameName": "Spartan King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40spartaking.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysbbb",
                    "GameName": "Big Bass Bonanza Megaways™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysbbb.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40infwild",
                    "GameName": "Infective Wild",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40infwild.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20mmmelon",
                    "GameName": "Mighty Munching Melons (Reel Kingdom Gaming)",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20mmmelon.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1024gmayhem",
                    "GameName": "Gorilla Mayhem™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1024gmayhem.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243fortune",
                    "GameName": "Caishen's Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243fortune.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20terrorv",
                    "GameName": "Cash Elevator",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20terrorv.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1fufufu",
                    "GameName": "Fu Fu Fu",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1fufufu.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25newyear",
                    "GameName": "Lucky New Year",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25newyear.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20piggybank",
                    "GameName": "Piggy Bankers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20piggybank.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20lvlup",
                    "GameName": "Pub Kings",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20lvlup.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs50mightra",
                    "GameName": "Might of Ra",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs50mightra.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40rainbowr",
                    "GameName": "Rainbow Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40rainbowr.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysmorient",
                    "GameName": " Mystery Of The Orient™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysmorient.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20emptybank",
                    "GameName": "Empty the Bank",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20emptybank.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10gdchalleng",
                    "GameName": "8 Golden Dragon Challenge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10gdchalleng.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10powerlines",
                    "GameName": "Peak Power™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10powerlines.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243mwarrior",
                    "GameName": "Monkey Warrior",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243mwarrior.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayshive",
                    "GameName": "Star Bounty",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayshive.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243chargebull",
                    "GameName": "Raging Bull",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243chargebull.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10eyestorm",
                    "GameName": "Eye of the Storm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10eyestorm.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25holiday",
                    "GameName": "Holiday Ride",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25holiday.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysftropics",
                    "GameName": "Frozen Tropics",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysftropics.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayseternity",
                    "GameName": "Diamonds Of Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayseternity.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20splmystery",
                    "GameName": "Spellbinding Mystery",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20splmystery.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25asgard",
                    "GameName": "Asgard",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25asgard.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40cleoeye",
                    "GameName": "Eye of Cleopatra",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40cleoeye.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5spjoker",
                    "GameName": "Super Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5spjoker.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20colcashzone",
                    "GameName": "Colossal Cash Zone™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20colcashzone.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs9madmonkey",
                    "GameName": "Monkey Madness",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs9madmonkey.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40pirate",
                    "GameName": "Pirate Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40pirate.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20fh",
                    "GameName": "Fire Hot 20™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20fh.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10egyptcls",
                    "GameName": "Ancient Egypt Classic",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10egyptcls.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10mayangods",
                    "GameName": "John Hunter and the Mayan Gods",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10mayangods.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs100firehot",
                    "GameName": "Fire Hot 100™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs100firehot.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5ultrab",
                    "GameName": "Ultra Burn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5ultrab.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayswwhex",
                    "GameName": "Wild Wild Bananas™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayswwhex.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20gobnudge",
                    "GameName": "Goblin Heist Powernudge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20gobnudge.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs50pixie",
                    "GameName": "Pixie Wings",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs50pixie.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20ultim5",
                    "GameName": "The Ultimate 5™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20ultim5.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5strh",
                    "GameName": "Striking Hot 5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5strh.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10threestar",
                    "GameName": "Three Star Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10threestar.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25tigerwar",
                    "GameName": "The Tiger Warrior",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25tigerwar.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20excalibur",
                    "GameName": "Excalibur Unleashed",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20excalibur.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20rockvegas",
                    "GameName": "Rock Vegas™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20rockvegas.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaystimber",
                    "GameName": "Timber Stacks™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaystimber.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20drtgold",
                    "GameName": "Drill that Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20drtgold.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25bomb",
                    "GameName": "Bomb Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25bomb.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10bookoftut",
                    "GameName": "Book of Tut",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10bookoftut.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10crownfire",
                    "GameName": "Crown of Fire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10crownfire.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysbankbonz",
                    "GameName": "Cash Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysbankbonz.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysrsm",
                    "GameName": "Wild Celebrity Bus Megaways™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysrsm.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10tut",
                    "GameName": "John Hunter & the Book of Tut Respin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10tut.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40pirgold",
                    "GameName": "Pirate Gold Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40pirgold.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs9outlaw",
                    "GameName": "Pirates Pub",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs9outlaw.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs18mashang",
                    "GameName": "Treasure Horse",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs18mashang.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs3train",
                    "GameName": "Gold Train",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs3train.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10ddcbells",
                    "GameName": "Ding Dong Christmas Bells™ (Reel Kingdom Game)",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10ddcbells.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10spiritadv",
                    "GameName": "Spirit of Adventure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10spiritadv.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25kingdoms",
                    "GameName": "3 Kingdoms - Battle of Red Cliffs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25kingdoms.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20daydead",
                    "GameName": "Day of Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20daydead.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25spotz",
                    "GameName": "Knight Hot Spotz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25spotz.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1ball",
                    "GameName": "Lucky Dragon Ball",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1ball.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysloki",
                    "GameName": "Revenge of Loki Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysloki.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25samurai",
                    "GameName": "Rise of Samurai",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25samurai.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25safari",
                    "GameName": "Hot Safari",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25safari.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243ckemp",
                    "GameName": "Cheeky Emperor™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243ckemp.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243koipond",
                    "GameName": "Koi Pond",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243koipond.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs50northgard",
                    "GameName": "North Guardians",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs50northgard.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10tictac",
                    "GameName": "Tic Tac Take",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10tictac.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10bookazteck",
                    "GameName": "Book of Aztec King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10bookazteck.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20lampinf",
                    "GameName": "Lamp Of Infinity",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20lampinf.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10returndead",
                    "GameName": "Return of the Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10returndead.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysfrbugs",
                    "GameName": "Frogs & Bugs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysfrbugs.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243dancingpar",
                    "GameName": "Dance Party",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243dancingpar.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20rainbowg",
                    "GameName": "Rainbow Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20rainbowg.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20earthquake",
                    "GameName": "Cyclops Smash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20earthquake.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs15fairytale",
                    "GameName": "Fairytale Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs15fairytale.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs9piggybank",
                    "GameName": "Piggy Bank Bills",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs9piggybank.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs117649starz",
                    "GameName": "Starz Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs117649starz.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20sknights",
                    "GameName": "The Knight King™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20sknights.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10luckfort",
                    "GameName": "Good Luck & Good Fortune (Reel Kingdom Gaming)",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10luckfort.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs7776secrets",
                    "GameName": "John Hunter and the Aztec Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs7776secrets.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10firestrike2",
                    "GameName": "Fire Strike 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10firestrike2.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5drmystery",
                    "GameName": "Dragon Kingdom - Eyes of Fire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5drmystery.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25jokerking",
                    "GameName": "Joker King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25jokerking.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5littlegem",
                    "GameName": "Little Gem",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5littlegem.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10madame",
                    "GameName": "Madame Destiny",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10madame.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20gorilla",
                    "GameName": "Jungle Gorilla",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20gorilla.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40madwheel",
                    "GameName": "The Wild Machine",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40madwheel.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1024moonsh",
                    "GameName": "Moonshot™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1024moonsh.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs1024butterfly",
                    "GameName": "Jade Butterfly",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs1024butterfly.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "cs3w",
                    "GameName": "Diamonds are Forever 3 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/cs3w.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20egypttrs",
                    "GameName": "Egyptian Fortunes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20egypttrs.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5drhs",
                    "GameName": "Dragon Hot Hold and Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5drhs.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25spgldways",
                    "GameName": "Secret City Gold™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25spgldways.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10wildtut",
                    "GameName": "Mysterious Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10wildtut.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20santa",
                    "GameName": "Santa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20santa.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243nudge4gold",
                    "GameName": "Hellvis Wild",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243nudge4gold.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20ltng",
                    "GameName": "Pinup Girls™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20ltng.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10jnmntzma",
                    "GameName": "Jane Hunter and the Mask of Montezuma",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10jnmntzma.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25journey",
                    "GameName": "Journey to the West",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25journey.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs50kingkong",
                    "GameName": "Mighty Kong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs50kingkong.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs50hercules",
                    "GameName": "Hercules Son Of Zeus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs50hercules.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20mtreasure",
                    "GameName": "Pirate Golden Age™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20mtreasure.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayswest",
                    "GameName": "Mystic Chief",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayswest.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs50chinesecharms",
                    "GameName": "Lucky Dragons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs50chinesecharms.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs7monkeys",
                    "GameName": "7 Monkeys",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs7monkeys.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20wildpix",
                    "GameName": "Wild Pixies",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20wildpix.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysincwnd",
                    "GameName": "Gold Oasis",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysincwnd.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayscfglory",
                    "GameName": "Chase for Glory™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayscfglory.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20wolfie",
                    "GameName": "Greedy Wolf™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20wolfie.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25peking",
                    "GameName": "Peking Luck",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25peking.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10starpirate",
                    "GameName": "Star Pirates Code™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10starpirate.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysseastory",
                    "GameName": "Sea Fantasy™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysseastory.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10snakeladd",
                    "GameName": "Snakes and Ladders Megadice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10snakeladd.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20smugcove",
                    "GameName": "Smugglers Cove™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20smugcove.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25archer",
                    "GameName": "Fire Archer™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25archer.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40sh",
                    "GameName": "Shining Hot 40",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40sh.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25vegas",
                    "GameName": "Vegas Nights",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25vegas.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20mvwild",
                    "GameName": "Jasmine Dreams",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20mvwild.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10mmm",
                    "GameName": "Magic Money Maze",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10mmm.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40demonpots",
                    "GameName": "Demon Pots",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40demonpots.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "cs3irishcharms",
                    "GameName": "Irish Charms",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/cs3irishcharms.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25bullfiesta",
                    "GameName": "Bull Fiesta",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25bullfiesta.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20sh",
                    "GameName": "Shining Hot 20",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20sh.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25bkofkngdm",
                    "GameName": "Book of Kingdoms",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25bkofkngdm.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs13g",
                    "GameName": "Devil's 13",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs13g.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20underground",
                    "GameName": "Down The Rails™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20underground.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs8magicjourn",
                    "GameName": "Magic Journey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs8magicjourn.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5trdragons",
                    "GameName": "Triple Dragons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5trdragons.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20hstgldngt",
                    "GameName": "Heist for the Golden Nuggets™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20hstgldngt.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25goldrush",
                    "GameName": "Gold Rush",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25goldrush.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20honey",
                    "GameName": "Honey Honey Honey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20honey.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20eking",
                    "GameName": "Emerald King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20eking.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysraghex",
                    "GameName": "Tundra’s Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysraghex.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs50safariking",
                    "GameName": "Safari King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs50safariking.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10vampwolf",
                    "GameName": "Vampires VS Wolves",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10vampwolf.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs9hotroll",
                    "GameName": "Hot Chilli",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs9hotroll.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs243discolady",
                    "GameName": "Disco Lady",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs243discolady.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40voodoo",
                    "GameName": "Voodoo Magic",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40voodoo.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20chicken",
                    "GameName": "The Great Chicken Escape",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20chicken.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs88hockattack",
                    "GameName": "Hockey Attack™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs88hockattack.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20lobcrab",
                    "GameName": "Lobster Bob’s Crazy Crab Shack",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20lobcrab.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25walker",
                    "GameName": "Wild Walker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25walker.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40firehot",
                    "GameName": "Fire Hot 40™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40firehot.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs4096mystery",
                    "GameName": "Mysterious",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs4096mystery.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20hotzone",
                    "GameName": "African Elephant™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20hotzone.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20theights",
                    "GameName": "Towering Fortunes™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20theights.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40frrainbow",
                    "GameName": "Fruit Rainbow",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40frrainbow.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10snakeeyes",
                    "GameName": "Snakes & Ladders - Snake Eyes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10snakeeyes.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25davinci",
                    "GameName": "Da Vinci's Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25davinci.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25gladiator",
                    "GameName": "Wild Gladiator",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25gladiator.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20lcount",
                    "GameName": "Gems of Serengeti™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20lcount.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10kingofdth",
                    "GameName": "Kingdom of The Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10kingofdth.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40hotburnx",
                    "GameName": "Hot to Burn Extreme",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40hotburnx.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs50aladdin",
                    "GameName": "3 Genie Wishes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs50aladdin.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20leprexmas",
                    "GameName": "Leprechaun Carol",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20leprexmas.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10egypt",
                    "GameName": "Ancient Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10egypt.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswaysredqueen",
                    "GameName": "The Red Queen™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswaysredqueen.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20hercpeg",
                    "GameName": "Hercules and Pegasus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20hercpeg.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40wanderw",
                    "GameName": "Wild Depths™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40wanderw.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs40streetracer",
                    "GameName": "Street Racer",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs40streetracer.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5firehot",
                    "GameName": "Fire Hot 5™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5firehot.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10chkchase",
                    "GameName": "Chicken Chase",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10chkchase.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs7pigs",
                    "GameName": "7 Piggies",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs7pigs.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20aladdinsorc",
                    "GameName": "Aladdin and the Sorcerer",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20aladdinsorc.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20leprechaun",
                    "GameName": "Leprechaun Song",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20leprechaun.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10goldfish",
                    "GameName": "Fishin Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10goldfish.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20stickysymbol",
                    "GameName": "The Great Stick-Up",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20stickysymbol.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vswayswerewolf",
                    "GameName": "Curse of the Werewolf Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vswayswerewolf.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10luckcharm",
                    "GameName": "Lucky, Grace & Charm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10luckcharm.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PromoAward",
                    "GameName": null,
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/PromoAward.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs10egrich",
                    "GameName": "Queen of Gods",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs10egrich.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20bl",
                    "GameName": "Busy Bees",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20bl.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20fortbon",
                    "GameName": "Fruity Treats",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20fortbon.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs20godiva",
                    "GameName": "Lady Godiva",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs20godiva.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25dwarves_new",
                    "GameName": "Dwarven Gold Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25dwarves_new.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25queenofgold",
                    "GameName": "Queen Of Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25queenofgold.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs25sea",
                    "GameName": "Great Reef",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs25sea.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs5sh",
                    "GameName": "Shining Hot 5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs5sh.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs75bronco",
                    "GameName": "Bronco Spirit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs75bronco.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "vs75empress",
                    "GameName": "Golden Beauty",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PPLAY/vs75empress.webp",
                    "ProviderCode": "PPLAY",
                    "ProviderName": "PRAGMATICPLAY SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const PPLAY = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default PPLAY;