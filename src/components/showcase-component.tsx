import React, { useState } from "react";
import { Grid, IconButton, Box } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { GridLayout } from "../theme";
import { imageList } from "../assets";

export const ShowCase: React.FunctionComponent = () => {
    const [current_index, setIndex] = useState(0);
    const [transition, setTransition] = useState("");

    const moveToNextImg = () => {
        const nextIndex = (current_index + 1) % imageList.length;
        setIndex(nextIndex);
        setTransition("fadeinLeft"); 
        setTimeout(() => {
            setTransition("");
        }, 500);
    }

    const moveToBelowImg = () => {
        const nextIndex = current_index === 0 ? imageList.length - 1 : current_index - 1;
        setIndex(nextIndex);
        setTransition("fadeinRight"); 
        setTimeout(() => {
            setTransition("");
        }, 500);
    }

    return (
        <Grid container spacing={2} direction="column">
            <GridLayout sx={{ background: "white", display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
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
                            transform: transition === "fadeinRight" ? "translateX(300px)" : transition === "fadeinLeft" ? "translateX(-300px)" : "none",
                            opacity: transition ? 0 : 1,
                            transition: "transform 0.5s ease"
                        }}
                    />
                </Box>
                <IconButton onClick={moveToNextImg}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </GridLayout>
            <Grid item md={4} xl={4} height="100px" sx={{ background: "green" }}>Item 2</Grid>
        </Grid>
    );
};
