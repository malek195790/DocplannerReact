import React from 'react';
import Header from './Header';
import Intro from './Intro-section';
import PatientDoctor from './PatientDoctor';
import CompanySection from './CompanySection';
import Banner from './Banner';
import './App.css';
import OfficeLocation from './OfficeLocation';
import Footer from './Footer';
const navmenu = [
  {name:'About us'},
  {name:'Career'},
  {name:'Departements', sub:['Marketing & PR','Customer Success & Sales','IT, Product, Design & UX','Finance & Administration','HR	& more']}
]

function App() {
  return (
    <div>
      <Header menu={navmenu} className='header'/>
      <Intro/>
      <PatientDoctor/>
      <CompanySection/>
      <Banner/>
      <OfficeLocation/>
      <Footer/>
    </div>
  );
}

export default App;
