import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className="navbar"> 
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/favourites">Favourites</Link>
            </div>
    </div>
  )
}
