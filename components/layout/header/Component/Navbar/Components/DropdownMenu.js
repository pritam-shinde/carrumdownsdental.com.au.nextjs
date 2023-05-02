import { useState } from 'react'
import Link from "next/link";

const DropdownMenu = ({ menu, closeMobileMenu }) => {
    const [click, setClick] = useState(false);
    const handleOnClick = () => {
        setClick(!click)
    }
    return (
        <>
            <ul onClick={handleOnClick} className={`${click ? 'dropdownMenu clicked' : 'dropdownMenu'}      shadow p-3 bg-white`}>
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
                    </li>) : menu === 'service' ? [{ id: "service-menu-1", title: "WISDOM TEETH REMOVAL", path: "/service/wisdom-teeth-removal/", submenu: null },
                    { id: "service-menu-2", title: "CHILD BENEFIT", path: "/service/child-benefit/", submenu: null },
                    { id: "service-menu-3", title: "DENTAL IMPLANTS", path: "/service/dental-implants/", submenu: null },
                    { id: "service-menu-4", title: "DENTURE", path: "/service/dentures/", submenu: null },
                    { id: "service-menu-5", title: "TEETH WHITENING", path: "/service/teeth-whitening/", submenu: null },
                    { id: "service-menu-6", title: "CROWN AND BRIDGES", path: "/service/crowns-and-bridge/", submenu: null },
                    { id: "service-menu-7", title: "VENEERS", path: "/service/veneers/", submenu: null },
                    {
                        id: "service-menu-8", title: "INVISALIGN", path: "/service/teeth-aligners/", submenu: [
                            { id: "services-menu-8.1", link: "/invisalign-open-day/", text: "INVISALIGN OPEN DAY" },
                        ]
                    },
                    { id: "service-menu-9", title: "ROOT CANAL", path: "/service/root-canal/", submenu: null },
                    { id: "service-menu-10", title: "TEETH CLEANING", path: "/service/teeth-cleaning/", submenu: null },
                    { id: "service-menu-11", title: "DENTAL EMERGENCY", path: "/service/dental-emergency/", submenu: null },
                    { id: "service-menu-12", title: "TOOTH FILLING", path: "/service/tooth-fillings/", submenu: null },
                    { id: "service-menu-13", title: "SMILE DESIGN", path: "/service/smile-design/", submenu: null },
                    { id: "service-menu-14", title: "DIGITAL DENTURES", path: "/service/digital-dentures/", submenu: null },
                    { id: "service-menu-15", title: "IMPLANT SUPPORTED DENTURE", path: "/service/implant-supported-denture/", submenu: null }].map(item => <li className="nav-item mb-2" key={item.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                        <Link href={item.path}>
                            <a className='nav-link text-dark'>{item.title}</a>
                        </Link>
                        {
                            item.submenu !== null ? <ul className='ps-3 ms-3' style={{ borderLeft: "1px solid #555" }}>
                                {
                                    item.submenu.map(menu => <li className="nav-item mb-2" key={menu.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                                        <Link legacyBehavior={true} href={menu.link}>
                                            <a className='nav-link text-dark'>{menu.text}</a>
                                        </Link>
                                    </li>)
                                }
                            </ul> : null
                        }
                    </li>) : menu === "dentalProblems" ? [
                        { id: "dentalProblems-1", title: "WISDOM TOOTH PAIN", path: "/referral-program/" },
                        { id: "dentalProblems-2", title: "TOOTH GAPS", path: "/payment-plan/" },
                        { id: "dentalProblems-3", title: "TEETH SENSITIVITY", path: "/new-technologies/" },
                        { id: "dentalProblems-4", title: "STAINED TEETH", path: "/offer/" },
                        { id: "dentalProblems-5", title: "SEVERE TOOTHACHE", path: "/offer/" },
                        { id: "dentalProblems-6", title: "KNOCKED OUT TEETH", path: "/offer/" },
                        { id: "dentalProblems-7", title: "GUM DISEASE", path: "/offer/" },
                        { id: "dentalProblems-8", title: "DRY SOCKET", path: "/offer/" },
                        { id: "dentalProblems-9", title: "DENTAL ABSCESS", path: "/offer/" },
                        { id: "dentalProblems-10", title: "CROOKED TEETH", path: "/offer/" },
                        { id: "dentalProblems-11", title: "CHIPPED OR CRACKED TOOTH", path: "/offer/" },
                        { id: "dentalProblems-12", title: "BRUXISM", path: "/offer/" },
                        { id: "dentalProblems-13", title: "BLEEDING GUMS", path: "/offer/" },
                        { id: "dentalProblems-14", title: "BITE PROBLEMS", path: "/offer/" },
                         { id: "dentalProblems-15", title: "BAD BREATH", path: "/offer/" },
                    ].map(item => <li className="nav-item mb-2" key={item.id} onClick={() => { setClick(false); closeMobileMenu() }}>
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