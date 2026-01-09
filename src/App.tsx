import './App.css'
import CounterSection from './components/counterSection'
import CtaSection from './components/CtaSection'
import DetailsSection from './components/DetailsSection'
import Herosection from './components/Herosection'
import Navbar from './components/navbar'
import QuranicVerse from './components/QuranicVerse'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Schedule from './pages/Schedule'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='wedding-schedule' element={<Schedule></Schedule>}></Route>
      </Routes>
      {/* <Navbar></Navbar>
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
      <CtaSection></CtaSection> */}

    </>
  )
}

export default App
