import './App.css'
import CounterSection from './components/counterSection'
import CtaSection from './components/CtaSection'
import DetailsSection from './components/DetailsSection'
import Herosection from './components/Herosection'
import Navbar from './components/navbar'
import QuranicVerse from './components/QuranicVerse'
import Test from './components/Test'

function App() {
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

export default App
