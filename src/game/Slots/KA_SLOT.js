import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "AcesAndEights",
                    "GameName": "Aces and Eights",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/AcesAndEights.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Acrobats",
                    "GameName": "Acrobats",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Acrobats.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AliceInMegaLand",
                    "GameName": "Alice In MegaLand",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/AliceInMegaLand.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AlienInvasion",
                    "GameName": "Alien Invasion",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/AlienInvasion.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AnimalDojo",
                    "GameName": "Animal Dojo",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/AnimalDojo.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AnimalLand",
                    "GameName": "Animal Land",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/AnimalLand.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BangBang",
                    "GameName": "Bang Bang",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BangBang.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BearRun",
                    "GameName": "Bear Run",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BearRun.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BeautifulLady",
                    "GameName": "Beautiful Lady",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BeautifulLady.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BeautyTrap",
                    "GameName": "Beauty Trap",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BeautyTrap.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BionicHuman",
                    "GameName": "Bionic Human",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BionicHuman.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BookOfMoon",
                    "GameName": "Book of Moon Fusion Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BookOfMoon.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Borderland",
                    "GameName": "Borderland",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Borderland.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BreakThrough",
                    "GameName": "Break Through Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BreakThrough.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BunnyGirl",
                    "GameName": "Bunny Girl",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BunnyGirl.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CantoneseFriedNoodles",
                    "GameName": "Cantonese Fried Noodles",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CantoneseFriedNoodles.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CarnivalOfVenice",
                    "GameName": "Carnival of Venice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CarnivalOfVenice.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CarnivalQueen",
                    "GameName": "Carnival Queen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CarnivalQueen.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CashComing",
                    "GameName": "Cash Coming",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CashComing.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CatAndMouse",
                    "GameName": "Cat and Mouse",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CatAndMouse.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CatMuseum",
                    "GameName": "Cat Museum",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CatMuseum.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChainOfWild",
                    "GameName": "Chain of Wild",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ChainOfWild.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CheerleadingTeam",
                    "GameName": "Cheerleading Team",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CheerleadingTeam.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CheerUp",
                    "GameName": "Cheer Up",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CheerUp.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChessKing",
                    "GameName": "Chess King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ChessKing.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChinesePhoenix",
                    "GameName": "Chinese Phoenix",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ChinesePhoenix.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChineseQuyi",
                    "GameName": "Chinese Quyi",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ChineseQuyi.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChivalrousGirl",
                    "GameName": "Chivalrous Girl",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ChivalrousGirl.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CoffeeWild",
                    "GameName": "Coffee Wild",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CoffeeWild.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CrazyGuava",
                    "GameName": "Crazy Guava Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CrazyGuava.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CrazyGym",
                    "GameName": "Crazy Gym",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CrazyGym.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CricketWinner",
                    "GameName": "Cricket Winner",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CricketWinner.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DarkFamily",
                    "GameName": "Dark Family",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DarkFamily.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DonutCity",
                    "GameName": "Donut City",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DonutCity.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DoubleHappiness",
                    "GameName": "Double Happiness",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DoubleHappiness.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DragonHunter",
                    "GameName": "Dragon Hunter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DragonHunter.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DragonIngot",
                    "GameName": "Dragon Ingot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DragonIngot.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DragonInn",
                    "GameName": "Dragon Inn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DragonInn.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DragonPearl",
                    "GameName": "Dragon Pearl",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DragonPearl.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DwarfMiner",
                    "GameName": "Dwarf Miner",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DwarfMiner.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "EliteGames",
                    "GameName": "Elite Games",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/EliteGames.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "EmptyCity",
                    "GameName": "Empty City",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/EmptyCity.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "EvilPumpkin",
                    "GameName": "Evil Pumpkin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/EvilPumpkin.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FantasyWar",
                    "GameName": "Fantasy War",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FantasyWar.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FashionBones",
                    "GameName": "Fashion Bones",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FashionBones.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Firefighters",
                    "GameName": "Firefighters",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Firefighters.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FiveFortuneGods",
                    "GameName": "Five Fortune Gods",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FiveFortuneGods.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FiveHeroes",
                    "GameName": "5 Heroes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FiveHeroes.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FiveSoundFortune",
                    "GameName": "Five Sound Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FiveSoundFortune.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FlamingMonkeyClassic",
                    "GameName": "Flaming Monkey Classic",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FlamingMonkeyClassic.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FootballMania",
                    "GameName": "Football Mania",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FootballMania.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Fortuna",
                    "GameName": "Fortuna",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Fortuna.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FortuneFeast",
                    "GameName": "Fortune Feast Fusion Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FortuneFeast.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FortuneRabbit",
                    "GameName": "Fortune Rabbit Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FortuneRabbit.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FortuneStar",
                    "GameName": "Fortune Star Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FortuneStar.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FoxyMama",
                    "GameName": "Foxy Mama",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FoxyMama.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Gangster",
                    "GameName": "Gangster",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Gangster.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Geisha",
                    "GameName": "Geisha",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Geisha.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GhostHunter",
                    "GameName": "Ghost Hunter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GhostHunter.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GodOfGamblers",
                    "GameName": "God of Gamblers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GodOfGamblers.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoEscape",
                    "GameName": "Go Escape",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GoEscape.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GokudoBentou",
                    "GameName": "Gokudo Bentou",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GokudoBentou.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoldenAndSilverHorn",
                    "GameName": "Golden and Silver Horn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GoldenAndSilverHorn.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GreatCourtyard",
                    "GameName": "Great Courtyard",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GreatCourtyard.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GreatDoctor",
                    "GameName": "Great Doctor",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GreatDoctor.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GreatLuck",
                    "GameName": "Great Luck",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GreatLuck.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GreenParty",
                    "GameName": "Green Party",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GreenParty.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GuanYunChang",
                    "GameName": "Guan Yun Changn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GuanYunChang.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Gypsy",
                    "GameName": "Gypsy Fusion Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Gypsy.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Hamlet",
                    "GameName": "Hamlet",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Hamlet.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Hanabi",
                    "GameName": "Hanabi",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Hanabi.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HareVSTortoise",
                    "GameName": "Hare vs. Tortoise",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HareVSTortoise.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HeroinesOfTheMarsh",
                    "GameName": "Heroines of the Marsh",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HeroinesOfTheMarsh.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HipHop",
                    "GameName": "Hip Hop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HipHop.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HolidayCarol",
                    "GameName": "Holiday Carol Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HolidayCarol.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HotCoin",
                    "GameName": "Hot Coin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HotCoin.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "IceCreamTruck",
                    "GameName": "Ice Cream Truck",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/IceCreamTruck.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "IdunsGarden",
                    "GameName": "Idun's Garden Fusion Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/IdunsGarden.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "IncaLostTreasure",
                    "GameName": "Inca Lost Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/IncaLostTreasure.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "IrishCoins",
                    "GameName": "Irish Coins Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/IrishCoins.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JamesBond",
                    "GameName": "James Bond",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/JamesBond.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JumpingFatGuy",
                    "GameName": "Jumping Mr. First",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/JumpingFatGuy.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "KaiFengFu",
                    "GameName": "Kai Feng Fu",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/KaiFengFu.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LadyKAKA",
                    "GameName": "Lady KAKA",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LadyKAKA.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LadyRacer",
                    "GameName": "Lady Racer",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LadyRacer.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LandOfDwarfs",
                    "GameName": "Land Of Dwarfs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LandOfDwarfs.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LaTomatina",
                    "GameName": "La Tomatina",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LaTomatina.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LazyRich",
                    "GameName": "Lazy Rich",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LazyRich.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LegendOfLegends",
                    "GameName": "Legend of Legends",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LegendOfLegends.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LegendOfSword",
                    "GameName": "Legend of Sword",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LegendOfSword.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LightningGoddess",
                    "GameName": "Lightning Goddess",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LightningGoddess.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Lilith",
                    "GameName": "Lilith",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Lilith.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LionOnRidge",
                    "GameName": "Lion on Ridge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LionOnRidge.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LionVSShark",
                    "GameName": "Lion vs. Shark",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LionVSShark.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LittleMonk",
                    "GameName": "Little Monk",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LittleMonk.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LoveAmongstWar",
                    "GameName": "Love Amongst War",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LoveAmongstWar.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LoveGame",
                    "GameName": "Love Game",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LoveGame.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuckyAilurus",
                    "GameName": "Lucky Ailurus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LuckyAilurus.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuckyGod",
                    "GameName": "Lucky God",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LuckyGod.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuckyGoldenDragon",
                    "GameName": "Lucky Golden Dragon Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LuckyGoldenDragon.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuckyStar",
                    "GameName": "Lucky Star",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LuckyStar.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MissJoker",
                    "GameName": "Miss Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MissJoker.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MoleMoney",
                    "GameName": "Mole Money",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MoleMoney.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MoneyGod",
                    "GameName": "Money God",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MoneyGod.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MonkeyKing",
                    "GameName": "Monkey King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MonkeyKing.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MonsterBuster",
                    "GameName": "Monster Buster",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MonsterBuster.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MonsterFile",
                    "GameName": "Monster File",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MonsterFile.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MoulinRouge",
                    "GameName": "Moulin Rouge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MoulinRouge.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MysteryShoot",
                    "GameName": "Mystery Shoot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MysteryShoot.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Neonmal",
                    "GameName": "Neonmal",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Neonmal.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "NieXiaoqian",
                    "GameName": "Nie Xiaoqian",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/NieXiaoqian.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "NightOnTheNile",
                    "GameName": "ANight on the Nile",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/NightOnTheNile.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Oktoberfest",
                    "GameName": "Oktoberfest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Oktoberfest.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "OlympusGods",
                    "GameName": "Olympus Gods",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/OlympusGods.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "OrientalBeast",
                    "GameName": "Oriental Beast",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/OrientalBeast.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "OrientalMonster",
                    "GameName": "Oriental Monster",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/OrientalMonster.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PartyGirlDeluxe",
                    "GameName": "Party Girl Deluxe Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PartyGirlDeluxe.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PeacockPrincess",
                    "GameName": "Peacock Princess Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PeacockPrincess.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PenguinFamily",
                    "GameName": "Penguin Family Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PenguinFamily.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PiggyBankMachine",
                    "GameName": "Piggy Bank Machine",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PiggyBankMachine.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PlagueDoctor",
                    "GameName": "Plague Doctor",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PlagueDoctor.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PricelessMuseum",
                    "GameName": "Priceless Museum Fusion Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PricelessMuseum.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RadiantCity",
                    "GameName": "Radiant City",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/RadiantCity.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RedBaron",
                    "GameName": "Red Baron",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/RedBaron.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RedSorghum",
                    "GameName": "Red Sorghum",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/RedSorghum.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RepairRobot",
                    "GameName": "Repair Robot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/RepairRobot.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RichDiwali",
                    "GameName": "Rich Diwali",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/RichDiwali.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RichFarm",
                    "GameName": "Rich Farm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/RichFarm.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RomanceInEngland",
                    "GameName": "Romance In England",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/RomanceInEngland.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RomaniSecret",
                    "GameName": "Romani Secret",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/RomaniSecret.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RomeoAndJuliet",
                    "GameName": "Romeo and Juliet",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/RomeoAndJuliet.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Rudolph",
                    "GameName": "Rudolph",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Rudolph.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ScaryClown",
                    "GameName": "Scary Clown",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ScaryClown.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Seediq",
                    "GameName": "Seediq",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Seediq.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SevenGems",
                    "GameName": "777 Gems Fusion Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SevenGems.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SevenSinners",
                    "GameName": "7 Sinners",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SevenSinners.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SexyLips",
                    "GameName": "Sexy Lips",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SexyLips.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ShaolinSoccer",
                    "GameName": "Shaolin Soccer",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ShaolinSoccer.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Sharpshooter",
                    "GameName": "Sharpshooter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Sharpshooter.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ShroveTuesday",
                    "GameName": "Shrove Tuesday",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ShroveTuesday.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Sinbad",
                    "GameName": "Sinbad",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Sinbad.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SnowGoddess",
                    "GameName": "Snow Goddess",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SnowGoddess.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SoulGems",
                    "GameName": "Soul Gems Fusion Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SoulGems.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Speakeasy2",
                    "GameName": "Speakeasy 2 Fusion Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Speakeasy2.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SpiderGoblin",
                    "GameName": "Spider Goblin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SpiderGoblin.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SquidParty",
                    "GameName": "Squid Party Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SquidParty.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Steampunk",
                    "GameName": "Steampunk Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Steampunk.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "StoneAge",
                    "GameName": "Stone Age",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/StoneAge.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SummerSamba",
                    "GameName": "Summer Samba",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SummerSamba.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Sumo",
                    "GameName": "Sumo",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Sumo.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SurpriseBox",
                    "GameName": "Surprise Box",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SurpriseBox.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TaikoMaster",
                    "GameName": "Taiko Master",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TaikoMaster.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TaketoriMonogatari",
                    "GameName": "Taketori Monogatari",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TaketoriMonogatari.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TanukiTavern",
                    "GameName": "Tanuki Tavern",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TanukiTavern.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TheCrypto",
                    "GameName": "The Crypto",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TheCrypto.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TheFrogPrince",
                    "GameName": "The Frog Prince",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TheFrogPrince.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TheKingProducer",
                    "GameName": "The King Producer",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TheKingProducer.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TheLittlePrince",
                    "GameName": "The Little Prince Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TheLittlePrince.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TheMasterCat",
                    "GameName": "The Master Cat",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TheMasterCat.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TheWildFour",
                    "GameName": "The Wild Four",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TheWildFour.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Thief",
                    "GameName": "Thief",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Thief.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ThreeMonkeys",
                    "GameName": "3x Monkeys",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ThreeMonkeys.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ThunderGod",
                    "GameName": "Thunder God",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ThunderGod.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TibetPlateau",
                    "GameName": "Tibet Plateau",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TibetPlateau.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TrickOrTreat",
                    "GameName": "Trick or Treat",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TrickOrTreat.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TuanYuan",
                    "GameName": "Tuan Yuan",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TuanYuan.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "UnicornParty",
                    "GameName": "Unicorn Party",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/UnicornParty.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "UpHellyAa",
                    "GameName": "Up Helly Aa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/UpHellyAa.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WalkingOz",
                    "GameName": "Walking Oz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WalkingOz.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WarOfThrones",
                    "GameName": "War of Thrones",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WarOfThrones.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WealthToad",
                    "GameName": "Wealth Toad",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WealthToad.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WhiteNoseCat",
                    "GameName": "White Nose Cat",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WhiteNoseCat.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WhoLetTheDogsOut",
                    "GameName": "Who Let the Dogs Out",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WhoLetTheDogsOut.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WindLionGod",
                    "GameName": "Wind Lion God",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WindLionGod.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "YearOfTheRabbit",
                    "GameName": "Year of the Rabbit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/YearOfTheRabbit.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ZhongYiAndDragon",
                    "GameName": "Zhong Yi and Dragon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ZhongYiAndDragon.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "777Vegas",
                    "GameName": "777 Vegas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/777Vegas.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AfricaRun",
                    "GameName": "Africa Run",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/AfricaRun.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AgentAngels",
                    "GameName": "Agent Angels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/AgentAngels.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AI",
                    "GameName": "Artificial Intelligence",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/AI.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Aladdin",
                    "GameName": "Aladdin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Aladdin.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AlexanderTheGreat",
                    "GameName": "Alexander the Great",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/AlexanderTheGreat.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AliceInWonderland",
                    "GameName": "Alice In Wonderland",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/AliceInWonderland.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AmericanBurger",
                    "GameName": "American Burger",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/AmericanBurger.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AngryPiggies",
                    "GameName": "Angry Piggies",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/AngryPiggies.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Apes",
                    "GameName": "The Apes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Apes.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ApolloAndArtemis",
                    "GameName": "Apollo and Artemis",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ApolloAndArtemis.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ArcherRobinHood",
                    "GameName": "Archer Robin Hood",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ArcherRobinHood.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ArcticStorm",
                    "GameName": "Arctic Storm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ArcticStorm.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Ares",
                    "GameName": "Ares God of War",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Ares.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ArtistStudio",
                    "GameName": "Artist Studio",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ArtistStudio.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Atlantide",
                    "GameName": "Atlantide",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Atlantide.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Aurora",
                    "GameName": "Aurora",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Aurora.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Bakery",
                    "GameName": "Bakery Sweetness",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Bakery.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BaseballFever",
                    "GameName": "Baseball Fever",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BaseballFever.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BaWangBieJi",
                    "GameName": "Ba Wang Bie Ji",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BaWangBieJi.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BigApple",
                    "GameName": "Big Apple",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BigApple.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BigfootYeti",
                    "GameName": "Bigfoot Yeti",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BigfootYeti.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BlackRider",
                    "GameName": "Black Rider",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BlackRider.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BlockyBlocks",
                    "GameName": "Blocky Block",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BlockyBlocks.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BlockyBlocks2",
                    "GameName": "Blocky Block 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BlockyBlocks2.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BollywoodRomance",
                    "GameName": "Bollywood Romance",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BollywoodRomance.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BombingFruit",
                    "GameName": "Bombing Fruit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BombingFruit.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BonusMania",
                    "GameName": "Bonus Mania",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BonusMania.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BonusManiaDeluxe",
                    "GameName": "Bonus Mania Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BonusManiaDeluxe.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BonusVending",
                    "GameName": "Bonus Vending",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BonusVending.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BookOfMummy",
                    "GameName": "Book of Mummy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BookOfMummy.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BountyHunter",
                    "GameName": "Bounty Hunter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BountyHunter.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BoxingRoo",
                    "GameName": "Boxing Roo",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BoxingRoo.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BoyToys",
                    "GameName": "Boy Toys",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BoyToys.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BubbleDouble",
                    "GameName": "Bubble Double",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BubbleDouble.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BullStampede",
                    "GameName": "Bull Stampede",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BullStampede.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BumbleBee",
                    "GameName": "Bumble Bee",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/BumbleBee.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ButterflyLovers",
                    "GameName": "Butterfly Lovers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ButterflyLovers.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CaiYuanGuangJin",
                    "GameName": "Cai Yuan Guang Jin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CaiYuanGuangJin.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CalabashBoys",
                    "GameName": "Calabash Boys",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CalabashBoys.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Cancan",
                    "GameName": "Can Can",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Cancan.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CandyMania",
                    "GameName": "Candy Mania",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CandyMania.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CandyStorm",
                    "GameName": "Candy Storm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CandyStorm.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CatchTheThief",
                    "GameName": "Catch The Thief",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CatchTheThief.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChaiGong",
                    "GameName": "Chai Gong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ChaiGong.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CharlottesWeb",
                    "GameName": "Charlotte's Web",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CharlottesWeb.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CharmingSorceress",
                    "GameName": "Charming Sorceress",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CharmingSorceress.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChineseAncientTomb",
                    "GameName": "Chinese Ancient Tomb",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ChineseAncientTomb.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChineseFeast",
                    "GameName": "Chinese Feast",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ChineseFeast.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChineseOpera",
                    "GameName": "Chinese Opera",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ChineseOpera.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChinesePastry",
                    "GameName": "Chinese Pastry",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ChinesePastry.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChineseValentinesDay",
                    "GameName": "Chinese Valentines Day",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ChineseValentinesDay.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChiYou",
                    "GameName": "Chi You",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ChiYou.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChristmasCandy",
                    "GameName": "Christmas Candy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ChristmasCandy.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Cinderella",
                    "GameName": "Glass Slipper",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Cinderella.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Cocorico",
                    "GameName": "Cocorico",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Cocorico.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ComeOnRhythm",
                    "GameName": "Come On Rhythm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ComeOnRhythm.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CountySeat",
                    "GameName": "County Seat",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CountySeat.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Cowboys",
                    "GameName": "Cowboys",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Cowboys.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CrazyCircus",
                    "GameName": "Crazy Circus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CrazyCircus.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CrazyWomensJail",
                    "GameName": "Crazy Women's Jail",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CrazyWomensJail.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CreatorRa",
                    "GameName": "Creator Ra",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CreatorRa.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CthulhuSecret",
                    "GameName": "Cthulhu Secret",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CthulhuSecret.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CuJu",
                    "GameName": "Cu Ju",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CuJu.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CupidAndPsyche",
                    "GameName": "Cupid and Psyche",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/CupidAndPsyche.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DaGuanYuan",
                    "GameName": "Da Guan Yuan",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DaGuanYuan.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DarkFortress",
                    "GameName": "Dark Fortress",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DarkFortress.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DaVinci",
                    "GameName": "da Vinci",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DaVinci.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DayOfDead",
                    "GameName": "Dia De Muertos",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DayOfDead.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DeepSea",
                    "GameName": "Deep Sea Adventure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DeepSea.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DemonFox",
                    "GameName": "Demon Fox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DemonFox.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DetectiveDee",
                    "GameName": "Detective Dee",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DetectiveDee.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DiamondPower",
                    "GameName": "Diamond Power",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DiamondPower.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DimSum",
                    "GameName": "Dim Sum",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DimSum.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DonQuixote",
                    "GameName": "Don Quixote",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DonQuixote.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DoubleFortune",
                    "GameName": "Double Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DoubleFortune.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Dracula",
                    "GameName": "Dracula",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Dracula.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DragonBoat",
                    "GameName": "Dragon Boat",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DragonBoat.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DragonBoat2",
                    "GameName": "Dragon Boat 2 Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DragonBoat2.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DragonGate",
                    "GameName": "Dragon Gate",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DragonGate.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DragonsLegend",
                    "GameName": "Legend of Dragons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DragonsLegend.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DragonsWay",
                    "GameName": "Dragon's Way",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DragonsWay.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DragonTurtle",
                    "GameName": "Dragon Turtle",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DragonTurtle.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Dreamcatcher",
                    "GameName": "Dreamcatcher",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Dreamcatcher.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DrGeek",
                    "GameName": "Dr. Geek",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/DrGeek.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "EarthGod",
                    "GameName": "Earth God",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/EarthGod.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "EasterEggParty",
                    "GameName": "Easter Egg Party",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/EasterEggParty.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Egypt",
                    "GameName": "Mysterious Pyramid",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Egypt.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "EgyptianEmpress",
                    "GameName": "Egyptian Empress",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/EgyptianEmpress.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "EgyptianMythology",
                    "GameName": "Egyptian Mythology",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/EgyptianMythology.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "EightTreasures",
                    "GameName": "Eight Treasures",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/EightTreasures.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Emoji",
                    "GameName": "Emoji",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Emoji.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "EmperorQin",
                    "GameName": "Emperor Qin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/EmperorQin.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Enchanted",
                    "GameName": "Enchanted",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Enchanted.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ErlangShen",
                    "GameName": "Erlang Shen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ErlangShen.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FaCaiDestiny",
                    "GameName": "Fa Cai Destiny",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FaCaiDestiny.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FairyDust",
                    "GameName": "Fairy Dust",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FairyDust.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FairyForestTale",
                    "GameName": "Fairy Forest Tale",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FairyForestTale.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Fantasy777",
                    "GameName": "Fantasy 777",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Fantasy777.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FantasyDragons",
                    "GameName": "Fantasy Dragons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FantasyDragons.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FantasyPark",
                    "GameName": "Fantasy Park",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FantasyPark.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FastBlast",
                    "GameName": "Fast Blast",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FastBlast.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Fastbreak",
                    "GameName": "Fastbreak",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Fastbreak.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FightingGirls",
                    "GameName": "Fighting Girls",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FightingGirls.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FireDragons",
                    "GameName": "Fire Dragons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FireDragons.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FireHit",
                    "GameName": "Fire Hit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FireHit.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Flaming7",
                    "GameName": "Flaming 7's",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Flaming7.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FlowerGoddessFestival",
                    "GameName": "Flower Goddess Festival",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FlowerGoddessFestival.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FluffyBuddy",
                    "GameName": "Fluffy Buddy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FluffyBuddy.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FormosanBirds",
                    "GameName": "Formosan Birds",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FormosanBirds.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FortuneBeauty",
                    "GameName": "Fortune Beauty Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FortuneBeauty.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FortuneFu",
                    "GameName": "Fortune Fu",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FortuneFu.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FortuneGanesha",
                    "GameName": "Fortune Ganesha",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FortuneGanesha.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FortuneGod",
                    "GameName": "Fortune God",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FortuneGod.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FortuneLions",
                    "GameName": "Fortune Lions",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FortuneLions.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FortunePiggyBank",
                    "GameName": "Fortune Piggy Bank",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FortunePiggyBank.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FourBeauties",
                    "GameName": "Four Beauties",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FourBeauties.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FourScholars",
                    "GameName": "The Four Scholars",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FourScholars.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Frankenstein",
                    "GameName": "Frankenstein",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Frankenstein.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FruitParty",
                    "GameName": "Fruit Party",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FruitParty.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FuLuShou",
                    "GameName": "Fu Lu Shou",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FuLuShou.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FuShenlong",
                    "GameName": "Fu Shenlong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/FuShenlong.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Gem",
                    "GameName": "A Girl's Best Friend",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Gem.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GenghisKhan",
                    "GameName": "Genghis Khan",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GenghisKhan.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Ghostbuster",
                    "GameName": "Ghostbuster",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Ghostbuster.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GhostFestival",
                    "GameName": "Ghost Festival",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GhostFestival.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GhostsFortune",
                    "GameName": "Ghosts Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GhostsFortune.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Giants",
                    "GameName": "Giants",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Giants.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GlacialEpoch",
                    "GameName": "Glacial Epoch",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GlacialEpoch.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GodofLove",
                    "GameName": "God of Love",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GodofLove.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoGoMonsters",
                    "GameName": "Go Go Monsters",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GoGoMonsters.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Golden777",
                    "GameName": "Golden 777",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Golden777.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoldenBall",
                    "GameName": "Golden Ball",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GoldenBall.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoldenBull",
                    "GameName": "Golden Bull",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GoldenBull.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoldenFish",
                    "GameName": "Golden Fish",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GoldenFish.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoldenShanghai",
                    "GameName": "Golden Shanghai",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GoldenShanghai.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoldMagic",
                    "GameName": "Gold Magic",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GoldMagic.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoldRush",
                    "GameName": "California Gold Rush",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GoldRush.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GreatVoyages",
                    "GameName": "The Great Voyages",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GreatVoyages.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HanselAndGretel",
                    "GameName": "Hansel and Gretel",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HanselAndGretel.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HappyFarm",
                    "GameName": "Farm Mania",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HappyFarm.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HappyIndianChef",
                    "GameName": "Happy Indian Chef",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HappyIndianChef.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HappyThanksgiving",
                    "GameName": "Happy Thanksgiving",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HappyThanksgiving.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HatSeller",
                    "GameName": "Hat Seller",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HatSeller.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HengandHa",
                    "GameName": "Heng and Ha",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HengandHa.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HolyBeast",
                    "GameName": "Holy Beast",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HolyBeast.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HoneyMoney",
                    "GameName": "Honey Money",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HoneyMoney.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HongKong60s",
                    "GameName": "Hong Kong 60s",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HongKong60s.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Horoscope",
                    "GameName": "Horoscope",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Horoscope.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HouYi",
                    "GameName": "Hou Yi",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HouYi.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HuaMulan",
                    "GameName": "Hua Mulan",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HuaMulan.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HuHuFighting",
                    "GameName": "Hu Hu Fighting",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HuHuFighting.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HunterHelibu",
                    "GameName": "Hunter Helibu",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HunterHelibu.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HuYeh",
                    "GameName": "Hu Yeh",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/HuYeh.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ImperialGirls",
                    "GameName": "Imperial Girls",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ImperialGirls.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ImperialGuards",
                    "GameName": "Ming Imperial Guards",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ImperialGuards.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JadePower",
                    "GameName": "Jade Power",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/JadePower.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Japanese7Heroes",
                    "GameName": "Japanese 7 Heroes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Japanese7Heroes.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JellyMania",
                    "GameName": "Jellymania",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/JellyMania.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Jingwei",
                    "GameName": "Jingwei",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Jingwei.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JokerFruit",
                    "GameName": "Joker Fruit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/JokerFruit.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JokerSlot",
                    "GameName": "Joker Slot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/JokerSlot.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JourneyToWest",
                    "GameName": "Journey to the West",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/JourneyToWest.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Jungle",
                    "GameName": "Jungle",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Jungle.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "KingOfDragon",
                    "GameName": "King of Dragon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/KingOfDragon.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Kitty",
                    "GameName": "Kitty Living",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Kitty.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Knights",
                    "GameName": "Medieval Knights",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Knights.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "KungFu",
                    "GameName": "KungFu Kash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/KungFu.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "KungFuKaga",
                    "GameName": "KungFu Kaga",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/KungFuKaga.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LandOfGold",
                    "GameName": "Lands of Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LandOfGold.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LanternFestival",
                    "GameName": "Lantern Festival",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LanternFestival.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LastFantasy",
                    "GameName": "Last Fantasy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LastFantasy.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LeagueOfGods",
                    "GameName": "Daji",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LeagueOfGods.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LegendOfAkihiro",
                    "GameName": "Legend of Akihiro",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LegendOfAkihiro.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LegendOfAthena",
                    "GameName": "Legend of Athena",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LegendOfAthena.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LegendOfFoxSpirit",
                    "GameName": "Legend of Fox Spirit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LegendOfFoxSpirit.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LegendOfHeroes",
                    "GameName": "The Legend of Heroes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LegendOfHeroes.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LegendOfPaladin",
                    "GameName": "Legend of Paladin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LegendOfPaladin.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Leprechauns",
                    "GameName": "Leprechauns",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Leprechauns.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LionDance",
                    "GameName": "Lion Dance",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LionDance.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LionKingAndEagleKing",
                    "GameName": "Lion King And Eagle King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LionKingAndEagleKing.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LiveStreamingStar",
                    "GameName": "Live Streaming Star",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LiveStreamingStar.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LostRealm",
                    "GameName": "Lost Realm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LostRealm.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LotusLamp",
                    "GameName": "The Lotus Lamp",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LotusLamp.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LoungeClub",
                    "GameName": "Lounge Club",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LoungeClub.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LoveInMemory",
                    "GameName": "Love In Memory",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LoveInMemory.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Luck88",
                    "GameName": "Luck88",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Luck88.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuckyCasino",
                    "GameName": "Lucky Casino",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LuckyCasino.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuckyCat",
                    "GameName": "Lucky Cat",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LuckyCat.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuckyGem",
                    "GameName": "Lucky Gem Fusion Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LuckyGem.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuckyInn",
                    "GameName": "Lucky Inn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LuckyInn.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuckyLucky",
                    "GameName": "Lucky Lucky",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LuckyLucky.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuckyPenguins",
                    "GameName": "Lucky Penguins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LuckyPenguins.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuckyTumbler",
                    "GameName": "Lucky Tumbler",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LuckyTumbler.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuxuryGarage",
                    "GameName": "Luxury Garage",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/LuxuryGarage.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MagicalStore",
                    "GameName": "Magical Store",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MagicalStore.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MagicApprentice",
                    "GameName": "Magic Apprentice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MagicApprentice.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MagicianHouse",
                    "GameName": "Magician House",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MagicianHouse.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MagicQueen",
                    "GameName": "Magic Queen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MagicQueen.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Mahjong",
                    "GameName": "Mahjong Master",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Mahjong.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Masquerade",
                    "GameName": "Masquerade",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Masquerade.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MayanGold",
                    "GameName": "Mayan Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MayanGold.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Mazu",
                    "GameName": "Mazu",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Mazu.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MedalWinner",
                    "GameName": "Medal Winner Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MedalWinner.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Medusa",
                    "GameName": "Medusa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Medusa.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MeerkatsFamily",
                    "GameName": "Meerkats' Family",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MeerkatsFamily.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Meowfia",
                    "GameName": "Meowfia",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Meowfia.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Mermaid",
                    "GameName": "Mermaid Seas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Mermaid.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Mexicaliente",
                    "GameName": "Mexicaliente",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Mexicaliente.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MidasTouch",
                    "GameName": "Midas Touch",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MidasTouch.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MilkGirl",
                    "GameName": "Milk Girl",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MilkGirl.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MillenniumLove",
                    "GameName": "Millennium Love",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MillenniumLove.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Millionaires",
                    "GameName": "Millionaires",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Millionaires.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MirrorHouse",
                    "GameName": null,
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MirrorHouse.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MissTiger",
                    "GameName": "Miss Tiger",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MissTiger.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MonkeyAndCrab",
                    "GameName": "Monkey and Crab",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MonkeyAndCrab.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MonkeyManiac",
                    "GameName": "Monkey Maniac",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MonkeyManiac.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MonsterParade",
                    "GameName": "Monster Parade",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MonsterParade.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MoonGoddess",
                    "GameName": "Moon Goddess",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MoonGoddess.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MuayThai",
                    "GameName": "Muay Thai",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MuayThai.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MuscleCars",
                    "GameName": "Muscle Cars",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MuscleCars.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Mushrooms",
                    "GameName": "Trippy Mushrooms",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Mushrooms.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Musketeers",
                    "GameName": "Musketeers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Musketeers.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MysteryAlchemy",
                    "GameName": "Mystery Alchemy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MysteryAlchemy.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Mythic",
                    "GameName": "Mythic",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Mythic.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MythologicalCreatures",
                    "GameName": "Mythological Creatures",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MythologicalCreatures.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Neanderthals",
                    "GameName": "Neanderthals",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Neanderthals.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Nezha",
                    "GameName": "Nezha",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Nezha.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Nian",
                    "GameName": "Nian",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Nian.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "NineLucks",
                    "GameName": "Nine Lucks",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/NineLucks.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Ninja",
                    "GameName": "Ninja",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Ninja.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Nutcracker",
                    "GameName": "The Nut Cracker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Nutcracker.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Nvwa",
                    "GameName": "Nvwa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Nvwa.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "OriginOfFire",
                    "GameName": "Origin Of Fire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/OriginOfFire.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "OwlInForest",
                    "GameName": "Owl In Forest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/OwlInForest.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PandaFamily",
                    "GameName": "Panda Family",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PandaFamily.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Pandora",
                    "GameName": "Pandora's Box",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Pandora.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PartyGirl",
                    "GameName": "Party Girl",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PartyGirl.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PartyGirlWays",
                    "GameName": "Party Girl Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PartyGirlWays.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PersiaBonanza",
                    "GameName": "Persia Bonanza Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PersiaBonanza.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PeterPan",
                    "GameName": "Peter Pan",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PeterPan.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Pets",
                    "GameName": "Pets",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Pets.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PhoenixRising",
                    "GameName": "Phoenix Rising",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PhoenixRising.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PiedPiper",
                    "GameName": "Pied Piper",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PiedPiper.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Pinata",
                    "GameName": "Pinata",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Pinata.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Pinocchio",
                    "GameName": "Pinocchio",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Pinocchio.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Pirate",
                    "GameName": "Captain Pirate",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Pirate.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PirateKing",
                    "GameName": "Pirate King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PirateKing.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PoChiLam",
                    "GameName": "Po Chi Lam",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PoChiLam.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Polaroid",
                    "GameName": "Polaroid",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Polaroid.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Polynesian",
                    "GameName": "Polynesian",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Polynesian.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Poseidon",
                    "GameName": "Poseidon's Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Poseidon.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PrimevalForest",
                    "GameName": "Primeval Rainforest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PrimevalForest.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PumpkinWin",
                    "GameName": "Pumpkin Win",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/PumpkinWin.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "QuadrupleDragons",
                    "GameName": "Quadruple Dragons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/QuadrupleDragons.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "QuickPlayCandy",
                    "GameName": "Quick Play Candy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/QuickPlayCandy.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "QuickPlayJewels",
                    "GameName": "Quick Play Jewels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/QuickPlayJewels.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "QuickPlayMahjong",
                    "GameName": "Quick Play Mahjong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/QuickPlayMahjong.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Rarities",
                    "GameName": "Rarities",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Rarities.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RedBoy",
                    "GameName": "Red Boy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/RedBoy.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RedCliff",
                    "GameName": "Red Cliff",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/RedCliff.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RedRidingHood",
                    "GameName": "Red Riding Hood",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/RedRidingHood.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RichSquire",
                    "GameName": "Rich Squire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/RichSquire.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Robots",
                    "GameName": "Robots",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Robots.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RouranKhaganate",
                    "GameName": "Rouran Khaganate",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/RouranKhaganate.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Route66",
                    "GameName": "Route 66",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Route66.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RoyalDemeanor",
                    "GameName": "Royal Demeanor",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/RoyalDemeanor.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Safari",
                    "GameName": "Safari Slots",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Safari.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SailorMan",
                    "GameName": "Sailor Man",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SailorMan.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Samurai",
                    "GameName": "Samurai Way",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Samurai.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SantaBumbleBee",
                    "GameName": "Santa Bumble Bee Hold and Win",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SantaBumbleBee.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Sante",
                    "GameName": "Sante",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Sante.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Seagull",
                    "GameName": "Seagull",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Seagull.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SecretAgent",
                    "GameName": "Secret Agent",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SecretAgent.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SecretOfOcean",
                    "GameName": "Secret of Ocean",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SecretOfOcean.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SevenHeroines",
                    "GameName": "7 Heroines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SevenHeroines.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SevenWonders",
                    "GameName": "Modern 7 Wonders",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SevenWonders.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ShadowPlay",
                    "GameName": "Shadow Play",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ShadowPlay.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ShaolinLegend",
                    "GameName": "Shaolin Legend",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ShaolinLegend.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Shennong",
                    "GameName": "Shen Nong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Shennong.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ShockTower",
                    "GameName": "Shock Tower",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ShockTower.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ShoppingFiend",
                    "GameName": "Shopping Fiend",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ShoppingFiend.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SiberianWolves",
                    "GameName": "Siberian Wolves",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SiberianWolves.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SilkRoad",
                    "GameName": "Silk Road",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SilkRoad.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SkyForce",
                    "GameName": "Sky Force",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SkyForce.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SkyJourney",
                    "GameName": "Sky Journey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SkyJourney.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SleepwalkingSheep",
                    "GameName": "Sleepwalking Sheep",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SleepwalkingSheep.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SnowLeopards",
                    "GameName": "Snow Leopards",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SnowLeopards.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SnowQueen",
                    "GameName": "Snow Queen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SnowQueen.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SnowWhite",
                    "GameName": "Snow White",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SnowWhite.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SNS",
                    "GameName": "SNS Friends",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SNS.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Soldiers",
                    "GameName": "Soldiers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Soldiers.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SolomonsTreasure",
                    "GameName": "Solomon's Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SolomonsTreasure.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Space",
                    "GameName": "Spinning In Space",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Space.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SpaceStorm",
                    "GameName": "Space Storm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SpaceStorm.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Speakeasy",
                    "GameName": "Speakeasy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Speakeasy.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Speed",
                    "GameName": "Street Racing",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Speed.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SpringBlossom",
                    "GameName": "Spring Blossom",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SpringBlossom.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "StockedBar",
                    "GameName": "Stocked Bar",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/StockedBar.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Stonehenge",
                    "GameName": "Stonehenge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Stonehenge.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SunnyBikini",
                    "GameName": "Sunny Bikini",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SunnyBikini.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SuperBonusMania",
                    "GameName": "Super Bonus Mania",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SuperBonusMania.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SuperDragonTiger",
                    "GameName": "Super Dragon Tiger",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SuperDragonTiger.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SuperEnergy",
                    "GameName": "Super Energy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SuperEnergy.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SuperShot",
                    "GameName": "SuperShot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SuperShot.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SuperShot2",
                    "GameName": "SuperShot 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SuperShot2.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SuperSlime",
                    "GameName": "Super Slime",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SuperSlime.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SushiNinja",
                    "GameName": "Sushi Ninja",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SushiNinja.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SweetMaid",
                    "GameName": "Sweet Maid",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/SweetMaid.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Sweetopia",
                    "GameName": "Sweetopia",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Sweetopia.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TaiChi",
                    "GameName": "Tai Chi",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TaiChi.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TaiwanBlackBear",
                    "GameName": "Taiwan Black Bear",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TaiwanBlackBear.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Tao",
                    "GameName": "Tao",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Tao.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TheBoyWhoCriedWolf",
                    "GameName": "The Boy Who Cried Wolf",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TheBoyWhoCriedWolf.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TheDoorGods",
                    "GameName": "The Door Gods",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TheDoorGods.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TheGingerbreadLand",
                    "GameName": "The Gingerbread Land",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TheGingerbreadLand.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TheGoldenAx",
                    "GameName": "The Golden Ax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TheGoldenAx.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TheGrandmaster",
                    "GameName": "The Grandmaster",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TheGrandmaster.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TheGuardOfHades",
                    "GameName": "The Guard of Hades",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TheGuardOfHades.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TheHappyPrince",
                    "GameName": "The Happy Prince",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TheHappyPrince.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ThirstyCrow",
                    "GameName": "A Thirsty Crow",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ThirstyCrow.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ThreeBandits",
                    "GameName": "Three Bandits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ThreeBandits.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ThreeGods",
                    "GameName": "Three Gods",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ThreeGods.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ThreeHeroes",
                    "GameName": "Three Heroes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ThreeHeroes.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ThreeLittlePigs",
                    "GameName": "Three Little Pigs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ThreeLittlePigs.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TigerGirl",
                    "GameName": "Tiger Girl",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TigerGirl.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TombHeroes",
                    "GameName": "Tomb Heroes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TombHeroes.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TowerofBabel",
                    "GameName": "Tower of Babel",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TowerofBabel.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ToyWorld",
                    "GameName": "Toy World",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ToyWorld.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Treasurebowl",
                    "GameName": "Treasure Bowl",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Treasurebowl.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TreasureBowlMegaways",
                    "GameName": "Treasure Bowl Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TreasureBowlMegaways.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TreasureCarp",
                    "GameName": "Treasure Carp",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TreasureCarp.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TreasureRaider",
                    "GameName": "Treasure Raider",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TreasureRaider.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TreasureTiger",
                    "GameName": "Treasure Tiger",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TreasureTiger.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TRex",
                    "GameName": "The King of Dinosaurs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TRex.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TripleDragons",
                    "GameName": "Triple Dragons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/TripleDragons.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "UFO",
                    "GameName": "UFO",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/UFO.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Vampire",
                    "GameName": "Vampire's Tale",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Vampire.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "VeggiesPlot",
                    "GameName": "Veggies Plot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/VeggiesPlot.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Viking",
                    "GameName": "Age of Vikings",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Viking.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "VolcanoAdventure",
                    "GameName": "Volcano Adventure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/VolcanoAdventure.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WanFuJinAn",
                    "GameName": "WanFu JinAn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WanFuJinAn.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WelcomeFortune",
                    "GameName": "Welcome Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WelcomeFortune.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Wencheng",
                    "GameName": "Princess Wencheng",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Wencheng.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WenDing",
                    "GameName": "Wen Ding",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WenDing.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WerewolfIsComing",
                    "GameName": "Werewolf Is Coming",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WerewolfIsComing.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WestChamber",
                    "GameName": "The West Chamber",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WestChamber.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WhaleWild",
                    "GameName": "Whale Wild",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WhaleWild.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WhiteDeer",
                    "GameName": "White Deer",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WhiteDeer.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WhiteSnakeLegend",
                    "GameName": "Legend of the White Snake",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WhiteSnakeLegend.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WildAlaska",
                    "GameName": "Wild Alaska",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WildAlaska.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WildJungle",
                    "GameName": "Wild Jungle",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WildJungle.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WildVick",
                    "GameName": "Wild Vick",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WildVick.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WildVick2",
                    "GameName": "Wild Vick 2 Adventure Journey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WildVick2.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WildWildBell",
                    "GameName": "Wild Wild Bell",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WildWildBell.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WitchAcademy",
                    "GameName": "Witch Academy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WitchAcademy.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WizardofOz",
                    "GameName": "The Wizard of Oz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WizardofOz.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Wizardry",
                    "GameName": "Wizardry",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Wizardry.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WolfWarrior",
                    "GameName": "Wolf Warrior",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WolfWarrior.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WongTaiSin",
                    "GameName": "Wong TaiSin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WongTaiSin.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WonWonRich",
                    "GameName": "Won Won Rich",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WonWonRich.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WuGang",
                    "GameName": "Wu Gang",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WuGang.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WuSong",
                    "GameName": "Wu Song",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WuSong.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WuZetian",
                    "GameName": "Wu Zetian",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/WuZetian.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "XBomber",
                    "GameName": "X-Bomber",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/XBomber.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "XElements",
                    "GameName": "X-Elements",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/XElements.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "XmasWishes",
                    "GameName": "Xmas Wishes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/XmasWishes.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Yamato",
                    "GameName": "Yamato",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Yamato.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "YearOfTheTiger",
                    "GameName": "Year Of The Tiger",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/YearOfTheTiger.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "YueFei",
                    "GameName": "Yue Fei",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/YueFei.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "YuGong",
                    "GameName": "Yu Gong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/YuGong.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "YunCaiTongZi",
                    "GameName": "Yun Cai Tong Zi",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/YunCaiTongZi.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ZashikiGod",
                    "GameName": "Zashiki God",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ZashikiGod.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ZombieExpert",
                    "GameName": "Zombie Expert Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ZombieExpert.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ZombieLand",
                    "GameName": "Zombie Land",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ZombieLand.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Zorro",
                    "GameName": "The Mask of Zorro",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/Zorro.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GreedyNight",
                    "GameName": "Greedy Night",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/GreedyNight.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MasterOfWulin",
                    "GameName": "Master of Wulin Lock 2 Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/MasterOfWulin.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ThePeonyPavilion",
                    "GameName": "The Peony Pavilion",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/KA_SLOT/ThePeonyPavilion.webp",
                    "ProviderCode": "KA_SLOT",
                    "ProviderName": "KA SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const KA_SLOT = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default KA_SLOT;