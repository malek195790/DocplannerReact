import React from 'react'
import BannerBoxes from './BannerBoxes';

const Leader = [
    {
        image:<img src="https://www.docplanner.com/img/flag.png" alt="flag"/>,
        title:'Leader in',
        secondLineTitle:'10 countries',
        firstPara:'Poland, Turkey, Spain, Italy,',
        secondPara:'Czech Republic, Mexico, Brazil,',
        lastPara:'Colombia, Argentina and Chile'
    }
]

const Patient = [
    {
        image:<img src="https://www.docplanner.com/img/patients.png" alt="flag"/>,
        title:'30 million unique',
        secondLineTitle:'patients',
        firstPara:'visit us every month',
        secondPara:'',
        thirdPara:'',
        lastPara:''
    }
]

const Appointement = [
    {
        image:<img src="https://www.docplanner.com/img/visits.png" alt="flag"/>,
        title:'1 million',
        secondLineTitle:'appointments',
        firstPara:'booked last month',
        secondPara:'',
        thirdPara:'',
        lastPara:''
    }
]

const Doctor = [
    {
        image:<img src="https://www.docplanner.com/img/doctors.png" alt="flag"/>,
        title:'2 million active',
        secondLineTitle:'doctors',
        firstPara:'trust in our solutions',
        secondPara:'',
        thirdPara:'',
        lastPara:''
    }
]

export default function BoxList() {
  return (
    <div class="box-list">
        <ul>
            <div className="leader"><BannerBoxes myBox={Leader}/></div>
            <div className="patient"><BannerBoxes myBox={Patient}/></div>
        </ul>
        <ul>
            <div className="appointments"><BannerBoxes myBox={Appointement}/></div>
            <div className="doctor"><BannerBoxes myBox={Doctor}/></div>
        </ul>
    </div>
  )
}
