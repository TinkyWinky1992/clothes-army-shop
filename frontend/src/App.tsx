import React from 'react';
import { MainLayout, ItemShowCase, MainAppBar } from './components';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './components/Cart';
import './App.css';

function Layout() {
  return (
    <div>
      <MainAppBar  />
      <Outlet />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <Provider store={store}> {/* Wrap the BrowserRouter with Provider */}
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
    </Provider>
  );
};

export default App;