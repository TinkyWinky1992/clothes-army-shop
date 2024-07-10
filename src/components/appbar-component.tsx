
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Tabs } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import { NavBar } from "./navigationbar-component";
import { logoImg } from "../assets";
import { TabStyle, LogoImg, IconStyle, Title } from "../theme";
import "../fonts/font.css" 

export const MainAppBar: React.FunctionComponent = () => {
    const pages = ["גלריה", "חנות", "שלוש"];
    const [selectedPage, setSelectedPage] = useState(0);
    const [open, setOpen] = useState(false);
    const navigation = useNavigate();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        if(newValue == 0 || 1 || 2) {
            navigation('/')
        }
        setSelectedPage(newValue);
    }
    const toggleDrawer = (newOpen: boolean) => () => {
        console.log("hi");
        setOpen(newOpen);
    };

    

    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgba(32, 32, 32, 0.7)', }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton sx={{ position:"absolute",left: 30}} edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                    <IconStyle />
                </IconButton>
                <Drawer 
                    anchor = "left" 
                    open={open} 
                    onClose={toggleDrawer(false)}
                >
                    <NavBar/> 
                </Drawer>
                
                <Box>
                    <Tabs  sx={{display:{xs: "none", md: "flex"}}} value={selectedPage} onChange={handleChange}>
                        {pages.map((page, index) => (
                            <TabStyle 
                                key={index}
                                label={page}
                            />
                        ))}
                    </Tabs>
                </Box>
                <Box sx={{ position: "absolute", right: 0, marginRight: 1, display: "flex", alignItems: "center" }}>
                    <IconButton>
                        <Title>ARMOURY TECH</Title>
                        <LogoImg src={logoImg} />
                    </IconButton>

                </Box>
          </Toolbar>
        </AppBar>
    );
};



























