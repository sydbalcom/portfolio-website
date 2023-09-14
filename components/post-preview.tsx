// import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
// import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  // author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  // author,
  slug,
}: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12 bg-[#EFEFEF] p-10 rounded-xl">
      <div>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div>
        <h3 className="text-3xl mb-3 leading-snug">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        {/* <Avatar name={author.name} picture={author.picture} /> */}
      </div>
    </div>
  )
}

export default PostPreview
