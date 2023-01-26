import React from 'react'
import { Link } from 'react-router-dom'

function ShowCard(props) {   

    return (
    <Link to={props.id ? `/show/${props.id}` : `/noshow`}>
        <img src={props.image} />
        <h3>{props.name}</h3> 
    </Link>   

      )




  
}

export default ShowCard