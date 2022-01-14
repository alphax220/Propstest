import React  from 'react'
import './style.css'
import PropTypes from "prop-types"


class Profil extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state={
            fullname : props.fullname,
            bio : props.bio,
            profession : props.profession,
            image:props.children,

        }
    }

    handleName()
    {
        alert(this.state.fullname + " "+this.state.bio + " "+this.state.profession)
      
    }

    Changefullname = (event)=>{
        this.setState({fullname:event.target.value})

    }
    
    ChangeBio = (event)=>{
        this.setState({bio:event.target.value})

    }

    ChangePro = (event)=>{
        this.setState({profession:event.target.value})

    }
    
   
    render()
    {
        return <div className='back'>
            <img src={this.state.image} alt='monimage'/>
            <p>
            <label for="fullname"> Fullname</label> 
            <br/>
            <input type='text' name="Nomcomplet" id="fullname" onChange={this.Changefullname} value={this.state.fullname}/>
            </p>

            <p>
            <label for="Bio"> Biography</label>
            <br/>
            <textarea name='Biographie' id="Bio"  onChange={this.ChangeBio} value={this.state.bio}></textarea>
            </p>

            <p>
            <label for="Pro"> Profession</label>
            <br/>
            <textarea name='Profession' id="Pro" onChange={this.ChangePro} value={this.state.profession}></textarea>
            </p>

            
            <button onClick={this.handleName.bind(this)}>UserName</button>
            </div>
        
    }

}



Profil.defaultProps={   
    fullname: "Alpha",
    bio: "Voyageur",
    profession: "Gamedeveloper"

}

Profil.propTypes={
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    image:PropTypes.string

}

export default Profil;