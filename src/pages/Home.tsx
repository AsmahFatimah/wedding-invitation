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
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    
    <Navbar></Navbar>
      <Herosection></Herosection>
      <DetailsSection details={[
        {   
          title: 'Game Day',
          event: '17th jan',
          imgUrl: img2
        },
        {
          title: 'Nikkah + Qawali',
          event: '24th jan',
          imgUrl: img4

        },
         {
          title: 'Mehndi lagayi & Mayoun',
          event: '28 jan',
          imgUrl: img3

        },
        {
          title: 'Shendi',
          event: '28 jan',
          imgUrl: img1

        },
        {
          title: 'Valima',
          event: '28 jan',
          imgUrl: img2

        }
      ]}></DetailsSection>
      <QuranicVerse></QuranicVerse>
      <CounterSection></CounterSection>
      <CtaSection></CtaSection>
      <Footer></Footer>
    </>

  )
}

export default Home;
