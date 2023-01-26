import React from 'react'

import tasks from '../taskData'
import { useParams } from 'react-router-dom'

function JokePage() {
const JokePageId = useParams()
const selector = tasks[(JokePageId.id) - 1]
const { question, answer, id } = selector


  return (
    <div className="joke-container">
    <h4>Joke number {id}</h4>
    <p>{question}</p>
    <p>{answer}</p>
    
    
    </div>
  )
}

export default JokePage