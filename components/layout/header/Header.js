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
