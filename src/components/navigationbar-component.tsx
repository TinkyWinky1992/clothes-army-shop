
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
import { Grid, Hidden } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../fonts/font.css" 
const hiddenDrwaerItems = [
    { text: 'גלריה', icon: <ShoppingCartIcon /> },
    { text: 'חנות', icon: <HistoryIcon /> },
    { text: 'Three', icon: <MailIcon /> },
]
const drawerItems = [
    { text: 'עגלת קניות', icon: <ShoppingCartIcon /> },
    { text: 'יצירת קשר', icon: <MailIcon /> },
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
                    <Typography variant="h6" sx={{ color: "white", fontFamily: "hebrewFont", fontWeight: 700 }}>תפריט</Typography>
                </List>  
                <Divider />
                <Hidden mdUp>
                <List>
                    {hiddenDrwaerItems.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{fontFamily: "hebrewFont"}} >
                            <ListItemButton>
                                <ListItemIcon sx={{color: 'white'}}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ color: 'white', fontFamily: 'hebrewFont, Arial, sans-serif' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                    
                </Hidden>
                <List>
                    {drawerItems.map((item) => (
                        <ListItem key={item.text} disablePadding >
                            <ListItemButton>
                                <ListItemIcon sx={{color: 'white'}}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText  primary={item.text} sx={{ color: 'white', fontFamily: 'hebrewFont' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />

            </Box>
        </Grid>
    );
}