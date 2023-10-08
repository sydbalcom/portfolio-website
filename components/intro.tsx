import { CMS_NAME } from '../lib/constants'
import Image from 'next/image'

const Intro = () => {
  return (
    <section className="w-screen mb-18 md:mb-22 lg:mb-28">
      <div className="absolute -top-20 -left-20 -z-10 w-3/5 md:w-1/2 lg:w-1/3">
        <Image
          src={'/assets/blog/intro/tiered-flower.png'}
          alt={'Flower'}
          width={700}
          height={700}
          />
      </div>
      <div className="mb-16 md:mb-12 gap-12 flex flex-row">
        <div className="basis-1/4 lg:basis-1/6">
        </div>
        <div className="basis-3/4 lg:basis-5/6 pt-16">
          <div className="flex flex-row gap-6">
            <div>
              <p className="text-3xl md:text-6xl mb-1 md:mb-2 font-medium font-style: italic">Hey, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
                SYDNEY<br></br>BALCOM
              </h1>
            </div>
            <div className="bg-[#EFEFEF] rounded-l-full w-full"></div>
          </div>
          <div className="mt-4 text-xl md:text-2xl lg:text-3xl w-10/12 md:w-8/12">
            I'm a Computational Media major and Industrial Design minor from Georgia Tech.
            I'm passionate about creating meep meep meep meep meep meep meep
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
