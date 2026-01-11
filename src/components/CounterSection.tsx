import Countdown from "react-countdown";
import CountdownRenderer from './CountdownRenderer';

const CounterSection = () => {
  return (
    <>
    <div className='counterSection pt-5 px-5'>
   <div className='container d-flex justify-content-center align-items-center flex-column counterSectionTextBox'>
    <div>
        <h1>Safwan and Wadeea</h1>

    </div>
    <div className='divider'></div>
    <div className='text-center'>
        <h2>Join us to celebrate the start of a beautiful chapter in their lives</h2>
        {/* <h6>ali and aliya</h6> */}
         <Countdown date={new Date("2026-01-17T00:00:00").getTime()}  renderer={CountdownRenderer} />
    </div>
    <div className='divider'></div>
    </div>
    </div>
 
    
    </>
  )
}

export default CounterSection
