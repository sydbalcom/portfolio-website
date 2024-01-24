import { CMS_NAME } from '../lib/constants'
import Image from 'next/image'
import {useState, useCallback, useEffect} from 'react'

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

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
          <h1 className="text-7xl font-openSauceBold tracking-tighter leading-tight md:pr-8">
            <span className="font-cosmicaBold">SYD</span>
            {useMediaQuery(960) && <br></br>}
            {!useMediaQuery(960) && " "}
            <span className="font-cosmicaBold">BALCOM</span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Intro
