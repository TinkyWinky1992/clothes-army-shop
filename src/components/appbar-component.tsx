/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Tab, Tabs } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import { NavBar } from "./navigationbar-component";
import { logoImg } from "../assets";
const pages = ["Gallery", "two", "three"];



export const MainAppBar: React.FunctionComponent = () => {
    const [selectedPage, setSelectedPage] = useState(0);
    const [open, setOpen] = useState(false);

    const onClick = () => {

    };
    const toggleDrawer = (newOpen: boolean) => () => {
        console.log("hi");
        setOpen(newOpen);
    };


   
    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgba(32, 32, 32, 0.7)' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer 
                    anchor = "left" 
                    open={open} 
                    onClose={toggleDrawer(false)}
                >
                    <NavBar/> 
                </Drawer>
                

                <Box gap={0.5} sx={{ flexGrow: 1, display:"flex"  }}>
                    <Tabs value={selectedPage} onChange={onClick}>
                        {pages.map((page, index) => (
                            <Tab
                                onClick={async () => { onClick(); }}
                                key={index}
                                label={page}
                                sx={{
                                    my: 2,
                                    margin: 1,
                                    color: "white",
                                    display: "block",
                                    fontFamily: "monospace",
                                    fontSize: 16,
                                    fontWeight: 700,
                                    transition: "transform 0.2s",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                    },
                                }}
                            />
                        ))}
                    </Tabs>
                </Box>
                <Box  gap={0.5} sx={{ display: 'flex' }}>
                  <Box alignItems= "center" sx={{ mr: 2, height: 50, display:{xs: "none", md: "flex"} }}>
                    <Typography variant="h6" sx={{ color: "white", fontFamily: "monospace", fontWeight: 700 }}>ARMOURY TECH</Typography>
                  </Box>

                      <IconButton sx={{ p: 2 , width: '60px', height: '60px' ,}}>
                        <Box  component="img" src={logoImg} sx={{ width: '150px', height: '150px'}} />
                      </IconButton>
             
                  
                </Box>
          </Toolbar>
        </AppBar>
    );
};