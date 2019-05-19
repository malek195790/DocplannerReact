import React from 'react'
import OpeningButton from './OpeningButton'

export default function OfficeBox({myBox}) {
  return (
    <div>
      {myBox.map( el =>
            <div>
                <span>{el.image}</span>
                <div className="image-box">
                    <legend>{el.legend}</legend>
                    <OpeningButton/>
                </div>
            </div>
        )}
    </div>
  )
}
