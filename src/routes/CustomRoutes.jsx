import ImageGallery from "../Components/ImageGallery/ImageGallery";
import ImageDetails from "../Components/ImageDetails/ImageDetails";
import {Routes, Route} from "react-router-dom";

function CustomRoutes() {
    return(
        <Routes>
            <Route path="/" element={<ImageGallery/>}/>
            <Route path="/photos/:id" element={<ImageDetails/>}/>
        </Routes>
    )
}

export default CustomRoutes;