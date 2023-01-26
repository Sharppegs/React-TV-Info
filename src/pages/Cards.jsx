import tasks from "../taskData"
import Joke from "../components/Joke"
import { Link, useParams } from 'react-router-dom'

function Cards() {
    let params = useParams()

    const JokeCardElements = tasks.map((joke) =>  {
      return (
        <Joke
          key={joke.id}
          id={joke.id}
          question={joke.question}
          answer={joke.answer}
          className="card"
          >
          
        </Joke>
        )}
      )

    const CardsGrid = () => {
        return (
          <div className="cards">
            {JokeCardElements}
          </div>
          )
      }

  return (
    <>
    <CardsGrid />
    
    </>
  )
}

export default Cards