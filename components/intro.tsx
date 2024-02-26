import Image from 'next/image'
import FlowerLogo from './flower-logo';

const Intro = () => {
  return (
    <section className="w-full mb-18">
      <div className="absolute scale-100 md:scale-125 -z-20 flex flex-col items-end
      w-screen md:-translate-x-1/4 -translate-y-20 md:-translate-y-10
      transition duration-150 ease-in-out">
        <FlowerLogo
          fillColor='#EFEFEF'
          width='500'
        />
      </div>
      <div className="mx-12 pt-16 flex flex-col items-start">
        <div className="w-fit">
          <p className="text-4xl mb-1 md:mb-2 font-openSauceBold font-style: italic">Hey, I'm</p>
          <h1 className="text-7xl font-cosmicaBold tracking-tighter leading-tight md:pr-8">
            <span className="flex inline-flex items-center gap-x-5 mr-6">
              SYD
              <FlowerLogo
                fillColor='#295092'
                width='75'
              />
            </span>
            <span>BALCOM</span>
          </h1>
          <p className="w-fit text-xl md:text-2xl mt-5 md:mt-4 px-4 py-2 rounded-md font-openSauceMed bg-[#EFEFEF]">
            Front-End Developer & UI/UX Designer
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro
