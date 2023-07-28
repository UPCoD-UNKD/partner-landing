import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import logo from '../../assets/img/logo.svg'

export default function Header() {
  return (
    <header className='Header'>
      <div className="container">
        <div className="Header__wrap">
          <Link to={'#'} className='Header__logo'>
            <img src={logo} alt='logo'></img>
          </Link>
          <nav className="Header__nav">
            <ul className="Header__nav-items nav">
              <Link to={'#'} className="Header__nav-item">
                <li>Авторизуватися</li>
              </Link>
              <Link to={'#'} className="Header__nav-item">
                <li>почати</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
