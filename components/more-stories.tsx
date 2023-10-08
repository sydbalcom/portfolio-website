import PostPreview from './post-preview'
import type Post from '../interfaces/post'
import Image from 'next/image'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      {/* <h2 className="mb-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight px-12 lg:px-20">
        My Recent Work
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-y-20 mb-32 px-12 lg:px-20">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            // author={post.author}
            slug={post.slug}
            // client={post.client}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      {/* <div className="absolute -bottom-20 -right-20 -z-10 w-3/5 md:w-1/2 lg:w-1/3">
        <Image
          src={'/assets/blog/intro/tiered-flower.png'}
          alt={'Flower'}
          width={700}
          height={700}
          />
      </div> */}
    </section>
  )
}

export default MoreStories
