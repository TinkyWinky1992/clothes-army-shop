import React, { useState } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const drawerItems = [
    { text: 'Shopping Cart', icon: <ShoppingCartIcon /> },
    { text: 'Payment Histroy', icon: <StarIcon /> },
    { text: 'Content us', icon: <MailIcon /> },
    { text: 'Log out', icon: <InboxIcon /> },
    { text: 'All mail', icon: <MailIcon /> },
    { text: 'Trash', icon: <InboxIcon /> },
    { text: 'Spam', icon: <MailIcon /> }
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
                    {['Shopping Cart', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding >
                            <ListItemButton>
                                <ListItemIcon sx={{color: 'white'}}>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{color: 'white'}} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />

            </Box>
        </Grid>
    );
}