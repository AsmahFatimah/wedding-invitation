import React from 'react'
import CounterSection from '../components/counterSection';
import CtaSection from '../components/CtaSection';
import DetailsSection from '../components/DetailsSection';
import Herosection from '../components/Herosection';
import Navbar from '../components/Navbar';
import QuranicVerse from '../components/QuranicVerse';
import img1 from '../assets/flower2.png'
import img2 from '../assets/flower1.png'
import img3 from '../assets/sunflower.png'
import img4 from '../assets/flower-4.png'

const Home = () => {
  return (
    <>
    
    <Navbar></Navbar>
      <Herosection></Herosection>
      <DetailsSection details={[
        {   
          title: 'barat',
          event: '18 jan',
          imgUrl: img2
        },
        {
          title: 'barat',
          event: '18 jan',
          imgUrl: img4

        },
         {
          title: 'barat',
          event: '18 jan',
          imgUrl: img3

        }
      ]}></DetailsSection>
      <QuranicVerse></QuranicVerse>
      <CounterSection></CounterSection>
      <CtaSection></CtaSection>

    </>

  )
}

export default Home;
