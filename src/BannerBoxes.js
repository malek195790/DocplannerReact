import React from 'react'

export default function BannerBoxes({myBox}) {
  return (
    <li>
      {myBox.map( el =>
        <div className="itemsStyle">
            <span>{el.image}</span>
            <h3>{el.title}</h3>
            <h3>{el.secondLineTitle}</h3>
            <p>{el.firstPara}</p>
            <p>{el.secondPara}</p>
            <p>{el.lastPara}</p>
        </div>
        )}
    </li>
  )
}
