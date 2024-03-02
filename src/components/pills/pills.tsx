import { useEffect, useState, useRef } from "react";


const Pill = ({props}:any) =>{
    const [color, setColor] = useState("");
    const [isBlack, setisBlack] = useState(false);
    const pillRef:any = useRef()
    useEffect(()=>{
        if(props.heading.toLowerCase()==='part-time'){
            setColor("#F0B732");
            setisBlack(true)
        }
        else if(props.heading.toLowerCase()==='full-time'){
            setColor("#0A7E22");
            setisBlack(false)

        }
        else if(props.heading.toLowerCase()==='contract'){
            setColor("#146ADC");
            setisBlack(false)

        }
        else if(props.heading.toLowerCase()==='seasonal'){
            setColor("#F5F5F5");
            setisBlack(true)

        }
        if(color){
            pillRef.current.style.backgroundColor = color;
            if(!isBlack){
                pillRef.current.querySelector('p').style.color = "#FFF"
            }
        }
        
    },[color])
    return (
            <div ref={pillRef} className="pill px-4 py-2 w-fit flex items-center justify-center rounded-[18px]">
                <p className={`font-semibold`}>{props.heading}</p>
            </div>
    )
}

export default Pill;