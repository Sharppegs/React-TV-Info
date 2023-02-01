import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



function ShowCredit(props) {

   return (
    <Credit to={`/show/${props.id}`}>
      
            <img className='credit-image' src={props.image} />
            <p className='cast-actor-name'>{props.name}</p>
       
    </Credit>
  )
}

const Credit = styled(Link)`
  background: #313030;
  color: #f5f5f5;
  max-width: 450px;
  margin-bottom: 0.5em;
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  border-radius: 25px;
  text-decoration: none;
  font-size: 1.2rem;
  /* box-shadow: 0 .15em .25em #6b6a6a; */
` 
  


export default ShowCredit