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
          <Intro />
          <SiteSection name="About" />
          <SiteSection name="Work" />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          <SiteSection name="Play" />
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
