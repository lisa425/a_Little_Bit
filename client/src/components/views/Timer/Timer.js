import React,{ useState, useEffect, useRef } from "react";
import '../../../css/Timer/Timer.css';
import WarningPage from './WarningPage';
const Timer = () => {
  const [min, setMin] = useState(10);
  const [sec, setSec] = useState(0);
  const time = useRef(600);
  const timerId = useRef(null);
  const [warning,setWarning] = useState(false);
  const getOpen = (bool) => {
    setWarning(bool);
  }

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
      setWarning(true);
      clearInterval(timerId.current);
    }
  }, [sec]);

  return (
    <article className="countdown">
      <div className="timer">
        00:{min<10 ? '0'+min : min}:{sec<10 ? '0'+sec : sec}
      </div>
      {warning && <WarningPage open={warning} getOpen={getOpen}/>}
    </article>
  );
};
export default Timer;