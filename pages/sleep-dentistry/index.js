import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { CommonHero, SectionalHeading } from '../../components/components'
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material'
import Image from 'next/image'
// import teethMissing1 from "../../public/teeth-missing/teeth-missing1.png"
import SleepDentistryWhat from "../../public/sleep-denstistry/smile-dentistry-what.jpg"
import SleepImg from "../../public/sleep-denstistry/sleep-dentisry.jpg"
import Image1 from "../../public/sleep-denstistry/dental-anxiety.jpg"
import Image2 from "../../public/sleep-denstistry/Patients-who-cannot-bear-pain.jpg"
import Image3 from "../../public/sleep-denstistry/bad-dental-experiences.jpg"
import styles from '../../styles/CardLayout.module.css'
import Sedation from "../../public/sleep-denstistry/sedation.jpg"
import HappyGas from "../../public/sleep-denstistry/happy-gas.jpg"
import Special from "../../public/sleep-denstistry/special-healthcare-needs.jpg"
import Banner from '../../public/sleep-denstistry/sleep-den-banner1.jpg'
import SleepDentistrySlider from '../../components/SleepDentistrySlider/SleepDentistrySlider'

const SleepDentistry = () => {
    const [show, setShow] = useState(false)
    const [width, setWidth] = useState()

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    useEffect(() => {
        if (typeof window !== undefined) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, []);
    const breadcrumb = [
        { id: "patient_referral_program_breadcrumb_1", link: null, title: "Referral Program" }
    ]

    return (
        <>
            <Head>
                <title>Sleep Dentistry Carrum Downs Dental Group</title>
                <meta name="description" content="" />
                <meta name="robots" content="noindex" />
            </Head>
            <CommonHero bg={Banner} breadcrumb={breadcrumb} align={width < 600 ? 'center' : 'left'} color="#fff" title="Referral Program" />
            {/* <section className="my-4 py-4">
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                        
                        </Grid>
                    </Grid>
                </Container>
            </section> */}
            <section className='py-4 my-4'>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Image src={SleepDentistryWhat} alt="teethMissing2" width={550} height={400} />
                        </Grid>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Box>
                                {/* <Typography variant="h5" component="h2" gutterBottom>
                                    Sleep Dentistry
                                </Typography> */}
                                <SectionalHeading variant="h2" title="Sleep Dentistry" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                <Typography className="para mt-2">
                                    Are you one of the many who feel anxious about dental appointments? Our clinic in Bayswater understands these concerns and offers Sleep Dentistry to make your visit as comfortable as possible. With this approach, you can undergo treatment without experiencing pain or anxiety, ensuring a smoother dental experience.
                                </Typography>

                                <Typography className="para" gutterBottom>
                                    At Healthy Smiles, we believe in the importance of timely dental care. By addressing dental issues promptly, you can avoid potential complications that may arise from postponing treatment. Additionally, investing in your oral health now can save you both time and money in the long run, as preventive measures are often more cost-effective than extensive procedures later on.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="my-4 py-4" style={{ background: "#d1cbcb52" }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box >
                                {/* <Typography variant="h5" component="h2" gutterBottom>
                                What is sleep dentistry?
                                </Typography> */}
                                <SectionalHeading variant="h2" title="What is sleep dentistry?" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                <Typography className="para mt-2" gutterBottom>
                                    If you find dentist visits to be stressful and you delay your appointments because of dental anxiety, the sleep dentistry is the solution. This procedure allows you to enter into a sleep induced by general anesthesia during the dental treatment.
                                </Typography>

                                <Typography className="para" gutterBottom>
                                    When you are at a dentist, sleep could be the easiest way to calm your nerves and complete the procedure.
                                    It helps you overcome problems of pain or discomfort that you may otherwise experience during the treatment. When you are under general anesthesia, your body enters into a sleep-like state. In this state of unconsciousness, you don&apos;t feel any pain.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center align-items-center'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/chwepyTgH5Q?si=NxpspEOMH3fErnEi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="py-4 my-4">
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <Box py={2}>
                                <SectionalHeading variant="h2" title="Sleep Dentistry for Patients with Severe Dental Anxiety" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                <Typography className="para mt-2">Sleep dentistry is a valuable solution for adults and children who suffer from severe dental anxiety or phobia. It involves using general anesthesia to put patients into full sleep during dental procedures.</Typography>
                                <Typography className="para">This approach is especially beneficial for those who cannot tolerate dental treatment in a traditional setting due to extreme fear or anxiety. While asleep, patients are completely unaware of the procedure, thus eliminating any fear or discomfort associated with dental treatments.</Typography>
                                <Box mt={2}>
                                    <Image src={SleepImg} alt="teethMissing2" height={650} width={1200} className="img-fluid" />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="py-4 my-4">
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <SectionalHeading variant="h2" title="Who should choose sleep dentistry?" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Typography className="para mt-2">At Healthy Smiles, our dentists work with the goal of serving patients with certain reservations about their dentist visits. Our sleep dentistry clinic helps people who face these or similar problems while coming for dental appointments:</Typography>
                        </Grid>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <Grid container justifyContent="center" spacing={4}>
                                <Grid item xs={12} md={4} sm={6}>
                                    <Card className={styles.card}>
                                        <CardMedia component="img" src={Image1.src} alt="scale and clean" className={styles.cardImage} />

                                        <CardContent className={styles.cardContent}>
                                            {/* <Typography variant="h5" component="h3" className="maintainance-title-font"> */}
                                            <Typography gutterBottom variant="h3" className=" maintainance-title-font veneer-font-color fs-4">
                                                People with dental anxiety problem
                                            </Typography>
                                            <Typography variant="body2" style={{ lineHeight: 1.8 }}>
                                                Does a visit to the dentist seem too difficult to plan because you fear the environment, the tools, or the idea of being at the dentist’s clinic?
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={4} sm={6}>
                                    <Card className={styles.card}>
                                        {/* <img src="/path/to/image2.jpg" alt="Image 2" className={styles.cardImage} /> */}
                                        <CardMedia component="img" src={Image2.src} alt="scale and clean" className={styles.cardImage} />

                                        <CardContent className={styles.cardContent}>
                                            <Typography variant="h5" component="h3" className=" maintainance-title-font veneer-font-color fs-4">
                                                Those who’ve had bad dental experiences
                                            </Typography>
                                            <Typography variant="body2" style={{ lineHeight: 1.8 }}>
                                                If your past dental experience makes you fear your next one and you have been searching for a ‘sleep dentist near me’ on search engines.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={4} sm={6}>
                                    <Card className={styles.card}>
                                        <CardMedia component="img" src={Image3.src} alt="scale and clean" className={styles.cardImage} />

                                        <CardContent className={styles.cardContent}>
                                            <Typography variant="h5" component="h3" className=" maintainance-title-font veneer-font-color fs-4">
                                                Patients who cannot bear pain
                                            </Typography>
                                            <Typography variant="body2" style={{ lineHeight: 1.8 }}>
                                                Some patients tend to have low tolerance for pain. As a result, even simple dental procedures may be painful for them.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="my-4 py-4" style={{ background: "#d1cbcb52" }}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <SectionalHeading variant="h2" title="What are the alternatives to sleep dentistry?" align={width > 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Typography className="para mt-2">Our clinic works with patients to understand their source of anxiety to help them through the dental procedure in the best way possible. While sleep dentistry is used in many cases, other alternatives are also discussed with patients according to their comfort and ability to tolerate pain.</Typography>
                        </Grid>
                        <Grid item xs={12} md={10} className="mx-auto pb-4">
                            <Grid container justifyContent="center" spacing={4}>
                                <Grid item xs={12} md={5} sm={6}>
                                    <Card className={styles.card}>
                                        <CardMedia component="img" src={Sedation.src} alt="scale and clean" className={styles.ChoosecardImage} />

                                        <CardContent className={styles.cardContent}>
                                            <Typography variant="h5" component="h3" className=" maintainance-title-font veneer-font-color fs-4">
                                                Sedation via inhalation
                                            </Typography>
                                            <Typography variant="body2" style={{ lineHeight: 1.8 }}>
                                                This innovative method of delivering anesthesia allows us to provide short-term dental analgesia an anesthetic through a special delivery mechanism often called green whistle (penthrox). Patients report minimal discomfort with this procedure.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={5} sm={6}>
                                    <Card className={styles.card}>
                                        {/* <img src="/path/to/image2.jpg" alt="Image 2" className={styles.cardImage} /> */}
                                        <CardMedia component="img" src={HappyGas.src} alt="scale and clean" className={styles.ChoosecardImage} />

                                        <CardContent className={styles.cardContent}>
                                            <Typography variant="h5" component="h3"  className=" maintainance-title-font veneer-font-color fs-4">
                                                Inhaling happy gas
                                            </Typography>
                                            <Typography variant="body2" style={{ lineHeight: 1.8 }}>
                                                If you don’t want a dentist that puts you to sleep, you can use happy gas through a nose piece to calm your nerves. Once the procedure completes, you will find the effects of the gas go away very quickly.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section>
                <SleepDentistrySlider />
            </section>
            <section className="py-4 my-4">
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <Box py={2}>
                                <SectionalHeading variant="h2" title="Sleep Dentistry for Patients with Special Healthcare Needs" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                <Image src={Special} alt="teethMissing2" height={550} width={1200} className="img-fluid mt-4" />
                            </Box>
                            <Box className="mt-2">
                                <Typography className="para">Sleep dentistry using general anesthesia is a dental practice where patients are put into deep sleep during dental procedures. This method is especially helpful for adults and children with special healthcare needs, such as severe anxiety, phobia, or certain medical conditions that make traditional dental treatment challenging.</Typography>
                                <Typography className="para">For such individuals, undergoing dental procedures while fully awake can be traumatic or unfeasible. General anesthesia in sleep dentistry allows for a completely pain-free and anxiety-free experience, as the patient is unconscious during the procedure. This approach can be crucial for performing essential dental work that the patient might otherwise avoid or be unable to tolerate</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="my-4 py-4" style={{ background: "#d1cbcb52" }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center align-items-center'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/OvFddlNlztk?si=WO1LtTCcTe4FvCH9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </Grid>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center py-4'>
                            <Box>
                                <SectionalHeading variant="h2" title="Happy Gas" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                <Typography className="para mt-2" gutterBottom>
                                    Happy gas, or laughing gas, as it is often called, is actually a combination of happy gas and oxygen delivered through a safe Porter System to achieve a mild form of analgesia and sedation.
                                    A nosepiece is normally used to deliver this sedative. Our Dentists often uses this form of Sleep dentistry for children over 12 years of age and adults who have mild anxiety issues and can tolerate a mask over their nose. As this form of anaesthesia depends on the patient’s ability to breathe comfortably through the nose, any form of the respiratory disorder can make this a difficult option for Sleep dentistry.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default SleepDentistry