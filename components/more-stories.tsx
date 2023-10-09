import PostPreview from './post-preview'
import type Post from '../interfaces/post'
import Image from 'next/image'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-y-20 mb-32 px-12 lg:px-20">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
