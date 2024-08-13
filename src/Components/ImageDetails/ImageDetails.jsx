import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './ImageDetails.css'


function ImageDetails() {

    const { id } = useParams();
    const [images, setImages] = useState({});

    async function downloadDetailsImages() {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        setImages({
            url: response.data.photo.url,
            desc: response.data.photo.description,
            title: response.data.photo.title,
        })

    }
    useEffect(() => {
        downloadDetailsImages();
    }, [])

    return (
        <div className="image-details-wrapper">
            <div className="image-details"><img className="image" src={images.url} alt="" /></div>
            <div className="image-title">
               <span>{images.title}</span> 
                {images.desc}
            </div>
        </div>
    )
}

export default ImageDetails;