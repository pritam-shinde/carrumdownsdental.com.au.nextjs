import React, { useState, useEffect } from "react";
import Banner from "../../public/Services/service-bg.jpg";
import { BlueFilledBtn, BlueOulinedBtn, CommonHero, SectionalHeading } from "../../components/components";
import { Grid, Typography, Paper, Container, Box, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, Card } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import DentalProblem1 from "../../public/dental-problems-img/Dental_problem.png";
import DentalProblem2 from "../../public/dental-problems-img/Dental_problem_01.png"
import Head from "next/head";
import PageContent from "../../components/PageContent";
import Wisdom from "../../public/dental-problems-img/wisdom-teeth/Wisdom_teeth_01.png";
import ToothGap from "../../public/dental-problems-img/tooth gaps/Tooth_gaps-02.png";
import TeethSensitivity from "../../public/dental-problems-img/teeth sensitivity/teeth_sensitivity_01.png";
import StainedTeeth from "../../public/dental-problems-img/stained teeth/Stained_teeth_01.png";
import SevereToothache from "../../public/dental-problems-img/severe toothache/Severe_Toothache_01.png";
import KnockedOutTooth from "../../public/dental-problems-img/knocked out tooth/Knocked_Out_Tooth_01.png";
import DrySocket from "../../public/dental-problems-img/dry socket/Dry_socket_03.png";
import CrookedTeeth from "../../public/dental-problems-img/crooked teeth/Crooked_Teeth_01.png";
import ChippedOrCrackedTooth from "../../public/dental-problems-img/chipped or cracked tooth/Chipped_or_Cracked_Tooth_01.png";
import GumDisease from "../../public/dental-problems-img/gum disease/Gum_Disease_01.png";
import DentalAbscess from "../../public/dental-problems-img/dental abscess/Dental_Abscess_01.png";
import BiteProblems from "../../public/dental-problems-img/bite problems/Bite_problems_01.png";
import Bruxism from "../../public/dental-problems-img/bruxism/Bruxism_01.png";
import BleedingGums from "../../public/dental-problems-img/bleeding gums/Bleeding_Gums_01.png";
import BadBreath from "../../public/dental-problems-img/bad breath/bad_breath_01.png";
 
const tabs = [
  "Bad Breath",
  "Bite Problems",
  "Bleeding Gums",
  "Bruxism",
  "Chipped Or Cracked Tooth",
  "Crooked Teeth",
  "Dental Abscess",
  "Dry Socket",
  "Gum Disease",
  "Knocked Out Teeth",
  "Severe Toothache",
  "Stained Teeth",
  "Teeth Sensitivity",
  "Tooth Gap",
  "Wisdom Tooth pain", 
];

