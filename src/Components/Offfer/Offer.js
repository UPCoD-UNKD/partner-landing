import React from 'react'
import { Link } from 'react-router-dom'
import './Offer.scss'

export default function Offer() {
  return (
    <div className='Offer'>
      <div className="container">
        <div className="Offer__title-wrap">
          <h3 className="Offer__title">
            Будьте попереду конкурентів 
          </h3>
            <p>почніть заробляти та розширюйте свій бізнес</p>
          <h3 className="Offer__title fz64">
            разом з нами
          </h3>
        </div>
        <Link to={'#'} className="Offer__link">
                Отримати партнерку 
        </Link>
      </div>
    </div>
  )
}
