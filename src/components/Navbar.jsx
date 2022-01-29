import { useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { BsHeart, BsX } from 'react-icons/bs'
import { Context } from "../store/appContext"

const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleRemove = e => {
    actions.removeFavorite(store.favorite.filter(el => el !== e.currentTarget.element))
  }

  return(
    <div className="container nav-container">
      <Link to="/" className='navbar-brand'>Star Wars</Link>
      <ul className="navbar-container">
        <Link to="/">
          <li className='navbar-item'>
            Home
          </li>
        </Link>
        <li className='navbar-item navbar-dropdown'>
          Categories
          <div className='navbar-content'>
            <Link to="/elements/people" className='dropdown-link'>People</Link>
            <Link to="/elements/planets" className='dropdown-link'>Planets</Link>
            <Link to="/elements/species" className='dropdown-link'>Species</Link>
            <Link to="/elements/starships" className='dropdown-link'>Starships</Link>
            <Link to="/elements/vehicles" className='dropdown-link'>Vehicles</Link>
          </div>
        </li>
        <li className='navbar-dropdown'>
          <button type="button" className="btn btn-fav position-relative">
            <BsHeart className='btn-fav-icon' />
          </button>
          <div className="navbar-content">
          {
            (store.favorite.length > 0) 
            ? store.favorite.map(el => <span className='dropdown-link'>{el} <BsX className='remove-icon' element={el} onClick={handleRemove}/></span>)
            : <span className='dropdown-link'>No hay Elementos</span>
          }
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Navbar