import React from 'react';
import { Grid, Typography, Button, Paper, Container, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material'
import Image from 'next/image';
import Link from 'next/link';
import teethMissing1 from '../../public/teeth-missing/Demo 01.png'
import teethMissing2 from '../../public/teeth-missing/benefits.png'
import teethMissing3 from '../../public/teeth-missing/teeth-missing3 (1).png'
import teethMissing4 from '../../public/teeth-missing/teeth-missing4.png'
// import image2 from '../../../public/digital-denture/digital-denture-2.jpg'
// import image3 from '../../../public/digital-denture/digital-denture-3.jpg'
//  import BlueFilledBtn from '../../components/components';
import { BlueFilledBtn, BlueOulinedBtn, IconBtn } from '../../components/components';
import { SectionalHeading } from '../../components/components'

const index = () => {
    return (
        <>
            <section className='teeth-missing-section1' style={{
                marginTop: "12rem", backgroundColor: "#1ebdb6", marginBottom: "2rem", position: 'relative', 
                paddingTop: '100px',
                paddingBottom: '100px',
            }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h2" className='text-white' gutterBottom>
                                    Learn More About Missing Teeth
                                </Typography>
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    Are you struggling with missing teeth? Not only can it affect your appearance and confidence, but it can also lead to oral problems and impact your overall health. That's why restoring missing teeth is crucial, and Carrum Downs Dental Group is here to help. Our dental clinic offers a range of services that can address missing teeth, improve your oral health, and boost your self-esteem.
                                </Typography>
                                {/* <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                                    387029-3402
                                </Button>
                                <Button variant="outlined" color="primary">
                                    Book Appointment
                                </Button> */}
                                <Box>
                                    <BlueFilledBtn navlink={true} btnTitle="BOOK APPOINTMENT" btnLink="/book-now/" />
                                    <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                               
                            <Image src={teethMissing1} alt="Image"  width={500} height={300} />
                          
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <div className='lower_clipPath'></div>
            <section>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Image src={teethMissing2} alt="Image" width={600} height={400} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 1 }}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Restore Missing Teeth and Improve Your Overall Health
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Missing teeth can lead to a number of oral problems, including difficulty chewing and speaking. When one or more teeth are missing, it can also cause the surrounding teeth to shift out of place and affect your bite. This misalignment can then lead to issues such as tooth decay, gum disease, and even TMJ disorder.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    It's important to address missing teeth as soon as possible for both aesthetic and health reasons. With advancements in modern dentistry, there are various options available for restoring missing teeth that look natural and function like real teeth.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    At Carrum Downs Dental Group, we offer personalized treatment plans that cater specifically to each patient's needs. Our goal is always to restore our patients' smiles so they feel confident in their appearance while maintaining optimal oral health.
                                </Typography>
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </section>

            <div className='upper_clipPath'></div>
            <section style={{
                backgroundColor: "#1ebdb6", marginBottom: "2rem", position: 'relative',
                
                paddingBottom: '6rem',
            }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h2" className='text-white' gutterBottom>
                                    Dental Services That Can Address Missing Teeth
                                </Typography>
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    At Carrum Downs Dental Group, we understand the importance of addressing missing teeth to maintain oral health and improve overall well-being. Our dental team provides a range of services that can help restore your smile.
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText className='text-white'><strong>Dental Implants </strong> Dental implants are one of the most effective ways to replace missing teeth. They are surgically placed into the jawbone to act as artificial tooth roots. This allows for the secure attachment of replacement teeth; such as crowns or bridges. Implants provide a permanent solution that looks and feels like natural teeth. Additionally, they prevent bone loss in the jaw by stimulating bone growth through Osseointegration.</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText className='text-white'><strong>Dentures. </strong> Dentures are removable appliances customized to fit your mouth. We offer both full and partial dentures depending on the extent of tooth loss.</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText className='text-white'><strong>Dental Bridges. </strong>Bridges are one of the most effective ways to restore missing teeth. They consist of one or more artificial teeth anchored between existing natural teeth or dental implants.</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText className='text-white'><strong>Implant Supported Dentures. </strong>Often called as ‘Snap on Dentures’, An implant-supported denture is a denture attached to dental implants, with the implants providing improved stability and support. They are unlike regular (conventional) dentures which sit on the gumline without support.If you are missing a tooth and would like to restore your beautiful smile, contact us today at Carrum Downs Dental Clinic. Our experienced dentist will walk you through the available options and help you pick the best according to your preferences.
                                        </ListItemText>
                                    </ListItem>
                                </List>
                                <Box>
                                    <BlueFilledBtn navlink={true} btnTitle="BOOK APPOINTMENT" btnLink="/book-now/" />
                                    <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Image src={teethMissing3} alt="Image" width={600} height={400} />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <div className='lower_clipPath'></div>
            <section style={{
                marginTop: "2rem", marginBottom: "2rem", position: 'relative',
                paddingBottom: '20px',
            }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    What are the Benefits of Addressing a Missing Tooth?
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText  ><strong>Improved appearance </strong> By replacing a missing tooth, you can enhance your appearance and regain your confidence in social or professional settings. Your smile will look great, and you'll feel better than ever before.</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText  ><strong>Restored oral health </strong>Treating tooth loss can help you achieve optimal oral health. You'll be able to return to proper oral hygiene practices and live without discomfort.</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText ><strong>Restored functionality </strong> Addressing your missing tooth problem can restore the normal function of your mouth. You'll be able to chew, bite, and speak properly and regain the original benefits of your teeth. This can help you restore balance and aesthetics to your smile.</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText><strong>Support for remaining teeth </strong> Filling the gap created by a missing tooth can provide much-needed stability and support to adjacent teeth. It can help these teeth maintain proper alignment while preventing food debris from collecting in the empty space.
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <div className='upper_clipPath2'></div>
            <section style={{
                marginTop: "2rem", backgroundColor: "#1ebdb6", marginBottom: "2rem", position: 'relative',
               
                paddingBottom: '80px',
            }}>
                <Container>
                    <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                            <Image src={teethMissing4} alt="Image" width={600} height={400} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h2" className='text-white' gutterBottom>
                                    What are the Disadvantages of having a Missing Tooth?
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText className='text-white'><strong>Discomfort while eating </strong> Difficulty in chewing hard foods may lead to digestion issues and unhealthy snacking habits. Moreover, the unnatural movement of your mouth while chewing food can also cause jaw pain.</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText className='text-white' ><strong>Bone density loss </strong> Lack of motion in key areas of the jawbone can cause a reduction in bone mass and strength over time. This can result in weaker bones and significant loss of bone density.</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText className='text-white' ><strong>Premature facial aging </strong> Progressive bone loss without tooth roots stimulating the jawbone can make a face hollow over time.</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText className='text-white'><strong>Teeth misalignment </strong> The absence of support from missing teeth can cause the neighbouring teeth to move and shift, leading to misaligned teeth.
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText className='text-white'><strong>Speech impediments </strong> A missing tooth can result in difficulty communicating with others and create speech impediments.
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText className='text-white'><strong>Periodontal disease </strong> The space left behind by a missing tooth can become a breeding ground for bacteria, increasing the chances of infection and the potential development of gum disease.
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText className='text-white'><strong>Compromised facial aesthetics </strong> A missing tooth can impact the aesthetics of your smile, leaving a lasting impression on those around you. It may even cause feelings of embarrassment or unattractiveness.
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText className='text-white'><strong>Decreased confidence </strong> A missing tooth can result in plummeting self-esteem, preventing new experiences such as meaningful social connections or career opportunities.
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText className='text-white'><strong>Decreased confidence </strong> A missing tooth can result in plummeting self-esteem, preventing new experiences such as meaningful social connections or career opportunities.
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                        </ListItemIcon>
                                        <ListItemText className='text-white'><strong>What happens if I lose a tooth and don't replace it? </strong> Although a missing tooth may appear to be insignificant, it can result in various issues beyond just affecting your smile. The absence of support and stability provided by each tooth in your mouth can cause the remaining teeth to shift toward the empty space, resulting in an uneven bite. This can lead to difficulties while flossing and increase the likelihood of plaque build-up, potentially causing gum disease and further tooth loss.
                                        </ListItemText>
                                    </ListItem>
                                </List>

                            </Box>
                        </Grid>
                    </Grid>
                    {/* <svg className='bottom-clipPath' xmlns="http://www.w3.org/2000/svg" width="100%" height="182" viewBox="0 0 3000 182"><path fill="#1ebdb6" d="M-.8.4C533.5 23.5 633.5 123 1044.4 130.8c385.5 7.3 369.1-47.3 778.2-49.2 367.3-1.7 456 100 785.5 100C2813.5 181.6 2804.4.4 2999.2.4H-.8z" /></svg> */}
                </Container>
            </section>
            <div className='lower_clipPath'></div>
            <section className="mt-4 ">
                <Container>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ p: 2 }}>
                            <Box>
                                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions About Missing Teeth" align="center" />
                            </Box>
                            <Box mt={3}>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                What causes tooth loss?
                                            </button>
                                        </h3>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className='para'>Tooth loss can result from a variety of factors, including decay, gum disease, injury, or trauma.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Can missing teeth affect my overall health?
                                            </button>
                                        </h3>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className='para'>Yes! Missing teeth can impact your ability to eat and speak properly, which in turn affects your nutrition and confidence. It may also lead to bone loss in the jaw over time.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How long does it take to restore missing teeth?
                                            </button>
                                        </h3>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className='para'>The duration depends on the treatment plan selected by your dentist. In some cases, where there is enough healthy bone available at the site of the gap left behind by the missing tooth/teeth, an implant-supported crown can be completed relatively quickly - sometimes within one day!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default index
