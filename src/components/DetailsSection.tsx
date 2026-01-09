import React from 'react'
import butterfly from '../assets/butterfly.png'

interface Props{
    details: {
        title: string,
        event: string,
        imgUrl: string
    }[]
}
const DetailsSection = ({ details } : Props) => {
  return (
    <>
    <div className="mainDiv d-flex justify-align-content-between align-align-items-start py-5 container">
        <div className="leftDiv d-flex justify-content-center  flex-column align-self-start ">
                <img src={butterfly} alt="" width={90} height={90} />
                <h1>details</h1>
                <h3>12-13 jan</h3>
        </div>

        <div className="rightDiv">
            {
            details.map((detail, index) => (
                <div key={index} className='customCard'>
                    <img src = {detail.imgUrl} width={150} height={150}></img>
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
