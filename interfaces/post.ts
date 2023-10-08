import type Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  client: string
  excerpt: string
  ogImage: {
    url: string
  }
  subheader: string
  content: string
}

export default PostType
