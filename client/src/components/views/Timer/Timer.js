import React,{ useState, useEffect, useRef } from "react";
import '../../../css/Timer/Timer.css';
const Timer = () => {
  const [min, setMin] = useState(30);
  const [sec, setSec] = useState(0);
  const time = useRef(1800);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);

    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    // 만약 타임 아웃이 발생했을 경우
    if (time.current < 0) {
      alert("타임 아웃");
      clearInterval(timerId.current);
      // dispatch event
    }
  }, [sec]);

  return (
    <div className="timer">
      00:{min<10 ? '0'+min : min}:{sec<10 ? '0'+sec : sec}
    </div>
  );
};
export default Timer;