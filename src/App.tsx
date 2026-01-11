import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import ScrollToTop './components/ScrollToTop.tsx'
function App() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='wedding-schedule' element={<Schedule></Schedule>}></Route>
      </Routes>
         </>
  )
}

export default App
