import React from 'react';
import './App.css';

export default function IntroPatDoc({para}) {
  return (
    <div className="pat-doc-text">
        {para.map(el =>
            (<div className="para-marg">
                <p>{el.firstLine}</p>
                <p>{el.secondLine}</p>
                <p>{el.thirdLine}</p>
                <p>{el.lastLine}</p>
            </div>)
            )
        }
    </div>
  )
}
