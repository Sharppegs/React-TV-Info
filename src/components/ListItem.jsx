import {useContext, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Context} from "../Context.jsx"

function ListItem(props) {
const check = JSON.parse(localStorage.getItem("rating"))
const [ratingCount, setRatingCount] = useState(check || 0)
const {removeFromList, list} = useContext(Context) 


function addRating(id) {
  if(props.id === id) {
  setRatingCount(ratingCount + 1)
  }
  console.log(id)
  console.log(props.id) 
}


useEffect(() => { 
  localStorage.setItem("rating", JSON.stringify(ratingCount))
}, [ratingCount])


useEffect(() => {
  const check = JSON.parse(localStorage.getItem("rating"))
  setRatingCount(check)
}, [])



  return (
    <div className='list-item-container' id={props.id}>
    <Link to={props.tvdb ? `/show/${props.tvdb}` : `/noshow`}
        className='list-item'
    >
        <img className="list-item-img" src={props.image} />
        
        <div className='list-item-title'>
        <h3>{props.name}</h3>
        <p dangerouslySetInnerHTML={{__html: props.blurb}}></p>
        </div>
        
    </Link>

    <div className='list-btns'>
      <div className='rating-counter'>
        <button className="rating-btn" onClick={() => setRatingCount(ratingCount - 1)}>-</button>
        <h5><span className='my-rating' value={ratingCount}>{ratingCount}</span>/10</h5>
        <button className="rating-btn" onClick={() => addRating(props.id)}>+</button>
      </div>
        <button className='list-btn remove' onClick={() => removeFromList(props.id)}>Remove</button>
    </div>
</div>
  )
}

export default ListItem