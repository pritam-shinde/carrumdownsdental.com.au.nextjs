import { useState } from 'react'
import Link from "next/link";

const DropdownMenu = ({ menu, closeMobileMenu }) => {
    const [click, setClick] = useState(false);
    const handleOnClick = () => {
        setClick(!click)
    }
    return (
        <>
            <ul onClick={handleOnClick} className={`${click ? 'dropdownMenu clicked' : 'dropdownMenu'} shadow p-3 bg-white`}>
                {
                    menu === "about" ? [
                        { id: "about-menu-1", title: "PATIENT REFERRAL PROGRAM", path: "/referral-program/" },
                        { id: "about-menu-2", title: "PAYMENT PLAN", path: "/payment-plan/" },
                        { id: "about-menu-3", title: "NEW TECHNOLOGIES", path: "/new-technologies/" },
                        { id: "about-menu-4", title: "OFFER", path: "/offer/" }
                    ].map(item => <li className="nav-item mb-2" key={item.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                        <Link href={item.path}>
                            <a className='nav-link text-dark'>{item.title}</a>
                        </Link>
                    </li>) : menu === 'service' ? [{ id: "service-menu-1", title: "WISDOM TEETH REMOVAL", path: "/service/wisdom-teeth-removal/",submenu:null },
                    { id: "service-menu-2", title: "CHILD BENEFIT", path: "/service/child-benefit/" ,submenu:null},
                    { id: "service-menu-3", title: "DENTAL IMPLANTS", path: "/service/dental-implants/" ,submenu:null},
                    { id: "service-menu-4", title: "DENTURE", path: "/service/dentures/" ,submenu:null},
                    { id: "service-menu-5", title: "TEETH WHITENING", path: "/service/teeth-whitening/" ,submenu:null},
                    { id: "service-menu-6", title: "CROWN AND BRIDGES", path: "/service/crowns-and-bridge/" ,submenu:null},
                    { id: "service-menu-7", title: "VENEERS", path: "/service/veneers/" ,submenu:null},
                    { id: "service-menu-8", title: "INVISALIGN", path: "/service/teeth-aligners/" ,submenu:[
                        {id:"service-submenu-8.1", title:"INVISALIGN OPEN DAY", path:"/service/invisalign-open-day/"}
                    ]},
                    { id: "service-menu-9", title: "ROOT CANAL", path: "/service/root-canal/" ,submenu:null},
                    { id: "service-menu-10", title: "TEETH CLEANING", path: "/service/teeth-cleaning/" ,submenu:null},
                    { id: "service-menu-11", title: "DENTAL EMERGENCY", path: "/service/dental-emergency/" ,submenu:null},
                    { id: "service-menu-12", title: "TOOTH FILLING", path: "/service/tooth-fillings/" ,submenu:null},
                    { id: "service-menu-13", title: "SMILE DESIGN", path: "/service/smile-design/" ,submenu:null}].map(item => <li className="nav-item mb-2" key={item.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                        <Link href={item.path}>
                            <a className='nav-link text-dark'>{item.title}</a>                            
                        </Link>
                        {
                           item.submenu !== null ? <ul className = 'shadow p-3 bg-white'>
                           {
                               item.submenu.map(menu =>  <li className="nav-item mb-2" key={menu.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                               <Link legacyBehavior={true} href={menu.path}>
                                   <a className="nav-link text-dark">{menu.title}</a>
                               </Link>
                               </li>)
                           }     
                          
                            </ul> :null
                        }
                       
                    </li>) : null
                }
            </ul>
        </>
    )
}

export default DropdownMenu