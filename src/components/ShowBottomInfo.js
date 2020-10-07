import React from 'react';
import './ShowBottomInfo.css'


const ShowBottomInfo = ({imageObject}) => {

    const {copyright, date} = imageObject; 


    return (
        <div className="bottom-info">
            <div className="copyright">
                <h2>Copyright: {copyright}</h2>
                <h4>{date}</h4>
            </div>
            <nav className="navigation">
                <a href="https://www.nasa.gov/">NASA Site</a>
                <a href="https://api.nasa.gov/">NASA APIs</a>
                <a href="https://ssd-api.jpl.nasa.gov/doc/index.php">NASA API Documentaion</a>
                <a href="https://nasa.github.io/data-nasa-gov-frontpage/">NASA DATA</a>
            </nav>
        </div>
    )
}





export default ShowBottomInfo; 