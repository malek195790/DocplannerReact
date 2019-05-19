import React from 'react'
import Banner from './Banner';

export default function FillBanner({BanIn}) {
  return (
    <div>
      {BanIn.map( el =>
        <div class="banner-intro">
            <h1>{el.title}</h1>
            <h1>{el.secondLineTitle}</h1>
            <p>{el.firstPara}</p>
            <p>{el.secondPara}</p>
            <span>{el.image}</span>
        </div>
        )}
    </div>
  )
}
