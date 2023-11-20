import React from 'react'
import { Container, Typography, Box, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Styles from '../../../styles/Home.module.css'
import { BlueFilledBtn } from '../../../components/components';

const Hero = () => {
  return (
    <>
      <Container maxWidth="xxl" id="home_hero" className='p-0'>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          loop={true}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false, }}>
          <SwiperSlide className={`slide ${Styles.slider1}`} id="home-hero-slider1">
            <Grid container style={{ height: "inherit" }}>
              <Grid item xs={12} md={10} className="mx-auto d-flex justify-content-md-start justify-content-center align-items-center" style={{ height: "inherit" }} >
                <Box p={1}>
                  <Typography className={Styles.home_hero_head}><span className={Styles.blueSpan}>Family Quality</span> <br /><span className={Styles.whiteSpan}>Care</span></Typography>
                  <Typography className={Styles.home_hero_para}>Our team of dentist and staff always <br />ensure patients are treated like family...</Typography>
                  <Box mt={2}>
                    <BlueFilledBtn navlink={true} btnLink="/about-us/" btnTitle="READ MORE" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide className={`slide ${Styles.slider2}`} id="home-hero-slider2">
          <Grid container style={{ height: "inherit" }}>
              <Grid item xs={12} md={10} className="mx-auto d-flex justify-content-md-start justify-content-center align-items-center" style={{ height: "inherit" }} >
                <Box p={1}>
                  <Typography className={Styles.home_hero_head}><span className={Styles.blueSpan}>Experienced</span> <br /><span className={Styles.whiteSpan}>Service</span></Typography>
                  <Typography className={Styles.home_hero_para}>Our dentists are fully qualified <br />and have  years of Experience <br />in providing quality dental care.</Typography>
                  <Box mt={2}>
                    <BlueFilledBtn navlink={true} btnLink="/about-us/" btnTitle="READ MORE" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide className={`slide ${Styles.slider3}`} id="home-hero-slider3">
          <Grid container style={{ height: "inherit" }}>
              <Grid item xs={12} md={10} className="mx-auto d-flex justify-content-md-start justify-content-center align-items-center" style={{ height: "inherit" }} >
                <Box p={1}>
                  <Typography className={Styles.home_hero_head}><span className={Styles.blueSpan}>Child Dental</span> <br /><span className={Styles.whiteSpan}>Benefit Scheme</span></Typography>
                  <Typography className={Styles.home_hero_para}>Eligible families receive free  <br />treatments for up to 1000$. <br />Call us to find out if you are eligible.</Typography>
                  <Box mt={2}>
                    <BlueFilledBtn navlink={true} btnLink="/service/child-benefit/" btnTitle="READ MORE" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  )
}

export default Hero;