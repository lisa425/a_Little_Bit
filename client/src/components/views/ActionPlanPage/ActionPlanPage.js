import React,{useState} from 'react'

const ActionPlanPage = () => {
    const [pixel,setPixel] = useState(0)
    const actionPlanHandler = (carbon) => {
        let newPixel = carbon * pixel;
        setPixel(newPixel);
    } 
}

export default ActionPlanPage