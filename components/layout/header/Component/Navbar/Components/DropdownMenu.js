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
                    </li>) : menu === 'service' ? [{ id: "service-menu-1", title: "WISDOM TEETH REMOVAL", path: "/service/wisdom-teeth-removal/" },
                    { id: "service-menu-2", title: "CHILD BENEFIT", path: "/service/child-benefit/" },
                    { id: "service-menu-3", title: "DENTAL IMPLANTS", path: "/service/dental-implants/" },
                    { id: "service-menu-4", title: "DENTURE", path: "/service/dentures/" },
                    { id: "service-menu-5", title: "TEETH WHITENING", path: "/service/teeth-whitening/" },
                    { id: "service-menu-6", title: "CROWN AND BRIDGES", path: "/service/crowns-and-bridge/" },
                    { id: "service-menu-7", title: "VENEERS", path: "/service/veneers/" },
                    { id: "service-menu-8", title: "INVISALIGN", path: "/service/teeth-aligners/" },
                    { id: "service-menu-9", title: "ROOT CANAL", path: "/service/root-canal/" },
                    { id: "service-menu-10", title: "TEETH CLEANING", path: "/service/teeth-cleaning/" },
                    { id: "service-menu-11", title: "DENTAL EMERGENCY", path: "/service/dental-emergency/" },
                    { id: "service-menu-12", title: "TOOTH FILLING", path: "/service/tooth-fillings/" },
                    { id: "service-menu-13", title: "SMILE DESIGN", path: "/service/smile-design/" }].map(item => <li className="nav-item mb-2" key={item.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                        <Link href={item.path}>
                            <a className='nav-link text-dark'>{item.title}</a>
                        </Link>
                    </li>) : null
                }
            </ul>
        </>
    )
}

export default DropdownMenu