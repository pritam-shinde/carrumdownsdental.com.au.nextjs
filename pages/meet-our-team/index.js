import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { CommonHero } from '../../components/components';
import Banner from '../../public/new-technology/new-tech.jpg'
import Jhauj from '../../public/meet-our-team/headshot.jpg'

const MeetOurTeam = () => {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState()

  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [])

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const breadcrumb = [
    { id: "new_technology_breadcrumb_1", link: null, title: "Meet Our Team" }
  ]

  return (
    <>

      <Head>
        <title>Meet Our Team – Carrum Downs Dental Group</title>
        <meta name="description" content="Our dental clinic has introduced new technologies to help enhance our practice and patient education. Explore the technologies" />
        <meta name="robots" content="index" />    
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Meet Our Team" align={width < 600 ? 'center' : 'left'} color="#fff" />
      {
        show ? <><main>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                 
                <Box py={5}>
                  {/* <Typography variant="h2" align="center">HELLO!</Typography> */}
                  <Typography className="para" >This is us – the carrumdowns dental Team.</Typography>
                  <Typography className="para" >We pride ourselves on delivering the best cosmetic and restorative dental care possible and love getting to know our patients on a personal level. More importantly, we strive to go beyond the obvious to create a great environment in which you can feel safe and welcome.</Typography>
                  <Typography className="para">We’re excited to meet you!</Typography>
                  <Box mt={3}>
                    <Grid container>
                      {
                        [
                          { id: "doc-1", docName: "Dr. Jhauj",image: Jhauj, para: ["Dr. Jhauj graduated from The University of Melbourne in the class of 2020. He enjoys all aspects of dentistry from cleanings, to implants. Dr. Jhauj is motivated to continuously growing his knowledge from taking courses involving oral-moderate sedation, orthodontics and implant dentistry. Dr. Jhauj has experience dealing with dental trauma having worked as the team dentist for an ice hockey team while living in Canada. In his spare time Dr. Jhauj enjoys staying physically active and plays a variety of sports including soccer, volleyball, golf and ice hockey."] },
                        ].map(item => <Grid key={item.id} className="mt-5">
                          <Box>
                            <Grid container spacing={5}>
                              <Grid item xs={12} md={3}>
                                <Card >
                                  <CardMedia component="img" image={item.image.src} alt="dr_img"/>
                                  <CardContent>
                                    <Typography variant="h3">{item.docName}</Typography>
                                    {/* {item.degree !== null ? <Typography variant="h4">{item.degree}</Typography> : null} */}
                                  </CardContent>
                                </Card>
                              </Grid>
                              <Grid item xs={12} md={9}>
                                <Box>
                                  {
                                    item.para.map((para, index) => <Typography key={`${item.id}.${index}`} className="para">{para}</Typography>)
                                  }
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>)
                      }
                    </Grid>
                  </Box>
                </Box>
                
              </Grid>
            </Grid>
          </Container>
        </main>
        </> : null
      }
    </>
  )
}

export default MeetOurTeam