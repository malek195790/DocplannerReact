import React from 'react'
import logo from './Doc-logo.svg'

export default function Header({menu}) {
  return (
    <div className='nav-bar'>
        <a href="#"><img src={logo} id='logo-docplanner'/></a>
        <ul className='nav-menu list-style'>
            {menu.map(el =>
                (<li className='padd'>
                    <a href="#" className='link-style'>{el.name}</a>
                    {!el.sub?null: <ul className='dropdown-list list-style'>{el.sub.map(el =>
                    (<li><a href="#" className='sub-menu link-style'>{el}</a></li>) )}</ul>}</li>
                ))
            }
        </ul>
    </div>
  )
}
