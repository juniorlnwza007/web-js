import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
  "ProviderData": [
    {
      "GameList": [
        {
            "GameCode": "ancientdisco0000",
            "GameName": "Ancient Disco",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/ancientdisco0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "athensmegaways00",
            "GameName": "Athens Megaways",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/athensmegaways00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "bassboss00000000",
            "GameName": "Bass Boss",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/bassboss00000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "beriched00000000",
            "GameName": "Beriched",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/beriched00000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "blobsterscluster",
            "GameName": "Blobsters Clusterbuster",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/blobsterscluster.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "bloodsuckersmega",
            "GameName": "Blood Suckers Megaways",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/bloodsuckersmega.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "buffalomaniamega",
            "GameName": "Buffalo Mania Megaways",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/buffalomaniamega.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "bugsysbar0000000",
            "GameName": "Bugsy's Bar",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/bugsysbar0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "caishen168000000",
            "GameName": "Cai Shen 168",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/caishen168000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "cakeandicecream0",
            "GameName": "Cake And Ice Cream",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/cakeandicecream0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "fortunehousepowe",
            "GameName": "Fortune House Power Reels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/fortunehousepowe.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "godsoftroy000000",
            "GameName": "Gods of Troy",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/godsoftroy000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "gonzitasquest000",
            "GameName": "Gonzita's Quest",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/gonzitasquest000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "goodluckclusterb",
            "GameName": "Good Luck Clusterbuster",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/goodluckclusterb.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "greatgold0000000",
            "GameName": "Great Gold",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/greatgold0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "happyapples00000",
            "GameName": "Happy Apples",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/happyapples00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "intherabbithole0",
            "GameName": "In The Rabbit Hole",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/intherabbithole0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "magicpowersmegaw",
            "GameName": "Magic Powers Megaways",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/magicpowersmegaw.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "mysteryreelsdelu",
            "GameName": "Mystery Reels Deluxe",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/mysteryreelsdelu.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "peggysweets00000",
            "GameName": "Peggy Sweets",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/peggysweets00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "pinatasandponies",
            "GameName": "Pinatas and Ponies",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/pinatasandponies.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "redhotbbq0000000",
            "GameName": "Red Hot BBQ",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/redhotbbq0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "reelkeeperpowerr",
            "GameName": "Reel Keeper Power Reels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/reelkeeperpowerr.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "rocknlock0000000",
            "GameName": "Rock'n'Lock",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/rocknlock0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "santaspins000000",
            "GameName": "Santa Spins",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/santaspins000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "shadowsociety000",
            "GameName": "Shadow Society",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/shadowsociety000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "sheepgonewild000",
            "GameName": "Sheep Gone Wild",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/sheepgonewild000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "stolentreasures0",
            "GameName": "Stolen Treasures",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/stolentreasures0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "transylvanianigh",
            "GameName": "Transylvania: Night Of Blood",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/transylvanianigh.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "tricksandtreats0",
            "GameName": "Tricks and Treats",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/tricksandtreats0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wildexpedition00",
            "GameName": "Wild Expedition",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wildexpedition00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wrigleysworld000",
            "GameName": "Wrigley's World",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wrigleysworld000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "10001nights00000",
            "GameName": "10,001 Nights",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/10001nights00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "10001nightsmegaw",
            "GameName": "10,001 Nights MegaWays™",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/10001nightsmegaw.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "1942skywarrior00",
            "GameName": "1942: Sky Warrior",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/1942skywarrior00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "24hourgrandprix0",
            "GameName": "24 Hour Grand Prix",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/24hourgrandprix0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "4squad0000000000",
            "GameName": "4Squad",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/4squad0000000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "5families0000000",
            "GameName": "5 Families",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/5families0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "777strike0000000",
            "GameName": "777 Strike",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/777strike0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "agentroyale00000",
            "GameName": "Agent Royale",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/agentroyale00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "ageofakkadia0000",
            "GameName": "Age of Akkadia",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/ageofakkadia0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "ancientsblessing",
            "GameName": "Ancients Blessing",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/ancientsblessing.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "ancientscript000",
            "GameName": "Ancient Script",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/ancientscript000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "apacheway0000000",
            "GameName": "Apache Way",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/apacheway0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "arcadebomb000000",
            "GameName": "Arcade Bomb",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/arcadebomb000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "atlantis00000000",
            "GameName": "Atlantis",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/atlantis00000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "aurumcodex000000",
            "GameName": "Aurum Codex",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/aurumcodex000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "aztecspins000000",
            "GameName": "Aztec Spins",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/aztecspins000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "bettyborisandboo",
            "GameName": "Betty, Boris and Boo",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/bettyborisandboo.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "bigcatrescuemega",
            "GameName": "Big Cat Rescue Megaways™",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/bigcatrescuemega.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "blazingclusters0",
            "GameName": "Blazing Clusters",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/blazingclusters0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "bluediamond00000",
            "GameName": "Blue Diamond",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/bluediamond00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "bombuster0000000",
            "GameName": "Bombuster",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/bombuster0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "bountyraid000000",
            "GameName": "Bounty Raid",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/bountyraid000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "bullsrunwild0000",
            "GameName": "Bulls Run Wild",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/bullsrunwild0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "cashornothing000",
            "GameName": "Cash or Nothing",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/cashornothing000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "cashultimate0000",
            "GameName": "Cash Ultimate",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/cashultimate0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "cashvolt00000000",
            "GameName": "Cash volt",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/cashvolt00000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "chinesetreasures",
            "GameName": "Chinese Treasures",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/chinesetreasures.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "cinderella000000",
            "GameName": "Cinderella's Ball",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/cinderella000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "cirquedelafortun",
            "GameName": "Cirque de la Fortune",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/cirquedelafortun.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "clashofthebeasts",
            "GameName": "Clash of the Beasts",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/clashofthebeasts.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "crazygenie000000",
            "GameName": "Crazy Genie",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/crazygenie000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "crystalmirror000",
            "GameName": "Crystal Mirror",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/crystalmirror000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "davincismystery0",
            "GameName": "Da Vinci's Mystery",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/davincismystery0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "devilsnumber0000",
            "GameName": "Devil's Number",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/devilsnumber0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "diamondblitz0000",
            "GameName": "Diamond Blitz",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/diamondblitz0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "diamondroyale000",
            "GameName": "Diamond Royale",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/diamondroyale000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dicedicedice0000",
            "GameName": "Dice Dice Dice",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dicedicedice0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "divineways000000",
            "GameName": "Divine Ways",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/divineways000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "doggyrichesmegaw",
            "GameName": "Doggy Riches Megaways™",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/doggyrichesmegaw.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "draculaawakening",
            "GameName": "Dracula Awakening",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/draculaawakening.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dragonkinglegend",
            "GameName": "Dragon King: Legend of the Seas",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dragonkinglegend.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dragonsclusterbu",
            "GameName": "Dragons Clusterbuster™",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dragonsclusterbu.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dragonsfire00000",
            "GameName": "Dragon's Fire",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dragonsfire00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dragonsfireinfin",
            "GameName": "Dragon's Fire Infinireels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dragonsfireinfin.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dragonsfiremegaw",
            "GameName": "Dragon's Fire Megaways",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dragonsfiremegaw.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dragonslckdeluxe",
            "GameName": "Dragon's Luck Deluxe",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dragonslckdeluxe.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dragonslckstacks",
            "GameName": "Dragon's Luck Power Reels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dragonslckstacks.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dragonsluck00000",
            "GameName": "Dragon's Luck",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dragonsluck00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dragonsluckmegaw",
            "GameName": "Dragon's Luck Megaways",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dragonsluckmegaw.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dynamiteriches00",
            "GameName": "Dynamite Riches",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dynamiteriches00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dynamiterichesli",
            "GameName": "Dynamite Riches",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dynamiterichesli.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dynamiterichesme",
            "GameName": "Dynamite Riches Megaways",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dynamiterichesme.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "eagleriches00000",
            "GameName": "Eagle Riches",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/eagleriches00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "elvenmagic000000",
            "GameName": "Elven Magic",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/elvenmagic000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "emeralddiamond00",
            "GameName": "Emerald Diamond",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/emeralddiamond00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "epicjourney00000",
            "GameName": "Epic Journey",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/epicjourney00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "esqueletomariach",
            "GameName": "Esqueleto Mariachi",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/esqueletomariach.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "fafababies000000",
            "GameName": "Fa Fa Babies",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/fafababies000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "fivestar00000000",
            "GameName": "Five Star",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/fivestar00000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "fivestarpowerree",
            "GameName": "Five Star Power Reels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/fivestarpowerree.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "flamingfox000000",
            "GameName": "Flaming Fox",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/flamingfox000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "flodder000000000",
            "GameName": "Flodder",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/flodder000000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "forever7s0000000",
            "GameName": "Forever 7’s",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/forever7s0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "fortunecharm0000",
            "GameName": "Fortune Charm",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/fortunecharm0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "fortunefest00000",
            "GameName": "Fortune Fest",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/fortunefest00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "fortunehouse0000",
            "GameName": "Fortune House",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/fortunehouse0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "fruitblox0000000",
            "GameName": "Fruit Blox",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/fruitblox0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "fruitsnap0000000",
            "GameName": "Fruit Snap",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/fruitsnap0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "gemsgonewild0000",
            "GameName": "Gems Gone Wild",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/gemsgonewild0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "gemsgonewildpowe",
            "GameName": "Gems Gone Wild Power Reels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/gemsgonewildpowe.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "gemtastic0000000",
            "GameName": "Gemtastic",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/gemtastic0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "genienights00000",
            "GameName": "Genie Nights",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/genienights00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "getthegoldinfini",
            "GameName": "Get The Gold InfiniReels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/getthegoldinfini.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "godofwealth00000",
            "GameName": "God Of Wealth",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/godofwealth00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "goldencryptex000",
            "GameName": "Golden Cryptex",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/goldencryptex000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "goldenleprechaun",
            "GameName": "Golden Leprechaun Megaways",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/goldenleprechaun.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "goldenlotus00000",
            "GameName": "Golden Lotus",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/goldenlotus00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "goldenoffer00000",
            "GameName": "Golden Offer",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/goldenoffer00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "goldentsar000000",
            "GameName": "Golden Tsar",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/goldentsar000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "goldstar00000000",
            "GameName": "Gold Star",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/goldstar00000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "gonzosqumegaways",
            "GameName": "Gonzo's Quest Megaways",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/gonzosqumegaways.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "grandwheel000000",
            "GameName": "Grand Wheel",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/grandwheel000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "hammergods000000",
            "GameName": "Hammer Gods",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/hammergods000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "harlecoin0000000",
            "GameName": "Harle Coin",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/harlecoin0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "hoardofposeidon0",
            "GameName": "Hoard of Poseidon",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/hoardofposeidon0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "hothotchillipot0",
            "GameName": "Hot Hot Chilli Pot",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/hothotchillipot0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "hustling00000000",
            "GameName": "Hustling",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/hustling00000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "imperialpalace00",
            "GameName": "Imperial Palace",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/imperialpalace00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "jackinapot000000",
            "GameName": "Jack in a Pot",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/jackinapot000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "jackpotquest0000",
            "GameName": "Jackpot Quest",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/jackpotquest0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "jadecharms000000",
            "GameName": "Jade Charms",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/jadecharms000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "jesterspins00000",
            "GameName": "Jester Spins",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/jesterspins00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "jewelscarabs0000",
            "GameName": "Jewel Scarabs",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/jewelscarabs0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "jinglebells00000",
            "GameName": "Jingle Bells",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/jinglebells00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "jinglebellspower",
            "GameName": "Jingle Bells Power Reels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/jinglebellspower.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "jinglewaysmegawa",
            "GameName": "Jingle Ways Megaway",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/jinglewaysmegawa.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "joeexotic0000000",
            "GameName": "Joe Exotic",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/joeexotic0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "laserfruit000000",
            "GameName": "Laser Fruit",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/laserfruit000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "lastchancesaloon",
            "GameName": "Last Chance Saloon",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/lastchancesaloon.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "legendaryexcalib",
            "GameName": "Legendary Excalibur",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/legendaryexcalib.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "legendofathena00",
            "GameName": "Legend of Athena",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/legendofathena00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "liondance0000000",
            "GameName": "Lion Dance",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/liondance0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "lionshoard000000",
            "GameName": "Lion's Hoard",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/lionshoard000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "luckydevil000000",
            "GameName": "Lucky Little Devil",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/luckydevil000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "luckyeaster00000",
            "GameName": "Lucky Easter",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/luckyeaster00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "luckyfortunecat0",
            "GameName": "Lucky Fortune Cat",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/luckyfortunecat0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "luckyfridays0000",
            "GameName": "Lucky Fridays",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/luckyfridays0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "luckyhalloween00",
            "GameName": "Lucky Halloween",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/luckyhalloween00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "luckyoktoberfest",
            "GameName": "Lucky Oktoberfest",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/luckyoktoberfest.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "luckyvalentine00",
            "GameName": "Lucky Valentine",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/luckyvalentine00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "luckywizard00000",
            "GameName": "Lucky Wizard",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/luckywizard00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "magicgate0000000",
            "GameName": "Magic Gate",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/magicgate0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "majesticmysterie",
            "GameName": "Majestic Mysteries Power Reels™",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/majesticmysterie.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "masquerade000000",
            "GameName": "Masquerade",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/masquerade000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "mayangods0000000",
            "GameName": "Mayan Gods",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/mayangods0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "mayhem0000000000",
            "GameName": "Mayhem",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/mayhem0000000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "megadragon000000",
            "GameName": "Mega Dragon",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/megadragon000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "megajade00000000",
            "GameName": "Mega Jade",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/megajade00000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "megapyramid00000",
            "GameName": "Mega Pyramid",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/megapyramid00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "megarise00000000",
            "GameName": "Mega Rise",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/megarise00000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "midasgold0000000",
            "GameName": "Midas Gold",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/midasgold0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "multiplierriches",
            "GameName": "Multiplier Riches",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/multiplierriches.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "mysteryfruit0000",
            "GameName": "Mystery Reels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/mysteryfruit0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "mysteryreelsmega",
            "GameName": "Mystery Reels Megaways",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/mysteryreelsmega.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "mysteryreelspowe",
            "GameName": "Mystery Reels Power Reels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/mysteryreelspowe.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "mysticstaxx00000",
            "GameName": "Mystic Staxx",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/mysticstaxx00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "mysticwheel00000",
            "GameName": "Mystic Wheel",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/mysticwheel00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "narcosmexico0000",
            "GameName": "Narcos Mexico",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/narcosmexico0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "neonlinks0000000",
            "GameName": "Neon Links",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/neonlinks0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "nftmegaways00000",
            "GameName": "NFT Megaways",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/nftmegaways00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "nightroller00000",
            "GameName": "Night roller",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/nightroller00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "ninjaways0000000",
            "GameName": "Ninja Ways",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/ninjaways0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "oceanfortune0000",
            "GameName": "Ocean Fortune",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/oceanfortune0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "pathofdestiny000",
            "GameName": "Path of Destiny",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/pathofdestiny000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "persianfortune00",
            "GameName": "Persian Fortune",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/persianfortune00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "phoenixfwerreels",
            "GameName": "Phoenix Fire Power Reels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/phoenixfwerreels.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "piggypirates0000",
            "GameName": "Piggy Pirates",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/piggypirates0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "piggyrichesmegaw",
            "GameName": "Piggy Riches Megaways",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/piggyrichesmegaw.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "piratespeforgold",
            "GameName": "Pirates' Plenty Battle for Gold",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/piratespeforgold.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "piratesplenty000",
            "GameName": "Pirates' Plenty",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/piratesplenty000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "piratesplentymeg",
            "GameName": "Pirates' Plenty MegaWays",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/piratesplentymeg.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "primateking00000",
            "GameName": "Primate King",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/primateking00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "primatekinglimit",
            "GameName": "Primate King",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/primatekinglimit.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "pussnboots000000",
            "GameName": "Puss 'N Boots",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/pussnboots000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "rainbowjackpots0",
            "GameName": "Rainbow Jackpots",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/rainbowjackpots0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "rainbowjackpotsp",
            "GameName": "Rainbow Jackpots Power Lines",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/rainbowjackpotsp.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "raslegend0000000",
            "GameName": "RA's Legend",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/raslegend0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "reactor000000000",
            "GameName": "Reactor",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/reactor000000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "reddiamond000000",
            "GameName": "Red Diamond",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/reddiamond000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "redphoenixrising",
            "GameName": "Phoenix",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/redphoenixrising.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "reelheist0000000",
            "GameName": "Reel Heist",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/reelheist0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "reelkeeper000000",
            "GameName": "Reel Keeper",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/reelkeeper000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "reelkingmega0000",
            "GameName": "Reel King Mega",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/reelkingmega0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "regalbeasts00000",
            "GameName": "Regal Beasts",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/regalbeasts00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "regalstreak00000",
            "GameName": "Regal Streak",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/regalstreak00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "reptizillionspow",
            "GameName": "Reptizillions Power Reels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/reptizillionspow.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "riddleofthesphin",
            "GameName": "Riddle Of The Sphinx",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/riddleofthesphin.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "riostars00000000",
            "GameName": "Rio Stars",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/riostars00000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "risquemegaways00",
            "GameName": "Risque Megaways™",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/risquemegaways00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "robinhoodswildfo",
            "GameName": "Robin Hoods Wild Forest",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/robinhoodswildfo.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "rocketmen0000000",
            "GameName": "Rocket Men",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/rocketmen0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "royalgems0000000",
            "GameName": "Royal Gems",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/royalgems0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "shahmat000000000",
            "GameName": "Shah Mat",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/shahmat000000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "snowwildandthe7f",
            "GameName": "Snow Wild And The 7 Features",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/snowwildandthe7f.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "spintown00000000",
            "GameName": "Spin Town",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/spintown00000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "stage88800000000",
            "GameName": "Stage 888",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/stage88800000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "sumospins0000000",
            "GameName": "Sumo Spins",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/sumospins0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "sylvanspirits000",
            "GameName": "Sylvan Spirits",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/sylvanspirits000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "templeofgold0000",
            "GameName": "Golden Temple",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/templeofgold0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "tenelements00000",
            "GameName": "Ten Elements",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/tenelements00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "theequalizer0000",
            "GameName": "The Equalizer",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/theequalizer0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "thegreatesttrain",
            "GameName": "The Greatest Train Robbery",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/thegreatesttrain.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "thewildhatter000",
            "GameName": "The Wild Hatter",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/thewildhatter000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "thewisecrackerli",
            "GameName": "The Wisecracker Lightning",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/thewisecrackerli.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "thorslightning00",
            "GameName": "Thor's Lightning",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/thorslightning00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "thorsvengeance00",
            "GameName": "Thor's vengeance",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/thorsvengeance00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "threekingdoms000",
            "GameName": "Three Kingdoms",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/threekingdoms000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "threemusketeers0",
            "GameName": "Three Musketeers",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/threemusketeers0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "tikifruits000000",
            "GameName": "Tiki Fruits",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/tikifruits000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "tikifruitstotemf",
            "GameName": "Tiki Fruits Totem Frenzy",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/tikifruitstotemf.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "totemlightning00",
            "GameName": "Totem Lightning",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/totemlightning00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "totemlightningpo",
            "GameName": "Totem Lightning Power Reels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/totemlightningpo.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "treasuremine0000",
            "GameName": "Treasure Mine",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/treasuremine0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "treasureminepowe",
            "GameName": "Treasure Mine Power Reels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/treasureminepowe.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "trillionaire0000",
            "GameName": "Trillionaire",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/trillionaire0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "vaultcracker0000",
            "GameName": "Vault Cracker",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/vaultcracker0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "vaultofanubis000",
            "GameName": "Vault of Anubis",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/vaultofanubis000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "vickyventura0000",
            "GameName": "Vicky Ventura",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/vickyventura0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "viralspiral00000",
            "GameName": "Viral Spiral",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/viralspiral00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "warofgods0000000",
            "GameName": "War Of Gods",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/warofgods0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wellofwildsmegaw",
            "GameName": "Well of Wilds Megaways",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wellofwildsmegaw.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wellofwishes0000",
            "GameName": "Well Of Wishes",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wellofwishes0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "whatthefoxmegawa",
            "GameName": "What the Fox MegaWays",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/whatthefoxmegawa.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wildcatsmultilin",
            "GameName": "Wild Cats Multiline",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wildcatsmultilin.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wildcircus000000",
            "GameName": "Wild Circus",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wildcircus000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wildelements0000",
            "GameName": "Wild Elements",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wildelements0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wildfight0000000",
            "GameName": "Wild Fight",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wildfight0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wildhotchilliree",
            "GameName": "Wild Hot Chilli Reels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wildhotchilliree.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wildnords0000000",
            "GameName": "Wild Nords",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wildnords0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wildoclock000000",
            "GameName": "Wild O'Clock",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wildoclock000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wildspartans0000",
            "GameName": "Wild Spartans",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wildspartans0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wildtundra000000",
            "GameName": "Wild Tundra",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wildtundra000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wildwildchest000",
            "GameName": "Wild Wild Chest",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wildwildchest000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "winescalator0000",
            "GameName": "Win Escalator",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/winescalator0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wingsofra0000000",
            "GameName": "Wings of Ra",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wingsofra0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "winterwonders000",
            "GameName": "Winter Wonders",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/winterwonders000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "yucatansmystery0",
            "GameName": "Yucatan's Mystery",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/yucatansmystery0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "zaidasfortune000",
            "GameName": "Zaida's Fortune",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/zaidasfortune000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "zeuslightningpow",
            "GameName": "Zeus Lightning Power Reels",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/zeuslightningpow.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "zillardking00000",
            "GameName": "Zillard King",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/zillardking00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "777superstrike00",
            "GameName": "777 Super Strike DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/777superstrike00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "80sspins00000000",
            "GameName": "80s Spins DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/80sspins00000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "alexanderthegrea",
            "GameName": "Alexander The Great DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/alexanderthegrea.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "alibabasluck0000",
            "GameName": "Ali Baba's Luck DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/alibabasluck0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "alibabasluckmega",
            "GameName": "Ali Baba's Luck Megaways DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/alibabasluckmega.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "alibabasluckpowe",
            "GameName": "Ali Baba's Luck Power Reels DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/alibabasluckpowe.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "amazonislandmega",
            "GameName": "Amazon Island Megaways DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/amazonislandmega.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "asianfortune0000",
            "GameName": "Asian Fortune DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/asianfortune0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "astronaut0000000",
            "GameName": "Astronaut DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/astronaut0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "astros0000000000",
            "GameName": "Astros DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/astros0000000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "bountyraid200000",
            "GameName": "Bounty Raid 2 DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/bountyraid200000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "caseclosed000000",
            "GameName": "Case Closed DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/caseclosed000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "casinospin000000",
            "GameName": "Casino Spin DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/casinospin000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "chinesewilds0000",
            "GameName": "Chinese Wilds DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/chinesewilds0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "christmasmorning",
            "GameName": "Christmas Morning DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/christmasmorning.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "christmasmultiho",
            "GameName": "Christmas MULTIHOPS DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/christmasmultiho.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "clovercraze00000",
            "GameName": "Clover Craze DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/clovercraze00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "cobraqueen000000",
            "GameName": "Cobra Queen DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/cobraqueen000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "cottongangaffair",
            "GameName": "Cotton Gang Affair DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/cottongangaffair.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "cyberattack00000",
            "GameName": "Cyber Attack DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/cyberattack00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "desertlegendsspi",
            "GameName": "Desert Legends Spins DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/desertlegendsspi.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dragonpearl00000",
            "GameName": "Dragon Pearl DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dragonpearl00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dragonsmirror000",
            "GameName": "Dragon's Mirror DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dragonsmirror000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "dreamdestiny0000",
            "GameName": "Dream Destiny DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/dreamdestiny0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "drfrancashstein0",
            "GameName": "DrFrancashstein DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/drfrancashstein0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "easygold00000000",
            "GameName": "Easy Gold DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/easygold00000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "egyptmegaways000",
            "GameName": "Egypt Megaways DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/egyptmegaways000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "elephanttreasure",
            "GameName": "Elephant Treasure DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/elephanttreasure.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "epictreasure0000",
            "GameName": "Epic Treasure DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/epictreasure0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "fishtastic000000",
            "GameName": "Fishtastic DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/fishtastic000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "gemsinfernomegaw",
            "GameName": "Gems Inferno Megaways DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/gemsinfernomegaw.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "gigablast0000000",
            "GameName": "Giga Blast DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/gigablast0000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "goddessofthemoon",
            "GameName": "Goddess of the Moon MegaWays DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/goddessofthemoon.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "goldenlamps00000",
            "GameName": "Golden Lamps DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/goldenlamps00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "goldentoad000000",
            "GameName": "Golden Toad DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/goldentoad000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "hanselandgretelc",
            "GameName": "Hansel And Gretel Candyhouse Lines DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/hanselandgretelc.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "herekittykitty00",
            "GameName": "Here Kitty Kitty DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/herekittykitty00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "jellymultihops00",
            "GameName": "Jelly MULTIHOPS DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/jellymultihops00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "judgementdaymega",
            "GameName": "Judgement Day Megaways DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/judgementdaymega.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "knightsofavalon0",
            "GameName": "Knights Of Avalon DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/knightsofavalon0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "leprechaunsmagic",
            "GameName": "Leprechaun's Magic DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/leprechaunsmagic.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "leprechaunsmagmw",
            "GameName": "Leprechauns Magic Megaways DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/leprechaunsmagmw.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "leprechaunsmagpr",
            "GameName": "Leprechauns Magic Power Reels DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/leprechaunsmagpr.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "londontube000000",
            "GameName": "London Tube DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/londontube000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "luckycarnival000",
            "GameName": "Lucky Carnival DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/luckycarnival000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "macauracing00000",
            "GameName": "Macau Racing DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/macauracing00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "magictricks00000",
            "GameName": "Magic Tricks DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/magictricks00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "midnightromance0",
            "GameName": "Midnight Romance DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/midnightromance0.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "midnightthirst00",
            "GameName": "Midnight Thirst DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/midnightthirst00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "monstersunchaine",
            "GameName": "Monsters Unchained DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/monstersunchaine.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "nightmarefamilym",
            "GameName": "Nightmare Family Megaways DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/nightmarefamilym.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "playwiththedevil",
            "GameName": "Play with the Devil DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/playwiththedevil.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "redhotslot000000",
            "GameName": "Red Hot Slot DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/redhotslot000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "redlinerush00000",
            "GameName": "Redline Rush DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/redlinerush00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "sakuramasks00000",
            "GameName": "Sakura Masks DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/sakuramasks00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "seaboatadventure",
            "GameName": "Sea Boat Adventure DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/seaboatadventure.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "sirensriches0000",
            "GameName": "Siren's Riches DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/sirensriches0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "spookycarnival00",
            "GameName": "Spooky Carnival DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/spookycarnival00.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "sugarliciousever",
            "GameName": "Sugarlicious EveryWay™ DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/sugarliciousever.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "sugarmonster0000",
            "GameName": "Sugar Monster DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/sugarmonster0000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "thewildkiss00000",
            "GameName": "The Wild Kiss DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/thewildkiss00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "vaultcrackermega",
            "GameName": "Vault Cracker MegaWays DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/vaultcrackermega.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wantedwildz00000",
            "GameName": "Wanted Wildz DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wantedwildz00000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wantedwildzextre",
            "GameName": "Wanted Wildz Extreme DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wantedwildzextre.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "wolfkin000000000",
            "GameName": "Wolfkin DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/wolfkin000000000.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        },
        {
            "GameCode": "yearroundrichesc",
            "GameName": "Year-Round Riches Clusterbuster DNT",
            "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/REDTIGER/yearroundrichesc.webp",
            "ProviderCode": "REDTIGER",
            "ProviderName": "REDTIGER SLOTS",
            "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
            "CategoryName": "SLOTS"
        }
      ]
    }
  ]
};

const REDTIGER = () => {
  return (
    <Container>
      <GameList providerData={Data.ProviderData} />
    </Container>
  );
}

export default REDTIGER;
