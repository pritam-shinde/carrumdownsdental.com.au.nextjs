import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import WPAPI from 'wpapi'
import { XMasonry, XBlock } from 'react-xmasonry'
import { BlogSidebar, BlueFilledBtn, CommonHero, CustomCard } from '../../components/components'
import Banner from '../../public/CommonHero/blog-index-1.jpg'
import { Box, Container, Grid } from '@mui/material'

export const getServerSideProps = async () => {
  const res = await fetch('https://pritams3.sg-host.com/wp-json/wp/v2/posts?_embed=true');
  const catRes = await fetch('https://pritams3.sg-host.com/wp-json/wp/v2/categories?_embed=true&per_page=99')
  const data = await res.json();
  const category = await catRes.json();
  return {
    props: {
      data,
      category,
    }
  }
}


const Blog = ({ data, category }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [])

  const breadcrumb = [
    { id: "blog_page_index", link: null, title: "Blog" }
  ]

  return (
    <>
      <Head>
        <title>Blog | Carrum Downs Dental Group | Dentist Carrum Downs</title>
        <meta name="description" content="Our blog contains various posts related to the dental conditions, treatments and vouchers. Read our blogs for dental tips and be aware of the dental problems." />
        <meta name="robots" content="index" />
      
      </Head>
      <CommonHero breadcrumb={breadcrumb} title="Blog" bg={Banner} />
      {
        show ? <main>
          <section>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} lg={8}>
                        <XMasonry maxColumns={2} responsive targetBlockWidth={400}>
                          {
                            data ? data.map(item => <XBlock key={item.id}>
                              <CustomCard cardMedia={item._embedded ? item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0] ? item._embedded['wp:featuredmedia'][0].source_url : null : null : null} navlink={true} link={`/${item.slug}/`} cardTitle={item.title.rendered} cardPara={`${item.excerpt.rendered.split(" ").slice(0, 20).join(" ")} [...]`} cardHeight="auto" cardCls="shadow grow m-3" List={null} cardMediaAlt={item ? item._embedded ? item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0] ? item._embedded['wp:featuredmedia'][0].alt_text ? item._embedded['wp:featuredmedia'][0].alt_text : null : null : null : null : null} />
                            </XBlock>) : null
                          }
                        </XMasonry>
                        <Box pt={3} className="d-flex justify-content-center align-items-center">
                          
                            <BlueFilledBtn btnLink={`/blog/page/2/`} btnTitle="NEXT" navlink={true} />
                          
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <BlogSidebar blogs={data.slice(0,5)} cat={category} />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </section>
        </main> : null
      }
    </>
  )
}

export default Blog