import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import HomePage from './admin/homePage';
import LoginAdmin from './admin/loginAdmin';
import Register from './admin/register';
import ViewAllUser from './admin/viewAllUser';
import Appbar from "./components/app-bar";
import MinePage from "./admin/minepang";

import SlotsDataPage from "./DataPage/slotsDataPage";
import SportsBookDataPage from "./DataPage/sportsBookDataPage";
import LiveCasinoDataPage from "./DataPage/liveCasinoDataPage";
import PokerDataPage from "./DataPage/pokerDataPage";
import FishingDataPage from "./DataPage/fishingDataPage";
import LotteryDataPage from "./DataPage/lotteryDataPage";
import CasinoDataPage from "./DataPage/casinoDataPage";
import GameDataPage from "./DataPage/gameDataPage";
import RacingDataPage from "./DataPage/racingDataPage";

import AFBGAMING from "./game/Slots/AFBGAMING";
import PS from "./game/Slots/PS";
import PGSOFT from "./game/Slots/PGSOFT";
import AUX_SLOT from "./game/Slots/AUX_SLOT";
import TTG from "./game/Slots/TTG";
import CQ9 from "./game/Slots/CQ9";
import PPLAY from "./game/Slots/PPLAY";
import HABANERO from "./game/Slots/HABANERO";
import NETENT from "./game/Slots/NETENT";
import REDTIGER from "./game/Slots/REDTIGER";
import CG from "./game/Slots/CG";
import JDB_SLOT from "./game/Slots/JDB_SLOT";
import SIMPLEPLAY_SLOT from "./game/Slots/SIMPLEPLAY_SLOT";
import KA_SLOT from "./game/Slots/KA_SLOT";
import YGGDRASIL from "./game/Slots/YGGDRASIL";
import PNG_SLOT from "./game/Slots/PNG_SLOT";
import RELAX_SLOT from "./game/Slots/RELAX_SLOT";
import AIS_SLOTS from "./game/Slots/AIS_SLOTS";
import ATA_EVOPLAY_SLOT from "./game/Slots/ATA_EVOPLAY_SLOT";
import BOOMING_GAMES from "./game/Slots/BOOMING_GAMES";
import BTG_SLOT from "./game/Slots/BTG_SLOT";
import MEGA888 from "./game/Slots/MEGA888";
import NEXTSPIN_SLOT from "./game/Slots/NEXTSPIN_SLOT";
import MEGAGAMING_SLOT from "./game/Slots/MEGAGAMING_SLOT";
import SPINOMENAL_SLOT from "./game/Slots/SPINOMENAL_SLOT";

function App() {
  return (
    <BrowserRouter>
       <Container maxWidth="lg">
        <Appbar />
      </Container>
      <Routes>
        <Route path="/" element={<MinePage />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/viewAllUser" element={<ViewAllUser />} />

          //gamePage
        <Route path="/SlotsDataPage" element={<SlotsDataPage />} />
        <Route path="/SportsBookDataPage" element={<SportsBookDataPage />} />
        <Route path="/LiveCasinoDataPage" element={<LiveCasinoDataPage />} />
        <Route path="/PokerDataPage" element={<PokerDataPage />} />
        <Route path="/FishingDataPage" element={<FishingDataPage />} />
        <Route path="/LotteryDataPage" element={<LotteryDataPage />} />
        <Route path="/CasinoDataPage" element={<CasinoDataPage />} />
        <Route path="/GameDataPage" element={<GameDataPage />} />
        <Route path="/RacingDataPage" element={<RacingDataPage />} />

          //SLOTS
        <Route path="/AFBGAMING" element={<AFBGAMING />} />
        <Route path="/AIS_SLOTS" element={<AIS_SLOTS />} />
        <Route path="/ATA_EVOPLAY_SLOT" element={<ATA_EVOPLAY_SLOT />} />
        <Route path="/AUX_SLOT" element={<AUX_SLOT />} />
        <Route path="/BOOMING_GAMES" element={<BOOMING_GAMES />} />
        <Route path="/BTG_SLOT" element={<BTG_SLOT />} />
        <Route path="/CG" element={<CG />} />
        <Route path="/CQ9" element={<CQ9 />} />
        <Route path="/HABANERO" element={<HABANERO />} />
        <Route path="/JDB_SLOT" element={<JDB_SLOT />} />
        <Route path="/KA_SLOT" element={<KA_SLOT />} />
        <Route path="/MEGA888" element={<MEGA888 />} />
        <Route path="/MEGAGAMING_SLOT" element={<MEGAGAMING_SLOT />} />
        <Route path="/NETENT" element={<NETENT />} />
        <Route path="/NEXTSPIN_SLOT" element={<NEXTSPIN_SLOT />} />
        <Route path="/PGSOFT" element={<PGSOFT />} />
        <Route path="/PPLAY" element={<PPLAY />} />
        <Route path="/PNG_SLOT" element={<PNG_SLOT />} />
        <Route path="/PS" element={<PS />} />
        <Route path="/REDTIGER" element={<REDTIGER />} />
        <Route path="/RELAX_SLOT" element={<RELAX_SLOT />} />
        <Route path="/SIMPLEPLAY_SLOT" element={<SIMPLEPLAY_SLOT />} />
        <Route path="/SPINOMENAL_SLOT" element={<SPINOMENAL_SLOT />} />
        <Route path="/TTG" element={<TTG />} />
        <Route path="/YGGDRASIL" element={<YGGDRASIL />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
