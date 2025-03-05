import React from 'react'
import CartButton from './CartButton'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar bg-dark navbar-expand-lg border-bottom border-body" data-bs-theme="dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <h2 className='fst-italic'>OnlineStore</h2>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="/navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
        </ul>
      </div>
        <CartButton />
      <div> 
      </div>
    </div>
  </nav>
  )
}

export default NavBar
