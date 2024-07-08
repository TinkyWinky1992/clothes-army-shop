import React from 'react';
import { Outlet} from "react-router-dom";
import {MainAppBar} from "./components/Appbar"
import './App.css';
import { Grid } from '@mui/material';



const App: React.FC = () => {
  return (
    <Grid container sx={{ backgroundColor: 'rgba(128, 128, 128, 0.7)', minHeight: '100vh' }}>
      <MainAppBar/>
    </Grid>
  );
}

export default App;
