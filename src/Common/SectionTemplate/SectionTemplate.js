import React from 'react'
import './SectionTemplate.scss'

export default function SectionTemplate({component, title}) {
  return (
    <div className="SectionTemplate">
      <div className="container">
        <h3 className="SectionTemplate__header">
          {title}
        </h3>
      </div>
      <div className="hr"></div>
      {component}
    </div>
  )
}
