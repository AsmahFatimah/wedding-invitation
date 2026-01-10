interface Props{
    overlay?: string,
    url: string,
    heading: string,
    subheading?: string
}
const Test = (props: Props) => {
  return (
    <>
    <div className='section' style={{ height: '92vh', background: props.overlay ? `${props.overlay}, url(${props.url})`: `${props.url}` }}>
         <div className="container d-flex justify-content-center align-items-center h-100 text-center">
        <div>
          {/* Main Heading */}
          {props.heading && (
            <h1 className="text-white mb-3">{props.heading}</h1>
          )}

          {/* Sub Heading / Verse */}
          {props.subheading && (
            <h5 className="text-white">{props.subheading}</h5>
          )}
        </div>
      </div>
    </div>

    </>
    
  )
}

export default Test;
