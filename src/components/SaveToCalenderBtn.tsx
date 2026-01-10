import React from 'react'

interface Props{
    title: string,
    details: string,
    location: string,
    startDate: string,
    endDate: string
}
const SaveToCalenderBtn = ({ title, details, location, startDate, endDate }: Props) => {
 const googleCalendarUrl = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
    title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
  return (
    <a
      href={googleCalendarUrl}
      target="_blank"
      rel="noopener noreferrer"
      className='nav-link btn'
    >
      {/* <button className='btn' style={{ padding: "10px 20px", fontSize: "1rem", cursor: "pointer" }}> */}
        Save to Google Calendar
      {/* </button> */}
    </a>
  )
}

export default SaveToCalenderBtn
