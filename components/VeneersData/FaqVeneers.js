import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { SectionalHeading } from '../components'

const FaqVeneers = () => {
  return (
    <>
      <Container>
              <Box>
                <Box>
                  <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions (FAQs)" align="center" />
                </Box>
                <Box mt={3}>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Are veneers covered by dental insurance?
                        </button>
                      </h3>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="para">Being a cosmetic procedure, it depends on the insurance cover you have. Check with your</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Do dental veneers stain?
                        </button>
                      </h3>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="para">Dental veneers are made from stain-resistant composite, so they do not get easily stained. However, they can be susceptible to staining over time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Do porcelain veneers ruin your teeth?
                        </button>
                      </h3>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="para">No, porcelain veneers do not ruin natural teeth. In fact, they are customized to fit over your teeth and enhance the smile.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Do veneers make your breath smell?
                        </button>
                      </h3>
                      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="para">No, veneers do not make your breath smell. The foul smell could be caused by other factors and the neglect of your oral hygiene.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
              </Box>
            </Container> 
    </>
  )
}

export default FaqVeneers;
