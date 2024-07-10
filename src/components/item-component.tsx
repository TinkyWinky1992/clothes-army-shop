import React from 'react';
import { useLocation } from 'react-router-dom';
import { GridLayout, ImgResponsive } from '../theme';
export const ItemShowCase: React.FC = () => {
  const location = useLocation();
 // const { image, details } = location.state;

  return (
    
    <GridLayout container sx={{backgroundColor: 'rgba(32, 32, 32, 0.7)'}}>
        <h1>hi</h1>
    </GridLayout>
  );
};
/*
        
      <ImgResponsive src={image} alt={details.name} />
      <h2>{details.name}</h2>
      <p>{details.description}</p>
      */