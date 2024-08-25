import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import SiteSection from '../components/site-sections'
import SBLogo from '../components/sb-logo'
import NavBar from '../components/nav-bar'
import About from '../components/about'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{`Sydney Balcom`}</title>
        </Head>
        <Container>
          <NavBar navItems={[]} />
          <div className="mx-6">
            <Intro />

            <Accordion defaultExpanded
              sx={{ backgroundColor: 'transparent', boxShadow: 'none'}}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">
                  About
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" component={'div'}>
                  <About />
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded
              sx={{ backgroundColor: 'transparent', boxShadow: 'none'}}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">
                  Work
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography variant="body1" component={'div'}>
                  {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion defaultExpanded
              sx={{ backgroundColor: 'transparent', boxShadow: 'none'}}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">
                  Play
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography variant="body1" component={'div'}>
                  <About />
                </Typography>
              </AccordionDetails>
            </Accordion>

          </div>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
