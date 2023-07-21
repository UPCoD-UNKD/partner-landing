import React from 'react'
import './SliderDots.scss'

export default function SliderDots({users}) {
  return (
    <div className='SliderDots'>
      {/* {users.map(u => {
        return (
          <div className="dot"></div>
        )
      })} */}

      <div className="dot active"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  )
}
