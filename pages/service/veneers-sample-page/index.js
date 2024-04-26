import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FaqVeneers from "../../../components/VeneersData/FaqVeneers";
import { BeforeAfterData, BlueFilledBtn, BlueOulinedBtn, CommonHero, CompareSlider1, VeneerData, VeneerProcessData } from "../../../components/components";
import BgSectionImg from "../../../public/Veneers/line1.png";
import Banner from "../../../public/Veneers/veneers-banner2.jpg";

const VeneerSamplePage = ({ data }) => {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState();

  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  const breadcrumb = [
    { id: "Veneers_breadcrumb_1", link: "/service/", title: "Service" },
    {
      id: "Veneers_breadcrumb_2",
      link: null,
      title: "Dental Veneers in Carrum Downs",
    },
  ];

  return (
    <>
      <Head>
        <title>Porcelain Veneers Dentist | Best Dentist Carrum Downs</title>
        <meta name="description" content="Porcelain veneers are the perfect choice for improving your smiles. Carrum Downs Dental has the best dentists that perform smile makeovers at affordable costs." />
        <meta name="robots" content="noindex" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Dental Veneers in Carrum Downs" align={width < 600 ? "center" : "left"} color="#115177" />
      {show && (
        <main>
          <section
            className="teeth-missing-section1"
            style={{
              backgroundColor: "#000",
              marginBottom: "2rem",
              position: "relative",
              paddingTop: "60px",
              backgroundImage: `url("/Veneers/dental-veneers-section-bg.jpg")`, 
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center left",
              backgroundAttachment: "fixed",
            }}
          >
            <Grid>
              <Grid container spacing={2}>
                <Grid
                  container
                  spacing={3}
                  className="properties-section justify-content-center"
                  style={{
                    marginTop: "-120px",
                    marginLeft: "32px",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={3}
                    style={{
                      border: "1px solid rgb(162 215 245)",
                      background: "#fff",
                      borderRadius: "0.5rem",
                      marginRight: "20px",
                      marginBottom: "20px",
                      padding: "0.5rem",
                    }}
                  >
                    <Box className="text-center">
                      <Typography variant="subtitle1" className="mb-2">
                        Natural Beauty
                      </Typography>
                      Our ultra-thin, custom-crafted porcelain veneers mimic the look and feel of your natural enamel, creating a seamlessly beautiful smile.
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={3}
                    style={{
                      border: "1px solid rgb(162 215 245)",
                      background: "#fff",
                      borderRadius: "0.5rem",
                      marginRight: "20px",
                      marginBottom: "20px",
                      padding: "0.5rem",
                    }}
                  >
                    <Box className="text-center">
                      <Typography variant="subtitle1" className="mb-2">
                        Designed Just for You
                      </Typography>
                      We utilise advanced digital technology to map your facial features and design veneers that perfectly complement your unique smile. Achieve the smile you’ve always envisioned.
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={3}
                    style={{
                      border: "1px solid rgb(162 215 245)",
                      background: "#fff",
                      borderRadius: "0.5rem",
                      marginRight: "20px",
                      marginBottom: "20px",
                      padding: "0.5rem",
                    }}
                  >
                    <Box className="text-center">
                      <Typography variant="subtitle1" className="mb-2">
                        Long-lasting Confidence
                      </Typography>
                      Crafted from high-quality porcelain, our veneers offer exceptional strength and durability, ensuring your radiant smile lasts for years to come.
                    </Box>
                  </Grid>
                </Grid>
                <Container maxWidth="xxl">
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}> 
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ p: 2 }}>
                        <Typography variant="h5" component="h2" gutterBottom className="text-white">
                          Dental Veneers
                        </Typography>
                        <Typography variant="body1" gutterBottom className="text-white">
                          Over time your teeth might get damaged, chipped, or discoloured, which can make you self-conscious about their appearance. Dental veneers offer a long-term solution to all these cosmetic
                          needs with proven results in restoring beautiful natural smiles.
                        </Typography>
                        <Typography variant="body1" gutterBottom className="text-white">
                          Over time your teeth might get damaged, chipped, or discoloured, which can make you self-conscious about their appearance. Dental veneers offer a long-term solution to all these cosmetic
                          needs with proven results in restoring beautiful natural smiles.
                        </Typography>
                        <Typography variant="body1" gutterBottom className="text-white">
                          Over time your teeth might get damaged, chipped, or discoloured, which can make you self-conscious about their appearance. Dental veneers offer a long-term solution to all these cosmetic
                          needs with proven results in restoring beautiful natural smiles.
                        </Typography>
                        <Box>
                          <BlueFilledBtn navlink={true} btnTitle="BOOK NOW" btnLink="/book-now/" ariaLabel="book now" />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </section>
          <section
            className="teeth-missing-section1"
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              position: "relative",
              paddingBottom: "0.5rem",
            }}
          > 
            <Container> 
              <Grid container spacing={2} py={2}>
                <Grid item xs={12} md={7}>
                  <Typography variant="h5" component="h2" gutterBottom style={{ color: "#115278" }}>
                    Why dental veneers?
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Dental veneers are a less invasive alternative to dental crowns depending on the defects or damages you are dealing with. Veneers provide a more conservative approach to fixing teeth colour, size, and
                    shape that can also be removed easily in the future if you decide to change them out. Their ability to cover up gaps between teeth and worn-out teeth makes dental veneers a lasting and cost-effective
                    solution. Root canal procedures and the use of tetracycline medication can also permanently stain your teeth, making dental veneers a recommendable fix.
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Over time your teeth might get damaged, chipped, or discoloured, which can make you self-conscious about their appearance. Dental veneers offer a long-term solution to all these cosmetic needs with
                    proven results in restoring beautiful natural smiles.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box>
               <Image src="/Veneers/slider-images/before-after-section.jpg" alt="Image" width={550} height={430} className="img-fluid rounded-2" />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </section>
          <section
            className="teeth-missing-section1 bg-grey"
            style={{
              marginBottom: "2rem",
              position: "relative",
              paddingBottom: "0.5rem",
            }}
          >
            <Container>
              <Box py={2}>
                <Typography variant="h5" component="h2" gutterBottom className="text-center" style={{ color: "#115278" }}>
                  How about maintenance?
                </Typography>
                <Grid container spacing={2}>
                  {VeneerData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Box sx={{ p: 2 }}>
                        <Card sx={{ maxWidth: 345 }} className="mx-auto shadow-none" style={{ border: "1px solid rgb(162 215 245)" }}>
                          <CardMedia sx={{ height: 140 }} component="img" src={item.imageUrl.src} alt="Card Image" title="Card Image" className="mx-auto img-fluid" />
                          <CardContent>
                            <Typography gutterBottom variant="h3" className="text-center maintainance-title-font fs-4">
                              {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="text-center">
                              {item.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </section>
          <section
            className="teeth-missing-section1"
            style={{
              marginBottom: "2rem",
              position: "relative",
              backgroundImage: `url(${BgSectionImg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              paddingBottom: "0.5rem",
            }}
          >
            <Container>
              <Typography variant="h5" component="h2" gutterBottom className="text-center" style={{ color: "#115278" }}>
                Our Process
              </Typography>
              <Typography className="para mt-2">
                Achieve a radiant, lasting smile with our comprehensive veneer process. We prioritise meticulous care and precision throughout the seven steps, ensuring a comfortable experience and natural-looking results
                that perfectly complement your unique smile.
              </Typography>
              <Grid container spacing={2}>
                {VeneerProcessData.map((item, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index} className={index === 6 ? "centered-box" : ""}>
                    <Box display="flex" alignItems="center">
                      <Box textAlign="center" p={2}>
                        <Image src={item.imageUrl} alt="Image" width={70} height={70} className="img-fluid object-contain"/>
                      </Box>
                      <Box>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="body1" paragraph>
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </section>
          <section
            className="teeth-missing-section1"
            style={{
              backgroundColor: "#000",
              marginBottom: "2rem",
              position: "relative",
              paddingBottom: "0.5rem",
            }}
          >
            <Container>
              <Box py={2}>
                <Typography variant="h2" component="h2" className="text-white text-center" sx={{ mt: 3 }}>
                  Achieve the smile you’ve always wanted
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Typography className="text-white text-center ">
                    Everyone deserves to smile fully, and be confident in doing so. When you go through life hiding your smile, you’re potentially missing out on many pivotal moments, experiences and connections.
                  </Typography>
                  <Typography className="text-white text-center  ">
                    At Avant Garde Dental, your porcelain veneers are designed specially for you and your face, so your beautiful new smile will be one you can’t wait to show the world.
                  </Typography>
                  <Grid container spacing={3}>
                    {BeforeAfterData.map((item, index) => (
                      <Grid item xs={12} sm={4} md={4} key={index}>
                        <Box textAlign="center" p={1}>
                          <Image src={item.imageUrl} alt="Image" width={350} height={380} className="img-fluid border border-1" />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Container>
          </section>
          <section
            className="teeth-missing-section1 veneer-section"
            style={{
              marginBottom: "2rem",
              position: "relative",
              backgroundImage: `url("/Veneers/group-attractive-young-adult-people-isolated-white (1) (1).jpg")`,
              backgroundSize: "48%",
              backgroundColor: "#fff",
              backgroundRepeat: "no-repeat",
              // backgroundAttachment: "fixed"
            }}
          >
            <Container>
              <Grid container spacing={3} className="mt-2">
                <Grid item xs={12} md={6}> 
                </Grid>
                <Grid item xs={12} md={6} style={{ zIndex: 9, paddingBottom: "15px" }}>
                  <Typography className="para font-white" style={{ color: "#115278" }} variant="h2" sx={{ pb: 2 }}>
                    Our Guarantee
                  </Typography>
                  <Typography className="para font-white">We guarantee you will love your smile, We won’t stop until you do.</Typography>
                  <Typography className="para font-white">Your smile will be designed for you and only you. Our smile makeover team are artists, and perfectionists.</Typography>
                  <Typography className="para font-white">We will only design and craft smiles that we would want for ourselves.</Typography>
                  <Typography className="para font-white">We guarantee you will love your smile, We won’t stop until you do.</Typography>
                  <Typography className="para font-white">Your smile will be designed for you and only you. Our smile makeover team are artists, and perfectionists.</Typography>
                  <Typography className="para font-white">We will only design and craft smiles that we would want for ourselves.</Typography>
                  <Typography className="para font-white">We guarantee you will love your smile, We won’t stop until you do.</Typography>
                  <Box>
                    <BlueFilledBtn navlink={true} btnTitle="BOOK NOW" btnLink="/book-now/" ariaLabel="book now" />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </section>
          <section
            className="teeth-missing-section1"
            style={{
              marginBottom: "2rem",
              position: "relative",
            }}
          >
            <FaqVeneers/> 
          </section>
          <section
            className="teeth-missing-section1 bg-grey"
            style={{
              position: "relative",
              paddingBottom: "0.5rem",
            }}
          >
            <Container>
              <Box py={2}>
                <Typography variant="h5" component="h2" gutterBottom className="text-center mt-2" style={{ color: "#115278" }}>
                  Free Call With A Cosmetic Dentist
                </Typography>
                <Box py={2}>
                  <Typography className="para text-center">Small Bright With Confidence. Schedule a Conversation with Sydney’s Leading Cosmetic Dentist.</Typography>
                  <Typography className="para  text-center">
                    Wondering how to achieve a dazzling smile? Want to explore options for teeth whitening, veneers, or other cosmetic procedures? People ask us all sorts of questions about enhancing their smiles. Do you
                    have a question for a cosmetic dentist? Get in touch with us and unlock your perfect smile!
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BlueFilledBtn navlink={true} btnTitle="BOOK NOW" btnLink="/book-now/" ariaLabel="book now" />
                  <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" ariaLabel="call now" />
                </Box>
              </Box>
            </Container>
          </section>
        </main>
      )}
    </>
  );
};

export default VeneerSamplePage;
