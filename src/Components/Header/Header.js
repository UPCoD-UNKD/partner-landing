import React from 'react'
import './Header.scss'
import logo from '../../assets/img/logo.svg'

export default function Header() {
  return (
    <header className='Header'>
      <div className="container">
        <div className="Header__wrap">
          <img className='Header__logo' src={logo} alt='logo'></img>
          <nav className="Header__nav">
            <ul className="Header__nav-items nav">
              <li className="Header__nav-item">Авторизуватися</li>
              <li className="Header__nav-item">почати</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
