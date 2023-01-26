import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



function Actor(props) {
  return (
    <ActorLink to={`/actorpage/${props.id}`} key={props.id}>
      <div className='show-actor'>
            <img className='cast-image' src={props.image} />
            <p className='cast-actor-name'>{props.actorName}</p>
      </div>
      <div className='show-character'>
            <p>{props.character}</p>
      </div>    
    </ActorLink>
  )
}

const ActorLink = styled(Link)`
  width: 550px;
  background: #313030;
  color: #f5f5f5;
  margin-bottom: 0.5em;
  padding: 0.5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: left;
  border-radius: 25px;
  text-decoration: none;
  font-size: 1.2rem;
  box-shadow: 0 .15em .25em #6b6a6a;
` 
  


export default Actor