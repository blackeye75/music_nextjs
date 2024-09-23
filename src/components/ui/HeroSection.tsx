import React from 'react'
import Link from 'next/link'

export const HeroSection = () => {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
            <div className='p-4 relative z-10 w-full text-center ' >
                {/* <h1 className='mt-20 md:mt-0 text-4xl md:text-8xl  font-bold bg-clip-text text-transparent bg-gradient-to-b  from-[#122] to-[#120]' >Master the Art of Music</h1> */}
                {/* <h1 className="mt-20 md:mt-0 text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#122] to-[#120] text-stroke">
                    Master the Art of Music
                </h1> */}
                <h1 className="relative mt-20 md:mt-0 text-4xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#122] to-[#120] 
  before:content-['Master_the_Art_of_Music'] before:absolute before:inset-0 before:text-transparent before:bg-clip-text before:bg-gradient-to-b before:from-[#122] before:to-[#120] before:-webkit-text-stroke before:-webkit-text-stroke-2 before:text-stroke before:-z-10">
                    Master the Art of Music
                </h1>

                <div className='mt-4 font-normal text-base md:text-lg text-neutral-300  max-w-lg mx-auto'  >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</div>
                <div className='mt-4' >
                    <Link className='px-4 py-2 bg-[#121] rounded-2xl text-xl font-normal mt-4' href={"/"} >Explore</Link>
                </div>
            </div>
        </div>
    )
}
