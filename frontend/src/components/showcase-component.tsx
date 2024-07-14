
import React, { useState, useEffect } from "react";
import { Grid, IconButton, Box } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { GridLayout } from "../theme";
import { getItem, ItemInterface } from "../service";

export const ShowCase: React.FunctionComponent = () => {
    const [current_index, setIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const [imageslist, setImages] = useState<ItemInterface[]>([]);
  
    useEffect(() => {
        const fetchItemData = async () => {
            const items = await getItem();
            setImages(items);
            
        }
        fetchItemData()
      }, []);


    const moveToNextImg = () => {
        setFadeOut(true);
        setTimeout(() => {
            const nextIndex = (current_index + 1) % imageslist.length;
            setIndex(nextIndex);
            setFadeOut(false)
        }, 500);
 

    }

    const moveToBelowImg = () => {
        setFadeOut(true);
        const nextIndex = current_index === 0 ? imageslist.length - 1 : current_index - 1;
        setTimeout(() => {
            setIndex(nextIndex);
            setFadeOut(false);
        }, 500);


    }
    return (
        <Grid container spacing={2} direction="column">
            <GridLayout sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
                <IconButton onClick={moveToBelowImg}>
                    <ArrowBackIosNewIcon />
                </IconButton>
                <Box sx={{ maxWidth: "30%", maxHeight: "40%"}}>
                    {imageslist.length > 0 && (
                        <img
                            src={imageslist[current_index].imagepng}
                            alt={`image ${current_index}`}
                            style={{
                                maxWidth: "50%",
                                maxHeight: "50%",
                                opacity: fadeOut ? 0 : 1,
                                transition: "opacity  0.5s ease"
                            }}
                        />
                    )}
                </Box>
                <IconButton onClick={moveToNextImg}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </GridLayout>
        </Grid>
    );
};
