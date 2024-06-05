import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './admin/homePage';
import LoginAdmin from './admin/loginAdmin';
import Register from './admin/register';
import ViewAllUser from './admin/viewAllUser';
import Appbar from "./components/app-bar";
import MinePage from "./admin/minepang";

function App() {
  return (
    <BrowserRouter>
      <Appbar></Appbar>
      <Routes  >
        <Route path="/" element={<MinePage />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/viewAllUser" element={<ViewAllUser />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;