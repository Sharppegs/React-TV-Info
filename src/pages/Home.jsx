import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from "../Context"
import styled from 'styled-components'
import PopularCard from '../components/PopularCard'
import { nanoid } from 'nanoid'


function Home() {

  const {schedule, getSchedule} = useContext(Context)
  const [title, setTitle] = useState("") 
  const navigate = useNavigate()
    
  function submitHandler(e) {
      setTitle(e)
      console.log(e)
      navigate('/searched/' + e)
  }  

  useEffect(() => {
    getSchedule()
    console.log(schedule)
  }, [])

  const PopularCardElements = schedule?.map((show, index) =>  {
    return (
      <FilmCard key={nanoid()}>
        <PopularCard
          id={index}
          name={show.title}
          value={show.title}
          image={show.img}
          className="show-card"
          onClick={() => submitHandler(show.title)}
          >
        </PopularCard>
      </FilmCard>
      )}
    )


return (
  
 <div>
    
    <h2 className='popular-title'>Popular on Netflix</h2>
    <Grid>
      {PopularCardElements}
    </Grid>
  </div>
  
)
}

const Grid = styled.div`
  display: grid;
  width: 90%;
  margin: 0;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1.5rem;
`

const FilmCard = styled.div`

img{
  border-radius: 2rem;
  max-width: 200px;
  opacity: 0.8;
  object-fit: cover;
  transition: transform 200ms ease-in-out;
  margin-bottom: 1.5em;
}

h4 {
  
  color: #fff;
  
  text-align: center;
  
}

img:hover   {
  opacity: 1;
  cursor: pointer;
  transform: scale(1.1);
}



a{
  text-decoration: none;
  
}

h4{
  text-align: center;
  padding: 1rem;
}
`
export default Home