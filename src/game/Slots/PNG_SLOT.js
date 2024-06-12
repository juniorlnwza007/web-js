import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "160273",
                    "GameName": "Champions of Mithrune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160273.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160274",
                    "GameName": "Mount M",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160274.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160275",
                    "GameName": "Gates of Troy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160275.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160276",
                    "GameName": "Immortails of Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160276.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160277",
                    "GameName": "Fortune Rewind",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160277.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160278",
                    "GameName": "Boat Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160278.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160279",
                    "GameName": "Count Jokula",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160279.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160280",
                    "GameName": "Canine Carnage",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160280.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160281",
                    "GameName": "Rise of Olympus 100",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160281.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160282",
                    "GameName": "USA Flip",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160282.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160283",
                    "GameName": "Clash of Camelot",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160283.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160284",
                    "GameName": "Athena Ascending ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160284.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160285",
                    "GameName": "Naughty Nick's Book",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160285.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160286",
                    "GameName": "Shamrock Miner",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160286.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160287",
                    "GameName": "Wild Falls 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160287.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160288",
                    "GameName": "Cash-a-Cabana",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160288.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160290",
                    "GameName": "Pilgrim of Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160290.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160291",
                    "GameName": "Game of Gladiators: Uprising ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160291.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160292",
                    "GameName": "Moon Princess Trinity",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160292.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160293",
                    "GameName": "Legacy of Inca",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160293.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160294",
                    "GameName": "Wild Bandolier",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160294.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160295",
                    "GameName": "Ternion",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160295.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160296",
                    "GameName": "Pandora's Box of Evil",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160296.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160298",
                    "GameName": "Slashimi",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160298.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160299",
                    "GameName": "Ronin's Honour",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160299.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160300",
                    "GameName": "Gerard's Gambit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160300.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160301",
                    "GameName": "Captain Glum: Pirate Hunter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160301.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160302",
                    "GameName": "Luchamigos",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160302.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160303",
                    "GameName": "Highway Legends",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160303.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160304",
                    "GameName": "Free Reelin' 1000",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160304.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160305",
                    "GameName": "Viking Apocalypse",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160305.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160306",
                    "GameName": "Sweet Alchemy 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160306.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160307",
                    "GameName": "Sparky & Shortz Hidden Joules",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160307.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160308",
                    "GameName": "Fox Mayhem",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160308.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160309",
                    "GameName": "Merlin: Journey of Flame",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160309.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160310",
                    "GameName": "Scroll of Seth",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160310.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160311",
                    "GameName": "Sweet Alchemy 100",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160311.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160312",
                    "GameName": "Honey Rush 100",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160312.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160313",
                    "GameName": "Boat Bonanza Colossal Catch",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160313.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160314",
                    "GameName": "Scales of Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160314.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160315",
                    "GameName": "Temple of Prosperity",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160315.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160316",
                    "GameName": "Piggy Blitz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160316.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160317",
                    "GameName": "Raging Rex 3",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160317.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160318",
                    "GameName": "Return of The Green Knight",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160318.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160319",
                    "GameName": "Ruff Heist",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160319.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160320",
                    "GameName": "Invading Vegas: Las Christmas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160320.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160321",
                    "GameName": "Gargantoonz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160321.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160322",
                    "GameName": "Mega Don Feeding Frenzy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160322.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160323",
                    "GameName": "Viking Runecraft 100",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160323.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160324",
                    "GameName": "Pandastic Adventure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160324.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160326",
                    "GameName": "Cat Wilde and the Incan Quest ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160326.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160327",
                    "GameName": "Moon Princess Power of Love",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160327.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160328",
                    "GameName": "*NSYNC POP",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160328.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160329",
                    "GameName": "3 Clown Monty II",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160329.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160330",
                    "GameName": "Alice Cooper and the Tome of Madness",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160330.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160331",
                    "GameName": "Banquet of Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160331.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160332",
                    "GameName": "Beast of Wealth",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160332.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160333",
                    "GameName": "Bell of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160333.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160334",
                    "GameName": "Boat Bonanza Down Under",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160334.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160337",
                    "GameName": "Celebration of Wealth",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160337.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160338",
                    "GameName": "Chambers of Ancients",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160338.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160339",
                    "GameName": "Colt Lightning",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160339.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160340",
                    "GameName": "Def Leppard: Hysteria",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160340.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160341",
                    "GameName": "Dio",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160341.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160343",
                    "GameName": "Fruit Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160343.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160344",
                    "GameName": "Gift Shop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160344.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160345",
                    "GameName": "Golden Goal",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160345.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160346",
                    "GameName": "Gunslinger: Reloaded",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160346.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160347",
                    "GameName": "HammerFall",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160347.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160348",
                    "GameName": "Helloween",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160348.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160349",
                    "GameName": "Hugo",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160349.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160350",
                    "GameName": "Hugo 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160350.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160351",
                    "GameName": "Hugo Carts",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160351.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160352",
                    "GameName": "Hugo Goal",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160352.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160353",
                    "GameName": "Hugo Legacy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160353.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160354",
                    "GameName": "Hugo's Adventure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160354.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160355",
                    "GameName": "KISS REELS OF ROCK",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160355.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160356",
                    "GameName": "Legacy of Dynasties",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160356.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160357",
                    "GameName": "Legion Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160357.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160358",
                    "GameName": "Legion Gold Unleashed",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160358.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160359",
                    "GameName": "Leprechaun goes to Hell",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160359.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160360",
                    "GameName": "Lordi Reel Monsters",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160360.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160361",
                    "GameName": "Monkey : Battle for the Scrolls",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160361.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160362",
                    "GameName": "Motley Crue",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160362.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160363",
                    "GameName": "Mystery Genie Fortunes of the Lamp Team Blue",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160363.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160364",
                    "GameName": "Piranha Pays",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160364.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160365",
                    "GameName": "Rascal Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160365.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160366",
                    "GameName": "Saxon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160366.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160367",
                    "GameName": "Sherwood Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160367.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160369",
                    "GameName": "Speed Cash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160369.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160370",
                    "GameName": "Tales of Mithrune Syn's Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160370.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160371",
                    "GameName": "Temple of Wealth",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160371.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160372",
                    "GameName": "Twisted Sister",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160372.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160373",
                    "GameName": "Undefeated Xerxes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160373.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160374",
                    "GameName": "ZZ Top Roadside Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160374.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160375",
                    "GameName": "Wild Survivor",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160375.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160377",
                    "GameName": "Tomb of Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160377.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160378",
                    "GameName": "The Sword and the Grail Excalibur",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160378.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160379",
                    "GameName": "Fulong 88",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160379.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160000",
                    "GameName": "24k Dragon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160000.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160002",
                    "GameName": "5x Magic",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160002.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160003",
                    "GameName": "7 Sins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160003.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160004",
                    "GameName": "Ace of Spades",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160004.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160005",
                    "GameName": "Agent Destiny",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160005.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160006",
                    "GameName": "Ankh of Anubis",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160006.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160007",
                    "GameName": "Annihilator",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160007.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160008",
                    "GameName": "Aztec Idols",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160008.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160009",
                    "GameName": "Aztec Warrior Princess",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160009.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160010",
                    "GameName": "Baker's Treat",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160010.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160011",
                    "GameName": "Banana Rock",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160011.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160012",
                    "GameName": "Battle Royal",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160012.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160015",
                    "GameName": "Big Win 777",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160015.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160016",
                    "GameName": "Big Win Cat",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160016.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160017",
                    "GameName": "Black Mamba",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160017.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160019",
                    "GameName": "Blinged",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160019.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160020",
                    "GameName": "Book of Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160020.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160022",
                    "GameName": "Bull in a China Shop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160022.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160023",
                    "GameName": "Cash Pump",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160023.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160024",
                    "GameName": "Cash Vandal",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160024.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160027",
                    "GameName": "Cat Wilde and the Doom of Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160027.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160028",
                    "GameName": "Cat Wilde in the Eclipse of the Sun God",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160028.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160029",
                    "GameName": "Cats and Cash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160029.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160031",
                    "GameName": "Charlie Chance in Hell to Pay",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160031.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160032",
                    "GameName": "Chinese New Year",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160032.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160033",
                    "GameName": "Chronos Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160033.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160034",
                    "GameName": "Cloud Quest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160034.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160036",
                    "GameName": "Contact",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160036.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160037",
                    "GameName": "Cops'n'Robbers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160037.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160038",
                    "GameName": "Rabbit Hole Riches - Court of Hearts",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160038.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160039",
                    "GameName": "Coywolf Cash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160039.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160040",
                    "GameName": "Crazy Cows",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160040.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160041",
                    "GameName": "Crystal Sun",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160041.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160042",
                    "GameName": "Dawn of Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160042.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160043",
                    "GameName": "Demon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160043.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160045",
                    "GameName": "Diamond Vortex",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160045.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160046",
                    "GameName": "Disco Diamonds",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160046.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160047",
                    "GameName": "Divine Showdown",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160047.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160048",
                    "GameName": "Doom of Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160048.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160050",
                    "GameName": "Dragon Maiden",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160050.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160051",
                    "GameName": "Dragon Ship",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160051.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160052",
                    "GameName": "Easter Eggs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160052.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160053",
                    "GameName": "Enchanted Crystals",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160053.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160054",
                    "GameName": "Enchanted Meadow",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160054.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160055",
                    "GameName": "Energoonz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160055.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160058",
                    "GameName": "Eye of the Kraken",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160058.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160059",
                    "GameName": "Feline Fury",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160059.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160060",
                    "GameName": "Fire Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160060.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160061",
                    "GameName": "Fire Joker Freeze",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160061.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160062",
                    "GameName": "Fire Toad",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160062.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160063",
                    "GameName": "Firefly Frenzy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160063.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160065",
                    "GameName": "Fortune Teller",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160065.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160066",
                    "GameName": "Fortunes of Ali Baba",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160066.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160067",
                    "GameName": "Frozen Gems",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160067.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160069",
                    "GameName": "FU ER DAI",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160069.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160070",
                    "GameName": "Game of Gladiators",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160070.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160071",
                    "GameName": "Gemix",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160071.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160073",
                    "GameName": "Gold King",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160073.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160074",
                    "GameName": "Gold Trophy 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160074.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160075",
                    "GameName": "Gold Volcano",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160075.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160076",
                    "GameName": "Golden Caravan",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160076.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160077",
                    "GameName": "Golden Colts",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160077.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160079",
                    "GameName": "Golden Legend",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160079.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160080",
                    "GameName": "Golden Osiris",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160080.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160081",
                    "GameName": "Golden Ticket",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160081.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160082",
                    "GameName": "Golden Ticket 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160082.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160083",
                    "GameName": "Grim Muerto",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160083.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160086",
                    "GameName": "Happy Halloween",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160086.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160088",
                    "GameName": "Holiday Season",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160088.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160089",
                    "GameName": "Holiday Spirits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160089.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160090",
                    "GameName": "Honey Rush",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160090.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160091",
                    "GameName": "House of Doom",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160091.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160092",
                    "GameName": "House of Doom 2: The Crypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160092.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160097",
                    "GameName": "Ice Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160097.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160098",
                    "GameName": "Imperial Opera",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160098.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160099",
                    "GameName": "Inferno Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160099.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160100",
                    "GameName": "Inferno Star",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160100.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160101",
                    "GameName": "Irish Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160101.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160102",
                    "GameName": "Iron Girl",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160102.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160105",
                    "GameName": "Jade Magician",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160105.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160106",
                    "GameName": "Jewel Box",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160106.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160108",
                    "GameName": "Jolly Roger",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160108.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160109",
                    "GameName": "Jolly Roger 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160109.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160110",
                    "GameName": "Keno",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160110.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160111",
                    "GameName": "Lady of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160111.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160112",
                    "GameName": "Legacy of Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160112.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160113",
                    "GameName": "Legacy of Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160113.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160114",
                    "GameName": "Leprechaun goes Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160114.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160116",
                    "GameName": "Leprechaun Goes Wild",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160116.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160117",
                    "GameName": "Lord Merlin and The Lady of The Lake",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160117.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160118",
                    "GameName": "Lucky Diamonds",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160118.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160119",
                    "GameName": "Madame Ink",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160119.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160120",
                    "GameName": "Mahjong 88",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160120.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160121",
                    "GameName": "Matsuri",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160121.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160122",
                    "GameName": "Mermaid's Diamond",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160122.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160123",
                    "GameName": "Merry Xmas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160123.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160124",
                    "GameName": "Miner Donkey Trouble",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160124.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160126",
                    "GameName": "Mission Cash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160126.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160128",
                    "GameName": "Moon Princess",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160128.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160129",
                    "GameName": "MULTIFRUIT 81",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160129.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160130",
                    "GameName": "Mystery Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160130.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160131",
                    "GameName": "Mystery Joker 6000",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160131.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160132",
                    "GameName": "Myth",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160132.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160133",
                    "GameName": "New Year Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160133.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160134",
                    "GameName": "Ninja Fruits",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160134.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160136",
                    "GameName": "Octopus Treasure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160136.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160137",
                    "GameName": "Pearl Lagoon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160137.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160138",
                    "GameName": "Pearls of India",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160138.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160139",
                    "GameName": "Perfect Gems",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160139.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160140",
                    "GameName": "Phoenix Reborn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160140.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160141",
                    "GameName": "Photo Safari",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160141.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160142",
                    "GameName": "Piggy Bank Farm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160142.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160143",
                    "GameName": "Pimped",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160143.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160144",
                    "GameName": "Planet Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160144.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160145",
                    "GameName": "Prissy Princess",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160145.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160146",
                    "GameName": "Prosperity Palace",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160146.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160147",
                    "GameName": "Queen's Day Tilt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160147.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160148",
                    "GameName": "Rabbit Hole Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160148.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160149",
                    "GameName": "Rage to Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160149.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160150",
                    "GameName": "Raging Rex",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160150.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160151",
                    "GameName": "Rainforest Magic",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160151.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160153",
                    "GameName": "Rally 4 Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160153.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160154",
                    "GameName": "Reactoonz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160154.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160155",
                    "GameName": "Reactoonz 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160155.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160156",
                    "GameName": "Rich Wilde & The Shield of Athena",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160156.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160157",
                    "GameName": "Rich Wilde and the Amulet of Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160157.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160158",
                    "GameName": "Riches of RA",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160158.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160159",
                    "GameName": "Riches of Robin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160159.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160160",
                    "GameName": "Riddle Reels: A Case of Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160160.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160161",
                    "GameName": "Ring of Odin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160161.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160162",
                    "GameName": "Rise of Athena",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160162.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160163",
                    "GameName": "Rise of Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160163.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160164",
                    "GameName": "Rise of Merlin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160164.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160165",
                    "GameName": "Rise of Olympus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160165.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160166",
                    "GameName": "Royal Masquerade",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160166.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160167",
                    "GameName": "Sabaton",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160167.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160168",
                    "GameName": "Sails of Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160168.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160169",
                    "GameName": "Samba Carnival",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160169.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160171",
                    "GameName": "Sea Hunter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160171.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160173",
                    "GameName": "Sizzling Spins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160173.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160174",
                    "GameName": "Space Race",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160174.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160176",
                    "GameName": "Spin Party",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160176.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160177",
                    "GameName": "Star Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160177.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160178",
                    "GameName": "Sticky Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160178.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160179",
                    "GameName": "Street Magic",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160179.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160180",
                    "GameName": "Super Flip",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160180.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160182",
                    "GameName": "Sweet 27",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160182.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160183",
                    "GameName": "Sweet Alchemy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160183.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160186",
                    "GameName": "Testament",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160186.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160187",
                    "GameName": "That's Rich",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160187.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160188",
                    "GameName": "The Faces of Freya",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160188.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160189",
                    "GameName": "The Green Knight",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160189.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160190",
                    "GameName": "The Paying Piano Club",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160190.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160191",
                    "GameName": "The Shimmering Woods",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160191.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160192",
                    "GameName": "The Sword and The Grail",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160192.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160193",
                    "GameName": "Thunder Screech",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160193.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160194",
                    "GameName": "Tome of Madness",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160194.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160195",
                    "GameName": "Tower Quest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160195.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160196",
                    "GameName": "Troll Hunters",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160196.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160197",
                    "GameName": "Troll Hunters 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160197.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160199",
                    "GameName": "Viking Runecraft",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160199.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160201",
                    "GameName": "Wild Blood",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160201.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160202",
                    "GameName": "Wild Blood 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160202.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160203",
                    "GameName": "Wild Falls",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160203.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160204",
                    "GameName": "Wild Frames",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160204.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160205",
                    "GameName": "Wild Melon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160205.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160206",
                    "GameName": "Wild North",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160206.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160207",
                    "GameName": "Wild Rails",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160207.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160208",
                    "GameName": "Wildhound Derby",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160208.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160209",
                    "GameName": "Win-A-Beest",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160209.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160210",
                    "GameName": "Wizard of Gems",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160210.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160211",
                    "GameName": "Xmas Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160211.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160212",
                    "GameName": "Xmas Magic",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160212.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160213",
                    "GameName": "3 Clown Monty",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160213.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160214",
                    "GameName": "Candy Island Princess",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160214.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160215",
                    "GameName": "Charlie Chance",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160215.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160216",
                    "GameName": "Prism of Gems",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160216.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160217",
                    "GameName": "Scroll of Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160217.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160218",
                    "GameName": "Agent of Hearts",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160218.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160219",
                    "GameName": "Blazin' Bullfrog",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160219.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160220",
                    "GameName": "Coils of Cash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160220.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160221",
                    "GameName": "Diamonds of the Realm",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160221.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160222",
                    "GameName": "Free Reelin' Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160222.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160223",
                    "GameName": "Gemix 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160223.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160224",
                    "GameName": "Hotel Yeti-Way",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160224.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160225",
                    "GameName": "Odin: Protector of Realms",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160225.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160226",
                    "GameName": "Pack & Cash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160226.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160228",
                    "GameName": "Sisters of the Sun",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160228.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160229",
                    "GameName": "Dr. Toonz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160229.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160230",
                    "GameName": "Ghost of Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160230.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160231",
                    "GameName": "The Wild Class",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160231.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160232",
                    "GameName": "Charlie Chance and The Curse of Cleopatra",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160232.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160233",
                    "GameName": "Muerto en Mictlán",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160233.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160234",
                    "GameName": "Sparky & Shortz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160234.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160235",
                    "GameName": "Tales of Asgard: Loki's Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160235.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160236",
                    "GameName": "Legend of the Ice Dragon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160236.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160237",
                    "GameName": "The Last Sundown",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160237.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160238",
                    "GameName": "Rich Wilde and the Wandering City",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160238.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160239",
                    "GameName": "Merlin and the Ice Queen Morgana",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160239.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160240",
                    "GameName": "Moon Princess: Christmas Kingdom",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160240.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160241",
                    "GameName": "Hooligan Hustle",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160241.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160242",
                    "GameName": "Beasts of Fire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160242.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160243",
                    "GameName": "Captain Xeno's Earth Adventure",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160243.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160244",
                    "GameName": "Tale of Kyubiko",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160244.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160245",
                    "GameName": "15 Crystal Roses: A Tale of Love",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160245.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160246",
                    "GameName": "Love Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160246.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160247",
                    "GameName": "Gigantoonz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160247.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160248",
                    "GameName": "Cat Wilde and The Lost Chapter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160248.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160249",
                    "GameName": "Secret of Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160249.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160250",
                    "GameName": "Tales of Asgard: Freya's Wedding",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160250.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160251",
                    "GameName": "Safari of Wealth",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160251.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160252",
                    "GameName": "Fat Frankies",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160252.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160253",
                    "GameName": "Raging Rex 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160253.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160254",
                    "GameName": "Eye of Atum",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160254.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160255",
                    "GameName": "Moon Princess 100",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160255.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160256",
                    "GameName": "Forge of Gems",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160256.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160257",
                    "GameName": "Puebla Parade",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160257.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160258",
                    "GameName": "Rise of Gods: Reckoning",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160258.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160259",
                    "GameName": "Idol of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160259.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160260",
                    "GameName": "Animal Madness",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160260.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160261",
                    "GameName": "King's Mask",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160261.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160262",
                    "GameName": "Wild Trigger",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160262.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160263",
                    "GameName": "Derby Wheel",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160263.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160264",
                    "GameName": "Rocco Gallo",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160264.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160265",
                    "GameName": "Cat Wilde and the Pyramids of Dead",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160265.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160266",
                    "GameName": "Merlin's Grimoire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160266.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160267",
                    "GameName": "Rotiki",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160267.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160268",
                    "GameName": "Cash of Command",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160268.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160269",
                    "GameName": "Mega Don",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160269.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160270",
                    "GameName": "Leprechaun's Vault",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160270.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160271",
                    "GameName": "Forge of Fortunes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160271.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "160272",
                    "GameName": "Bull in a Rodeo",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/PNG_SLOT/160272.webp",
                    "ProviderCode": "PNG_SLOT",
                    "ProviderName": "PNG SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const PNG_SLOT = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default PNG_SLOT;
