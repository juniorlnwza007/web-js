import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "AlohaSpiritXtraLock",
                    "GameName": "Aloha Spirit Xtra Lock",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/AlohaSpiritXtraLock.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FrogsNFlies",
                    "GameName": "FrogsNFlies",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/FrogsNFlies.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JellyMania",
                    "GameName": "Jelly Mania Xtra Streak",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/JellyMania.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MysticBear",
                    "GameName": "Mystic Bear",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/MysticBear.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TheCrown",
                    "GameName": "The Crown",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/TheCrown.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "VikingHonour",
                    "GameName": "Viking Honour XtraWild™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/VikingHonour.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "YearOfTheWildWildTiger",
                    "GameName": "Year Of The Wild Wild Tiger",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/YearOfTheWildWildTiger.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AndarBahar",
                    "GameName": "Andar Bahar",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/AndarBahar.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BookOfTheEast",
                    "GameName": "Book of the East",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/BookOfTheEast.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HachisQuestOfHeroes",
                    "GameName": "HachisQuestOfHeroes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/HachisQuestOfHeroes.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JorgenFromBergen",
                    "GameName": "Jorgen From Bergen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/JorgenFromBergen.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LoneRider",
                    "GameName": "Lone Rider XtraWays",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/LoneRider.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MegaPhoenix",
                    "GameName": "Mega Phoenix",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/MegaPhoenix.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PirateTreasure1181",
                    "GameName": "Pirate Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/PirateTreasure1181.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RockNWaysXtraWays",
                    "GameName": "Rock N' Ways XtraWays",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/RockNWaysXtraWays.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RoyalRumble",
                    "GameName": "Royal Rumble XtraGacha™",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/RoyalRumble.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SamuraiBlade",
                    "GameName": "Samurai Blade",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/SamuraiBlade.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SantaVsAliens",
                    "GameName": "Santa Vs Aliens",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/SantaVsAliens.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SwordWarriors",
                    "GameName": "Sword Warriors",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/SwordWarriors.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "VikingsOfValhalla",
                    "GameName": "Vikings of Valhalla",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/VikingsOfValhalla.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ZombiesOnVacation",
                    "GameName": "Zombies on Vacation",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/ZombiesOnVacation.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BookOfTheWest",
                    "GameName": "Book of the West",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/BookOfTheWest.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoldenReindeer",
                    "GameName": "Golden Reindeer",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/GoldenReindeer.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RainbowGold",
                    "GameName": "Rainbow Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/RainbowGold.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CaribbeanCannons",
                    "GameName": "Caribbean Cannons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/CaribbeanCannons.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HawaiianFantasy",
                    "GameName": "Hawaiian Fantasy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/HawaiianFantasy.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WildPharaoh",
                    "GameName": "Wild Pharaoh",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/WildPharaoh.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GrockelsCauldron",
                    "GameName": "Grockel's Cauldron",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/GrockelsCauldron.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WildLand",
                    "GameName": "Wild Land",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/WildLand.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MegaMaya",
                    "GameName": "Mega Maya",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/MegaMaya.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TripleLuck",
                    "GameName": "Triple Luck",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/TripleLuck.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SpinDiner",
                    "GameName": "Spin Dinner",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/SpinDiner.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HanaBana",
                    "GameName": "Hana Bana",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/HanaBana.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SeaRaiders",
                    "GameName": "Sea Raiders",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/SeaRaiders.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FortuneFrog",
                    "GameName": "Fortune Frog",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/FortuneFrog.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ImmortalMonkeyKing",
                    "GameName": "Immortal Monkey King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/ImmortalMonkeyKing.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LaserCats",
                    "GameName": "Laser Cats",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/LaserCats.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SushiMaster",
                    "GameName": "Sushi Master",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/SushiMaster.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BollywoodBillions",
                    "GameName": "Bollywood  Billions",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/BollywoodBillions.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RoyalGoldenDragon",
                    "GameName": "Royal Golden Dragon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/RoyalGoldenDragon.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Golden888",
                    "GameName": "Golden 888",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/Golden888.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "EverlastingSpins",
                    "GameName": "Everlasting Spins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/EverlastingSpins.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HappyHappyPenguin",
                    "GameName": "Happy Happy Penguin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/HappyHappyPenguin.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Zoomania",
                    "GameName": "Zoomania",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/Zoomania.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PandaWarrior",
                    "GameName": "Panda Warrior",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/PandaWarrior.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoldenGenie",
                    "GameName": "Golden Genie",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/GoldenGenie.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Jawz",
                    "GameName": "Jawz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/Jawz.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WildWildWitch",
                    "GameName": "Wild Wild Witch",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/WildWildWitch.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuckyPandaH5",
                    "GameName": "Lucky Panda H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/LuckyPandaH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WildWildTiger",
                    "GameName": "Wild Wild Tiger",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/WildWildTiger.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FrogsNFlies2",
                    "GameName": "Frogs 'n Flies 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/FrogsNFlies2.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoldenClaw",
                    "GameName": "Golden Claw",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/GoldenClaw.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MadMonkey2",
                    "GameName": "Mad Monkey 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/MadMonkey2.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WildKartRacers",
                    "GameName": "Wild Kart Racers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/WildKartRacers.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FairyHollow",
                    "GameName": "Fairy Hollow",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/FairyHollow.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoldenBuffalo",
                    "GameName": "Golden Buffalo",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/GoldenBuffalo.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HeroesNeverDie",
                    "GameName": "Heroes Never Die",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/HeroesNeverDie.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoldenPigNJ",
                    "GameName": "Golden Pig",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/GoldenPigNJ.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ThreeDiamonds",
                    "GameName": "3 Diamonds",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/ThreeDiamonds.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "NeutronStarH5",
                    "GameName": "Neutron Star H5 ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/NeutronStarH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MedusaCurse",
                    "GameName": "Medusa's Curse",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/MedusaCurse.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DiamondFortune",
                    "GameName": "Diamond Fortune ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/DiamondFortune.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "UltimateFighter",
                    "GameName": "Ultimate fighter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/UltimateFighter.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DragonPalaceH5",
                    "GameName": "Dragon Palace H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/DragonPalaceH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Shark",
                    "GameName": "Shark",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/Shark.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Crazy8s",
                    "GameName": "Crazy8s",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/Crazy8s.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DiaDeMuertos",
                    "GameName": "Dia De Muertos",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/DiaDeMuertos.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "NeptunesGoldH5",
                    "GameName": "Neptune's Gold H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/NeptunesGoldH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "KingDinosaur",
                    "GameName": "King Dinosaur",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/KingDinosaur.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "KungFuShowdown",
                    "GameName": "Kung Fu Showdown",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/KungFuShowdown.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BattleHeroes",
                    "GameName": "Battle Heroes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/BattleHeroes.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DiamondTowerH5",
                    "GameName": "Diamond Tower H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/DiamondTowerH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LostTempleH5",
                    "GameName": "Lost Temple H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/LostTempleH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GemRiches",
                    "GameName": "Gem Riches ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/GemRiches.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "YingCaiShen",
                    "GameName": "Ying Cai Shen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/YingCaiShen.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WildTriads",
                    "GameName": "Wild Triads",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/WildTriads.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TinyDoorGods",
                    "GameName": "Tiny Door Gods",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/TinyDoorGods.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoldenDragon",
                    "GameName": "Golden Dragon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/GoldenDragon.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CherryFortune",
                    "GameName": "Cherry Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/CherryFortune.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ReelsOfFortune",
                    "GameName": "Reels Of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/ReelsOfFortune.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GoldenAmazon",
                    "GameName": "Golden Amazon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/GoldenAmazon.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MonkeyLuck",
                    "GameName": "Monkey Luck",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/MonkeyLuck.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LeagueOfChampions",
                    "GameName": "League Of Champions",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/LeagueOfChampions.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ThunderingZeusH5",
                    "GameName": "ThunderingZeus H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/ThunderingZeusH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MadMonkeyH5",
                    "GameName": "Mad Monkey H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/MadMonkeyH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FireGoddessH5",
                    "GameName": "Fire Goddess H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/FireGoddessH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DynastyEmpire",
                    "GameName": "Dynasty Empire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/DynastyEmpire.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AladdinsLegacyH5",
                    "GameName": "Aladdin's Legacy H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/AladdinsLegacyH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FuStarH5",
                    "GameName": "Fu Star H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/FuStarH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FivePiratesH5",
                    "GameName": "Five Pirates H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/FivePiratesH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MoreMonkeysH5",
                    "GameName": "More Monkeys H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/MoreMonkeysH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "StacksOfCheese",
                    "GameName": "Stacks of Cheese",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/StacksOfCheese.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SuperKids",
                    "GameName": "Super Kids",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/SuperKids.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HotVolcanoH5",
                    "GameName": "Hot Volcano H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/HotVolcanoH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FortunePaysH5",
                    "GameName": "Fortune Pays H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/FortunePaysH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Huluwa",
                    "GameName": "Huluwa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/Huluwa.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LegendOfLinkH5",
                    "GameName": "Legend Of Link H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/LegendOfLinkH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DetectiveBlackCat",
                    "GameName": "Detective Black Cat",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/DetectiveBlackCat.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FrogsNFliesH5",
                    "GameName": "Frogs N Flies H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/FrogsNFliesH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "EightImmortals",
                    "GameName": "Eight Immortals",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/EightImmortals.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GongXiFaCai",
                    "GameName": "Gong Xi Fa Cai",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/GongXiFaCai.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DolphinGoldH5",
                    "GameName": "Dolphin Gold H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/DolphinGoldH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "YearOfTheMonkeyH5",
                    "GameName": "Year of The Monkey H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/YearOfTheMonkeyH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChilliGoldH5",
                    "GameName": "Chilli Gold H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/ChilliGoldH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SilverLionH5",
                    "GameName": "Silver Lion H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/SilverLionH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DragonKingH5",
                    "GameName": "Dragon King H5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/DragonKingH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "NeutronStar",
                    "GameName": "NeutronStar",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/NeutronStar.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DragonKing",
                    "GameName": "Drago King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/DragonKing.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FireGoddess",
                    "GameName": "FireGoddess",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/FireGoddess.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FortunePays",
                    "GameName": "FortunePays",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/FortunePays.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HotVolcano",
                    "GameName": "HotVolcano",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/HotVolcano.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AladdinsLegacy",
                    "GameName": "AladdinsLegacy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/AladdinsLegacy.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FivePirates",
                    "GameName": "FivePirates",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/FivePirates.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SilverLion",
                    "GameName": "SilverLion",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/SilverLion.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MadMonkey",
                    "GameName": "MadMonkey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/MadMonkey.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DragonPalace",
                    "GameName": "DragonPalace",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/DragonPalace.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FuStar",
                    "GameName": "FuStar",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/FuStar.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "NeptunesGoldSlots",
                    "GameName": "NeptunesGoldSlots",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/NeptunesGoldSlots.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChilliGold",
                    "GameName": "ChilliGold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/ChilliGold.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LostTemple",
                    "GameName": "LostTemple",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/LostTemple.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuckyPanda",
                    "GameName": "LuckyPanda",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/LuckyPanda.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DolphinGold",
                    "GameName": "DolphinGold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/DolphinGold.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ThunderingZeus",
                    "GameName": "ThunderingZeus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/ThunderingZeus.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FrogsNFliesH5v2",
                    "GameName": "Frogs N Flies H5 v2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/FrogsNFliesH5v2.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "StormOfEgypt",
                    "GameName": "Storm of Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/StormOfEgypt.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SeaGod",
                    "GameName": "Sea God",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/SeaGod.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WildWestH5",
                    "GameName": "Wild WestH5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/WildWestH5.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SpinCity",
                    "GameName": "Spin City",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/TTG/SpinCity.webp",
                    "ProviderCode": "TTG",
                    "ProviderName": "TTG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const TTG = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default TTG;