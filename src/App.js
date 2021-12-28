import React from 'react'
import './App.css'
import Photo from './Component/Profile/Picture'
import Name from './Component/Profile/FullName'
import Adress from './Component/Profile/Adress'
import './Component/Profile/style.css'


        
function App(props)
{
                return <div className='back'>
                    <div className='redcomp' >
                    <Photo photo={props.image}/>
                    </div>
                    <br/>
                    <div className='reddown' >
                    <Name name={props.name}/>
                    </div>
                    <br/>
                    <div className='reddown2' >
                    <Adress adress={props.adress}/>
                    </div>
                 </div>
                 
}

 


export default App;
