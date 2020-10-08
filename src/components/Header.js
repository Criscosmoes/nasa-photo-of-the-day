import React from 'react'; 
import './Header.css'


const Header = ({onInputChange}) => {



    return (
        <div className="header">
            <form>
                <h3>Search For Date</h3>
                <input onChange={onInputChange} type="text" placeholder="Example: 2014-08-22" /> 
            </form>
            <h1 className="title">NASA Photo of the Day</h1>
      </div>
    )
}


export default Header; 