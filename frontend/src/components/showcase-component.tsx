import React, { useState, useEffect } from "react";
import { Grid, IconButton, Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { GridLayout } from "../theme";
import { getItem, ItemInterface } from "../service";
import Grow from '@mui/material/Grow';

export const ShowCase: React.FunctionComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [imagesList, setImages] = useState<ItemInterface[]>([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
    const fetchItemData = async () => {
      const items = await getItem();
      setImages(items);
    };
    fetchItemData();
  }, []);

  const moveToNextImg = () => {
    setFadeOut(true);
    setChecked(false); // Reset checked state to false
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % imagesList.length;
      setCurrentIndex(nextIndex);
      setFadeOut(false);
      setChecked(true); // Set checked state to true again
    }, 500);
  };

  const moveToBelowImg = () => {
    setFadeOut(true);
    setChecked(false); // Reset checked state to false
    const nextIndex = currentIndex === 0 ? imagesList.length - 1 : currentIndex - 1;
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setFadeOut(false);
      setChecked(true); // Set checked state to true again
    }, 500);
  };

  if (imagesList.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <Grid container spacing={2} sx={{  justifyContent: 'center', alignItems: 'center',   minHeight: '100vh', }}>
      <GridLayout container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
        <Box sx={{
          maxWidth: { xl: "100%", md: "100%", xs: "100%" },
          maxHeight: "100%",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mr: "20%",
          marginRight: { xs: "5px" },
          marginLeft: { xs: "5px" },
        }}>
          <IconButton onClick={moveToBelowImg}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Box sx={{ maxWidth: "50%", maxHeight: "50%", ml: 3, mr: 3 }}>
            <img
              src={imagesList[currentIndex].imagepng}
              alt={`image ${currentIndex}`}
              style={{
                maxWidth: "50%",
                maxHeight: "50%",
                opacity: fadeOut ? 0 : 1,
                transition: "opacity  0.5s ease",
              }}
            />
          </Box>
          <IconButton onClick={moveToNextImg}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: { xl: "25%", md: "40%", xs: "100%", sm: "100%" },
            height: { xl: "40%", md: "30%", xs: "20%", sm: "20%" },
            ml: { xl: 20, md: 20, xs: 0, sm: 0 },
          }}
        >
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
            onExit={() => setChecked(false)}
          >
            <Typography sx={{
              color: "white",
              fontFamily: "hebrewFont",
              fontSize: { xs: "20px", sm: "50px" },
              ml: 5,
              mr: 5,
            }}
            >
              {imagesList[currentIndex].name}
            </Typography>
          </Grow>
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
            onExit={() => setChecked(false)}
          >
            <Typography sx={{
              color: "white",
              fontFamily: "hebrewFont",
              fontSize: { xs: "15px", sm: "30px" },
              ml: 5,
              mr: 5,
            }}
            >
              {imagesList[currentIndex].details}
            </Typography>
          </Grow>
        </Box>
      </GridLayout>
    </Grid>
  );
};