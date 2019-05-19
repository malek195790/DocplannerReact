import React from 'react';

export default function CompanyIntro({CompIntro}) {
  return (
    <div>
      {CompIntro.map( el =>
            <div>
                <h1>{el.firstLine}</h1>
                <h1>{el.secondLine}</h1>
                <h1>{el.lastLine}</h1>
            </div>
        )}
    </div>
  )
}
