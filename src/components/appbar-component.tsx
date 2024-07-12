import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Tabs, IconButton, TextField, Autocomplete, Button } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import { NavBar } from "./navigationbar-component";
import { logoImg } from "../assets";
import { TabStyle, LogoImg, IconStyle, Title, Search } from "../theme";
import { ItemList, ItemListInterface } from "../assets";



const labeltest = ItemList.map(item => ({ label: item.name, obj: item  }));

export const MainAppBar: React.FunctionComponent = () => {
    const pages = ["גלריה", "חנות", "שלוש"];
    const [selectedPage, setSelectedPage] = useState(0);
    const [open, setOpen] = useState(false);
    const navigation = useNavigate();

    const onClickToItem = (image: ItemListInterface) => {
        navigation('/item', { state: {  image } });
      };

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        if (newValue === 0 || newValue === 1 || newValue === 2) {
            navigation('/')
        }
        setSelectedPage(newValue);
    }

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgba(32, 32, 32, 0.7)' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton sx={{ position: "absolute", left: 30 }} edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                    <IconStyle />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={open}
                    onClose={toggleDrawer(false)}
                >
                    <NavBar />
                </Drawer>
                <Box sx={{ marginRight: { sm: "50px", xs: "80px" } }}>
                    <Search>
                        <Autocomplete
                            options={labeltest}
                            sx={{ width: {xs:"150px", sm:"300px"}, 
                                '& .MuiAutocomplete-input':{
                                    height: {xs:"0.4rem", sm:"1rem"}

                                } 
                            }}
                            getOptionLabel={(option) =>
                                option.label
                              }
                              onChange={(event, value) => {
                                if(value)
                                    onClickToItem(value.obj);
                              }}
                            renderInput={(params: any) => (
                                <TextField
                                    {...params}
                                    label="חפש מוצר"
                                    InputLabelProps={{ sx: { color: 'white', fontFamily: 'hebrewFont', fontSize:{xs:"10px", sm:"15px"} } }}
                                    inputProps={{ ...params.inputProps, style: { color: 'white', fontFamily: 'Arial' } }}
                                    
                                />
                            )}
                        />
                    </Search>
                </Box>

                <Box>
                    <Tabs sx={{ display: { xs: "none", md: "flex" } }} value={selectedPage} onChange={handleChange}>
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