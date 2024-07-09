/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Tab from '@mui/material/Tab';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Grid } from "@mui/material";

export const GridLayout = styled(Grid)(({ theme }) => ({
    width: '100%',
    height: '500px',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '100px',
    },
})) 

export const LogoImg = styled('img')(({ theme }) => ({
    width: '40px',
    height: '40px',
    [theme.breakpoints.down('sm')]: {
        width: '20px',
        height: '20px',
    },
})) 

export const Title = styled(Typography)(({ theme }) => ({
    fontFamily: 'monospace',
    fontWeight: 700,
    alignSelf: "center",
    color: "white",
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.25rem',
    },
}))

export const ToolStyle = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        minHeight: 35,
    },
    [theme.breakpoints.up('md')]: {
        minHeight: 54,
    },
})) 

export const TabStyle = styled(Tab)(({ theme }) => ({
    margin: 1,
    color: "white",
    display: "block",
    fontFamily: "hebrewFont",
    fontSize: 16,
    fontWeight: 700,
    transition: "transform 0.2s",
    "&:hover": {
        transform: "translateY(-4px)",
    },
})) 

export const IconStyle = styled(MenuIcon)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        minHeight: 10,
    },
    [theme.breakpoints.up('md')]: {
        minHeight: 54,
    },
})) 
