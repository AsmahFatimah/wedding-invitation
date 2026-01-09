import React from 'react'
import CounterSection from '../components/counterSection';
import CtaSection from '../components/CtaSection';
import DetailsSection from '../components/DetailsSection';
import Herosection from '../components/Herosection';
import Navbar from '../components/Navbar';
import QuranicVerse from '../components/QuranicVerse';

const Home = () => {
  return (
    <>
    
    <Navbar></Navbar>
      <Herosection></Herosection>
      <DetailsSection details={[
        {
          title: 'barat',
          event: '18 jan'
        },
        {
          title: 'barat',
          event: '18 jan'
        },
         {
          title: 'barat',
          event: '18 jan'
        }
      ]}></DetailsSection>
      <QuranicVerse></QuranicVerse>
      <CounterSection></CounterSection>
      <CtaSection></CtaSection>

    </>

  )
}

export default Home;
