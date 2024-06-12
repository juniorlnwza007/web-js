import React from 'react';
import { Container } from '@mui/material';
import ProviderList from '../components/List/ProviderList';


const Data = {
  "ProviderData": [
    {
      "ProviderList": [
        {
          "ProviderCode": "EBET_E_CASINO",
          "ProviderName": "EBET E CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/EBET_E_CASINO.webp",
          "ProviderLink": "/PgGame"
        },
        {
          "ProviderCode": "CQ9_CASINO",
          "ProviderName": "CQ9 E CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9_CASINO.webp"
        },
        {
          "ProviderCode": "JOKER_CASINO",
          "ProviderName": "JOKER E CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JOKER_CASINO.webp"
        },
        {
          "ProviderCode": "CG_E_CASINO",
          "ProviderName": "CG E CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG_E_CASINO.webp"
        },
        {
          "ProviderCode": "YGGDRASIL_E_CASINO",
          "ProviderName": "YGGDRASIL E CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL_E_CASINO.webp"
        },
        {
          "ProviderCode": "RELAX_E_CASINO",
          "ProviderName": "RELAX E CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_E_CASINO.webp"
        },
        {
          "ProviderCode": "PPLAY_E_CASINO",
          "ProviderName": "PRAGMATICPLAY E CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY_E_CASINO.webp"
        },
        {
          "ProviderCode": "ARCADIA_GAMING",
          "ProviderName": "ARCADIA GAMING E CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ARCADIA_GAMING.webp"
        },
        {
          "ProviderCode": "AFBGAMING_FISHING",
          "ProviderName": "AFB GAMING FISHING",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING_FISHING.webp",
        },
        {
          "ProviderCode": "CQ9_FISHING",
          "ProviderName": "CQ9 FISHING",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9_FISHING.webp"
        },
        {
          "ProviderCode": "JDB_FISHING",
          "ProviderName": "JDB FISHING",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_FISHING.webp"
        },
        {
          "ProviderCode": "KA_FISHING",
          "ProviderName": "KA FISHING",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_FISHING.webp"
        },
        {
          "ProviderCode": "JOKER_FISHING",
          "ProviderName": "JOKER FISHING",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JOKER_FISHING.webp"
        },
        {
          "ProviderCode": "SV388",
          "ProviderName": "SV388 COCK FIGHT",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SV388.webp"
        },
        {
          "ProviderCode": "CF361",
          "ProviderName": "CF361 COCK FIGHT",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CF361.webp"
        },
        {
          "ProviderCode": "AFBCASINO",
          "ProviderName": "AFB CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBCASINO.webp"
        },
        {
          "ProviderCode": "DIAMONDCLUB",
          "ProviderName": "GD88 CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/DIAMONDCLUB.webp"
        },
        {
          "ProviderCode": "LG88",
          "ProviderName": "LG88 CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/LG88.webp"
        },
        {
          "ProviderCode": "WM",
          "ProviderName": "WM CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/WM.webp"
        },
        {
          "ProviderCode": "AESEXY",
          "ProviderName": "AESEXY CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AESEXY.webp"
        },
        {
          "ProviderCode": "CQ9_LIVE_CASINO",
          "ProviderName": "YAXING LIVE CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9_LIVE_CASINO.webp"
        },
        {
          "ProviderCode": "DREAMGAME",
          "ProviderName": "DREAMGAMING CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/DREAMGAME.webp"
        },
        {
          "ProviderCode": "SA",
          "ProviderName": "SA GAMING CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SA.webp"
        },
        {
          "ProviderCode": "PPLAY_CASINO",
          "ProviderName": "PRAGMATICPLAY CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY_CASINO.webp"
        },
        {
          "ProviderCode": "EVOLUTION_CASINO",
          "ProviderName": "EVOLUTION CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/EVOLUTION_CASINO.webp"
        },
        {
          "ProviderCode": "EBET",
          "ProviderName": "EBET CASINO",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/EBET.webp"
        },
        {
          "ProviderCode": "CONNECT93",
          "ProviderName": "93 CONNECT LOTTERY",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CONNECT93.webp"
        },
        {
          "ProviderCode": "LIGATOGEL",
          "ProviderName": "LIGA TOGEL",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/LIGATOGEL.webp"
        },
        {
          "ProviderCode": "CQ9_LOTTERY",
          "ProviderName": "CQ9 LOTTERY",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9_LOTTERY.webp"
        },
        {
          "ProviderCode": "WE1POKER",
          "ProviderName": "WE1 POKER",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/WE1POKER.webp"
        },
        {
          "ProviderCode": "POKERV",
          "ProviderName": "POKER V",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/POKERV.webp"
        },
        {
          "ProviderCode": "EVO_RACING",
          "ProviderName": "EVO RACING",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/EVO_RACING.webp"
        },
        {
          "ProviderCode": "AFBGAMING",
          "ProviderName": "AFB GAMING SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFBGAMING.webp",
          "ProviderLink": "/AFBGAMING"
        },
        {
          "ProviderCode": "PS",
          "ProviderName": "PLAYSTAR SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PS.webp",
          "ProviderLink": "/PS"
        },
        {
          "ProviderCode": "AUX_SLOT",
          "ProviderName": "AUX SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AUX_SLOT.webp",
          "ProviderLink": "/AUX_SLOT"
        },
        {
          "ProviderCode": "TTG",
          "ProviderName": "TTG SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/TTG.webp"
        },
        {
          "ProviderCode": "CQ9",
          "ProviderName": "CQ9 SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CQ9.webp",
          "ProviderLink": "/CQ9"
        },
        {
          "ProviderCode": "PPLAY",
          "ProviderName": "PRAGMATICPLAY SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PPLAY.webp",
          "ProviderLink": "/PPLAY"
        },
        {
          "ProviderCode": "PGSOFT",
          "ProviderName": "PGSOFT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PGSOFT.webp",
          "ProviderLink": "/PGSOFT"
        },
        {
          "ProviderCode": "JOKER",
          "ProviderName": "JOKER SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JOKER.webp",
          "ProviderLink": "/JOKER",
        },
        {
          "ProviderCode": "HABANERO",
          "ProviderName": "HABANERO SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/HABANERO.webp",
          "ProviderLink": "/HABANERO",
        },
        {
          "ProviderCode": "NETENT",
          "ProviderName": "NETENT SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NETENT.webp",
          "ProviderLink": "/NETENT",
        },
        {
          "ProviderCode": "SPINOMENAL_SLOT",
          "ProviderName": "SPINOMENAL SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SPINOMENAL_SLOT.webp",
          "ProviderLink": "/SPINOMENAL_SLOT",
        },
        {
          "ProviderCode": "REDTIGER",
          "ProviderName": "REDTIGER SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/REDTIGER.webp",
          "ProviderLink": "/REDTIGER",
        },
        {
          "ProviderCode": "CG",
          "ProviderName": "CG SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/CG.webp",
          "ProviderLink": "/CG",
        },
        {
          "ProviderCode": "SIMPLEPLAY_SLOT",
          "ProviderName": "SIMPLEPLAY SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SIMPLEPLAY_SLOT.webp",
          "ProviderLink": "/SIMPLEPLAY_SLOT",
        },
        {
          "ProviderCode": "JDB_SLOT",
          "ProviderName": "JDB SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/JDB_SLOT.webp",
          "ProviderLink": "/JDB_SLOT",
        },
        {
          "ProviderCode": "KA_SLOT",
          "ProviderName": "KA SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/KA_SLOT.webp",
          "ProviderLink": "/KA_SLOT",
        },
        {
          "ProviderCode": "YGGDRASIL",
          "ProviderName": "YGGDRASIL SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/YGGDRASIL.webp",
          "ProviderLink": "/YGGDRASIL",
        },
        {
          "ProviderCode": "PNG_SLOT",
          "ProviderName": "PNG SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/PNG_SLOT.webp",
          "ProviderLink": "/PNG_SLOT",
        },
        {
          "ProviderCode": "RELAX_SLOT",
          "ProviderName": "RELAX SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/RELAX_SLOT.webp",
          "ProviderLink": "/RELAX_SLOT",
        },
        {
          "ProviderCode": "AIS_SLOTS",
          "ProviderName": "AIS SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AIS_SLOTS.webp",
          "ProviderLink": "/AIS_SLOTS",
        },
        {
          "ProviderCode": "ATA_EVOPLAY_SLOT",
          "ProviderName": "EVOPLAY SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/ATA_EVOPLAY_SLOT.webp",
          "ProviderLink": "/ATA_EVOPLAY_SLOT",
        },
        {
          "ProviderCode": "BOOMING_GAMES",
          "ProviderName": "BOOMING GAMES SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BOOMING_GAMES.webp",
          "ProviderLink": "/BOOMING_GAMES",
        },
        {
          "ProviderCode": "BTG_SLOT",
          "ProviderName": "BTG SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/BTG_SLOT.webp",
          "ProviderLink": "/BTG_SLOT",
        },
        {
          "ProviderCode": "MEGA888",
          "ProviderName": "MEGA888",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/MEGA888.webp",
          "ProviderLink": "/MEGA888",
        },
        {
          "ProviderCode": "NEXTSPIN_SLOT",
          "ProviderName": "NEXTSPIN SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/NEXTSPIN_SLOT.webp",
          "ProviderLink": "/NEXTSPIN_SLOT",
        },
        {
          "ProviderCode": "MEGAGAMING_SLOT",
          "ProviderName": "MEGA888 V2 SLOTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/MEGAGAMING_SLOT.webp",
          "ProviderLink": "/MEGAGAMING_SLOT",
        },
        {
          "ProviderCode": "AFB1188",
          "ProviderName": "AFB SPORTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/AFB1188.webp"
        },
        {
          "ProviderCode": "SBO_SPORTSBOOK",
          "ProviderName": "SBO SPORTS",
          "ProviderLogo": "https://dd8p0622bwh41.cloudfront.net/Content/media/provider/provider_icon_black/SBO_SPORTSBOOK.webp"
        },
      ]
    },
  ]
};

const AllDataPage = () => {
  return (
      <Container>
          <ProviderList providerData={Data.ProviderData} />
      </Container>
  );
}

export default AllDataPage;