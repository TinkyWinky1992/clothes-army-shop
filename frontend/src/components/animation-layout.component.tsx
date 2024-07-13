
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { BackGround, SecondBackGround } from "../assets";
import { GridLayout } from '../theme';
import { ImageGallery } from "./gallery-component";
import { ShowCase } from "./showcase-component";
import { Grid } from '@mui/material';

export const AnimationLayout: React.FC = () => {
    return (
        <div>
            <GridLayout container >
                    <Parallax pages={2} style={{ backgroundColor: "black", height: '100vh', width: '100vw', scrollbarWidth: "none" }}>
                        
                        <ParallaxLayer offset={0} speed={0.5} >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url(${BackGround})`,
                                backgroundSize: 'cover',
                                filter: "blur(5px)",
                                opacity: 0.8,
                            }} />
                            <Grid item style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 1, 
                            }}>
                                <ShowCase/>
                                
                            </Grid>
                            
  
                        </ParallaxLayer>
                        
                        <ParallaxLayer offset={1} speed={0.05}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url(${SecondBackGround})`,
                                backgroundSize: 'cover',
                                filter: "blur(5px)",
                                opacity: 0.8,
                            }} />
                            <Grid item style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 1, 
                            }}>
                                <ImageGallery />
                            </Grid>
                        </ParallaxLayer>
                    </Parallax>
                
            </GridLayout> 
        </div>
    );
}
/*

    const [image, setImage] = useState<string>('');

    useEffect(() => {
        getItem()
         .then(response => {
            const imageData = btoa(String.fromCharCode(...new Uint8Array(response)));
            setImage(`data:image/jpeg;base64,${imageData}`);
          })
         .catch(error => {
            console.error(error);
          });
      }, []);
*/