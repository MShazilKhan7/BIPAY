import React from "react";
import { MdOutlineLanguage } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { combineClasses }  from "src/utils/utils";
import styles from '../topNavbar/topNavbar.module.scss'
import { Link } from "react-router-dom";



function TopNavbar(){
    return(
        <div className={combineClasses(
            styles.navbar,
            " h-12 w-full "
        )}>
            <div className="logo p-3">
                {/* <img src="" alt="" /> */}
                <h2 className="text-[#212143]">BIPAY</h2>
            </div>
            <div className={combineClasses(
               "flex side-icons items-center gap-5  px-10"
            )}>
                <Link to='#' className={combineClasses(styles.icon)}><MdOutlineLanguage/></Link>
                <Link to='#' className={combineClasses(styles.icon)}><IoMdNotificationsOutline/></Link>
                <Link to='#' className={combineClasses(styles.icon)}><FaRegCircle/></Link>
            </div>
        </div>
    )
}

export default TopNavbar;