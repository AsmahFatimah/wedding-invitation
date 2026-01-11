import Navbar from '../components/Navbar';
import ScheduleCard from '../components/ScheduleCard';
import Footer from '../components/Footer';

function Schedule() {
  return (
    <>
      <Navbar></Navbar>
      <ScheduleCard cardDetails={
        [
          {
            date: '17th Jan',
            time: '10:00 A.M',
            duration: '3 hours',
            eventName: 'Game Day',
            venue: 'to be announced'
          },
          {
            date: '24th Jan',
            time: '07:00 P.M',
            duration: '3 hours',
            eventName: 'Nikah + Qawali',
            venue: 'to be announced'
          },
          {
            date: '28th Jan',
            time: '05:30 P.M',
            duration: '3 hours',
            eventName: 'Mehndi lagayi + Maiyun',
            venue: 'Zaffar Residence'
          },
          {
            date: '30th Jan',
            time: '07:00 P.M',
            duration: '3 hours',
            eventName: 'Shendi',
            venue: 'Dewan-e-Khas Marquee'
          },
          {
            date: '31st Jan',
            time: '07:30 P.M',
            duration: '3 hours',
            eventName: 'Walima',
            venue: 'Dewan-e-Khas Marquee'
          }
        ]
      }></ScheduleCard>
      <Footer></Footer>
    </>
  );
}

export default Schedule;
