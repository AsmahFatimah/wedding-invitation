import React from 'react'
import SaveToCalenderBtn from './SaveToCalenderBtn'

const CtaSection = () => {
  return (
    <>
    <div className='bgDiv'></div>
    <div className="cta d-flex justify-content-center align-items-center flex-column">
        <h6>A formal Invitation to follow</h6>
        <button className='btn'>see schedule</button>
        <SaveToCalenderBtn title={'ali and aliya wedding'} details={'you are the gift so we dont need gifts on our wedding'} location={'Lahore, Pakistan'} startDate={'20260215T100000Z'} endDate={'20260215T120000Z'}></SaveToCalenderBtn>
    </div>
    </>

  )
}

export default CtaSection
