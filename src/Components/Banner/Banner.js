import React from 'react'
import { Link } from 'react-router-dom';

import './Banner.scss'
import instagram from '../../assets/img/social/instagram.svg';
import facebook from '../../assets/img/social/facebook.svg';
import linkedin from '../../assets/img/social/linkedin.svg';
import twitter from '../../assets/img/social/twitter.svg';
import scrollDown from '../../assets/img/scroll_down.svg';


export default function Banner() {
  return (
    <div className='Banner'>
      <div className="container">
        <div className="Banner__content">
          <div className="title-wrap">
            <h1 className="Banner__title">
            Розблокуйте свій потенціал 
              <span>
                для тих, хто прагне вже сьогодні збільшити прибуток!
              </span>
              <br/>
            прямо зараз!
            </h1>
            <Link to={'https://docs.google.com/forms/d/e/1FAIpQLScJrJKDCLj3hRd5Mt077Xi-phIpe-y9C3HkW-Qjspf625waww/viewform?usp=sf_link'} className="Banner__link">
              Отримати партнерку 
            </Link>
          </div>
          <img src={scrollDown} alt="scroll down" className="Banner__scroll" />
          <nav className="Banner__nav">
            <ul className="Banner__nav-items nav">
              <li className="Banner__nav-item">
                <Link to={'#'}> 
                  <img src={instagram} alt="instagram" />
                </Link>
              </li>
              <li className="Banner__nav-item">
                <Link to={'#'}> 
                  <img src={facebook} alt="facebook" />
                </Link>
              </li>
              <li className="Banner__nav-item">
                <Link to={'#'}> 
                  <img src={linkedin} alt="linkedin" />
                </Link>
              </li>
              <li className="Banner__nav-item">
                <Link to={'#'}> 
                  <img src={twitter} alt="twitter" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
