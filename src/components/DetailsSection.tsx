import React from 'react'

interface Props{
    details: {
        title: string,
        event: string
    }[]
}
const DetailsSection = ({ details } : Props) => {
  return (
    <>
    <div className="mainDiv d-flex justify-align-content-between align-align-items-start py-5 container">
        <div className="leftDiv d-flex justify-content-center  flex-column align-self-start ">
                <h1>details</h1>
                <h3>12-13 jan</h3>
        </div>

        <div className="rightDiv">
            {
            details.map((detail, index) => (
                <div key={index} className='customCard'>
                    <h1>{detail.title}</h1>
                    <p>{detail.event}</p>
                </div>
            ))
        }
        </div>
    </div>
   
    </>
  )
}

export default DetailsSection
