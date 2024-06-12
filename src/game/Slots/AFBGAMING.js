import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
  "ProviderData": [
    {
      "GameList": [
        {
            "GameCode": "alice",
            "GameName": "Alice",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/alice.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "bigBoss",
            "GameName": "Big Boss",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/bigBoss.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "bonusBears",
            "GameName": "Bonus Bears",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/bonusBears.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "cherryLove",
            "GameName": "Cherry Love",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/cherryLove.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "christmasCarnivals",
            "GameName": "Christmas Carnivals",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/christmasCarnivals.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dice",
            "GameName": "Dice",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/dice.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "discoJockey",
            "GameName": "Disco Jockey",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/discoJockey.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dolphinReef",
            "GameName": "Dolphin Reef",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/dolphinReef.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dragonFortune",
            "GameName": "Dragon's Fortune",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/dragonFortune.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "elephantKing",
            "GameName": "Elephant King",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/elephantKing.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "fiveDragonKings",
            "GameName": "5 Dragon Kings",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/fiveDragonKings.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "fortuneThai",
            "GameName": "Fortune Thai",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/fortuneThai.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "frankenExperiment",
            "GameName": "Franken Experiment",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/frankenExperiment.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "fruitRipe",
            "GameName": "Fruit Ripe",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/fruitRipe.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "godOfWealth",
            "GameName": "God Of Wealth",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/godOfWealth.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "goldBlitz",
            "GameName": "Crazy Gold",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/goldBlitz.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "goldenTemple",
            "GameName": "Golden Temple\r",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/goldenTemple.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "gongXiFaCai",
            "GameName": "Gong Xi Fa Cai",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/gongXiFaCai.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "goodLuck",
            "GameName": "Good Luck",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/goodLuck.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "greatBlue",
            "GameName": "Great Blue",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/greatBlue.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "happyFruits",
            "GameName": "Happy Fruits",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/happyFruits.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "highroadKing",
            "GameName": "Highroad King",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/highroadKing.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "jinQianWa",
            "GameName": "Jin Qian Wa",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/jinQianWa.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "journeyToTheWest",
            "GameName": "Journey To The West",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/journeyToTheWest.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "jumpForRichness",
            "GameName": "Jump For Richness",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/jumpForRichness.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "lucky777",
            "GameName": "Lucky777",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/lucky777.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "luckyClover",
            "GameName": "Lucky Clover",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/luckyClover.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "luckyFrog",
            "GameName": "Lucky Frog",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/luckyFrog.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "manekiNeko",
            "GameName": "Maneki Neko",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/manekiNeko.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "millionaire",
            "GameName": "Millionaire",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/millionaire.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "moneyTree",
            "GameName": "Money Tree",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/moneyTree.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "pantherMoon",
            "GameName": "Panther Moon",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/pantherMoon.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "pharaohsSecret",
            "GameName": "Pharaohs Secret",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/pharaohsSecret.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "pirateTreasure",
            "GameName": "Pirate Treasure",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/pirateTreasure.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "richestWitch",
            "GameName": "Richest Witch",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/richestWitch.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "safari",
            "GameName": "Safari",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/safari.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "sobekTreasure",
            "GameName": "Sobek’s Treasure",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/sobekTreasure.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "steamPunk",
            "GameName": "Steam Punk",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/steamPunk.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "superDouble",
            "GameName": "Super Double",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/superDouble.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "thaiParadise",
            "GameName": "Thai Paradise",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/thaiParadise.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "threeKingdoms",
            "GameName": "Three Kingdoms",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/threeKingdoms.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wallowInMoney",
            "GameName": "Wallow In Money",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/wallowInMoney.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wildChapo",
            "GameName": "Wild Chapo",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/wildChapo.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wildWest",
            "GameName": "Wild West",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/wildWest.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "zhaoCaiJinBao",
            "GameName": "Zhao Cai Jin Bao",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/zhaoCaiJinBao.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "plinko",
            "GameName": null,
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/plinko.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "singleBaccarat",
            "GameName": null,
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/singleBaccarat.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "carnivalOcean",
            "GameName": "Carnival Ocean",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/carnivalOcean.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dwarfTavern",
            "GameName": "Dwarf Tavern",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/dwarfTavern.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "gemsRush",
            "GameName": "Gems Rush",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/gemsRush.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "halloween",
            "GameName": "Halloween",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/halloween.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "huntingTime",
            "GameName": "Hunting Time",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/huntingTime.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "kingOfArena",
            "GameName": "King Of Arena",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/kingOfArena.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "magicAcademy",
            "GameName": "Magic Academy",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/magicAcademy.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "pyramid",
            "GameName": "Mysterious Pyramid",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/pyramid.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "sakuraNinja",
            "GameName": "Sakura Ninja",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/sakuraNinja.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "viceCity",
            "GameName": "Vice City",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/viceCity.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dynamiteJackpot",
            "GameName": "Dynamite Jackpot",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/dynamiteJackpot.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "goldVolcano",
            "GameName": "Gold Volcano",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/goldVolcano.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "olympianZeus",
            "GameName": "Olympian Zeus",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/olympianZeus.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "texasWind",
            "GameName": "Texas Wind",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/AFBGAMING/texasWind.webp",
            "ProviderCode": "AFBGAMING",
            "ProviderName": "AFB GAMING SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
            "CategoryName": "SLOTS"
        }
      ]
    }
  ]
};

const AFBGAMING = () => {
  return (
    <Container>
      <GameList providerData={Data.ProviderData} />
    </Container>
  );
}

export default AFBGAMING;
