import React from 'react'
import FillBanner from './FillBanner';
import BoxList from './BoxList';

const BannerIntro =[
    {
        title:'The world\'s',
        secondLineTitle:'biggest healthcare platform',
        firstPara:'We work from 6 offices all over the world, bringing Docplanner',
        secondPara:'Group to life in almost 20 countries.',
        image:<img src="https://www.docplanner.com/img/logo.png" alt="-Docplannerlogo" className="background-logo"/>
    }
]

export default function Banner() {
  return (
    <section className="banner-section">
            <div className="inner-content">
                <FillBanner BanIn={BannerIntro}/>
                <BoxList/>
            </div>
    </section>
  )
}
