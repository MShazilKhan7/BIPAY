import React, { useEffect,useRef,useState } from "react";
import { Link } from "react-router-dom";
import HoverItem from "./hoveritem/hoveritem";
import { combineClasses } from "src/utils/utils";
import styles from './sidebar_item.module.scss'
function Item({props}:any) {
    const itemRef:any = useRef()
    const downArrowRef:any = useRef()
    let [showDropdown, setShowDropdown] = useState(false)

    useEffect(()=>{
        const handleMouseEnter = () => {
            if((props.hoveritems) && (props.hoveritems.length>0)){
                setShowDropdown(true);
                if (downArrowRef.current) {
                    downArrowRef.current.classList.remove(styles.deactivate);
                    downArrowRef.current.classList.add(styles.active);
                }
            }
        };

        const handleMouseLeave = () => {
            setShowDropdown(false);
            if (downArrowRef.current) {
                downArrowRef.current.classList.remove(styles.active)
                downArrowRef.current.classList.add(styles.deactivate) 
        }
        };

        const element = itemRef.current;
        if (element) {
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);

            // Cleanup event listeners when the component is unmounted
            return () => {
                element.removeEventListener("mouseenter", handleMouseEnter);
                element.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    })
    console.log(props)
    return(
        <div ref={itemRef} className="w-[240px]">
            <div className="item flex items-center justify-between w-full px-3 py-4 h-[45px] hover:bg-[#e0e0e0] relative">
                <Link  className="flex items-center justify-center gap-3 text-sm" to={props.path}>
                    <div className="text-[#404040] leading-4 text-[18px]">{props.icon}</div>
                    <div className="text-[#212143]">{props.name}</div>
                </Link>
               {(props.dropdown) && <div ref={downArrowRef} className={combineClasses(styles.downArrow)}>
                </div>}
            </div>
            {showDropdown && <HoverItem data={props.hoveritems}/>}
        </div>

    )
}

export default Item;