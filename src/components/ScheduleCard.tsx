interface Props{
    cardDetails:{
            date: string,
            time: string,
            duration: string,
            eventName: string,
            venue: string
    }[]

}
const ScheduleCard = ({ cardDetails }: Props) => {
  return (
    <>
        <div className='container my-5 px-md-5 scheduleCard'>
        <h2>Schedule</h2>
    <h3>Vadiha and Safwan's Shaadi! | 19 Feb, 2:30 pm PST – 22 Feb, 11:00 pm PST All locations are in Lahore, Pak</h3>
    <div className="mt-5">
      {cardDetails.map((cardDetail, index) => (
        <div key={index} className="cardDetail mt-3 ">

            <h6>{cardDetail.date}</h6>
            <div className="border mb-4 mt-3"></div>
        <div className="body d-flex justify-content-center align-items-center flex-row gap-3">
            <div className="date d-flex flex-column">
                <p>{cardDetail.time}</p>
                <p>{cardDetail.duration}</p>
            </div>

            <div className='location d-flex flex-column'>
                <p>{cardDetail.eventName}</p>
                <p>{cardDetail.venue}</p>
            </div>
        </div>
    </div>

        ))}
    </div>
  

    </div>
    
    
    

    </>
  )
}

export default ScheduleCard
