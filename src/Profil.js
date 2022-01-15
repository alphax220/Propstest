import React from 'react'
import './style.css'
import doom from './doom4.jpg'

class Profil extends React.Component
{
            /*Initialisation des données state du Composant*/
            constructor(props)
            {
                super(props)
                this.state = {
                    fullname : props.fullname,
                    bio: props.bio,
                    imgSrc : props.imgSrc,
                    profession:props.profession,
                    stateButton:props.stateButton,
                    show:props.show,
                    count:props.count
                } 
            }

            /*Montage du Composant et demarrage du compteur*/
            componentDidMount()
            {
                this.timerID = setInterval(()=>this.tick(),1000)
                
            }



            /*Fonction d'incrementation*/
            tick() {
                let plus = this.state.count
                plus = plus + 1
                this.setState({
                  count: plus
                });
              }

    
            /* Fonction qui affiche ou cache le profil*/
            StateProfil= ()=>
            {
                
            if(this.state.show)
            {
                this.setState({show:false,stateButton:"SHOW"})
                clearInterval(this.timerID)
            }
            else
            {
                this.setState({show:true,stateButton:"HIDDEN",count:0})
                this.timerID = setInterval(()=>this.tick(),1000)
            }
                
            }

               render(){

                /*Affichage du profil suivant la valeur de show*/
                return  <div  className='back'>
                {this.state.show ? <div className='back'>
                <img src={this.state.imgSrc} alt="imag"/>
                <p>{this.state.fullname}</p>
                <p>{this.state.bio}</p>
                <p>{this.state.profession}</p>
                 
                 </div> : null}
                 
                <br/><br/><br/><br/>
                <p>Declenchement</p>{this.state.count}
                <br/>
                {/*Cliquer pour afficher ou cacher le profil*/}
                <button type="button" onClick={this.StateProfil}>{this.state.stateButton}</button>
                </div>
                   
               } 
                
                 
}

Profil.defaultProps=
{
    fullname : "Your Name",
    bio: "Your Présentation",
    imgSrc : doom,
    profession:"Chemist",
    stateButton:"HIDDEN",
    show:true,
    count:0
    }


export default Profil;
