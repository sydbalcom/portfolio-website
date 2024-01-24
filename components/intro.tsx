import Image from 'next/image'
import FlowerLogo from './flower-logo';

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
      <div className="mb-12 mx-12 pt-16 flex flex-col items-center">
        <div className="w-fit">
          <p className="text-4xl mb-1 md:mb-2 font-openSauceBold font-style: italic">Hey, I'm</p>
          <h1 className="text-7xl font-cosmicaBold tracking-tighter leading-tight md:pr-8">
            <span className="flex inline-flex gap-x-6 mr-6">
              SYD
              <FlowerLogo
                fillColor='#295092'
                width='80'
              />
            </span>
            <span>BALCOM</span>
          </h1>
          <p className="w-fit text-xl md:text-2xl mt-5 md:mt-4 px-4 py-2 rounded-md font-openSauceMed bg-[#EFEFEF]">Front-End Developer & UI/UX Designer</p>
        </div>
      </div>
    </section>
  )
}

export default Intro
