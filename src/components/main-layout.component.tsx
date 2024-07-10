import { Grid } from "@mui/material";
import { MainAppBar } from "./appbar-component";
import { ImageGallery } from "./gallery-component";
import { ShowCase } from "./showcase-component";
import { AnimationLayout } from "./animation-layout.component";

export const MainLayout: React.FC = () => {
  return (
    <div>
        <AnimationLayout />
    </div>
  );
};