const index = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null); // Close the currently open accordion
    } else {
      setOpenAccordion(index); // Open the clicked accordion
    }
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const mobilePageData = [
    {
      title: "Bad Breath",
      content: "Halitosis, commonly known as bad breath, is a prevalent issue that can lead to feelings of embarrassment and unease in some people. At Carrum Downs Dental Group, our range of services is dedicated to tackling bad breath and providing proactive measures to maintain the overall health of your oral cavity.",
      imageSrc: BadBreath,
      readMoreLink: "/dental-problems/bad-breath",
    },
    {
      title: "Bite Problems",
      content: "A bad bite alignment can lead to oral health problems if left untreated. However, seeking early intervention can prevent minor issues from progressing into more significant dental concerns. At Carrum Downs Dental Group, we provide treatments to help correct bite issues before they negatively impact your oral health and smile.",
      imageSrc: BiteProblems,
      readMoreLink: "/dental-problems/bite-problems",
    },
    {
      title: "Bleeding Gums",
      content: "If your gums are experiencing frequent bleeding, this might indicate the presence of gum disease or another dental issue. At Carrum Downs Dental Group, we are dedicated to identifying the underlying cause of the bleeding and providing appropriate dental solutions to tackle the problem effectively.",
      imageSrc: BleedingGums,
      readMoreLink: "/dental-problems/bleeding-gums",
    },
    {
      title: "Bruxism",
      content: "Bruxism is the habit of grinding or clenching your teeth, which can cause pain. It can also cause tooth wear and fractures if left unaddressed. Carrum Downs Dental Group offers treatment options to help relieve symptoms from this uncomfortable disorder.",
      imageSrc: Bruxism,
      readMoreLink: "/dental-problems/bruxism",
    },
    {
      title: "Chipped Or Cracked Tooth",
      content: "Is your smile being affected by chipped or cracked teeth? These issues don't just impact your appearance; they can also lead to oral health problems. At Carrum Downs Dental Group, we understand how inconvenient and painful damaged teeth can be. Our experienced dentists can provide you with the care and treatment needed to repair your teeth and restore your confident, healthy smile.",
      imageSrc: ChippedOrCrackedTooth,
      readMoreLink: "/dental-problems/chipped-or-cracked-tooth",
    },
    {
      title: "Crooked Teeth",
      content: "Misaligned teeth aren't solely a cosmetic concern; they can also give rise to significant oral health complications. Pursuing treatment for crooked teeth is crucial to address both aesthetic and dental considerations.",
      imageSrc: CrookedTeeth,
      readMoreLink: "/dental-problems/crooked-teeth",
    },
    {
      title: "Dental Abscess",
      content: "A dental abscess is a serious condition that requires prompt treatment. These infections, filled with pus, develop in the teeth, gums or jawbone and can rapidly cause swelling, severe pain, and even tooth loss if left unchecked.",
      imageSrc: DentalAbscess,
      readMoreLink: "/dental-problems/dental-abscess",
    },
    {
      title: "Dry Socket",
      content: "A dry socket has the potential to cause intense discomfort and pain following a tooth extraction. At Carrum Downs Dental Group, we specialize in effectively managing this condition, offering relief from the distressing pain it can bring.",
      imageSrc: DrySocket,
      readMoreLink: "/dental-problems/dry-socket",
    },
    {
      title: "Gum Disease",
      content: "If you're facing issues with gum disease, Carrum Downs Dental Group is here to provide assistance. Our advanced techniques and cutting-edge facilities enable us to deliver effective gum disease treatments.",
      imageSrc: GumDisease,
      readMoreLink: "/dental-problems/gum-disease",
    },
    {
      title: "Knocked Out Teeth",
      content: "Losing a tooth can be distressing and painful. At Carrum Downs Dental Group, our experienced dentists know how to properly treat knocked-out teeth. We utilize advanced techniques to reimplant and stabilize the tooth so you can smile confidently again.",
      imageSrc: KnockedOutTooth,
      readMoreLink: "/dental-problems/knocked-out-tooth",
    },
    {
      title: "Severe Toothache",
      content: "Severe tooth pain can be agonizing, leaving you desperate for relief. At Carrum Downs Dental Group, we understand how debilitating toothaches can be. Our experienced dentists and staff are dedicated to addressing severe tooth pain quickly yet gently.",
      imageSrc: SevereToothache,
      readMoreLink: "/dental-problems/severe-toothache",
    },
    {
      title: "Stained Teeth",
      content: "Perhaps discoloured or stained teeth have caused you to feel less confident about sharing your smile. At Carrum Downs Dental Group, we have the solution to boost your confidence.",
      imageSrc: StainedTeeth,
      readMoreLink: "/dental-problems/stained-teeth",
    },
    {
      title: "Teeth Sensitivity",
      content: "Many individuals experience the challenge of tooth sensitivity issues, which can be both highly uncomfortable and exasperating. Unfortunately, many are uncertain about how to tackle this problem. Perhaps you've found yourself unable to enjoy your preferred foods due to the discomfort they trigger. Additionally, your teeth might consistently exhibit sensitivity to hot or cold beverages.",
      imageSrc: TeethSensitivity,
      readMoreLink: "/dental-problems/teeth-sensitivity",
    },
    {
      title: "Tooth Gap",
      content:
        "Gaps in your teeth entail more than just an aesthetic concern. They could potentially elevate the likelihood of tooth decay and various other dental complications. Feel free to pay a visit to Carrum Downs Dental Group, where our amiable dental experts will skillfully assist you in addressing and handling the gaps within your teeth.",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },

    {
      title: "Wisdom Tooth Pain",
      content:
        "Wisdom teeth are the last set of molars to erupt, usually between the late teens and early twenties. When these teeth become impacted or only partially emerge, they can cause significant pain and problems.The cramped space in the back of the mouth often leaves no room for wisdom teeth to fully come in.Partially emerged teeth end up trapped against the other molars and jawbone,leading to inflammation, infection risk, and damage to nearby teeth",
      imageSrc: Wisdom,
      readMoreLink: "/dental-problems/wisdom-tooth-pain",
    },
  ];

  return (
    <>
      <Head>
        <title>Dental Problems Carrum Downs | Carrum Downs Dental</title>
        <meta
          name="description"
          content="Carrum Downs Dental offers wisdom teeth extraction, dental implants, teeth whitening, dentures, root canal, & other services in Carrum Downs, you can count on Us."
        />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/service/" />
      </Head>
      <CommonHero
        bg={Banner}
        breadcrumb={null}
        title="Dental Problems"
        align="left"
        color="#fff"
      />
      <main>
        <section>
          <section
            className="teeth-missing-section1"
            style={{
              backgroundColor: "#1ebdb6",
              marginBottom: "2rem",
              position: "relative",
              paddingTop: "100px",
              paddingBottom: "100px",
            }}
          >
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="h5"
                      component="h2"
                      className="text-white"
                      gutterBottom
                    >
                      Read About Common Dental Problems
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-white"
                      gutterBottom
                    >
                      At Carrum Downs Dental Group, we provide excellent dental care through quality services.
                       Our skilled dentists and staff would love to inform you about common dental issues and
                       ensure you know how to avoid them.
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-white"
                      gutterBottom
                    >
                      Oral health issues are remarkably common, but many people don't know how to properly address them. 
                      Ignoring dental problems can lead to severe consequences later on. 
                      Regular dental exams are crucial for catching problems early before they worsen. 
                      The key is being proactive with dental care rather than waiting until you have a crisis situation.
                       With consistent preventative care and good oral hygiene habits, your teeth and gums can stay in excellent shape.
                    </Typography>
                    <Box>
                      <BlueFilledBtn
                        navlink={true}
                        btnTitle="BOOK APPOINTMENT"
                        btnLink="/book-now/"
                      />
                      <BlueOulinedBtn
                        anchor={true}
                        btnTitle="03-9782 1200"
                        btnLink="tel:03-9782 1200"
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  className="d-flex justify-content-center"
                >
                  <Image
                    src={DentalProblem1}
                    alt="Image"
                    width={450}
                    height={400}
                  />
                </Grid>
              </Grid>
            </Container>
          </section>
          <div className="lower_clipPath"></div>
          <section>
            <Container>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  className="d-flex justify-content-center"
                >
                  <Image
                    src={DentalProblem2}
                    alt="Image"
                    width={450}
                    height={400}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 1 }}>
                    <Typography variant="body1" gutterBottom>
                    At Carrum Downs Dental Group, our expert team goes beyond simply providing excellent dental care -
                     we empower you with the knowledge to maintain a healthy, beautiful smile.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    With decades of experience handling common dental issues, our team wants to ensure you fully understand your oral health. 
                     We take time to listen to your concerns, clearly explain treatment options, and answer all your questions.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    Our aim is for you to feel informed and confident every step of the way, whether you're in for a routine cleaning or need care for a complex dental problem. 
                      Patient education and open communication are central to our approach. Book an appointment today to experience dental care that informs and inspires.
                       We look forward to seeing you soon!
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </section>
          <div className="upper_clipPath"></div>
          <section
            style={{
              backgroundColor: "#1ebdb6",
              marginBottom: "2rem",
              position: "relative",
              paddingBottom: "2rem",
            }}>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="h5"
                      component="h2"
                      className="text-white text-center"
                      gutterBottom
                    >
                     Common dental problems that require treatment.
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-white text-center"
                      gutterBottom
                    >
                     Common Dental Problems that are important to address.
                      When it comes to your dental well-being, there are many common oral problems
                       you are likely to encounter.
                    </Typography>
                  </Box>
                </Grid>
                {/* medium-large device */}
                <Container className="medium-large-layout">
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={3}
                      md={3}
                      style={{
                        overflowX: "hidden",
                        maxHeight: "60vh",
                        padding: '20px',
                        background: 'transparent'
                      }}
                      className="scroll">
                      <Tabs
                        className="show-tabs-hide-accordion"
                        orientation="vertical"
                        variant="scrollable"
                        value={selectedTab}
                        onChange={handleTabChange}
                        TabIndicatorProps={{
                          style: { display: 'none' }
                        }}>
                        {tabs.map((tab, index) => (
                          <Tab
                            label={tab}
                            key={index}
                            style={{
                              backgroundColor:
                                selectedTab === index
                                  ? "#115278"
                                  : "transparent",
                              color: '#fff',
                              borderRadius:
                                selectedTab === index ? "5px" : "0px",
                            }}
                          />
                        ))}
                      </Tabs>
                    </Grid>
                    <Grid item xs={9} md={9}>
                      <Card sx={{ minWidth: 275, minHeight: 350, maxHeight: 450, height: "60vh" }}>
                        <PageContent selectedTab={selectedTab} />
                      </Card>
                    </Grid>
                  </Grid>
                </Container>
                 {/* mobile view  */}
                 <Container className="mobile-view">
                  <Grid item xs={12} md={6}>
                    {mobilePageData.map((data, index) => (
                      <Box className="py-1" key={index}>
                        <div className="mobile-accordion">
                          <div
                            className={`accordion ${openAccordion === index ? "show" : ""
                              }`}
                            id={`accordionExample-${index}`}
                          >
                            <div className="accordion-item d-md-block">
                              <h3
                                className="accordion-header"
                                id={`heading-${index}`}
                              >
                                <button
                                  className={`accordion-button ${openAccordion === index ? "" : "collapsed"
                                    }`}
                                  type="button"
                                  onClick={() => toggleAccordion(index)} // Toggle the accordion on click
                                >
                                  {data.title}
                                </button>
                              </h3>
                              <div
                                id={`collapse-${index}`}
                                className={`accordion-collapse collapse ${openAccordion === index ? "show" : ""
                                  }`}
                                aria-labelledby={`heading-${index}`}
                                data-bs-parent={`#accordionExample-${index}`}
                              >
                                <div className="accordion-body">
                                  <p className="para">{data.content}</p>
                                  <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    className="d-flex justify-content-center"
                                  >
                                    <Image
                                      src={data.imageSrc}
                                      alt="Image"
                                      width={450}
                                      height={400}
                                      className="img-fluid"
                                    />
                                  </Grid>
                                  <Link
                                    href={data.readMoreLink}
                                    className="bg-blue"
                                  >
                                    Read More..
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Box>
                    ))}
                  </Grid>
                </Container>
              </Grid>
            </Container>
          </section>
          {/* <div className="lower_clipPath"></div> */}
          <section className="mt-4 ">
                <Container>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ p: 2 }}>
                            <Box>
                                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions About Dental Problems" align="center" />
                            </Box>
                            <Box mt={3}>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                             What are dental problems?
                                            </button>
                                        </h3>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>Dental problems refer to a wide range of issues or conditions that affect the health, appearance, 
                                                and function of your teeth, gums, and oral cavity. 
                                                These issues can vary in severity and may require different levels of dental care.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section style={{ marginBottom: "2rem" }}></section>
                                <Typography variant="body1" className='text-black' gutterBottom><strong style={{ color: "var(--dark-blue)" }}>Experience luxury dental care at Carrum Downs Dental Group</strong><br></br>
                                    Carrum Downs Dental Group firmly believes in extending the richness and ease of premium dental care to all. There's no need to delay any further to achieve a pleasant breath – secure your appointment at Carrum Downs Dental Group without delay!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </section>
      </main>
    </>
  );
};

export default index;