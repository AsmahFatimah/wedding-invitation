import './App.css'
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
         </>
  )
}

export default App
