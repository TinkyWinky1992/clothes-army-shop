import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Tab, Tabs } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import { NavBar } from "./NavigationBar";
const pages = ["one", "two", "three"];



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
            <Toolbar >
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
                

                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
                <Box >
                    
                </Box>
                <Box sx={{ mr: 2, height: 50}}>
                    <Typography variant="h6" sx={{ color: "white", fontFamily: "monospace", fontWeight: 700 }}>ARMOURY TECH</Typography>
                </Box>
                <IconButton sx={{ p: 0 , width: '10px', height: '10px' }}>
                    <Box  component="img" src="/src/components/LogoCompany.png" sx={{ width: '150px', height: '150px' }} />
                </IconButton>

            </Toolbar>
        </AppBar>
    );
};
