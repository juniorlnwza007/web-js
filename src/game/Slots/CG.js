import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "DuoFuDuoCaiDiamondEternity",
                    "GameName": "1c dafudacai-DiamondEternity",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/DuoFuDuoCaiDiamondEternity.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ZhaoCaiJinBaoEX",
                    "GameName": "Zhao Cai Jin Bao",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/ZhaoCaiJinBaoEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LionDance2EX",
                    "GameName": "Lion Dance",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/LionDance2EX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DuoFuDuoCai88Fortune",
                    "GameName": "1c dafudacai-88Fortunes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/DuoFuDuoCai88Fortune.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Triple7EX",
                    "GameName": "777",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/Triple7EX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "VTEX",
                    "GameName": "City Of Poli",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/VTEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WuLuCaiShenEX",
                    "GameName": "Wu Lu Cai Shen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/WuLuCaiShenEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Aladin",
                    "GameName": "Aladdin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/Aladin.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SunQuest",
                    "GameName": "Universe Quest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/SunQuest.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BuffaloBlitzEX",
                    "GameName": "Buffalo Bonus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/BuffaloBlitzEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Rich",
                    "GameName": "Richman",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/Rich.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Aladdin2",
                    "GameName": "Aladdin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/Aladdin2.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FiveDragonsEX",
                    "GameName": "5 Dragons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/FiveDragonsEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DiamondSlotEX",
                    "GameName": "Diamond Slot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/DiamondSlotEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DuoFuDuoCai5Treasures",
                    "GameName": "1c dafudacai-5Treasures",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/DuoFuDuoCai5Treasures.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JuFuFountainOfWealth",
                    "GameName": "1c JuFuNaCai-Fountain Of Wealth",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/JuFuFountainOfWealth.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "IceWindEX",
                    "GameName": "Ice Wind",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/IceWindEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Halloween",
                    "GameName": "Halloween",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/Halloween.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AfricanLion",
                    "GameName": "African Lion",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/AfricanLion.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AliceAdvEX",
                    "GameName": "Alice",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/AliceAdvEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ArcadiaEX",
                    "GameName": "Arcadia",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/ArcadiaEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ArtificialGirl",
                    "GameName": "Artificial Girl",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/ArtificialGirl.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AsTheGodsWillEX",
                    "GameName": "As The Gods Will",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/AsTheGodsWillEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "AzurLaneEX",
                    "GameName": "Azur Lane",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/AzurLaneEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BarBarSheepEX",
                    "GameName": "Black Sheep",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/BarBarSheepEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BattleGroundsEX",
                    "GameName": "PUBG",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/BattleGroundsEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BeanStalk",
                    "GameName": "Bean Stalk",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/BeanStalk.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "BreakAwayEX",
                    "GameName": "Speed Racing",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/BreakAwayEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Chaoji8EX",
                    "GameName": "Chaoji 8",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/Chaoji8EX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ChineseNewYear2020",
                    "GameName": "Chinese New Year",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/ChineseNewYear2020.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CircusEX",
                    "GameName": "Amazing Circus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/CircusEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "CrossyRoadEX",
                    "GameName": "Crossy Road",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/CrossyRoadEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DJRemix",
                    "GameName": "DJ Remix",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/DJRemix.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DragonSkiesEX",
                    "GameName": "Dragon Skies",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/DragonSkiesEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DuoFuDuoCaiDancingDrum",
                    "GameName": "1c dafudacai-DancingDrum",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/DuoFuDuoCaiDancingDrum.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "DuoFuDuoCaiFlowerOfRiches",
                    "GameName": "1c dafudacai-FlowerOfRiches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/DuoFuDuoCaiFlowerOfRiches.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "EgyptCity",
                    "GameName": "Lost in Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/EgyptCity.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "EgyptCityEX",
                    "GameName": "Scarab",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/EgyptCityEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FaFaFaEX",
                    "GameName": "Fa Fa Fa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/FaFaFaEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FallingSakuraEX",
                    "GameName": "Falling Sakura",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/FallingSakuraEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FiftyLions",
                    "GameName": "50 Lions",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/FiftyLions.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FishingExpertEX",
                    "GameName": "Fishing Expert",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/FishingExpertEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FishPartyEX",
                    "GameName": "Fish Party",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/FishPartyEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FiveChildTeasingMaitreyaEX",
                    "GameName": "Wu Zi Ci Mile",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/FiveChildTeasingMaitreyaEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FiveFlowers",
                    "GameName": "5 Dealers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/FiveFlowers.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FoxSpirit",
                    "GameName": "Fox Spirit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/FoxSpirit.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "FunkyMonkeyEX",
                    "GameName": "Funky Monkey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/FunkyMonkeyEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GeishaEX",
                    "GameName": "Geisha",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/GeishaEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "GreatBlueEX",
                    "GameName": "Great Blue",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/GreatBlueEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HorizonEX",
                    "GameName": "Horizon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/HorizonEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "HungryHungryShark",
                    "GameName": "Hungry Hungry Shark",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/HungryHungryShark.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JuFuBloomingRiches",
                    "GameName": "1c JuFuNaCai-Blooming Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/JuFuBloomingRiches.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JuFuEternalDiamond",
                    "GameName": "1c JuFuNaCai-Eternal Diamond",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/JuFuEternalDiamond.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JuFuGoldenTale",
                    "GameName": "1c JuFuNaCai-Golden Tale",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/JuFuGoldenTale.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JuFuRhythmOfFortune",
                    "GameName": "1c JuFuNaCai-Rhythm Of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/JuFuRhythmOfFortune.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "JurassicWorldEX",
                    "GameName": "JurassicWorld",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/JurassicWorldEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "KingsOfCashEX",
                    "GameName": "Queen Of Cash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/KingsOfCashEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LineBrownDaydreamEX",
                    "GameName": "Line Brown Day dream",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/LineBrownDaydreamEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LongLongLongEX",
                    "GameName": "Long Long Long",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/LongLongLongEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LostCityOfGold",
                    "GameName": "Lost City Of Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/LostCityOfGold.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuckyPig",
                    "GameName": "Lucky Pig",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/LuckyPig.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "LuckyTwinsEX",
                    "GameName": "Lucky Twins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/LuckyTwinsEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MagicCandy",
                    "GameName": "Magic Candy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/MagicCandy.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MapleStory",
                    "GameName": "Maple Story",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/MapleStory.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MarvelClassicEX",
                    "GameName": "Infinity War",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/MarvelClassicEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MarvelTsumEX",
                    "GameName": "Marvel Tsum Tsum",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/MarvelTsumEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MightMagicEX",
                    "GameName": "Might Magic",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/MightMagicEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Military",
                    "GameName": "Military",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/Military.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "Mojin2",
                    "GameName": "Tomb",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/Mojin2.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MoneyFarm",
                    "GameName": "Money Farm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/MoneyFarm.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MoneyFarmEX",
                    "GameName": "Money Farm 3",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/MoneyFarmEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "MysticNine",
                    "GameName": "Mystic Nine",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/MysticNine.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "NinjaEX",
                    "GameName": "Ninja Warrior",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/NinjaEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "OdinEX",
                    "GameName": "Odin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/OdinEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "OnmologistEX",
                    "GameName": "Onmyoji",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/OnmologistEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PiratesEX",
                    "GameName": "Pirates",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/PiratesEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PixelWarEX",
                    "GameName": "Bright & Abyss",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/PixelWarEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PokerCityEX",
                    "GameName": "Jo ma ji",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/PokerCityEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "PurePlatinumEX",
                    "GameName": "Platinum",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/PurePlatinumEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "RugbyWorldCup",
                    "GameName": "Rugby World Cup",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/RugbyWorldCup.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SevenLuckyGodEX",
                    "GameName": "Seven Lucky God",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/SevenLuckyGodEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SixLionsEX",
                    "GameName": "Six Lions",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/SixLionsEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SlotJumanji",
                    "GameName": "Brutal Jungle",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/SlotJumanji.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "SpecialChefEX",
                    "GameName": "Special Chef",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/SpecialChefEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TaikoDrumMasterEX",
                    "GameName": "Taiko Master",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/TaikoDrumMasterEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TaiWangSiShen",
                    "GameName": "Tai Wang Si Shen",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/TaiWangSiShen.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TarzanEX",
                    "GameName": "Tarzan",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/TarzanEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TravelFrogEX",
                    "GameName": "Travel Frog",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/TravelFrogEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TripleMonkeyEX",
                    "GameName": "Triple Monkey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/TripleMonkeyEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TropicsEX",
                    "GameName": "Tropical Island",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/TropicsEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TrueBreakAway",
                    "GameName": "BreakAway",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/TrueBreakAway.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "TrueZhaoCaiJinBaoEX",
                    "GameName": "True Zhao Cai Jin Bao",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/TrueZhaoCaiJinBaoEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WarHammer40KEX",
                    "GameName": "War Hammer 40K",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/WarHammer40KEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "WaterMargin",
                    "GameName": "108 Heroes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/WaterMargin.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ZhaoCaiTongZiEX",
                    "GameName": "Zhao Cai Tong Zi",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/ZhaoCaiTongZiEX.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "ZombieHunter",
                    "GameName": "Zombie Hunter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/CG/ZombieHunter.webp",
                    "ProviderCode": "CG",
                    "ProviderName": "CG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const CG = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default CG;