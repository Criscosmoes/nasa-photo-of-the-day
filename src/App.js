import React, {useState, useEffect} from "react";
import axios from 'axios'; 
import "./App.css"; 
import ShowBottomInfo from './components/ShowBottomInfo';
import ShowInfo from './components/ShowInfo';


function App() {


  const [imageObject, setimageObject] = useState({}); 


  const KEY = 'EAkMeJYeNQzx2vrqPszFenRWMrKTYINUaUF1pL7E'; 


  useEffect(() => {

    axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key: KEY,
        date: '2014-11-17'
      }
    })
    .then(response => {
      console.log(response)
      setimageObject(response.data); 

    })
    .catch(error => {
      console.log(error); 
    })




  }, [])



  return (
    <div className="app">
      <h1>NASA Photo of the Day</h1>
      <ShowInfo imageObject={imageObject} /> 
      <div className="placeholder"></div>
      <ShowBottomInfo imageObject={imageObject} /> 
    </div>
  );
}

export default App;
