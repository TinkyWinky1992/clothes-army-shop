import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { ButtonResponsive } from '../theme';
import { GridLayout, ImgResponsive } from '../theme';
import { Typography } from '@mui/material';
import { getItem, ItemInterface } from '../service';

export const ImageGallery: React.FC = () => {
  const navigate = useNavigate();
  const [imageslist, setImages] = useState<ItemInterface[]>([]);

  useEffect(() => {
    const fetchItemData = async () => {
      const items = await getItem();
      setImages(items);
    };
    fetchItemData();
  }, []);

  const onClick = (image: ItemInterface) => {
    navigate('/item', { state: { image } });
  };


  return (
    <GridLayout sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <ImageList sx={{ 
          width: { xl:700, xs: 300 }, 
          height: { xl:700, xs: 500 },
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
           scrollbarWidth: "none"
          }} variant="woven"  cols={3} gap={20}>
        {imageslist.map((image: ItemInterface) => (
          <ButtonResponsive variant="contained" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: { xs: 0, sm: 1 }, margin: 2 }} onClick={() => onClick(image)}>
            <ImageListItem key={image.id} sx={{ width: "150px", height: "150px" }}>
              <ImgResponsive  sx={{marginTop: {xs:5, sm:0}}}src={image.image} alt={image.name} loading="lazy" 
                style={{
                  maxWidth: "50%",
                  maxHeight: "50%",
                  borderRadius: "10px",
                }} 
              />
              <ImageListItemBar
                title={
                  <Typography sx={{fontSize:{xs:10, sm:20}} }noWrap variant="body2" color="inherit">
                    {image.name}
                  </Typography>
                }
                subtitle={
                  <Typography sx={{fontSize:{xs:10, sm:20}}} noWrap variant="body2" color="inherit">
                    {image.price}
                  </Typography>
                }
                position="below"
              />
            </ImageListItem>
          </ButtonResponsive>
        ))}
      </ImageList>
    </GridLayout>
  );
};