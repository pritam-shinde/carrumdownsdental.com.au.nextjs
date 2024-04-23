// import React from 'react'
// import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
// import { VeneerData } from '../components'

// const HowAbout = () => {
//   return (
//     <>
//        <Container>
//               <Box py={2}>
//                 <Typography variant="h5" component="h2" gutterBottom className="text-center" style={{ color: "#115278" }}>
//                   How about maintenance?
//                 </Typography>
//                 <Grid container spacing={2}>
//                   {VeneerData.map((item, index) => (
//                     <Grid item xs={12} sm={6} md={4} key={index}>
//                       <Box sx={{ p: 2 }}>
//                         <Card sx={{ maxWidth: 345 }} className="mx-auto shadow-none" style={{ border: "1px solid rgb(162 215 245)" }}>
//                           <CardMedia sx={{ height: 140 }} component="img" src={item.imageUrl.src} alt="Card Image" title="Card Image" className="mx-auto img-fluid" />
//                           <CardContent>
//                             <Typography gutterBottom variant="h3" className="text-center maintainance-title-font fs-4">
//                               {item.title}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary" className="text-center">
//                               {item.description}
//                             </Typography>
//                           </CardContent>
//                         </Card>
//                       </Box>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>
//             </Container>
//     </>
//   )
// }

// export default HowAbout
