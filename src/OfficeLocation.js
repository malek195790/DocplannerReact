import React from 'react'
import OfficeBox from './OfficeBox';

const Warsaw = [
    {
        image:<img src="https://www.docplanner.com/images/warsaw.png" alt="warsaw"></img>,
        legend:'Warsaw'
    }
]

const Barcelona = [
    {
        image:<img src="https://www.docplanner.com/images/barcelona.png" alt="barcelona"></img>,
        legend:'Barcelona'
    }
]

const istanbul = [
    {
        image:<img src="https://www.docplanner.com/images/istanbul.png" alt="istanbul"></img>,
        legend:'istanbul'
    }
]

const Rome = [
    {
        image:<img src="https://www.docplanner.com/images/rome.png" alt="rome"></img>,
        legend:'Rome'
    }
]

const Mexico = [
    {
        image:<img src="https://www.docplanner.com/images/mexico-city.png" alt="mexico"></img>,
        legend:'Mexico'
    }  
]

const Curitiba = [
    {
        image:<img src="https://www.docplanner.com/images/curitiba.png" alt="curitiba"></img>,
        legend:'Curitiba'
    }
]

export default function OfficeLocation() {
  return (
    <section className="office-places">
        <h1>Improve the lives of millions.<br/>Change yours forever</h1>
        <p>More than 1000 team mates share our same vision, goals and passion.<br/>
            With offices in Warsaw, Barcelona, Istanbul, Rome, Czech Republic,<br/>
            Mexico City, Colombia and Curitiba, our search for great talent never <br/>
            stops.
        </p>
        <div className="gallery">
            <ul>
                <li><a href='#'><OfficeBox myBox={Warsaw}/></a></li>
                <li><a href='#'><OfficeBox myBox={Barcelona}/></a></li>
                <li><a href='#'><OfficeBox myBox={istanbul}/></a></li>
                <li><a href='#'><OfficeBox myBox={Rome}/></a></li>
                <li><a href='#'><OfficeBox myBox={Mexico}/></a></li>
                <li><a href='#'><OfficeBox myBox={Curitiba}/></a></li>
            </ul>
        </div>
    </section>
  )
}
