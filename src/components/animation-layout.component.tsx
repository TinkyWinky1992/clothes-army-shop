
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { BackGround, SecondBackGround } from "../assets";
import { GridLayout } from '../theme';
import { MainAppBar } from "./appbar-component";
import { ImageGallery } from "./gallery-component";
import { ShowCase } from "./showcase-component";
import { Grid } from '@mui/material';

export type layoutProps = {
    children: React.ReactNode;
}
export const AnimationLayout: React.FC = () => {

    return (
        <div>
            <GridLayout container >
                    <Parallax pages={4} style={{ backgroundColor: "black", height: '100vh', width: '100vw', scrollbarWidth: "none" }}>
                        <ParallaxLayer offset={0} speed={0.5} style={{
                            backgroundImage: `url(${BackGround})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: "blur(10px)",
                            opacity: 0.5,
                            height: '100vh',
                            width: '100vw',
                        }}>
  
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
                                zIndex: 1, // Ensure the gallery is on top of the background
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


*/