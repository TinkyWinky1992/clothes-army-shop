import React from 'react';
import { useNavigate } from 'react-router-dom';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { ButtonResponsive } from '../theme';
import { ItemList, ItemListInterface } from '../assets';
import { GridLayout, ImgResponsive } from '../theme';
import { Button, Grid } from '@mui/material';


export const ImageGallery: React.FC = () => {
  const navigate = useNavigate();

  const onClick = (image: ItemListInterface) => {
    navigate('/item', { state: {  image } });
  };

  return (
    <GridLayout sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <ImageList variant="masonry" cols={5} gap={8} >
        {ItemList.map((image, index) => (
          <ButtonResponsive variant="contained" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} onClick={() => onClick(image)}>

            <ImageListItem key={index} sx={{ width: "200px", height: "200px" }}>
              <ImgResponsive src={image.url} alt={image.name} loading="lazy"  
                style={{
                  maxWidth: "50%",
                  maxHeight: "50%",
                  borderRadius: "10px",
                }} />
              <ImageListItemBar
                title={image.name}
                subtitle={image.details}
                position="below"
              />
            </ImageListItem>
          </ButtonResponsive>
        ))}
      </ImageList>
    </GridLayout>
  );
};