import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { Context } from "../Context"
import { nanoid } from 'nanoid'
import ShowCredit from '../components/ShowCredit'

function ActorPage() {
const {actorInfo, findActor, actorCredits, findActorCredits} = useContext(Context) 
const actor = useParams()

useEffect(() => {
    findActor(actor.id)
    
    console.log(actorInfo)
    
  }, [actor.id])

  useEffect(() => {
    findActorCredits(actor.id)
    console.log(actorCredits)
  }, [actor.id])

  function date(day) {
    let goodDay = new Date(day).toDateString()
    return goodDay
  } 

  const {id, name, birthday, deathday, image, country, embedded } = actorInfo
  
  

  return (
    <div className='actorpage-container' key={nanoid()}>
      <div className='actorpage-left'>
        <img className='actorpage-image' src={image?.medium} />
        <h4 className='actor-name'>{name}</h4>
        <p>{country?.name}</p>
        {birthday === null ? "" : <p>Date of Birth: {date(birthday)}</p>}
        {deathday === null ? "" : <p>Death: {date(deathday)}</p>}
      </div>

      <div className='actorpage-right'>
        <h2>TV Credits</h2>
        <div>
          {actorCredits?.map(tvshow => 
            <ShowCredit
              key={nanoid()}
              name={tvshow._embedded.show.name} 
              id={tvshow._embedded.show.externals.thetvdb}
              image={tvshow._embedded.show.image?.medium}
              />
          )}
        </div>
          
      </div>

    </div>
  )
}



export default ActorPage