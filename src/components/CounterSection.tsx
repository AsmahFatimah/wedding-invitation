import Couple from '../assets/couple.png'
import Countdown from "react-countdown";
import CountdownRenderer from './CountdownRenderer';

const CounterSection = () => {
  return (
    <>
    <div className='container d-flex justify-content-center align-items-center flex-column'>
<div>
        <img src={Couple} alt=""  width={200} height={300}/>
    </div>
    <div className='divider'></div>
    <div className='text-center'>
        <h1>Join us to celebrate the start of a beautiful chapter in their lives</h1>
        <h6>ali and aliya</h6>
         <Countdown date={new Date("2026-02-15T00:00:00").getTime()}  renderer={CountdownRenderer} />
    </div>
    <div className='divider'></div>
    </div>
    
    </>
  )
}

export default CounterSection
