import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Box, IconButton } from "@mui/material";
import { Menu, Close, Phone, ArrowDropDown } from "@mui/icons-material";
import Logo from "../../../../../public/header/logo_new.png";
import Styles from "../../../../../styles/components-style/layout-style/header/Header.module.css";
import { BlueFilledBtn, BlueOulinedBtn, IconBtn } from "../../../../components";
import DropdownMenu from "./Components/DropdownMenu";
import { useRouter } from "next/router";

const NavbarMobile = () => {
    const [clicked, setClicked] = useState(false);
    const [aboutDropdown, setAboutDropdown] = useState(false);
    const [servicesDropdown, setServiceDropdown] = useState(false);
    const [dentalProblems, setDentalProblems] = useState(false);
    const router = useRouter();

    const closeMobileMenu = () => {
        setClicked(false);
        setServiceDropdown(false);
        setAboutDropdown(false);
        setDentalProblems(false);
    };
    return (
        <nav className="navbar navbar-expand-xl bg-transparent px-2">
            <Button className="menu-icon" onClick={() => setClicked(!clicked)}>
                {clicked ? <Close className="text-white" /> : <Menu />}
            </Button>
            <Link href="/">
                <a className={`navbar-brand ${Styles.deskNavbarBrand}`}>
                    <Image src={Logo} alt="carrumdowns dental clinic Logo" />
                </a>
            </Link>
            {router.pathname !== "/book-now" ? <BlueFilledBtn navlink={true} btnTitle="BOOK NOW" btnLink="/book-now/" /> : null}
            <IconBtn variant="outlined" anchor={true} icon={<Phone />} btnLink="tel:03-9782 1200" />
            <Box className={`${clicked ? "nav-menu active" : "nav-menu"}`}>
                <Link href="/">
                    <a className={`navbar-brand deskNavbarBrandMenu`}>
                        <Image src={Logo} alt="carrumdowns dental clinic logo" />
                    </a>
                </Link>
                <Box px={2} py={5}>
                    <ul className="navbar-nav mob">
                        <li onClick={closeMobileMenu}>
                            <Link href="/">
                                <a className="text-white nav-link">HOME</a>
                            </Link>
                        </li>
                        <li className="nav-item dropdownListItem">
                            <Box className="d-flex align-items-center">
                                <Link href="/about-us/">
                                    <a className="nav-link text-white" onClick={closeMobileMenu}>
                                        ABOUT
                                    </a>
                                </Link>
                                <IconButton
                                    onClick={() => {
                                        setAboutDropdown(!aboutDropdown);
                                        setServiceDropdown(false);
                                    }}>
                                    <ArrowDropDown className="text-white" />
                                </IconButton>
                            </Box>
                        </li>
                        {aboutDropdown ? <DropdownMenu menu="about" closeMobileMenu={closeMobileMenu} /> : null}
                        <li className="nav-item dropdownListItem">
                            <Box className="d-flex align-items-center">
                                <Link href="/service/">
                                    <a className="nav-link text-white" onClick={closeMobileMenu}>
                                        SERVICES
                                    </a>
                                </Link>
                                <IconButton
                                    onClick={() => {
                                        setAboutDropdown(false);
                                        setServiceDropdown(!servicesDropdown);
                                    }}>
                                    <ArrowDropDown className="text-white" />
                                </IconButton>
                            </Box>
                        </li>
                        {servicesDropdown ? <DropdownMenu menu="service" closeMobileMenu={closeMobileMenu} /> : null}
                        <li className="nav-item dropdownListItem">
                            <Box className="d-flex align-items-center">
                                <Link href="/dental-problems/">
                                    <a className="nav-link text-white" onClick={closeMobileMenu}>
                                        Dental Problems
                                    </a>
                                </Link>
                                <IconButton
                                    onClick={() => {
                                        setDentalProblems(false);
                                        setDentalProblems(!dentalProblems);
                                    }}>
                                    <ArrowDropDown className="text-white" />
                                </IconButton>
                            </Box>
                        </li>
                        {dentalProblems ? <DropdownMenu menu="dentalProblems" closeMobileMenu={closeMobileMenu} /> : null}
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
                    </ul>
                </Box>
            </Box>
        </nav>
    );
};

export default NavbarMobile;
