import React from 'react'
import SaveToCalenderBtn from './SaveToCalenderBtn'
import { Link } from 'react-router-dom'
import Schedule from '../pages/Schedule'

const CtaSection = () => {
  return (
    <>
    <div className='ctaSection'>
    <div className='bgDiv'></div>
    <div className="cta  d-flex justify-content-center align-items-center flex-column">
        <h6>A formal Invitation to follow</h6>
        <Link to="/wedding-schedule" className='btn'>see schedule</Link>
        <SaveToCalenderBtn title={'ali and aliya wedding'} details={'you are the gift so we dont need gifts on our wedding'} location={'Lahore, Pakistan'} startDate={'20260215T100000Z'} endDate={'20260215T120000Z'}></SaveToCalenderBtn>
    </div>
    </div>
    </>

  )
}

export default CtaSection
