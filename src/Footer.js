import React from 'react'
import CountryLinks from './CountryLinks';

const Country = [
    {name:' Poland, '},
    {name:'Turkey, '},
    {name:'Spain, '},
    {name:'Italy, '},
    {name:'Czech Republic, '},
    {name:'Mexico, '},
    {name:'Colombia, '},
    {name:'Brazil, '},
    {
      name:'Argentina ',
      sub:'and '
    },
    {name:'Chile'}
]

export default function Footer() {
  return (
    <footer>
        <p>We are leaders in 10 countries: <CountryLinks list={Country}/></p>
        <p>This site uses cookies to deliver services in accordance with this Privacy Policy. 
            You can specify the conditions for storing or accessing cookies on your browser.<br/>
            www.docplanner.com © 2019
        </p>
    </footer>
  )
}
