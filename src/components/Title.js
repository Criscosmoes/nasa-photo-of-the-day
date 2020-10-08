import React from 'react'; 
import './Title.css'


const Title = ( { title, explanation }) => {




    return (
        <div className="title-box">
            <h1 className="info">{title}</h1>
            <p className="info">{explanation}</p>
        </div>
    )
}



export default Title; 