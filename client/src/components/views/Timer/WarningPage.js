import React,{useState,useRef,useEffect} from "react";
import '../../../css/Timer/WarningPage.css';

const WarningPage = (props) => {
    const [open,setOpen] = useState(false);

    useEffect(() => {
        if(props.open === true){
            setOpen(true)
        }
    }, [])

    const closeWarning = () => {
        props.getOpen(false);
        setOpen(false);
        window.location.reload();
    }

    return(
        <section className="warning" >
            <div className="warning-modal">
                <div className="warning-text">
                    <h2>Warning!</h2>
                    <p>권장 접속 시간을 초과했습니다. <br/>탄소 발생을 막기 위해 사이트를 닫아주세요!</p>
                </div>
                <button className="warning-btn" onClick={closeWarning}>yes</button>
            </div>
        </section>
    )
}

export default WarningPage;