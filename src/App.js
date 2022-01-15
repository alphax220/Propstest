import React from 'react'
import './App.css'
import './style.css'
import Profil from './Profil'
import doom from './doom4.jpg'
        
class App extends React.Component
{
            /*Initialisation des données state du Composant*/
           
                render(){
                    return  <div  className='back'>
                                <Profil imgSrc={doom} show={true} count={0}/>
                            </div>

                }
                
                   
               
                
                 
}

 


export default App;
