import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "SGAtomicKittens",
                    "GameName": "Atomic Kittens",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGAtomicKittens.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGBikiniIslandDeluxe",
                    "GameName": "Bikini Island Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGBikiniIslandDeluxe.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGCrystopia",
                    "GameName": "Crystopia",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGCrystopia.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGHotHotSummer",
                    "GameName": "Hot Hot Summer",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGHotHotSummer.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGMeowJanken",
                    "GameName": "Meow Janken",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGMeowJanken.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGNaughtyWukong",
                    "GameName": "Naughty Wukong",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGNaughtyWukong.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGSantasInn",
                    "GameName": "Santa's Inn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGSantasInn.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGSlimeParty",
                    "GameName": "Slime Party",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGSlimeParty.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGTheBigDealDeluxe",
                    "GameName": "The Big Deal Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGTheBigDealDeluxe.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGVampiresFate",
                    "GameName": "Vampire's Fate",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGVampiresFate.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGTheKoiGate",
                    "GameName": "Koi Gate",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGTheKoiGate.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGHotHotFruit",
                    "GameName": "Hot Hot Fruit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGHotHotFruit.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGWealthInn",
                    "GameName": "Wealth Inn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGWealthInn.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGMysticFortuneDeluxe",
                    "GameName": "Mystic Fortune Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGMysticFortuneDeluxe.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGFaCaiShenDeluxe",
                    "GameName": "Fa Cai Shen Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGFaCaiShenDeluxe.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGLaughingBuddha",
                    "GameName": "Laughing Buddha",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGLaughingBuddha.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGFaCaiShen",
                    "GameName": "Fa Cai Shen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGFaCaiShen.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGSojuBomb",
                    "GameName": "Soju Bomb",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGSojuBomb.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGLegendaryBeasts",
                    "GameName": "Legendary Beasts",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGLegendaryBeasts.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGDragonTigerGate",
                    "GameName": "Dragon Tiger gate",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGDragonTigerGate.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SG5LuckyLions",
                    "GameName": "5 Lucky Lions",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SG5LuckyLions.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGTukTukThailand",
                    "GameName": "Tuk Tuk Thailand",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGTukTukThailand.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGTaikoBeats",
                    "GameName": "Taiko Beats",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGTaikoBeats.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGHappiestChristmasTree",
                    "GameName": "Happiest Christmas Tree",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGHappiestChristmasTree.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGSantasVillage",
                    "GameName": "Santa's Village",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGSantasVillage.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGFourDivineBeasts",
                    "GameName": "Four Divine Beasts",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGFourDivineBeasts.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGLuckyDurian",
                    "GameName": "Lucky Durian",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGLuckyDurian.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGLanternLuck",
                    "GameName": "Lantern Luck",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGLanternLuck.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGLuckyLucky",
                    "GameName": "Lucky Lucky",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGLuckyLucky.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGHotHotHalloween",
                    "GameName": "Hot Hot Halloween",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGHotHotHalloween.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AcesandEights1Hand",
                    "GameName": "Aces & Eights ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/AcesandEights1Hand.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AllAmericanPoker1Hand",
                    "GameName": "All American Poker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/AllAmericanPoker1Hand.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AmericanBaccarat",
                    "GameName": "American Baccarat",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/AmericanBaccarat.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Baccarat3HZC",
                    "GameName": "American Baccarat Zero Commission",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/Baccarat3HZC.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BlackJack3H",
                    "GameName": "Blackjack 3 Hand",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/BlackJack3H.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BlackJack3HDoubleExposure",
                    "GameName": "Blackjack Double Exposure 3 Hand",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/BlackJack3HDoubleExposure.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BonusDuecesWild1Hand",
                    "GameName": "Bonus Deuces Wild",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/BonusDuecesWild1Hand.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BonusPoker1Hand",
                    "GameName": "Bonus Poker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/BonusPoker1Hand.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CaribbeanHoldem",
                    "GameName": "Caribbean Hold'Em",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/CaribbeanHoldem.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CaribbeanStud",
                    "GameName": "Caribbean Stud",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/CaribbeanStud.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DoubleBonusPoker1Hand",
                    "GameName": "Double Bonus Poker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/DoubleBonusPoker1Hand.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DoubleDoubleBonusPoker1Hand",
                    "GameName": "Double Double Bonus Poker ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/DoubleDoubleBonusPoker1Hand.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DuecesWild1Hand",
                    "GameName": "Deuces Wild",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/DuecesWild1Hand.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "EURoulette",
                    "GameName": "European Roulette",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/EURoulette.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JacksorBetter1Hand",
                    "GameName": "Jacks or Better",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/JacksorBetter1Hand.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JokerPoker1Hand",
                    "GameName": "Joker Poker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/JokerPoker1Hand.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SG12Zodiacs",
                    "GameName": "12 Zodiacs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SG12Zodiacs.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SG5Mariachis",
                    "GameName": "5 Mariachis",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SG5Mariachis.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGAllForOne",
                    "GameName": "All For One",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGAllForOne.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGArcaneElements",
                    "GameName": "Arcane Elements",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGArcaneElements.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGArcticWonders",
                    "GameName": "Arctic Wonders",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGArcticWonders.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGAzlandsGold",
                    "GameName": "Aztlan's Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGAzlandsGold.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGBarnstormerBucks",
                    "GameName": "Barnstormer Bucks",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGBarnstormerBucks.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGBeforeTimeRunsOut",
                    "GameName": "Before Time Runs Out",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGBeforeTimeRunsOut.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGBikiniIsland",
                    "GameName": "Bikini Island",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGBikiniIsland.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGBirdOfThunder",
                    "GameName": "Bird of Thunder",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGBirdOfThunder.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGBlackbeardsBounty",
                    "GameName": "Blackbeard's Bounty",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGBlackbeardsBounty.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGBombRunner",
                    "GameName": "Bomb Runner",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGBombRunner.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGBombsAway",
                    "GameName": "Bombs Away",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGBombsAway.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGBuggyBonus",
                    "GameName": "Buggy Bonus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGBuggyBonus.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGCakeValley",
                    "GameName": "Cake Valley",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGCakeValley.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGCalaverasExplosivas",
                    "GameName": "Calaveras Explosivas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGCalaverasExplosivas.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGCandyTower",
                    "GameName": "Candy Tower",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGCandyTower.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGCarnivalCash",
                    "GameName": "Carnival Cash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGCarnivalCash.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGCashosaurus",
                    "GameName": "Cashosaurus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGCashosaurus.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGCashReef",
                    "GameName": "Cash Reef",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGCashReef.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGChristmasGiftRush",
                    "GameName": "Christmas Gift Rush",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGChristmasGiftRush.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGColossalGems",
                    "GameName": "Colossal Gems",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGColossalGems.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGCoyoteCrash",
                    "GameName": "Coyote Crash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGCoyoteCrash.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGDiscoBeats",
                    "GameName": "Disco Beats",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGDiscoBeats.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGDiscoFunk",
                    "GameName": "Disco Funk",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGDiscoFunk.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGDoubleODollars",
                    "GameName": "Double O Dollars",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGDoubleODollars.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGDragonsRealm",
                    "GameName": "Dragon's Realm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGDragonsRealm.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGDragonsThrone",
                    "GameName": "Dragon's Throne",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGDragonsThrone.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGDrFeelgood",
                    "GameName": "Dr Feelgood",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGDrFeelgood.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGEgyptianDreams",
                    "GameName": "Egyptian Dreams",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGEgyptianDreams.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGEgyptianDreamsDeluxe",
                    "GameName": "Egyptian Dreams Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGEgyptianDreamsDeluxe.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGFenghuang",
                    "GameName": "Fenghuang",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGFenghuang.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGFireRooster",
                    "GameName": "Fire Rooster",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGFireRooster.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGFly",
                    "GameName": "Fly!",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGFly.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGFlyingHigh",
                    "GameName": "Flying High",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGFlyingHigh.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGFortuneDogs",
                    "GameName": "Fortune Dogs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGFortuneDogs.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGFrontierFortunes",
                    "GameName": "Frontier Fortunes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGFrontierFortunes.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGGalacticCash",
                    "GameName": "Galactic Cash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGGalacticCash.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGGangsters",
                    "GameName": "Gangsters",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGGangsters.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGGlamRock",
                    "GameName": "Glam Rock",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGGlamRock.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGGoldenUnicorn",
                    "GameName": "Golden Unicorn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGGoldenUnicorn.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGGoldenUnicornDeluxe",
                    "GameName": "Golden Unicorn Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGGoldenUnicornDeluxe.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGGoldRush",
                    "GameName": "Gold Rush",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGGoldRush.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGGrapeEscape",
                    "GameName": "Grape Escape",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGGrapeEscape.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGHappyApe",
                    "GameName": "Happy Ape",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGHappyApe.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGHauntedHouse",
                    "GameName": "Haunted House",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGHauntedHouse.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGHeySushi",
                    "GameName": "Hey Sushi",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGHeySushi.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGIndianCashCatcher",
                    "GameName": "Indian Cash Catcher",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGIndianCashCatcher.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGJellyfishFlow",
                    "GameName": "Jellyfish Flow",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGJellyfishFlow.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGJugglenaut",
                    "GameName": "Jugglenaut",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGJugglenaut.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGJump",
                    "GameName": "Jump!",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGJump.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGJungleRumble",
                    "GameName": "Jungle Rumble",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGJungleRumble.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGKanesInferno",
                    "GameName": "Kane's Inferno",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGKanesInferno.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGKingTutsTomb",
                    "GameName": "King Tut's Tomb",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGKingTutsTomb.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGKnockoutFootball",
                    "GameName": "Knockout Football",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGKnockoutFootball.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGKnockoutFootballRush",
                    "GameName": "Knockout Football Rush",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGKnockoutFootballRush.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGLittleGreenMoney",
                    "GameName": "Little Green Money",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGLittleGreenMoney.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGLondonHunter",
                    "GameName": "London Hunter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGLondonHunter.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGLoonyBlox",
                    "GameName": "Loony Blox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGLoonyBlox.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGLuckyFortuneCat",
                    "GameName": "Lucky Fortune Cat",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGLuckyFortuneCat.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGMagicOak",
                    "GameName": "Magic Oak",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGMagicOak.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGMarvelousFurlongs",
                    "GameName": "Marvelous Furlongs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGMarvelousFurlongs.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGMightyMedusa",
                    "GameName": "Mighty Medusa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGMightyMedusa.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGMonsterMashCash",
                    "GameName": "Monster Mash Cash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGMonsterMashCash.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGMountMazuma",
                    "GameName": "Mount Mazuma",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGMountMazuma.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGMrBling",
                    "GameName": "Mr Bling",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGMrBling.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGMummyMoney",
                    "GameName": "Mummy Money",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGMummyMoney.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGMysticFortune",
                    "GameName": "Mystic Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGMysticFortune.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGNaughtySanta",
                    "GameName": "Naughty Santa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGNaughtySanta.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGNewYearsBash",
                    "GameName": "New Year's Bash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGNewYearsBash.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGNineTails",
                    "GameName": "Nine Tails",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGNineTails.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGNuwa",
                    "GameName": "Nuwa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGNuwa.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGOceansCall",
                    "GameName": "Ocean's Call",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGOceansCall.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGOrbsOfAtlantis",
                    "GameName": "Orbs of Atlantis",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGOrbsOfAtlantis.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGPamperMe",
                    "GameName": "Pamper Me",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGPamperMe.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGPandaPanda",
                    "GameName": "Panda Panda",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGPandaPanda.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGPiratesPlunder",
                    "GameName": "Pirate's Plunder",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGPiratesPlunder.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGPoolShark",
                    "GameName": "Pool Shark",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGPoolShark.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGPresto",
                    "GameName": "Presto!",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGPresto.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGProst",
                    "GameName": "Prost!",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGProst.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGPuckerUpPrince",
                    "GameName": "Pucker Up Prince",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGPuckerUpPrince.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGPumpkinPatch",
                    "GameName": "Pumpkin Patch",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGPumpkinPatch.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGQueenOfQueens1024",
                    "GameName": "Queen of Queens II",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGQueenOfQueens1024.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGQueenOfQueens243",
                    "GameName": "Queen of Queens",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGQueenOfQueens243.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGRainbowmania",
                    "GameName": "Rainbowmania",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGRainbowmania.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGReturnToTheFeature",
                    "GameName": "Return To The Feature",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGReturnToTheFeature.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGRideEmCowboy",
                    "GameName": "Ride 'em Cowboy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGRideEmCowboy.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGRodeoDrive",
                    "GameName": "Rodeo Drive",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGRodeoDrive.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGRollingRoger",
                    "GameName": "Rolling Roger",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGRollingRoger.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGRomanEmpire",
                    "GameName": "Roman Empire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGRomanEmpire.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGRuffledUp",
                    "GameName": "Ruffled Up",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGRuffledUp.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGScopa",
                    "GameName": "Scopa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGScopa.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGScruffyScallywags",
                    "GameName": "Scruffy Scallywags",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGScruffyScallywags.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGShaolinFortunes100",
                    "GameName": "Shaolin Fortunes 100",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGShaolinFortunes100.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGShaolinFortunes243",
                    "GameName": "Shaolin Fortunes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGShaolinFortunes243.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGShogunsLand",
                    "GameName": "Shogun's Land",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGShogunsLand.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGSirBlingalot",
                    "GameName": "Sir Blingalot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGSirBlingalot.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGSkysTheLimit",
                    "GameName": "Sky's the Limit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGSkysTheLimit.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGSOS",
                    "GameName": "S.O.S!",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGSOS.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGSpaceFortune",
                    "GameName": "Space Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGSpaceFortune.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGSpaceGoonz",
                    "GameName": "Space Goonz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGSpaceGoonz.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGSparta",
                    "GameName": "Sparta",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGSparta.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGSuperStrike",
                    "GameName": "Super Strike",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGSuperStrike.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGSuperTwister",
                    "GameName": "Super Twister",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGSuperTwister.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGTabernaDeLosMuertos",
                    "GameName": "Taberna De Los Muertos",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGTabernaDeLosMuertos.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGTechnoTumble",
                    "GameName": "Techno Tumble",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGTechnoTumble.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGTheBigDeal",
                    "GameName": "The Big Deal",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGTheBigDeal.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGTheDeadEscape",
                    "GameName": "The Dead Escape",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGTheDeadEscape.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGTheDragonCastle",
                    "GameName": "Dragon Castle",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGTheDragonCastle.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGTotemTowers",
                    "GameName": "Totem Towers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGTotemTowers.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGTowerOfPizza",
                    "GameName": "Tower Of Pizza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGTowerOfPizza.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGTreasureDiver",
                    "GameName": "Treasure Diver",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGTreasureDiver.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGTreasureTomb",
                    "GameName": "Treasure Tomb",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGTreasureTomb.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGVikingsPlunder",
                    "GameName": "Viking's Plunder",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGVikingsPlunder.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGWaysOfFortune",
                    "GameName": "Ways Of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGWaysOfFortune.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGWeirdScience",
                    "GameName": "Weird Science",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGWeirdScience.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGWickedWitch",
                    "GameName": "Wicked Witch",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGWickedWitch.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGWildTrucks",
                    "GameName": "Wild Trucks",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGWildTrucks.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGWizardsWantWar",
                    "GameName": "Wizards Want War!",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGWizardsWantWar.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGZeus",
                    "GameName": "Zeus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGZeus.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGZeus2",
                    "GameName": "Zeus 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGZeus2.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SicBo",
                    "GameName": "Sicbo",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SicBo.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TensorBetter1Hand",
                    "GameName": "Tens Or Better",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/TensorBetter1Hand.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TGBlackjackAmerican",
                    "GameName": "American Blackjack",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/TGBlackjackAmerican.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TGDragonTiger",
                    "GameName": "Dragon Tiger",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/TGDragonTiger.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TGThreeCardPoker",
                    "GameName": "Three Card Poker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/TGThreeCardPoker.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TGThreeCardPokerDeluxe",
                    "GameName": "Three Card Poker Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/TGThreeCardPokerDeluxe.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TGWar",
                    "GameName": "War",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/TGWar.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGLegendOfNezha",
                    "GameName": "Legend of Nezha",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGLegendOfNezha.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGSirensSpell",
                    "GameName": "Siren’s Spell",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGSirensSpell.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGTootyFruityFruits",
                    "GameName": "Tooty Fruity Fruits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGTootyFruityFruits.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SGWitchesTome",
                    "GameName": "Witches Tome",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/HABANERO/SGWitchesTome.webp",
                    "ProviderCode": "HABANERO",
                    "ProviderName": "HABANERO SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const HABANERO = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default HABANERO;