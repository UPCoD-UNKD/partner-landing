import React from 'react'
import Input from '../../Common/Input/Input'
import SectionTemplate from '../../Common/SectionTemplate/SectionTemplate'
import UserCommentCard from '../../Common/UserCommentCard/UserCommentCard'
import OfferBanner from '../OfferBanner/OfferBanner'
import Info from '../Info/Info'
import Offer from '../Offfer/Offer'

import './MainPage.scss'
import substract from './../../assets/img/subtract.svg'
import done from './../../assets/img/done.svg'
import submit from './../../assets/img/right_arrow.svg'

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
      <SectionTemplate 
        component={
        <UserCommentCard 
          name={'Уляна Селезньова'}
          comment={'З партнерською програмою я отримую знижки та пропозиції, які мені допомагають набувати бажаного майже за собівартістю, без накруток.'}
        />}
        title={'наші клієнти говорять'}
      />

      <SectionTemplate 
        component={
        <UserCommentCard 
          name={'Михайло Амбросимів'}
          comment={'Підключили партенрську програму з і збільшили за квартал продаж відео техніки на 48 %.'}
          position={'Маркетолог'}
        />}
        title={'Наші бізнес партнери говорять'}
      />
      <OfferBanner />

      <SectionTemplate 
        component={[<Info />, <Info />, <Info />]}
        title={'Як це працює'}
      />
      <Offer />
    </main>
  )
}
