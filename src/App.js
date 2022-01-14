import React from 'react'
import './App.css'
import Profil from './Profil/Profil';
import doom from './doom4.jpg'
        
class App extends React.Component
{
                
               render(){
                return <div className='back'>
                    <Profil fullname="Mike" bio="I'm a Killer" profession="Cutter">  
                    {doom}
                    </Profil>               
                    </div>

               } 
                
                 
}

 


export default App;
