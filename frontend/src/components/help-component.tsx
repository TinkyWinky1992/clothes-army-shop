import React, { useEffect, useState } from 'react';
import { GridLayout } from '../theme';
import { BackGround } from "../assets";
import { Grow, Typography, Grid } from '@mui/material';

export const Contnant: React.FC = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <GridLayout container sx={{  
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh', 
    }}>
        <Grid item sx={{
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundImage: `url(${BackGround})`, 
            backgroundSize: 'cover', 
            filter: "blur(5px)", 
            zIndex: -1, 
        }} />
            <Grid item sx={{
                position: 'relative', 
                zIndex: 1, 
            }}>
                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 1000 } : {})}
                    >
                        <Typography sx={{
                            color: "white",
                            fontFamily: "hebrewFont",
                            fontSize: { xs: "20px", sm: "50px" },
                            ml: 5,
                            mr: 5,
                        }}>
                            :ליצירת קשר
                        </Typography>
                    </Grow>
                </Grid>
        </GridLayout>
  );
};

/*

                <Typography sx={{
                color: "white",
                fontFamily: "hebrewFont",
                fontSize: { xs: "20px", sm: "50px" },
                ml: 5,
                mr: 5,
                }}
                >
                    :ליצירת קשר
                </Typography>

      <Grow
        in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <Typography sx={{
          color: "white",
          fontFamily: "hebrewFont",
          fontSize: { xs: "20px", sm: "50px" },
          ml: 5,
          mr: 5,
        }}
        >
          :ליצירת קשר
        </Typography>
      </Grow>
*/