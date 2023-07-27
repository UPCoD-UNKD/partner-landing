import React from 'react'
import './OfferBanner.scss'
import stars from '../../assets/img/stars.svg'
import emoji from '../../assets/img/emoji.svg'
import progressArrow from '../../assets/img/progress_arrow.svg'

export default function Offer() {
  return (
    <div className='Offer'>
      <p className={'Offer__title fz80'}>
        <img src={stars} alt="star" />
        <span>Приєднуйтесь</span>
      </p>
      <p className={'Offer__title green fz124'}>
        <span>збільшуйте</span>
        <img src={emoji} alt="star" />
      </p>
      <p className={'Offer__title black fz84'}>
        <span>просувайте</span>
        <img src={progressArrow} alt="star" />
      </p>
    </div>
  )
}
