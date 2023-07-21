import React from 'react'
import './Parthners.scss';

export default function Parthners({parthners}) {

  return (
    <div className="Parthners">
      <div className="container">
        <div className="Parthners__wrap">
          {parthners.map (p => {
            return (
              <div className="Parthners__item" key={p}>
                {p}
              </div>
            )
          })}
        </div>
        <span className="Parthners__desc">
          Співпраця з торговими майданчиками
        </span>
      </div>
  </div>
  )
}
