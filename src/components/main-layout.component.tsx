import { Box } from "@mui/material";
import { MainAppBar } from "./appbar-component";
import { ImageGallery } from "./gallery-component";

export type MainLayoutProps = {
    children: React.ReactNode;
}
export const MainLayout: React.FC = () => {
    return (
        <Box height="100vh" sx={{ backgroundColor: 'rgba(32, 32, 32, 0.7)', minHeight: '100vh'}}>
            <MainAppBar />
            <ImageGallery/>
        </Box>
    );
}