interface CountdownRendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}



const CountdownRenderer  = ({ days,
  hours,
  minutes,
  seconds,
  completed} : CountdownRendererProps) => {
 

  if (completed) {
    return <span style={{ fontSize: "2rem", fontWeight: "bold" }}>🎉 Wedding Day! 🎉</span>;
  } else {
    return (
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", fontSize: "1.5rem", marginTop: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{days}</div>
          Days
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{hours}</div>
          Hours
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{minutes}</div>
          Minutes
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{seconds}</div>
          Seconds
        </div>
      </div>
    );
  }
};

export default CountdownRenderer;
