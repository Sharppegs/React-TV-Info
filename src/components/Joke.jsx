import React from 'react'
import { Link } from 'react-router-dom'

function Joke({question, id, answer}) {   

    return (
    <Link to={`/Jokes/${id}`}>
        <div className="card">
            <p>{question}</p>
            <p className="answer">{answer}</p>
        </div>
    </Link>       

      )




  
}

export default Joke