import React from 'react';
import { MainLayout, ItemShowCase, MainAppBar } from './components';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

function Layout() {
  return (
    <div>
      <MainAppBar />
      <Outlet />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<MainLayout />} />
            <Route path="item" element={<ItemShowCase />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
