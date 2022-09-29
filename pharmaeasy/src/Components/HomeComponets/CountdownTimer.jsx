// import "./styles.css";
import Countdown from "react-countdown";
import { useState } from "react";

export const timer = (props) => {
  const {  hours, minutes, seconds } = props;

  return (
    <div>
      {("0"+(hours)).slice(-2)}:{("0"+(minutes)).slice(-2)}:{("0"+(seconds)).slice(-2)} Left
    </div>
  );
};

export default function CountdownTimer() {
  const [completed, setCompleted] = useState(false);

  return (
    <div style={{color:"#f76b6c", fontSize:"19px", fontWeight:"700", width:"8rem" }}>
      {!completed && (
        <Countdown
          // date={new Date(2021, 8, 15)}
          date={Date.now() + 100000000} // add 10 seconds timer
          intervalDelay={1}
          onComplete={() => setCompleted(true)}
          renderer={timer}
        />
      )}
      {completed && <div>Times up!</div>}
    </div>
  );
}
