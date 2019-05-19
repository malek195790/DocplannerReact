import React from 'react'
import PDBox from './PDBox';
import './App.css';
import IntroPatDoc from './IntroPatDoc';
const Pat = [
    {
        title:'For patients',
        firstLine:'Find a doctor, book a visit and',
        secondLine:'solve any health-related doubt',
        countryList:['Choose country','Argentina','Australia','Brazil','Chile','Colombia','Czech','France','Italy','Mexico','Peru','Poland','Portugal','Spain','Turkey','UK'],
        image:<img src="https://www.docplanner.com/img/screen-marketplace@2x.png" className="patient-doctor-img"/>
    }]
const Doc = [
    {
        title:'For doctors',
        firstLine:'Save time managing visits and',
        secondLine:'cut no-shows by half',
        image:<img src="https://www.docplanner.com/img/screen-saas@2x.png" className="patient-doctor-img"/>
    }
]
const paraPat =[
    {
        firstLine:'We want patients to find the perfect doctor and book an ',
        secondLine:'appointment in the most easy way. The patient journey should be ',
        thirdLine:'enjoyable, and that\'s why we are always next to them: to help them',
        lastLine:'find the best possible care. Anytime, anywhere.'
    }
]
const paraDoc =[
    {
        firstLine:'We also help doctors to better manage their practice and build their ',
        secondLine:'online reputation. With our integrated end-to-end solution, doctors',
        thirdLine:'are able not only to improve their online presence, but also to ',
        lastLine:'devote their time to what really matters: their patients.'
    }
]  


export default function PatientDoctor() {
  return (
      <section className='p-d-section'>
          <div className='patient-doctor-section'>
            <IntroPatDoc para={paraPat}/>
            <IntroPatDoc para={paraDoc}/>
          </div>
          <div className='patient-doctor-section'>
            <div className='patient-box'><PDBox mybox={Pat}/></div>
            <div className='doctor-box'><PDBox mybox={Doc}/></div>
          </div>
      </section>
  )
}
