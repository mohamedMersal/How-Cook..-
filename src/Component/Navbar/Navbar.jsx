import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Image/logo.png'
import nav from './Navbar.module.css';


export default function Navbar() {
  return (
  <>
   <div className=''>
    <div className={nav.backGround}>
      <nav className="navbar navbar-expand-lg bg-transparent container">
        <div className="container-fluid">
          <Link className="navbar-brand text-success fw-bolder w-75" to={'/home'}>
            <img src={logo} className={nav.logo} alt="" />
          </Link>
          <button className="navbar-toggler ms-auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to={'/home'}>Home</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to={"food"}>FOOD</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to={"salad"}>SALAD</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to={"dessert"}>DESSERT</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to={"fruits"}>FRUITS</Link>
                      </li>
                  </ul>
          </div>
        </div>
      </nav>
    </div>
   </div>
  </>
  )
}
