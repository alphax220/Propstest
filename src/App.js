import React from 'react';
import './App.css';
import './style.css';
import imag from './images/doom3.jpg'
import video from './samurai.mp4'

const Style = {
  border: "1px solid black",
  textAlign:"center",
  dispplay:"flex",
  flexWrap:"wrap"

}


function App() {
  
  return (
  <>
  <div style={Style}>
    <h1 >Doom-Slayer</h1>
    <br/>
    <img  className='title red' src='../doom1.jpg' alt='doom1.jpg'/>
    <br/>
    <img className='title red' src={imag} alt='doom4.jpg'/>
    <br/>
    <video className='title red' width="320" height="240" controls>
    <source src={video} type="video/mp4" />
    </video>
  
  </div>
  </>
  )
}



export default App;
