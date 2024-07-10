import { Grid } from "@mui/material";
import { MainAppBar } from "./appbar-component";
import { ImageGallery } from "./gallery-component";
import { ShowCase } from "./showcase-component";
import { AnimationLayout } from "./animation-layout.component";
export const MainLayout: React.FC = () => {
  return (
    <AnimationLayout>
        <Grid item >
            <MainAppBar />
        </Grid>
        <Grid item>
            <ShowCase/>
        </Grid>
        <Grid item >
            <ImageGallery />
        </Grid>
    </AnimationLayout>
  );
};

