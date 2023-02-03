import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'




function Actor(props) {
  return (
    <ActorLink to={`/actorpage/${props.id}`} key={props.id}>
      <div className='show-actor'>
            <img className='cast-image' src={props.image} />
            
      </div>
      <div className='show-character'>
            <p className='cast-actor-name'>{props.actorName}</p>
            <p>{props.character}</p>
      </div>    
    </ActorLink>
  )
}

const ActorLink = styled(Link)`
  max-width: 550px;
  min-width: 250px;
  background: #313030;
  color: #f5f5f5;
  margin-bottom: 0.5em;
  padding: 0.5em 1.5em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  text-align: left;
  border-radius: 25px;
  text-decoration: none;
  font-size: 1rem;
  box-shadow: 0 .15em .25em #6b6a6a;

  @media(min-width: 868px) {
    font-size: 1.2rem;
    padding: 0.5em 1.5em;
  }
` 
  


export default Actor