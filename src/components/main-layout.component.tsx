import { Box, Grid } from "@mui/material";
import { MainAppBar } from "./appbar-component";
import { ImageGallery } from "./gallery-component";
import { ShowCase } from "./showcase-component";

export type MainLayoutProps = {
    children: React.ReactNode;
}
export const MainLayout: React.FC = () => {
    return (
        <Box height="100vh" sx={{ backgroundColor: 'rgba(32, 32, 32, 0.7)', minHeight: '100vh'}}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <MainAppBar />
                </Grid>
                <Grid item>
                    <ShowCase/>
                </Grid>
                <Grid item>
                    <ImageGallery />
                </Grid>
            </Grid>

        </Box>
    );
}