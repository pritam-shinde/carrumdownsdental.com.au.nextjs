import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button, Box, IconButton } from "@mui/material";
import { Menu, Close, Phone, ArrowDropDown } from '@mui/icons-material'
import Logo from '../../../../../public/header/logo_new.png'
import Styles from '../../../../../styles/components-style/layout-style/header/Header.module.css'
import { BlueFilledBtn, BlueOulinedBtn, IconBtn } from '../../../../components';
import DropdownMenu from './Components/DropdownMenu';

const Navbar = () => {
  const [width, setWidth] = useState();
  const [clicked, setClicked] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServiceDropdown] = useState(false);
  const router = useRouter()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const closeMobileMenu = () => {
    setClicked(false)
    setServiceDropdown(false)
    setAboutDropdown(false)
  }

  return (
    <>
      {
        width > 1199 ? <nav className="navbar navbar-expand-xl bg-transparent">
          <Link href="/">
            <a className={`navbar-brand ${Styles.deskNavbarBrand}`}>
              <Image src={Logo} alt="carrumdowns dental clinic logo" />
            </a>
          </Link>
          <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <Menu />
          </Button>
          <Box className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
              <li className='nav-item'>
                <Link href="/">
                  <a className='nav-link'>HOME</a>
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <Link href="/about-us/">
                  <a className='nav-link dropdown-toggle' id="navbardropdown1" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">ABOUT US</a>
                </Link>
                <ul className="dropdown-menu p-2 border-0 shadow" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <Link href="/referral-program/">
                      <a className="nav-link dropdown-item">PATIENT REFERRAL PROGRAM</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/payment-plan/">
                      <a className="nav-link dropdown-item">PAYMENT PLAN</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/new-technologies/">
                      <a className="nav-link dropdown-item">NEW TECHNOLOGIES</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/offer/">
                      <a className="nav-link dropdown-item">OFFER</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/late-cancellation-policy/">
                      <a className="nav-link dropdown-item">LATE CANCELLATION POLICY</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <Link href="/service/">
                  <a className='nav-link dropdown-toggle'>SERVICES</a>
                </Link>
                <ul className="dropdown-menu border-0 shadow p-2">
                  <li className="nav-item">
                    <Link href="/service/wisdom-teeth-removal/">
                      <a className='nav-link dropdown-item'>WISDOM TEETH REMOVAL</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/service/child-benefit/">
                      <a className='nav-link dropdown-item'>CHILD BENEFIT</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/service/dental-implants/">
                      <a className='nav-link dropdown-item'>DENTAL IMPLANTS</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/service/dentures/">
                      <a className='nav-link dropdown-item'>DENTURE</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/service/teeth-whitening/">
                      <a className='nav-link dropdown-item'>TEETH WHITENING</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/service/crowns-and-bridge/">
                      <a className='nav-link dropdown-item'>CROWN AND BRIDGES</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/service/veneers/">
                      <a className='nav-link dropdown-item'>VENEERS</a>
                    </Link>
                  </li>
                  <li className="nav-item dropdown dropdown3">
                    <Link href="/service/teeth-aligners/">
                      <a className='nav-link dropdown-toggle text-dark" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true" style={{ color: "#000 !important" }}'>INVISALIGN</a>
                    </Link>
                           <ul className="dropdown-menu dropdown-menu-3 p-2 border-0">
                              <li className="nav-item">
                                <Link className='nav-link' href="/service/invisalign-open-day/">
                                  <a className="nav-link dropdown-item">INVISALIGN OPEN DAY</a>
                                </Link>
                              </li>                           
                            </ul>                    
                  </li>
                  <li className="nav-item">
                    <Link href="/service/root-canal/">
                      <a className='nav-link dropdown-item'>ROOT CANAL</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/service/teeth-cleaning/">
                      <a className='nav-link dropdown-item'>TEETH CLEANING</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/service/dental-emergency/">
                      <a className='nav-link dropdown-item'>DENTAL EMERGENCY</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/service/tooth-fillings/">
                      <a className='nav-link dropdown-item'>TOOTH FILLING</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/service/smile-design/">
                      <a className='nav-link dropdown-item'>SMILE DESIGN</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link href="/blog/">
                  <a className='nav-link'>BLOG</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href="/contact-us/">
                  <a className='nav-link'>CONTACT US</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href="/how-we-can-reduce-the-spread-of-corona-virus-together/">
                  <a className='nav-link'>COVID-19</a>
                </Link>
              </li>
            </ul>
            <Box>
              <BlueFilledBtn navlink={true} btnTitle="BOOK NOW" btnLink="/book-now/" />
              <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
            </Box>
          </Box>
        </nav> : <nav className='navbar navbar-expand-xl bg-transparent px-2'>
          <Button className="menu-icon" onClick={() => setClicked(!clicked)}>
            {clicked ? <Close className='text-white' /> : <Menu />}
          </Button>
          <Link href="/">
            <a className={`navbar-brand ${Styles.deskNavbarBrand}`}>
              <Image src={Logo} alt="carrumdowns dental clinic Logo" />
            </a>
          </Link>
          {
            router.pathname !== '/book-now' ? <BlueFilledBtn navlink={true} btnTitle="BOOK NOW" btnLink="/book-now/" /> : null
          }
          <IconBtn variant="outlined" anchor={true} icon={<Phone />} btnLink="tel:03-9782 1200" />
          <Box className={`${clicked ? 'nav-menu active' : 'nav-menu'}`}>
            <Link href="/">
              <a className={`navbar-brand deskNavbarBrandMenu`}>
                <Image src={Logo} alt="carrumdowns dental clinic logo" />
              </a>
            </Link>
            <Box px={2} py={5}>
              <ul className='navbar-nav mob'>
                <li onClick={closeMobileMenu}>
                  <Link href="/">
                    <a className="text-white nav-link">HOME</a>
                  </Link>
                </li>
                <li className="nav-item dropdownListItem">
                  <Box className='d-flex align-items-center'>
                    <Link href="/about-us/">
                      <a className="nav-link text-white" onClick={closeMobileMenu}>ABOUT</a>
                    </Link>
                    <IconButton onClick={() => { setAboutDropdown(!aboutDropdown); setServiceDropdown(false) }}>
                      <ArrowDropDown className="text-white" />
                    </IconButton>
                  </Box>
                </li>
                {aboutDropdown ? <DropdownMenu menu="about" closeMobileMenu={closeMobileMenu} /> : null}
                <li className="nav-item dropdownListItem">
                  <Box className='d-flex align-items-center'>
                    <Link href="/service/">
                      <a className="nav-link text-white" onClick={closeMobileMenu}>SERVICES</a>
                    </Link>
                    <IconButton onClick={() => { setAboutDropdown(false); setServiceDropdown(!servicesDropdown) }}>
                      <ArrowDropDown className="text-white" />
                    </IconButton>
                  </Box>
                </li>
                {servicesDropdown ? <DropdownMenu menu="service" closeMobileMenu={closeMobileMenu} /> : null}
                <li onClick={closeMobileMenu}>
                  <Link href="/blog/">
                    <a className="text-white nav-link">BLOG</a>
                  </Link>
                </li>
                <li onClick={closeMobileMenu}>
                  <Link href="/contact-us/">
                    <a className="text-white nav-link">CONTACT US</a>
                  </Link>
                </li>
                <li onClick={closeMobileMenu}>
                  <Link href="/how-we-can-reduce-the-spread-of-corona-virus-together/">
                    <a className="text-white nav-link">COVID-19</a>
                  </Link>
                </li>
              </ul>
            </Box>
          </Box>
        </nav>
      }
    </>
  )
}

export default Navbar
