import CoverImage from './cover-image'
import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
  // client: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 bg-[#EFEFEF] p-10 rounded-xl items-center">
      <div>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div>
        <h3 className="text-3xl font-semibold mb-1 leading-snug">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h3>
        <div className="text-xl italic font-medium mb-4">
          {date}
        </div>
        <p className="text-xl leading-relaxed">{excerpt}</p>
      </div>
    </div>
  )
}

export default PostPreview
