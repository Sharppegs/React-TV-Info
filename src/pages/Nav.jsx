import {Link} from "react-router-dom"

function Nav() {
  return (
    <div className='nav-bar'>
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/Search" className="nav-link">Search</Link>
        <Link to="/Watchlist" className="nav-link">My Watchlist</Link>

    </div>
  )
}

export default Nav