
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { BackGround, SecondBackGround } from "../assets";
import { GridLayout } from '../theme';
import { Grid } from '@mui/material';

export type layoutProps = {
    children: React.ReactNode;
}
export const AnimationLayout: React.FC<layoutProps> = ({children}) => {

    return (
        <GridLayout container >
            <Grid item >
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
                    <ParallaxLayer offset={1} speed={0.05} style={{
                        backgroundImage: `url(${SecondBackGround})`,
                        backgroundSize: 'cover',
                        filter: "blur(5px)",
                        opacity: 0.8,
                        height: '100vh',
                        width: '100vw',
                    }}>
                    </ParallaxLayer>
                    <Grid item  style={{ position: 'relative', zIndex: 2 }}>
                        {children}
                    </Grid>
                </Parallax>
            </Grid>
        </GridLayout> 
    );
}
/*


*/