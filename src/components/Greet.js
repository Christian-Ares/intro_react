import React from 'react'
import './styles/Greet.css'


const Greet = (props)=>{
    return(
        <div className="Greet">
    <h1>Welcome {props.name}</h1>
        </div>
    )
}

export default Greet;