import React from 'react';
import { useLocation } from 'react-router-dom';
import { GridLayout, ImgResponsive } from '../theme';


export const ItemShowCase: React.FC = () => {
    const { state } = useLocation();
    console.log(state.image.name);

    return (
        <GridLayout container sx={{backgroundColor:'rgba(32, 32, 32, 0.7)'}}>
            <h1>{state.image.name}</h1>
            <h2>{state.image.name}</h2>
        </GridLayout>
    );
};
/*
        
      <ImgResponsive src={image} alt={details.name} />
      <h2>{details.name}</h2>
      <p>{details.description}</p>
      */