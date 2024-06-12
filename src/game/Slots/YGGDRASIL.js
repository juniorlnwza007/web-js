import React from 'react';
import { Container } from '@mui/material';
import GameList from '../../components/List/GameList';

const Data = {
    "ProviderData": [
        {
            "GameList": [
                {
                    "GameCode": "880126",
                    "GameName": "Mayan Waterfalls",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880126.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880181",
                    "GameName": "Cthulhu",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880181.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880236",
                    "GameName": "Dragon Lore Gigarise",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880236.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880252",
                    "GameName": "Book of Books",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880252.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880256",
                    "GameName": "Gold Fever",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880256.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880257",
                    "GameName": "Giganimals Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880257.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880258",
                    "GameName": "Hyper Respins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880258.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880259",
                    "GameName": "Shadow Raiders Multimax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880259.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880260",
                    "GameName": "Devour the Weak",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880260.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880261",
                    "GameName": "Purrfect Potions",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880261.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880262",
                    "GameName": "Nice Catch Doublemax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880262.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880264",
                    "GameName": "Barbarossa Doublemax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880264.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880265",
                    "GameName": "Fruit Combinator",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880265.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880266",
                    "GameName": "4 Fantastic Fish in Egypt",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880266.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880267",
                    "GameName": "Ragnawolves",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880267.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880268",
                    "GameName": "Orca's Wild Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880268.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880269",
                    "GameName": "Candyfinity",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880269.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880270",
                    "GameName": "Jokrz Wild Ultranudge Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880270.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880271",
                    "GameName": "Diamond Symphony Doublemax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880271.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880272",
                    "GameName": "Beasty Blox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880272.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880273",
                    "GameName": "Starfire Fortunes Tophit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880273.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880274",
                    "GameName": "Thunderhawk",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880274.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880275",
                    "GameName": "Badger Miners",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880275.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880276",
                    "GameName": "Bucks and Doe 10K Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880276.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880279",
                    "GameName": "Nightmares VS Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880279.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880284",
                    "GameName": "Enchanted Water",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880284.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880285",
                    "GameName": "Peter Hunter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880285.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880286",
                    "GameName": "Gigagong Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880286.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880287",
                    "GameName": "Hercules 10K Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880287.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880288",
                    "GameName": "Blackbeard Battle Of The Seas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880288.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880289",
                    "GameName": "Lotus Warrior",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880289.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880290",
                    "GameName": "Fatz’s Diner",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880290.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880291",
                    "GameName": "Burning Blox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880291.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880292",
                    "GameName": "Vampire Riches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880292.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880293",
                    "GameName": "3 Lucky Witches",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880293.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880294",
                    "GameName": "8 Balls of Fire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880294.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880295",
                    "GameName": "Wild Stack Frenzy",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880295.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880296",
                    "GameName": "Defenders of Mystica",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880296.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880297",
                    "GameName": "Juiced DuoMax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880297.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880298",
                    "GameName": "Animafia",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880298.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880299",
                    "GameName": "Mega Money Machine",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880299.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880300",
                    "GameName": "Excalibur Vs Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880300.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880301",
                    "GameName": "Diggin for Diamonds",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880301.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880302",
                    "GameName": "Rock Star Santa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880302.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880303",
                    "GameName": "Secret of Anubis DoubleMax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880303.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880304",
                    "GameName": "Arctic Catch",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880304.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880305",
                    "GameName": "Legend of Dragon Wins",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880305.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880306",
                    "GameName": "Frozen Age",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880306.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880307",
                    "GameName": "Sidewinder DoubleMax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880307.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880308",
                    "GameName": "Nice Catch 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880308.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880309",
                    "GameName": "King Arthur 10K Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880309.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880310",
                    "GameName": "Ragnaravens",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880310.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880311",
                    "GameName": "Tiki Runner Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880311.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880314",
                    "GameName": "The Runemakers DoubleMax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880314.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880315",
                    "GameName": "Skylantis 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880315.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880316",
                    "GameName": "Rainbow Ryan 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880316.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880317",
                    "GameName": "Book of Blarney Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880317.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880318",
                    "GameName": "5 Sevens Hold and Win",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880318.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880319",
                    "GameName": "CleoPatrick",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880319.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880320",
                    "GameName": "Ghost Father",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880320.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880321",
                    "GameName": "Primal Hunter Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880321.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880322",
                    "GameName": "Sugar Bomb MultiBoost",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880322.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880323",
                    "GameName": "Tumble in the Jungle Wild Fight",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880323.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880324",
                    "GameName": "4K Ultra Gold",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880324.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880325",
                    "GameName": "Gold frontier Jackpots FastPot5",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880325.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880326",
                    "GameName": "Nile Mystery DoubleMax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880326.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880327",
                    "GameName": "Joker Millions",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880327.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880329",
                    "GameName": "Trolls Bridge 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880329.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880330",
                    "GameName": "Racing Lovers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880330.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880331",
                    "GameName": "WildPops",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880331.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880332",
                    "GameName": "Wild Mantra",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880332.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880333",
                    "GameName": "CherryPop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880333.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880334",
                    "GameName": "BountyPop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880334.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880336",
                    "GameName": "HippoPop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880336.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880337",
                    "GameName": "SuperCash Drop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880337.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880338",
                    "GameName": "PapayaPop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880338.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880339",
                    "GameName": "PiggyPop?",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880339.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880340",
                    "GameName": "LolliPop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880340.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880341",
                    "GameName": "MonkeyPop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880341.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880342",
                    "GameName": "RagingPop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880342.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880343",
                    "GameName": "CherryPop Deluxe",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880343.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880344",
                    "GameName": "CritterPop?",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880344.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880345",
                    "GameName": "Zombie aPOPalypse",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880345.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880346",
                    "GameName": "HipHopPop",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880346.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880347",
                    "GameName": "HelioPOPolis",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880347.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880348",
                    "GameName": "Gunpowder",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880348.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880350",
                    "GameName": "Mutant Trawlers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880350.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880351",
                    "GameName": "Diamond Miner DuoMax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880351.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880352",
                    "GameName": "Monkeys Go Bananas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880352.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880135",
                    "GameName": "Easter Island",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880135.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880095",
                    "GameName": "Easter Island 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880095.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880143",
                    "GameName": "Valley of the Gods",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880143.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880255",
                    "GameName": "E-Force",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880255.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880151",
                    "GameName": "Multifly!",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880151.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "1002",
                    "GameName": "Nikola Teslas Incredible Machine",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/1002.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "10036",
                    "GameName": "Lotsa Lines",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/10036.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "1006",
                    "GameName": "Ice and Fire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/1006.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "10093",
                    "GameName": "Brawl at the RedCap Inn",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/10093.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "10116",
                    "GameName": "Sabres and Swords: Charge Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/10116.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "1012",
                    "GameName": "Medusa",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/1012.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "1019",
                    "GameName": "Elemental",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/1019.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "10202",
                    "GameName": "Glory of Heroes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/10202.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "1029",
                    "GameName": "Labyrinth of Knossos",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/1029.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "7305",
                    "GameName": "Reef Run",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/7305.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "7313",
                    "GameName": "Cyrus the Virus",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/7313.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "7318",
                    "GameName": "Doubles",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/7318.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "7327",
                    "GameName": "Legend of the White Snake Lady",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/7327.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "7330",
                    "GameName": "Super Heroes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/7330.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "7334",
                    "GameName": "Chibeasties 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/7334.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "7335",
                    "GameName": "Power Plant",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/7335.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "7342",
                    "GameName": "Reptoids",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/7342.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880003",
                    "GameName": "9kYeti",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880003.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880009",
                    "GameName": "Moley Moolah",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880009.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880010",
                    "GameName": "Atlantis Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880010.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880011",
                    "GameName": "Giza Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880011.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880013",
                    "GameName": "Big Bucks Bandits Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880013.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880014",
                    "GameName": "El Dorado Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880014.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880015",
                    "GameName": "Ancient Eclipse",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880015.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880016",
                    "GameName": "Buster Hammer Carnival",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880016.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880018",
                    "GameName": "Johnan Legendarian",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880018.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880019",
                    "GameName": "Odin Infinity Reels Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880019.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880020",
                    "GameName": "Thor Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880020.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880021",
                    "GameName": "Desperate Dawgs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880021.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880022",
                    "GameName": "Robin Sherwood Marauders",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880022.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880023",
                    "GameName": "Cauldron",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880023.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880025",
                    "GameName": "Wild Joker Stacks",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880025.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880026",
                    "GameName": "Royal Dragon Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880026.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880028",
                    "GameName": "The Hot Offer",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880028.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880029",
                    "GameName": "Jokerizer",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880029.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880031",
                    "GameName": "Fruitoids",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880031.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880033",
                    "GameName": "Dark Joker Rizes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880033.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880034",
                    "GameName": "Chibeasties",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880034.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880037",
                    "GameName": "Nirvana",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880037.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880038",
                    "GameName": "Incinerator",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880038.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880041",
                    "GameName": "Seasons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880041.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880042",
                    "GameName": "Legend of the Golden Monkey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880042.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880043",
                    "GameName": "Bicicleta",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880043.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880044",
                    "GameName": "Big Blox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880044.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880045",
                    "GameName": "Double Dragons",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880045.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880047",
                    "GameName": "Alchymedes",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880047.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880048",
                    "GameName": "Beauty and the Beast",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880048.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880050",
                    "GameName": "Jungle Books",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880050.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880059",
                    "GameName": "Lucha Maniacs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880059.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880060",
                    "GameName": "TutsTwister",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880060.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880061",
                    "GameName": "Penguin City",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880061.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880063",
                    "GameName": "Wolf Hunters",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880063.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880064",
                    "GameName": "Dark Vortex",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880064.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880065",
                    "GameName": "Baron Samedi",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880065.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880066",
                    "GameName": "Time Travel Tigers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880066.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880072",
                    "GameName": "Wilhelm Tell",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880072.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880074",
                    "GameName": "Age of Asgard",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880074.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880075",
                    "GameName": "Wild Robo Factory",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880075.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880076",
                    "GameName": "Yokozuna Clash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880076.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880078",
                    "GameName": "Aldo's Journey",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880078.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880080",
                    "GameName": "Temple Stacks: Splitz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880080.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880081",
                    "GameName": "Brazil Bomba",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880081.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880083",
                    "GameName": "Neon Rush: Splitz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880083.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880087",
                    "GameName": "Football Glory",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880087.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880088",
                    "GameName": "Vault of Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880088.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880089",
                    "GameName": "Lightning Joker",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880089.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880098",
                    "GameName": "Vikings go to Valhalla",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880098.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880099",
                    "GameName": "Gator Gold Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880099.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880101",
                    "GameName": "Suncatcher Gigablox ",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880101.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880102",
                    "GameName": "Raptor Doublemax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880102.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880103",
                    "GameName": "Golden Fishtank 2 Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880103.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880104",
                    "GameName": "Orient Express",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880104.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880105",
                    "GameName": "Trolls Bridge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880105.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880106",
                    "GameName": "Royal Family",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880106.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880107",
                    "GameName": "Pirates: Smugglers Paradise",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880107.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880109",
                    "GameName": "Avatars: Gateway Guardians",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880109.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880110",
                    "GameName": "Pirates 2: Mutiny",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880110.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880112",
                    "GameName": "Tiki Infinity Reels Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880112.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880113",
                    "GameName": "Jaguar SuperWays",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880113.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880114",
                    "GameName": "Gargoyle Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880114.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880115",
                    "GameName": "Golden Gorgon",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880115.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880116",
                    "GameName": "Legion Hot1",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880116.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880118",
                    "GameName": "12 Trojan Mysteries",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880118.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880120",
                    "GameName": "Pushy Cats",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880120.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880122",
                    "GameName": "Robin Nottingham Raiders",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880122.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880127",
                    "GameName": "Xibalba",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880127.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880128",
                    "GameName": "Krazy Klimber",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880128.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880129",
                    "GameName": "90k Yeti Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880129.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880130",
                    "GameName": "Spina Colada",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880130.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880131",
                    "GameName": "Crystal Falls",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880131.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880133",
                    "GameName": "Time Machine",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880133.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880134",
                    "GameName": "Lady Merlin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880134.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880136",
                    "GameName": "Rainbow Ryan",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880136.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880137",
                    "GameName": "Towering Pays Valhalla",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880137.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880138",
                    "GameName": "10X Rewind",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880138.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880139",
                    "GameName": "The Bounty Hunter",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880139.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880140",
                    "GameName": "Tiger Tiger",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880140.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880141",
                    "GameName": "Medusa Hot 1",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880141.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880142",
                    "GameName": "Hammer of Gods",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880142.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880144",
                    "GameName": "Bananaz 10K Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880144.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880145",
                    "GameName": "Towering Pays Excalibur",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880145.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880146",
                    "GameName": "Vikings Go To Hell",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880146.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880148",
                    "GameName": "Winterberries",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880148.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880149",
                    "GameName": "Valkyries",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880149.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880150",
                    "GameName": "Valley of the Gods 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880150.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880152",
                    "GameName": "Golden Haul Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880152.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880153",
                    "GameName": "Lucky Neko",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880153.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880154",
                    "GameName": "Hades",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880154.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880155",
                    "GameName": "Carol of The Elves",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880155.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880156",
                    "GameName": "Sunny Shores",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880156.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880157",
                    "GameName": "Dwarf Mine",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880157.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880158",
                    "GameName": "Gem Rocks",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880158.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880159",
                    "GameName": "Pumpkin Smash",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880159.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880160",
                    "GameName": "Hanzo's Dojo",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880160.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880161",
                    "GameName": "Savanna Roar",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880161.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880162",
                    "GameName": "Reel Desire",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880162.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880163",
                    "GameName": "5 Clans",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880163.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880164",
                    "GameName": "Cazino Cosmos",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880164.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880165",
                    "GameName": "The One Armed Bandit",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880165.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880166",
                    "GameName": "Hyperburst",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880166.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880167",
                    "GameName": "Vikings go Berzerk",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880167.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880168",
                    "GameName": "Vikings go Wild",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880168.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880169",
                    "GameName": "Sahara Nights",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880169.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880170",
                    "GameName": "Champions of Rome",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880170.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880171",
                    "GameName": "Syncronite",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880171.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880172",
                    "GameName": "Arthur's Fortune",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880172.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880173",
                    "GameName": "Blood Moon Wilds",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880173.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880174",
                    "GameName": "Cazino Zeppelin",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880174.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880175",
                    "GameName": "Golden Fish Tank",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880175.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880176",
                    "GameName": "Gator Gold Deluxe Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880176.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880177",
                    "GameName": "Hypernova 10K Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880177.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880178",
                    "GameName": "Hunters Moon Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880178.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880179",
                    "GameName": "Vikings Go Berzerk: Reloaded",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880179.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880180",
                    "GameName": "Serendipity",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880180.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880182",
                    "GameName": "WinFall in Paradise",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880182.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880183",
                    "GameName": "Monster Blox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880183.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880184",
                    "GameName": "Gems Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880184.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880185",
                    "GameName": "Cazino Zeppelin Reloaded",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880185.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880187",
                    "GameName": "Thunder of Thor",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880187.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880188",
                    "GameName": "Jumbo Jellies",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880188.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880189",
                    "GameName": "Age Of Beasts Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880189.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880190",
                    "GameName": "Money Mariachi Infinity Reels",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880190.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880192",
                    "GameName": "Super Cash Drop GigaBlox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880192.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880194",
                    "GameName": "Dead Man's Fingers",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880194.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880195",
                    "GameName": "60 Second Heist",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880195.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880196",
                    "GameName": "Tiki Runner 2 DoubleMax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880196.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880197",
                    "GameName": "Jokrz Wild UltraNudge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880197.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880198",
                    "GameName": "Return of the Valkyrie",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880198.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880199",
                    "GameName": "Tempered Steel",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880199.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880200",
                    "GameName": "Wild Duel",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880200.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880201",
                    "GameName": "Hells Hogs",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880201.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880203",
                    "GameName": "Big Benji Bonanza",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880203.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880204",
                    "GameName": "4 Fantastic Fish",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880204.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880205",
                    "GameName": "Water Blox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880205.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880206",
                    "GameName": "Mega Pearl Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880206.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880208",
                    "GameName": "ARRR! 10K Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880208.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880209",
                    "GameName": "Eye of Persia 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880209.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880210",
                    "GameName": "Professor Clanks Combinator",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880210.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880211",
                    "GameName": "Boilin' Pots",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880211.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880212",
                    "GameName": "Monsters VS Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880212.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880213",
                    "GameName": "MexoMax! Multimax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880213.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880214",
                    "GameName": "Dublin Up",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880214.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880215",
                    "GameName": "Buffalo Blox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880215.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880216",
                    "GameName": "Wild One",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880216.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880217",
                    "GameName": "Of Sabers and Monsters Wild Fight",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880217.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880218",
                    "GameName": "Book HOTFIRE",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880218.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880219",
                    "GameName": "Mega Cash Stacks",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880219.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880220",
                    "GameName": "Golden Chip Roulette",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880220.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880221",
                    "GameName": "Midway Money",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880221.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880222",
                    "GameName": "Hillbilly Vegas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880222.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880223",
                    "GameName": "Voodoo Hex",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880223.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880224",
                    "GameName": "Calavera Crush",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880224.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880225",
                    "GameName": "Florageddon!",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880225.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880226",
                    "GameName": "Jekyllz Wild Ultranudge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880226.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880227",
                    "GameName": "Arctic Sorcerer Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880227.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880228",
                    "GameName": "Champion of the Underworld",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880228.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880229",
                    "GameName": "Wild Fishin' Wild Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880229.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880230",
                    "GameName": "Fruit Gemz Splitz",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880230.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880231",
                    "GameName": "Desperate Dawgs 2 Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880231.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880232",
                    "GameName": "7 Gold Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880232.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880233",
                    "GameName": "Dungeon Tower",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880233.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880234",
                    "GameName": "Firekick! Multimax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880234.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880235",
                    "GameName": "Cannonade!",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880235.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880237",
                    "GameName": "Christmas Plaza DoubleMax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880237.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880238",
                    "GameName": "Gods VS Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880238.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880239",
                    "GameName": "Rainbow Power Pots UltraNudge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880239.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880240",
                    "GameName": "The Legend of Musashi",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880240.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880241",
                    "GameName": "Dragon Blox Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880241.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880242",
                    "GameName": "Festival 10K Ways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880242.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880243",
                    "GameName": "Double Lucky Mushrooms Doublemax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880243.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880244",
                    "GameName": "Neon Villains Doublemax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880244.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880245",
                    "GameName": "Power of Love",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880245.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880246",
                    "GameName": "Lady Merlin Multimax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880246.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880248",
                    "GameName": "Winterberries 2",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880248.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880249",
                    "GameName": "Fury of Hyde Megaways",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880249.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880250",
                    "GameName": "Pharaoh's Gaze Doublemax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880250.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880251",
                    "GameName": "3 Lucky Leprechauns",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880251.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880253",
                    "GameName": "Bugs Money",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880253.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880254",
                    "GameName": "Big Bucks Buffalo Gigablox",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880254.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880277",
                    "GameName": "Fast Fruits Doublemax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880277.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880278",
                    "GameName": "Notre-Dame Tales",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880278.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880280",
                    "GameName": "Shaker Club",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880280.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880281",
                    "GameName": "10000 BC Doublemax",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880281.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880282",
                    "GameName": "Roamin' Romans UltraNudge",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880282.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                },
                {
                    "GameCode": "880283",
                    "GameName": "Going Wild in Vegas",
                    "GameLogo": "https://dd8p0622bwh41.cloudfront.net/Content/img/game/YGGDRASIL/880283.webp",
                    "ProviderCode": "YGGDRASIL",
                    "ProviderName": "YGGDRASIL SLOTS",
                    "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
                    "CategoryName": "SLOTS"
                }
            ]
        }
    ]
};

const YGGDRASIL = () => {
    return (
        <Container>
            <GameList providerData={Data.ProviderData} />
        </Container>
    );
}

export default YGGDRASIL;