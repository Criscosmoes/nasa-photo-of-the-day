import React from 'react'; 
import './ShowPicture.css'; 


const ShowPicture = ({imageURL, title}) => {


    return (
        <img className="image-box" alt={title} src={imageURL} /> 
    )
}



export default ShowPicture; 