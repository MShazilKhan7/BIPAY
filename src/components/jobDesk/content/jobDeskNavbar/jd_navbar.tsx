import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from './jd_navbar.module.scss'
import { combineClasses } from "src/utils/utils";

interface navItem{
    name: string;
    path: string;
}

let navItems : navItem[] = [
    {
        name: "Allowance",
        path: 'allowance/',
    },
    {
        name: "Attendance",
        path: 'attendance/',

    },
    {
        name: "Leave",
        path: 'allowance/',

    },
    {
        name: "Folder",
        path: 'allowance/',

    },
    {
        name: "Assets",
        path: 'allowance/',

    },
    {
        name: "History",
        path: 'allowance/',

    },
    {
        name: "Salary",
        path: 'allowance/',

    },
    {
        name: "Pay run",
        path: 'allowance/',

    },
    {
        name: "Slip",
        path: 'allowance/',

    },
    {
        name: "Address",
        path: 'allowance/',

    },
    {
        name: "Contacts",
        path: 'allowance/',

    },
    {
        name: "Socials",
        path: 'allowance/',

    }
    ,
    {
        name: "Socials",
        path: 'allowance/',

    }
    ,
    {
        name: "Socials",
        path: 'allowance/',
    }
    ,
    {
        name: "Socials",
        path: 'allowance/',

    }
]


function JdNavbar():any{
    const jdNavs:any  = useRef(null)
    useEffect(()=>{
        const jdNavItems = jdNavs.current.querySelectorAll('div a')
        // jdNavItems[0].classList.add('font-bold')
        jdNavItems.forEach((item:any)=>{
            item.addEventListener('click', () => {
                jdNavItems.forEach((i:any) => {
                    i.classList.remove('font-bold');
                });
                item.classList.add('font-bold')
            })
            })
            
    })
    return (
        <div className="nested-navbar w-full h-[37px] px-2">
            <div ref={jdNavs} className= {combineClasses(styles.noScrollbar, styles.jdNavItems, "jd-nav-items flex items-center gap-3 w-full overflow-x-auto")}>
                {navItems.map((item, index) => (
                    <div key={index} className="py-2">
                        <NavLink  to={item.path} key={index} className="text-md whitespace-nowrap">{item.name}</NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JdNavbar;