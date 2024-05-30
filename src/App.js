import logo from './logo.svg';
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './admin/homePage';
import LoginAdmin from './admin/loginAdmin';
import Register from './admin/register';
import ViewAllUser from './admin/viewAllUser';

function App() {
  return (
    <BrowserRouter>

      <Routes  >

        <Route path="/" element={<LoginAdmin />} />
        <Route path="/HomePage-3000" element={<HomePage />} />
        <Route path="/register-3000" element={<Register />} />
        <Route path="/viewAllUser-3000" element={<ViewAllUser />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
