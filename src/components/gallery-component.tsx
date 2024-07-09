import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { imageList } from "../assets"; // Make sure your import path is correct
import { GridLayout } from '../theme';

export const ImageGallery: React.FC = () => {
  return (
    <GridLayout sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <ImageList variant="masonry" cols={5} gap={8}>
        {Object.values(imageList).map((image, index) => (
          <ImageListItem key={index}>
            <img src={image} alt={`Image ${index}`} loading="lazy" 
             style={{
                      maxWidth: "30%",
                      maxHeight: "50%",
                        }} />
          </ImageListItem>
        ))}
      </ImageList>
    </GridLayout>
  );
};
