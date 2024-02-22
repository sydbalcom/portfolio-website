import { useState } from 'react'
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
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="items-center relative">
      <CoverImage slug={slug} title={title} src={coverImage} />
      <a href={"/posts/" + slug} className="z-0 absolute bottom-0 hover:top-0
        bg-[#E5E5E5] bg-opacity-80 border-2 border-[#6783B1]
        rounded-b-xl hover:rounded-xl p-4 hover:flex hover:flex-col hover:justify-center
        w-full hover:h-full transition ease-in-out hover:delay-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="text-2xl font-openSauceBold mb-1 leading-snug">
            {title}
        </h3>
        <div className="text-LG italic font-openSauceMed bg-[#90A4C5] rounded-md
          w-fit py-1 px-2">
          {date}
        </div>
        {isHovered && <p className="text-lg md:text-xl mt-8 leading-relaxed">{excerpt}</p>}
      </a>
    </div>
  )
}

export default PostPreview
