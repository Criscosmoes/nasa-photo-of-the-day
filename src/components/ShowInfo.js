import React from 'react'; 
import ShowPicture from './ShowPicture';
import Title from './Title';
import './ShowInfo.css'; 


const ShowInfo = ({ imageObject }) => {

    const {title, explanation, url} = imageObject; 


    return (
        <div className="show-info">
            <Title title={title} explanation={explanation} /> 
            <ShowPicture imageURL={url} title={title} /> 
        </div>
    )
}




export default ShowInfo; 