import React, { useState } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const drawerItems = [
    { text: 'Shopping Cart', icon: <ShoppingCartIcon /> },
    { text: 'Payment Histroy', icon: <HistoryIcon /> },
    { text: 'Content us', icon: <MailIcon /> },
    { text: 'Log out', icon: <LogoutIcon /> },
  ];

export const NavBar:React.FC = () => {
    const [open, setOpen] = useState(false);
    
    const toggleDrawer = (newOpen: boolean) => () => {
        console.log("hi");
        setOpen(newOpen);
    };
    return (
        <Grid container sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', minHeight: '100vh' }}>
            <Box 
                sx={{ width: 250 }}
            
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                >
                <List sx={{padding: 2}}>
                    <Typography variant="h6" sx={{ color: "white", fontFamily: "monospace", fontWeight: 700 }}>Profile</Typography>
                </List>  
                <Divider />
                <List>
                    {drawerItems.map((item) => (
                        <ListItem key={item.text} disablePadding >
                            <ListItemButton>
                                <ListItemIcon sx={{color: 'white'}}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{color: 'white'}} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />

            </Box>
        </Grid>
    );
}