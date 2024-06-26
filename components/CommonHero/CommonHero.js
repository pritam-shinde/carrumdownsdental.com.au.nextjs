import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import Styles from '../../styles/components-style/CommonHero/CommonHero.module.css'
import { KeyboardArrowRight } from '@mui/icons-material'

const CommonHero = ({ align, title, color, breadcrumb, bg, desc }) => {
  return (
    <>
      <Container maxWidth="xxl" className={`${Styles.commonHero}`} style={{backgroundImage:`url(${bg.src})`}}>
        <Grid container style={{height: '100%'}}>
          <Grid item xs={12} md={10} className="mx-auto d-flex align-items-center" style={{height: '100%'}}>
            <Box>
              <Typography variant='h1' align={align} style={{ color: color }}>{title}</Typography>
              <Box py={2}>
                {
                  (breadcrumb !== null) ? <nav aria-label="breadcrumb">
                    <ul className='breadcrumb'>
                      {
                        breadcrumb.map((item, index) => (
                          <li key={item.id} className={`breadcrumb-item ${item.link === null ? 'active' : ''}`} aria-current={item.link === null ? 'page' : null}>
                            {item.title !== 'Services' && index !== 0 && <span className='arrow-right'><KeyboardArrowRight /> </span>}
                            {
                              item.link !== null ? 
                                <Link href={item.link}>
                                  <a style={{color:'#fff', fontWeight:"700"}}>
                                    {item.title}
                                  </a>
                                </Link> 
                                : <strong style={{color:'#fff', fontWeight:"700"}}>{item.title}</strong>
                            }
                          </li>
                        ))
                      }
                    </ul>
                  </nav> : null  
                }
                {
                   (desc ? <Typography className='HeroPara font-banner text-white'>{desc} </Typography> : null)
                }
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
export default CommonHero

 