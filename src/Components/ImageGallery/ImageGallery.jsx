import { useEffect, useState } from "react";
import axios from 'axios'
import Gallery from "../Gallery/Gallery";
import './ImageGallery.css'

function ImageGallery() {

    const [imageList, setImageList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function downloadImages() {
        const  response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20');
        console.log(response);

        const results = response.data.photos;
        console.log(results);

        const res = results.map((picData) => {
            
            return{
                id: picData.id,
                url: picData.url,
                desc :picData.description,
                title: picData.title,
            }
        });

        console.log(res);
        setImageList(res);
        setIsLoading(false);
    }

    useEffect(() => {
        downloadImages();
    },[])

    return(
        <div className="imageGallery-wrapper">
            <div className="gallery-wrapper">
                {(isLoading)? 'Loading ...' : 
                    imageList.map((i) => <Gallery image={i.url} key={i.id} id={i.id}/>)
                }
            </div>
        </div>
    )

}

export default ImageGallery;