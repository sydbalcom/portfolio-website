import CoverImage from './cover-image'
import FlowerLogo from './flower-logo'
import PostTitle from './post-title'
import Image from 'next/image'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
}

const PostHeader = ({ title, coverImage, date, excerpt}: Props) => {
  return (
    <>
      <div className="absolute scale-100 md:scale-125 -z-10 flex flex-col items-end
      w-screen md:-translate-x-1/4 -translate-y-20 md:-translate-y-10
      transition duration-150 ease-in-out">
        <FlowerLogo
          fillColor='#EFEFEF'
          width='500'
        />
      </div>
      <div className="mx-8">
        <PostTitle>{title}</PostTitle>
        <div className="text-2xl md:text-3xl lg:text-4xl italic font-openSauceMed
        mb-4 md:mb-6 w-fit px-4 py-2 rounded-lg bg-[#EFEFEF]">
          {date}
        </div>
        <div className="mb-8 md:mb-16" id="coverMedia">
          <div className="text-xl md:text-2xl mb-4 md:mb-6 lg:mb-10">
            {excerpt}
          </div>
          {(title != "Hostility Towards LGBT People in the EU") && 
          <CoverImage title={title} src={coverImage} />}

          {(title == "Hostility Towards LGBT People in the EU") && 
          <div className="w-full">
            <iframe 
              src="https://sydbalcom.github.io/Info-Vis-final-project/final-project/test/"
              className="w-[100%] h-[60rem] scale-85">
            </iframe>
          </div>}

        </div>
      </div>
    </>
  )
}

export default PostHeader
