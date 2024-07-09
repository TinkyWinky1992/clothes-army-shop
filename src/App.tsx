/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { MainLayout} from './components';
import { Outlet} from "react-router-dom";
import './App.css';




const App: React.FC = () => {
  return (
    <MainLayout/>
  );
}

export default App;
