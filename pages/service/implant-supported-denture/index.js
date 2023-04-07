import React, { useEffect, useState } from 'react'
import WPAPI from 'wpapi'
import Head from 'next/head'
import Image from 'next/image'
import { CommonHero, CommonSidebar, SectionalHeading, TermsNCondition, InterestFree, BookAndCall, CustomCard } from '../../../components/components'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { CheckCircleOutline } from '@mui/icons-material'
import Banner from '../../../public/SmileDesign/smile-design-bg.jpg'
import implant1 from '../../../public/implant/implant1.jpg'
import Gum_ulcer from '../../../public/implant/Gum_ulcer.jpg'
import ImplantBg from '../../../public/Implant-Support/ImplantBg.jpg'
import Overdentures from '../../../public/implant/Overdentures.jpg'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Implant = () => {
  const [show, setShow] = useState(false)
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
    { id: "SmileDesign_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "SmileDesign_breadcrumb_2", link: null, title: 'Implant Supported Denture' }
  ]

  return (
    <>
      <Head>
        <title> Implant supported denture in Carrum Downs | Carrum Downs Dental Group</title>
        <meta name="description" content="Are you looking to achieve the best smile? Carrum Downs Dental offers Smile Design service that uses a digital process to fix your smile. Contact us at 03-9782 1200." />
        <meta name="robots" content="noindex" />
      </Head>
      <CommonHero bg={ImplantBg} breadcrumb={breadcrumb} title="Implant supported denture"  color="#fff" />
      {
        show ? <>
          <main>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} lg={8}>
                        <section>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" title="Did you know that a lot of Individuals with convectional dentures end up not wearing them due to the simple fact that they don’t stay in place?"  color="var(--dark-blue)" />
                            <Box mt={3}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} md={6}>
                                  <Image src={implant1} alt="girl smiling" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Typography className='para'>Dental implants provide you with a means of ensuring that dentures remain firmly in position. It enables you to carry out your daily activities with confidence. An implant-supported overdenture is a denture that is held in place by implants and attached to the Many people have found dental implants procedure to secure their dentures in place to be very successful. As a result, the treatment has gained a lot of popularity as more and more people become aware of its amazing benefits and effectiveness. 
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Box>
                          </Container>
                        </section>
                       
                          <Container maxWidth="xxl" className='p-0'>
                            <Box p={1}>
                              <Typography className='para'>In fact, when compared to other implanted surgical devices, it has been reported that dental implants to support dentures have the highest success rate. 
                             </Typography>
                              <Typography className='para'>An implant-supported overdenture uses some special attachments that snap onto the implants. Like regular dentures, an implant-supported overdenture must be taken out at night for cleaning purposes. It would be best if you also cleaned the gums and implant attachments.</Typography>
                              <Typography className='para'>Millions of individuals across the globe are missing enough teeth to necessitate the use of conventional dentures. Therefore, most of them face difficulties keeping themselves securely in place, particularly in the lower jaw. If you struggle with loose dentures, you must be familiar with the embarrassment that comes with slipping dentures and the inability to enjoy your favorite foods.</Typography>
                            </Box>
                          </Container>
                           <Container maxWidth="xxl" className='p-0'> 
                            <Box mt={3}>
                              <Grid container>
                                <Grid item xs={12}>
                                  <Image src={Gum_ulcer} alt="smile" />
                                </Grid>
                                <Grid item xs={12}>
                              <Typography> Moreover, denture movement can result in gum ulcers. Having food caught under them during meal times can also be very embarrassing. 
                      Thankfully, there is a solution to make your denture function as intended: by stabilizing it with dental implants.
 </Typography>
</Grid>
                              </Grid>
                            </Box>
                          </Container>
                          <Container maxWidth="xxl" className='p-0'> 
                         <Box> 
                          <List>
                                {
                                  ["It enhances the ability to chew properly, resulting in a better diet and enhanced health.", "Enhances speech and confidence.", "Enhances comfort by reducing irritation of the gum tissue.", "Eliminates the expenses and inconvenience associated with denture adhesives.", "Often, it is feasible to use your current denture.", "The procedure is minimally invasive."].map(item => <ListItem key={item}>
                                    <ListItemIcon>
                                      < ArrowRightIcon style={{ color: "#117295" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                  </ListItem>)
                                }
                              </List>
                              </Box>
                              </Container>
                    <section className='mt-md-5 mt-4'>
                      <InterestFree />
                      <TermsNCondition />
                    </section>
                    <section className='mt-md-5 mt-4 bg-grey'>
                      <Container maxWidth="xxl" className="p-0">
                        <Box p={2}>
                          <SectionalHeading variant="h5" color="var(--dark-blue)" title="Book an appointment with Carrum Downs Dental (100 Hall Road) on 03-9782 1200 for your wisdom tooth extraction." align="center" />
                          <Box mt={2} className="d-flex justify-content-center">
                            <BookAndCall appointment={true} call={true} />
                          </Box>
                        </Box>
                      </Container>
                    </section>
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <CommonSidebar isContactAvailable={true} isServicesAvailable={true} />
                      </Grid>
                    </Grid>
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

export default Implant