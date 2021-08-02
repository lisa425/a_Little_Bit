import {useState,useEffect} from 'react';

export default function useDraggable(el){
    const [{ x, y },setOffset] = useState({x:0,y:0});

    useEffect(()=>{
        const handleMouseDown = event => {
            const startX = event.pageX - x;
            const startY = event.pageY - y;

            const handelMouseMove = event =>{
                const newX = event.pageX - startX;
                const newY = event.pageY - startY;
                setOffset({x:newX,y:newY});
            };

            document.addEventListener("mousemove",handelMouseMove);

            document.addEventListener("mouseup",()=>{
                document.removeEventListener("mousemove",handelMouseMove);
            },{ once:true }
            );
        };
        el.current.addEventListener("mousedown",handleMouseDown);

        return()=>{
            el.current.removeEventListener("mousedown",handleMouseDown);
        };
    },[x,y]);
    
    useEffect(()=>{
        el.current.style.transform = `translate(${x}px,${y}px)`;
    },[x,y]);
}