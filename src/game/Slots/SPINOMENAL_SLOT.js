import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "SlotMachine_40SpinningDice",
                    "GameName": "40 Spinning Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_40SpinningDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_AthenasGlory",
                    "GameName": "Athena's Glory",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_AthenasGlory.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BabaYagaTales",
                    "GameName": "Baba Yaga Tales",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BabaYagaTales.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BeernDice",
                    "GameName": "Beer n' Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BeernDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BeerOclock",
                    "GameName": "Beer O'clock",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BeerOclock.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfAphrodite",
                    "GameName": "Book Of Aphrodite",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfAphrodite.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfBabaYaga",
                    "GameName": "Book Of Baba Yaga",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfBabaYaga.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfChampions-WorldGlory",
                    "GameName": "Book of Champions - World Glory",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfChampions-WorldGlory.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfDemiGodsIV-Thunderstorm",
                    "GameName": "Book Of Demi Gods IV - Thunderstorm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfDemiGodsIV-Thunderstorm.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfElves",
                    "GameName": "Book Of Elves",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfElves.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfLuckyJack-TheLostPearl",
                    "GameName": "Book of Lucky Jack - The Lost Pearl",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfLuckyJack-TheLostPearl.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfMuertos",
                    "GameName": "Book Of Muertos",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfMuertos.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfPanther-WildDawn",
                    "GameName": "Book Of Panther - Wild Dawn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfPanther-WildDawn.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfPiggyBank",
                    "GameName": "Book Of Piggy Bank",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfPiggyBank.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfPiggyBank-Riches",
                    "GameName": "Book Of Piggy Bank - Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfPiggyBank-Riches.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfRebirthDice",
                    "GameName": "Book Of Rebirth Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfRebirthDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfSirens-GoldenPearl",
                    "GameName": "Book of Sirens - Golden Pearl",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfSirens-GoldenPearl.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfXmas-JingleBells",
                    "GameName": "Book Of Xmas - Jingle Bells",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfXmas-JingleBells.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_DiceOfCharms",
                    "GameName": "Dice of Charms",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_DiceOfCharms.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_EasterDice",
                    "GameName": "Easter Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_EasterDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_EgyptianRebirth2-FrozenFlames",
                    "GameName": "Egyptian Rebirth II - Frozen Flames",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_EgyptianRebirth2-FrozenFlames.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_EgyptianSands",
                    "GameName": "Egyptian Sands",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_EgyptianSands.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_EgyptianTale",
                    "GameName": "Egyptian Tale",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_EgyptianTale.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_EgyptianWaysDice",
                    "GameName": "Egyptian Ways Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_EgyptianWaysDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_Fruits-ChaseNWin",
                    "GameName": "Fruits - Chase'N'Win",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_Fruits-ChaseNWin.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_GangstersGold-OnTheRun",
                    "GameName": "Gangster's Gold - On The Run",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_GangstersGold-OnTheRun.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_GlowingFruitsDice",
                    "GameName": "Glowing Fruits Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_GlowingFruitsDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_GoldenPiggyBankDice",
                    "GameName": "Golden Piggy Bank - Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_GoldenPiggyBankDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_Halloween-ChaseNWin",
                    "GameName": "Halloween - Chase'N'Win",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_Halloween-ChaseNWin.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_HawaiianBliss",
                    "GameName": "Hawaiian Bliss",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_HawaiianBliss.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_HutWithChickenLegs",
                    "GameName": "Hut With Chicken Legs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_HutWithChickenLegs.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_JokersCharms-Halloween",
                    "GameName": "Joker’s Charms - Halloween",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_JokersCharms-Halloween.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_JokersCharms-Xmas",
                    "GameName": "Joker’s Charms - Xmas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_JokersCharms-Xmas.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_KitsunesScrolls-SacredFlames",
                    "GameName": "Kitsune's Scrolls - Sacred Flames",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_KitsunesScrolls-SacredFlames.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_LuckyJack-BookOfRebirth",
                    "GameName": "Lucky Jack - Book Of Rebirth",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_LuckyJack-BookOfRebirth.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_MajesticWinter-Avalanche",
                    "GameName": "Majestic Winter - Avalanche",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_MajesticWinter-Avalanche.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_MMAChampions",
                    "GameName": "MMA Champions",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_MMAChampions.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_NightWolf-DarkestFlame",
                    "GameName": "Night Wolf - Darkest Flame",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_NightWolf-DarkestFlame.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_PickaFruit",
                    "GameName": "Pick a Fruit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_PickaFruit.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_PickaFruit-FireBlaze",
                    "GameName": "Pick a Fruit - Fire Blaze",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_PickaFruit-FireBlaze.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_PumpkinsDice",
                    "GameName": "Pumpkin's Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_PumpkinsDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_QueenOfIce-FrozenFlames",
                    "GameName": "Queen Of Ice - Frozen Flames",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_QueenOfIce-FrozenFlames.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_ReignOfSeth",
                    "GameName": "Reign Of Seth",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_ReignOfSeth.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_ReindeerRampage",
                    "GameName": "Reindeer Rampage",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_ReindeerRampage.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_SnowingGifts",
                    "GameName": "Snowing Gifts",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_SnowingGifts.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_SoccerDice",
                    "GameName": "Soccer Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_SoccerDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_StoryOfMedusaII",
                    "GameName": "Story of Medusa II",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_StoryOfMedusaII.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_StoryOfTheSamurai-TheLastRonin",
                    "GameName": "Story Of The Samurai - The Last Rōnin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_StoryOfTheSamurai-TheLastRonin.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_SummerWays",
                    "GameName": "Summer Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_SummerWays.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_TennisChampionsDice",
                    "GameName": "Tennis Champion - Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_TennisChampionsDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_ValentinesFortune-Dice",
                    "GameName": "Valentine’s Fortune Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_ValentinesFortune-Dice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_Vegas-ChaseNWin",
                    "GameName": "Vegas - Chase'N'Win",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_Vegas-ChaseNWin.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WackyMonkey-ChaseNWin",
                    "GameName": "Wacky Monkey - Chase'N'Win",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WackyMonkey-ChaseNWin.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WackyMonkeyDice",
                    "GameName": "Wacky Monkey Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WackyMonkeyDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_Werewolf-TheBecoming",
                    "GameName": "Werewolf - The Becoming",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_Werewolf-TheBecoming.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_Werewolf-TheHunt",
                    "GameName": "Werewolf - The Hunt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_Werewolf-TheHunt.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WildfireFruitsDice",
                    "GameName": "Wildfire Fruits Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WildfireFruitsDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WildSanta2",
                    "GameName": "Wild Santa 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WildSanta2.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WildSantaDice",
                    "GameName": "Wild Santa Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WildSantaDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WinnersGoldDice",
                    "GameName": "Winners Gold Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WinnersGoldDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WolfFang-DeepForest",
                    "GameName": "Wolf Fang - Deep Forest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WolfFang-DeepForest.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WolfFang-GoldenSands",
                    "GameName": "Wolf Fang - Golden Sands",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WolfFang-GoldenSands.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WolfFang-SnowFall",
                    "GameName": "Wolf Fang - Snowfall",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WolfFang-SnowFall.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WolfFang-TheWilderness",
                    "GameName": "Wolf Fang - The Wilderness",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WolfFang-TheWilderness.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_Xmas-ChaseNWin",
                    "GameName": "Xmas - Chase'N'Win",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_Xmas-ChaseNWin.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_100JuicyFruits",
                    "GameName": "100 Juicy Fruits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_100JuicyFruits.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_100LuckyChilies",
                    "GameName": "100 Lucky Chilies",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_100LuckyChilies.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_100SpinningDice",
                    "GameName": "100 Spinning Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_100SpinningDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_40LuckyFruits",
                    "GameName": "40 Lucky Fruits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_40LuckyFruits.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_4Horsemen",
                    "GameName": "4 Horsemen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_4Horsemen.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_4Horsemen2",
                    "GameName": "4 Horsemen II",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_4Horsemen2.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_88FortuneCats",
                    "GameName": "88 Fortune Cats",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_88FortuneCats.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_AfricanFortune",
                    "GameName": "African Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_AfricanFortune.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_AfricanRampage",
                    "GameName": "African Rampage",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_AfricanRampage.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_AgeOfPirates",
                    "GameName": "Age of Pirates",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_AgeOfPirates.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_AgeOfPirates-15E",
                    "GameName": "Age Of Pirates 15 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_AgeOfPirates-15E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_AztecSpell",
                    "GameName": "Aztec Spell",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_AztecSpell.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_AztecSpell-10E",
                    "GameName": "Aztec Spell 10 Lines Edition",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_AztecSpell-10E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_AztecSpell-ForgottenEmpire",
                    "GameName": "Aztec Spell - Forgotten Empire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_AztecSpell-ForgottenEmpire.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BeerCollection-10E",
                    "GameName": "Beer Collection 10 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BeerCollection-10E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BeerCollection-20E",
                    "GameName": "Beer Collection 20 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BeerCollection-20E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BeerCollection-30E",
                    "GameName": "Beer Collection 30 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BeerCollection-30E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BeerCollection-40E",
                    "GameName": "Beer Collection 40 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BeerCollection-40E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BluePanther",
                    "GameName": "Blue Panther",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BluePanther.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfChampions",
                    "GameName": "Book of Champions",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfChampions.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfChampions-Reloaded",
                    "GameName": "Book Of Champions Reloaded",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfChampions-Reloaded.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfClovers",
                    "GameName": "Book Of Clovers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfClovers.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfClovers-Reloaded",
                    "GameName": "Book of Clovers Reloaded",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfClovers-Reloaded.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfDemiGods2",
                    "GameName": "Book Of Demi Gods II",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfDemiGods2.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfDemiGods2-Reloaded",
                    "GameName": "Book Of Demi Gods II Reloaded",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfDemiGods2-Reloaded.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfDemiGods3",
                    "GameName": "Book of Demi God lll",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfDemiGods3.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfDemiGods3-Reloaded",
                    "GameName": "Book Of Demi Gods III Reloaded",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfDemiGods3-Reloaded.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfDemiGods4",
                    "GameName": "Book Of Demi Gods IV",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfDemiGods4.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfDiamonds",
                    "GameName": "Book Of Diamonds",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfDiamonds.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfDiamonds-Reloaded",
                    "GameName": "Book Of Diamonds Reloaded",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfDiamonds-Reloaded.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfHorror",
                    "GameName": "Book Of Horror",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfHorror.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfHorror-Friday13th",
                    "GameName": "Book Of Horror - Friday the 13th",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfHorror-Friday13th.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfPanther",
                    "GameName": "Book Of Panther",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfPanther.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfRampage",
                    "GameName": "Book Of Rampage",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfRampage.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfRampage-Reloaded",
                    "GameName": "Book of Rampage Reloaded",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfRampage-Reloaded.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfRebirth",
                    "GameName": "Book Of Rebirth",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfRebirth.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookofRebirth-Reloaded",
                    "GameName": "Book Of Rebirth Reloaded",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookofRebirth-Reloaded.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfSirens",
                    "GameName": "Book of Sirens",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfSirens.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfTheDivine",
                    "GameName": "Book Of The Divine",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfTheDivine.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookofTheDivine-Reloaded",
                    "GameName": "Book Of The Divine Reloaded",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookofTheDivine-Reloaded.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfTribes",
                    "GameName": "Book Of Tribes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfTribes.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfTribes-Reloaded",
                    "GameName": "Book Of Tribes Reloaded",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfTribes-Reloaded.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfWolves",
                    "GameName": "Book of Wolves",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfWolves.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfWolves-FullMoon",
                    "GameName": "Book of Wolves - Full Moon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfWolves-FullMoon.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfXmas",
                    "GameName": "Book Of Xmas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfXmas.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BookOfXmas-Reloaded",
                    "GameName": "Book Of Xmas Reloaded",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BookOfXmas-Reloaded.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_BuffaloRampage",
                    "GameName": "Buffalo Rampage",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_BuffaloRampage.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_ColossusFruits",
                    "GameName": "Colossus Fruits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_ColossusFruits.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_DarkReels",
                    "GameName": "Dark Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_DarkReels.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_DarkWolf",
                    "GameName": "Dark Wolf",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_DarkWolf.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_DedMoroz",
                    "GameName": "Ded Moroz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_DedMoroz.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_DedMoroz2",
                    "GameName": "Ded Moroz II",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_DedMoroz2.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_DemiGods2",
                    "GameName": "Demi Gods II",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_DemiGods2.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_DemiGods2-15E",
                    "GameName": "Demi Gods II 15 Lines Edition",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_DemiGods2-15E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_DemiGods3",
                    "GameName": "Demi Gods III",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_DemiGods3.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_DemiGods3-15E",
                    "GameName": "Demi Gods III - 15 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_DemiGods3-15E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_DemiGods4",
                    "GameName": "Demi Gods IV",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_DemiGods4.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_DemiGods4-Thunderstorm",
                    "GameName": "Demi Gods IV - Thunderstorm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_DemiGods4-Thunderstorm.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_EasterGifts-10E",
                    "GameName": "Easter Gifts",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_EasterGifts-10E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_EasterSpin",
                    "GameName": "Easter Spin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_EasterSpin.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_EgyptianRebirth2",
                    "GameName": "Egyptian Rebirth 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_EgyptianRebirth2.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_EgyptianRebirth2-10E",
                    "GameName": "Egyptian Rebirth II 10 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_EgyptianRebirth2-10E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_EgyptianRebirth2-EE",
                    "GameName": "Egyptian Rebirth II Expanded Edition",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_EgyptianRebirth2-EE.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_EgyptianWays",
                    "GameName": "Egyptian Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_EgyptianWays.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_FortunaDeLosMuertos",
                    "GameName": "Fortuna de los Muertos",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_FortunaDeLosMuertos.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_FortunaDeLosMuertos2",
                    "GameName": "Fortuna de los Muertos II",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_FortunaDeLosMuertos2.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_FruitsCollection-10E",
                    "GameName": "Fruits Collection 10 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_FruitsCollection-10E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_FruitsCollection-20E",
                    "GameName": "Fruits Collection 20 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_FruitsCollection-20E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_FruitsCollection-30E",
                    "GameName": "Fruits Collection 30 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_FruitsCollection-30E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_FruitsCollection-40E",
                    "GameName": "Fruits Collection 40 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_FruitsCollection-40E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_FruitsOnIce",
                    "GameName": "Fruits On Ice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_FruitsOnIce.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_FruitsOnIceCollection-10E",
                    "GameName": "Fruits On Ice Collection 10 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_FruitsOnIceCollection-10E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_FruitsOnIceCollection-20E",
                    "GameName": "Fruits On Ice Collection 20 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_FruitsOnIceCollection-20E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_FruitsOnIceCollection-30E",
                    "GameName": "Fruits On Ice Collection 30 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_FruitsOnIceCollection-30E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_FruitsOnIceCollection-40E",
                    "GameName": "Fruits On Ice Collection 40 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_FruitsOnIceCollection-40E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_GangstersGold",
                    "GameName": "Gangsters Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_GangstersGold.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_GlowingFruits",
                    "GameName": "Glowing Fruits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_GlowingFruits.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_GoddessOfLotus",
                    "GameName": "Goddess Of Lotus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_GoddessOfLotus.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_GoddessOfLotus-10E",
                    "GameName": "Goddess Of Lotus 10 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_GoddessOfLotus-10E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_GoddessOfLotus-Blooming",
                    "GameName": "Goddess Of Lotus - Blooming Wonder",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_GoddessOfLotus-Blooming.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_GoldenPiggyBank",
                    "GameName": "Golden Piggy Bank",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_GoldenPiggyBank.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_GoldenPiggyBank-BlingBling",
                    "GameName": "Golden Piggy Bank - Bling Bling",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_GoldenPiggyBank-BlingBling.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_HallowReels",
                    "GameName": "Hallow Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_HallowReels.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_IrishLuckyDice",
                    "GameName": "Irish Lucky Dice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_IrishLuckyDice.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_IrishTreasures",
                    "GameName": "Irish Treasures",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_IrishTreasures.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_JokerMadness",
                    "GameName": "Joker Madness",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_JokerMadness.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_JokerWin",
                    "GameName": "Joker Win",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_JokerWin.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_KitsunesScrolls",
                    "GameName": "Kitsune's Scrolls",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_KitsunesScrolls.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_KitsunesScrolls-EE",
                    "GameName": "Kitsune's Scrolls Expanded Edition",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_KitsunesScrolls-EE.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_Kupala",
                    "GameName": "Kupala",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_Kupala.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_Kupala2",
                    "GameName": "Kupala II",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_Kupala2.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_LuckyJack-LostJungle",
                    "GameName": "Lucky Jack - Lost Jungle",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_LuckyJack-LostJungle.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_LuckyJack-Tut",
                    "GameName": "Lucky Jack - Tut’s Treasures",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_LuckyJack-Tut.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_LuckyMrPatrick",
                    "GameName": "Lucky Mr. Patrick",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_LuckyMrPatrick.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_LuckyMrsPatrick",
                    "GameName": "Lucky Mrs Patrick",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_LuckyMrsPatrick.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_LuckyScore",
                    "GameName": "Lucky Score",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_LuckyScore.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_LuxuryClub",
                    "GameName": "Luxury Club",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_LuxuryClub.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_MagicalAmazon",
                    "GameName": "Magical Amazon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_MagicalAmazon.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_MajesticKing",
                    "GameName": "Majestic King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_MajesticKing.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_MajesticKing-Sunset",
                    "GameName": "Majestic King - Sunset",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_MajesticKing-Sunset.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_MajesticWinter",
                    "GameName": "Majestic Winter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_MajesticWinter.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_MammothRampage",
                    "GameName": "Mammoth Rampage",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_MammothRampage.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_NightsOfEgypt",
                    "GameName": "Nights Of Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_NightsOfEgypt.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_NightsOfMagic",
                    "GameName": "Nights Of Magic",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_NightsOfMagic.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_OktoberSpinFest",
                    "GameName": "Oktober Spin Fest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_OktoberSpinFest.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_OriginsOfLilith",
                    "GameName": "Origins Of Lilith",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_OriginsOfLilith.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_PatricksCollection-10E",
                    "GameName": "Patrick's Collection 10 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_PatricksCollection-10E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_PatricksCollection-20E",
                    "GameName": "Patrick's Collection 20 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_PatricksCollection-20E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_PatricksCollection-30E",
                    "GameName": "Patrick's Collection 30 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_PatricksCollection-30E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_PatricksCollection-40E",
                    "GameName": "Patrick's Collection 40 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_PatricksCollection-40E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_PennyFruits",
                    "GameName": "Penny Fruits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_PennyFruits.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_PennyFruits-Extreme",
                    "GameName": "Penny Fruits Xtreme",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_PennyFruits-Extreme.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_PoseidonsRising",
                    "GameName": "Poseidon's Rising",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_PoseidonsRising.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_PoseidonsRising-15E",
                    "GameName": "Posiedon's Rising 15 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_PoseidonsRising-15E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_PoseidonsRising-EE",
                    "GameName": "Posiedon's Rising Expanded Edition",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_PoseidonsRising-EE.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_QueenOfFire",
                    "GameName": "Queen Of Fire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_QueenOfFire.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_QueenOfFire-EE",
                    "GameName": "Queen Of Fire Expanded Edition",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_QueenOfFire-EE.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_QueenOfFire-FrozenFlames",
                    "GameName": "Queen Of Fire - Frozen Flames",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_QueenOfFire-FrozenFlames.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_QueenOfIce",
                    "GameName": "Queen Of Ice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_QueenOfIce.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_QueenOfIce-EE",
                    "GameName": "Queen Of Ice Expanded Edition",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_QueenOfIce-EE.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_ReelsOfRio",
                    "GameName": "Reels of Rio",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_ReelsOfRio.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_ReelsOfRio-Party",
                    "GameName": "Reels Of Rio - Party Time",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_ReelsOfRio-Party.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_RunChase",
                    "GameName": "Run Chase",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_RunChase.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_SantasWildNight",
                    "GameName": "Santa’s Wild Night",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_SantasWildNight.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_SavannahsQueen",
                    "GameName": "Savannah's Queen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_SavannahsQueen.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_Snegurochka",
                    "GameName": "Snegurochka",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_Snegurochka.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_Snegurochka2",
                    "GameName": "Snegurochka II",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_Snegurochka2.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_SpinningBeers",
                    "GameName": "Spinning Beers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_SpinningBeers.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_StoryOfEgypt",
                    "GameName": "Story Of Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_StoryOfEgypt.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_StoryOfEgypt-10E",
                    "GameName": "Story Of Egypt 10 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_StoryOfEgypt-10E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_StoryOfHercules",
                    "GameName": "Story of Hercules",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_StoryOfHercules.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_StoryOfHercules-15E",
                    "GameName": "Story Of Hercules 15 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_StoryOfHercules-15E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_StoryOfMedusa",
                    "GameName": "Story Of Medusa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_StoryOfMedusa.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_StoryOfTheSamurai",
                    "GameName": "Story of The Samurai",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_StoryOfTheSamurai.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_StoryOfTheSamurai-10E",
                    "GameName": "Story Of The Samurai 10 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_StoryOfTheSamurai-10E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_StoryOfVikings",
                    "GameName": "Story Of Vikings",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_StoryOfVikings.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_StoryOfVikings-10E",
                    "GameName": "Story Of Vikings 10 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_StoryOfVikings-10E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_SummerOfLuck",
                    "GameName": "Summer Of Luck",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_SummerOfLuck.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_TennisChampions",
                    "GameName": "Tennis Champions",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_TennisChampions.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_TheAnkhProtector",
                    "GameName": "The Ankh Protector",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_TheAnkhProtector.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_TimesOfEgypt",
                    "GameName": "Times Of Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_TimesOfEgypt.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_TimesOfEgypt-Pharaoh",
                    "GameName": "Times of Egypt - Pharaoh's Reign",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_TimesOfEgypt-Pharaoh.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_TitansRising",
                    "GameName": "Titan's Rising",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_TitansRising.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_TitansRising-15E",
                    "GameName": "Titan's Rising 15 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_TitansRising-15E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_TitansRising-EE",
                    "GameName": "Titan's Rising Expanded Edition",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_TitansRising-EE.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_TrojanTales",
                    "GameName": "Trojan Tales",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_TrojanTales.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_ValentineCollection-10E",
                    "GameName": "Valentine Collection 10 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_ValentineCollection-10E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_ValentineCollection-20E",
                    "GameName": "Valentine Collection 20 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_ValentineCollection-20E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_ValentineCollection-30E",
                    "GameName": "Valentine Collection 30 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_ValentineCollection-30E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_ValentineCollection-40E",
                    "GameName": "Valentine Collection 40 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_ValentineCollection-40E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_ValentinesFortune",
                    "GameName": "Valentine's Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_ValentinesFortune.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WackyMonkey",
                    "GameName": "Wacky Monkey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WackyMonkey.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WesternTales",
                    "GameName": "Western Tales",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WesternTales.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WildEaster",
                    "GameName": "Wild Easter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WildEaster.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WildfireFruits",
                    "GameName": "Wildfire Fruits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WildfireFruits.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WildPenguin",
                    "GameName": "Wild Penguin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WildPenguin.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WildSanta",
                    "GameName": "Wild Santa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WildSanta.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WinnersGold",
                    "GameName": "Winners Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WinnersGold.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WintersGold",
                    "GameName": "Winter's Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WintersGold.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WolfFang",
                    "GameName": "Wolf Fang",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WolfFang.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WolfFang-IronWolf",
                    "GameName": "Wolf Fang - Iron Wolf",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WolfFang-IronWolf.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WolfFang-WinterStorm",
                    "GameName": "Wolf Fang - Winter Storm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WolfFang-WinterStorm.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_WomensDay",
                    "GameName": "Women's Day",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_WomensDay.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_XmasCollection-10E",
                    "GameName": "Xmas Collection 10 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_XmasCollection-10E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_XmasCollection-20E",
                    "GameName": "Xmas Collection 20 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_XmasCollection-20E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_XmasCollection-30E",
                    "GameName": "Xmas Collection 30 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_XmasCollection-30E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotMachine_XmasCollection-40E",
                    "GameName": "Xmas Collection 40 Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/SlotMachine_XmasCollection-40E.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Table_EuropeanRoulette",
                    "GameName": "European Roulette",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/Table_EuropeanRoulette.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Table_EuropeanRouletteVIP",
                    "GameName": "European Roulette VIP",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/Table_EuropeanRouletteVIP.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Tower_1ReelGoldenPiggy-CW",
                    "GameName": "1 Reel Golden Piggy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/Tower_1ReelGoldenPiggy-CW.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Tower_1ReelHalloween-CW",
                    "GameName": "1 Reel Halloween",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/Tower_1ReelHalloween-CW.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Tower_1ReelJoker-CW",
                    "GameName": "1 Reel Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/Tower_1ReelJoker-CW.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Tower_1ReelMonkey-CW",
                    "GameName": "1 Reel Monkey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/Tower_1ReelMonkey-CW.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Tower_1ReelPanther-CW",
                    "GameName": "1 Reel Panther",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/Tower_1ReelPanther-CW.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Tower_1ReelPatrick-CW",
                    "GameName": "1 Reel Patrick",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/Tower_1ReelPatrick-CW.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Tower_1ReelXmas-CW",
                    "GameName": "1 Reel Xmas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/SPINOMENAL_SLOT/Tower_1ReelXmas-CW.webp",
                    "ProviderCode": "SPINOMENAL_SLOT",
                    "ProviderName": "SPINOMENAL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const SPINOMENAL_SLOT = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default SPINOMENAL_SLOT;