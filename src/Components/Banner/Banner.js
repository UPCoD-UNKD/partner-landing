import React from 'react'
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
            <a href="#" className="Banner__link">
              Отримати партнерку 
            </a>
          </div>
          <img src={scrollDown} alt="scroll down" className="Banner__scroll" />
          <nav className="Banner__nav">
            <ul className="Banner__nav-items nav">
              <li className="Banner__nav-item">
                <a href='#'> 
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li className="Banner__nav-item">
                <a href='#'> 
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li className="Banner__nav-item">
                <a href='#'> 
                  <img src={linkedin} alt="linkedin" />
                </a>
              </li>
              <li className="Banner__nav-item">
                <a href='#'> 
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
