import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'
import inst from '../../assets/img/social/instagram.svg'
import facebook from '../../assets/img/social/facebook.svg'
import linkedIn from '../../assets/img/social/linkedin.svg'
import twitter from '../../assets/img/social/twitter.svg'


export default function Footer() {
  return (
    <>
      <div className="hr mb0"></div>
      <div className='Footer'>
        <div className="container">
          <div className='Footer__inner'>
            <ul className="Footer__social">
              <li className="Footer__social-link">
              <Link to={'#'}>
                <img src={inst} alt="inst" /> 
              </Link>
              </li>
              <li className="Footer__social-link">
                <Link to={'#'}>
                  <img src={facebook} alt="facebook" /> 
                </Link>
              </li>
              <li className="Footer__social-link">
                <Link to={'#'}>
                  <img src={linkedIn} alt="linkedIn" /> 
                </Link>
              </li>
              <li className="Footer__social-link">
                <Link to={'#'}>
                  <img src={twitter} alt="twitter" /> 
                </Link>
              </li>
            </ul>
            <div className="Footer__conditions">
              <Link to={'#'} className="Footer__conditions-link">
                Політика конфіденційності
              </Link>
              <Link to={'#'} className="Footer__conditions-link">
                Умови використання
              </Link>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
