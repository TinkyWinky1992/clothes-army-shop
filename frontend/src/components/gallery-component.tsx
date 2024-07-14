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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20); // adjust the number of items per page

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

  const handleNextPage = () => {
    setCurrentPage((prevPage: number) => prevPage + 1);
  };
  
  const handlePreviousPage = () => {
    setCurrentPage((prevPage: number) => prevPage - 1);
  };
  

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageImages = imageslist.slice(startIndex, endIndex);

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
        {currentPageImages.map((image: ItemInterface) => (
          <ButtonResponsive variant="contained" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: { xs: 0, sm: 1 }, margin: 2 }} onClick={() => onClick(image)}>
            <ImageListItem key={image.id} sx={{ width: "200px", height: "200px" }}>
              <ImgResponsive src={image.image} alt={image.name} loading="lazy"  
                style={{
                  maxWidth: "50%",
                  maxHeight: "50%",
                  borderRadius: "10px",
                }} 
              />
              <ImageListItemBar
                title={
                  <Typography noWrap variant="body2" color="inherit">
                    {image.name}
                  </Typography>
                }
                subtitle={
                  <Typography noWrap variant="body2" color="inherit">
                    {image.price}
                  </Typography>
                }
                position="below"
              />
            </ImageListItem>
          </ButtonResponsive>
        ))}
      </ImageList>
      {currentPage > 1 && (
        <ButtonResponsive variant="contained" onClick={handlePreviousPage}>
          Previous Page
        </ButtonResponsive>
      )}
      {currentPage * itemsPerPage < imageslist.length && (
        <ButtonResponsive variant="contained" onClick={handleNextPage}>
          Next Page
        </ButtonResponsive>
      )}
    </GridLayout>
  );
};