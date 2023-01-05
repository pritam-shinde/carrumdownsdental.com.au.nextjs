import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Topbar, Navbar } from './Component/Components'
import Styles from '../../../styles/components-style/layout-style/header/Header.module.css'
import Marquee from "react-fast-marquee";
import Link from 'next/link'

const Header = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
  }, [width]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50 && width > 1199) {
        document.querySelector('header').style.cssText = `
        background-color: #fff;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
        `
      } else if (window.scrollY < 50 && width > 1199) {
        document.querySelector('header').style.cssText = `
        background-color: rgba(255, 255, 255, 0.5);
        `
      } else if (width < 1199 && window.scrollY > 0) {
        document.querySelector('header').style.cssText = `
        background-color: #fff;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
        `
      }
    })
  }, [width])

  return (
    <>

      <header className={Styles.header}>
        <Container className='p-0' maxWidth="xxl" style={{ position: 'relative', zIndex: 10000 }}>
          <Marquee speed={50} className='bg-white'>
            <span className='ms-5 me-5 text-danger'>
              <b>We are OPEN throughout the holiday season for your family Emergencies. <a href="tel:03-9782 1200">Call us</a> or Click on <Link href="/book-now/">BOOK NOW</Link></b>
            </span>
            <span className='ms-5 me-5 text-danger'>
              <b>We are OPEN throughout the holiday season for your family Emergencies. <a href="tel:03-9782 1200">Call us</a> or Click on <Link href="/book-now/">BOOK NOW</Link></b>
            </span>
            <span className='ms-5 me-5 text-danger'>
              <b>We are OPEN throughout the holiday season for your family Emergencies. <a href="tel:03-9782 1200">Call us</a> or Click on <Link href="/book-now/">BOOK NOW</Link></b>
            </span>
            <span className='ms-5 me-5 text-danger'>
              <b>We are OPEN throughout the holiday season for your family Emergencies. <a href="tel:03-9782 1200">Call us</a> or Click on <Link href="/book-now/">BOOK NOW</Link></b>
            </span>
          </Marquee>
        </Container>
        <Container maxWidth="xxl" className='px-0 px-lg-2'>
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Topbar />
              <Navbar />
            </Grid>
          </Grid>
        </Container>
      </header>
    </>
  )
}

export default Header
