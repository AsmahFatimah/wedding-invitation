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
    <div className="mainDiv d-flex justify-content-md-between justify-content-center align-items-center align-items-md-baseline flex-column flex-lg-row py-5 container">
        <div className="leftDiv d-flex justify-content-center flex-column align-items-lg-center ">
                <img src={butterfly} alt="" width={90} height={90} />
                <h1 className='text-capitalize fw-bold'>wedding details</h1>
                <h3>17 - 31 January 2026</h3>
        </div>

        <div className="rightDiv">
            {
            details.map((detail, index) => (
                <div key={index} className='customCard'>
                    <img src = {detail.imgUrl} width={170} height={170}></img>
                    <h2>{detail.title}</h2>
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
