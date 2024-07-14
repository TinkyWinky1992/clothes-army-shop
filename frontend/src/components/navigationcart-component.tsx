
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Avatar, Grid } from '@mui/material';
import "../fonts/font.css" 
import { useSelector } from 'react-redux';
import { selectCartItems } from "./Cart";


export const NavigationCart: React.FC = () => {
    const items = useSelector(selectCartItems); 
    
    return (
      <Grid container sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', minHeight: '100vh' }}>
        <Box sx={{ width: 250 }} role="presentation">
          <List sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ color: "white", fontFamily: "hebrewFont", fontWeight: 700 }}>עגלה</Typography>
          </List>
          <Divider />
            {items.map((item, index) => (
              <Box key={index} display="flex" sx={{ pt: 2, pd: 2 }} alignItems="start" justifyContent="space-between">
                <Avatar src={item.image} sx={{ width: 96, height: 96 }} />
                <Box display="flex" flexDirection="column">
                  <Typography variant="h6" fontFamily="hebrewFont" color="white" sx={{ direction: "rtl" }}>
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle2" fontFamily="hebrewFont" color="white" sx={{ direction: "rtl" }}>
                    {item.details}
                  </Typography>
                </Box>
              </Box>
            ))}
          <Divider variant="inset" sx={{ border: 1 }} />
        </Box>
      </Grid>
    );
  }