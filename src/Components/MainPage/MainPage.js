import React from 'react'
import Input from '../../Common/Input/Input'
import './MainPage.scss'
import substract from './../../assets/img/subtract.svg'
import done from './../../assets/img/done.svg'
import submit from './../../assets/img/right_arrow.svg'
import CommentsBlock from '../ComentsBlock/CommentsBlock'
import Offer from '../Offer/Offer'

export default function main() {

  return (
    <main className='Main'>
      <div className="Main__popup">
        <img src={done} alt="done" className='Main__popup-icon'/>
        <span className="Main__popup-msg">
          Дякуємо, що приєднались до нас
        </span>
      </div>
      <div className="container mb80">
        <h2 className="Main__title">
          Перетворіть свій сайт на прибуткове джерело!
        </h2>
        <img src={substract} alt="icon" className='Main__back'/>
        <form action='#' className='Main__form'>
          <Input type="email" placeholder="Залиште свій e-mail"/>
          <button type='submit' className='Main__form-btn'>
            <img src={submit} alt="submit" />
          </button>
        </form>
      </div>
      <CommentsBlock 
        title='наші клієнти говорять'
        name={'Уляна Селезньова'}
        comment={''}
        user={''}
      />
      <CommentsBlock 
        title='Наші бізнес партнери говорять'
        name={'Михайло Амбросимів'}
        comment={''}
        user={''}
        position={'Маркетолог'}
      />
      <Offer />
    </main>
  )
}
