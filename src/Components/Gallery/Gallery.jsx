import './Gallery.css'
import { Link } from 'react-router-dom';

function Gallery({ image, id }) {
    return (
        <div className='gallery'>
            <div>
                <Link to={`/photos/${id}`}>
                <img className='gallery-image' src={image} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Gallery;