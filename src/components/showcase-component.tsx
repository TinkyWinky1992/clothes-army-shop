import React, { useState } from "react";
import { Grid, IconButton, Box } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { GridLayout } from "../theme";
import { imageList } from "../assets";

export const ShowCase: React.FunctionComponent = () => {
    const [current_index, setIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    
    const moveToNextImg = () => {
        setFadeOut(true);
        setTimeout(() => {
            const nextIndex = (current_index + 1) % imageList.length;
            setIndex(nextIndex);
            setFadeOut(false)
        }, 500);
 

    }

    const moveToBelowImg = () => {
        setFadeOut(true);
        const nextIndex = current_index === 0 ? imageList.length - 1 : current_index - 1;
        setTimeout(() => {
            setIndex(nextIndex);
            setFadeOut(false);
        }, 500);


    }

    return (
        <Grid container spacing={2} direction="column">
            <GridLayout sx={{ backgroundColor: 'rgba(32, 32, 32, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
                <IconButton onClick={moveToBelowImg}>
                    <ArrowBackIosNewIcon />
                </IconButton>
                <Box sx={{ maxWidth: "30%", maxHeight: "40%" }}>
                    <img
                        src={imageList[current_index]}
                        alt={`image ${current_index}`}
                        style={{
                            maxWidth: "50%",
                            maxHeight: "50%",
                            opacity: fadeOut ? 0 : 1,
                            transition: "opacity  0.5s ease"
                        }}
                    />
                </Box>
                <IconButton onClick={moveToNextImg}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </GridLayout>
        </Grid>
    );
};
