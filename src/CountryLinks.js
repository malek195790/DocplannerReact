import React from 'react'

export default function CountryLinks({list}) {
  return (
    <div className="country-line">
      {list.map( el =>
        <div className="country-line">
          <a>{el.name}&nbsp;</a>
          {!el.sub?null:<a className="unlink-style">{el.sub}&nbsp;</a>}
        </div>
        )}
    </div>
  )
}
