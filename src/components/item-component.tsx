import React from 'react';
import { useLocation } from 'react-router-dom';
import { GridLayout, TitleRsponsive } from '../theme';
import { Box, Typography, Button, Grid } from '@mui/material';
import "../fonts/font.css";

export const ItemShowCase: React.FC = () => {
    const { state } = useLocation();


    return (
        <GridLayout container sx={{ backgroundColor: 'rgba(32, 32, 32, 0.7)', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{
          maxWidth: { xl:"20%",md:'30%', xs:"80%" }, 
          maxHeight: { md:'15%'  }, 
          border: 1, 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
          borderRadius: 8, 
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', 
          mr:"20%",
          marginRight: {xs:"5px"},
          marginLeft: {xs:"5px"},
        }}>
          <img
            src={state.image.url}
            alt={`Image ${state.image.name}`}
            style={{
              width: '100%', 
              height: '60%',
              objectFit: 'contain',
              borderRadius: 8,
            }}
            loading="lazy"
          />
        </Box>
        <Box sx={{
            width: { xl: "25%", md: "40%", xs: "100%", sm: "100%" },
            height: { xl: "40%", md: "30%", xs: "20%", sm: "20%" },
            ml: { xl: 20, md: 20, xs: 0, sm: 0 }
          }}>
            <TitleRsponsive  sx={{fontFamily:"hebrewFont", direction: "rtl", color:"white"}} >{state.image.name}</TitleRsponsive>
            <Typography variant="h6" sx={{fontFamily:"hebrewFont", direction: "rtl", color:"white", fontSize:{xl:"20px", md:"15px",sm:"15px", xs:"10px"}}} >{state.image.details}</Typography>
            
            <Grid item sx={{ border: 1, borderRadius: 4}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h4" sx={{ ml:20 , color:"white"}}>
                    {state.image.price}
                    </Typography>
                    <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    mt: 2,
                    }}>
                    <Button variant="contained" sx={{ marginBlockEnd: 5, backgroundColor: "#007bff", color: "white", fontFamily: "hebrewFont" }}>
                        הוספה לעגלה
                    </Button>
                    <Button variant="contained" sx={{ marginBlockEnd: 5, backgroundColor: "#dc3545", color: "white", fontFamily: "hebrewFont" }}>
                        קנייה מהירה
                    </Button>
                    </Box>
                </Box>
            </Grid>

        </Box>

      </GridLayout>
    );
};