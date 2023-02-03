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
        
        <h5 className='my-rating' value={props.rating}>⭐ {props.rating}</h5>
        
      </div>
        <button className='list-btn remove' onClick={() => removeFromList(props.id)}>Remove</button>
    </div>
</div>
  )
}

export default ListItem
