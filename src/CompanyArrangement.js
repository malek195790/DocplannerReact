import React from 'react';
import './App.css';

export default function CompanyArrangement({companys}) {
  return (
    <ul className='Arrang-logo'>
        {companys.map(el =>
                    <li>{el.logo}</li>
            )}
    </ul>
  )
}
