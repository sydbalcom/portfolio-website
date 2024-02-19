import PostPreview from './post-preview'
import type Post from '../interfaces/post'
import Image from 'next/image'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-12">
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
