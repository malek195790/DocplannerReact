import React from 'react'

export default function PDBox({mybox}) {
  return (
      <div>
        {mybox.map(el =>
            (<ul className="marg-pad">
                <li><h2>{el.title}</h2></li>
                <li><h1>{el.firstLine}</h1></li>
                <li><h1>{el.secondLine}</h1></li> 
                <li>
                  <ul className="img-select-button marg-pad">
                    <li>{!el.countryList?<li className="empty-li"></li>:<select  className="country-name marg-in-box">{el.countryList.map(el =>(<option>{el}</option>))}</select>}</li>
                    <li  className="marg-in-box">{el.image}</li>
                  </ul>
                </li>
            </ul>)
            )
        }
      </div>
  )
}
