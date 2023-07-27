import React from 'react'
import './Info.scss'

export default function Info() {
  return (
    <div className='Info'>
      <div className="Info__number-wrap">
        <div className="Info__number">
          <span>0</span>
        </div>
        <div className="Info__number">
          <span>1</span>
        </div>
      </div>
      <h4 className="Info__title">
        Автоматичне створення кабінету
      </h4>
      <span className="Info__desc">
        Будьте впевнені в своїй успішності з нашим зручним і простим у використанні партнерським кабінетом.
      </span>
    </div>
  )
}
