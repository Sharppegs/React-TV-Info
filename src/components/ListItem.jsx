import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {Context} from "../Context.jsx"

function ListItem(props) {

const {removeFromList} = useContext(Context)

  return (
    <div className='list-item-container'>
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
        <button className='list-btn'>Seen it</button>
        <button className='list-btn remove' onClick={() => removeFromList(props.id)}>Remove</button>
    </div>
</div>
  )
}

export default ListItem