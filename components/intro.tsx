import { CMS_NAME } from '../lib/constants'
import Image from 'next/image'

const Intro = () => {
  return (
    <section className="w-full mb-18 md:mb-22 lg:mb-28">
      <div className="absolute scale-150 left-1/2 -translate-x-1/2 -translate-y-10 sm:scale-100
      sm:-top-20 sm:-left-20 sm:translate-x-0 sm:translate-y-0 -z-10 w-3/5 md:w-1/2 lg:w-1/3">
        <Image
          src={'/assets/blog/intro/tiered-flower.png'}
          alt={'Flower'}
          width={700}
          height={700}
          />
      </div>
      <div className="mb-12 mx-12 pt-16 ml-28 sm:ml-36 md:ml-48 lg:ml-80 xl:ml-96 flex flex-col items-start">
        <div className="w-fit">
          <p className="text-4xl md:text-6xl mb-1 md:mb-2 font-openSauceMed font-style: italic">Hey, I'm</p>
          <h1 className="text-6xl md:text-7xl font-openSauceBold tracking-tighter leading-tight md:pr-8">
            SYDNEY<br></br>BALCOM
          </h1>
        <div className="absolute left-10 bg-[#EFEFEF] rounded-l-full w-full"></div>
        </div>
        <div className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl w-10/12 xl:w-8/12">
          I study Computer Science and UI/UX Design at Georgia Tech. I am passionate about creating beautiful and intuitive products.
        </div>
      </div>
    </section>
  )
}

export default Intro
