import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

export const HeroSection = () => {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="red"
            />
            <div className='p-4 relative z-10 w-full text-center ' >
                {/* <h1 className='mt-20 md:mt-0 text-4xl md:text-8xl  font-bold bg-clip-text text-transparent bg-gradient-to-b  from-[#122] to-[#120]' >Master the Art of Music</h1> */}
                {/* <h1 className="mt-20 md:mt-0 text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#122] to-[#120] text-stroke">
                    Master the Art of MusFFic
                </h1> */}
                <h1 className="font-['Dancing_Script'] pb-2 relative mt-20 md:mt-0 text-4xl md:text-8xl  font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#122] to-[#120] 
  before:content-['Master_the_Art_of_Music'] before:absolute before:inset-0 before:text-transparent before:bg-clip-text before:bg-gradient-to-b before:from-[#122] before:to-[#120] before:-webkit-text-stroke before:-webkit-text-stroke-2 before:text-stroke before:-z-10">
                    Master the Art of Music
                </h1>

                <div className='mt-4 font-["Space_Grotesk"] tracking-tight  font-normal text-base  md:text-lg text-neutral-300  max-w-xl   mx-auto'  >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
                </div>

                <div className='mt-7' >
                    <Link className='' href={"/"} ><Button borderRadius='1.75rem'  className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 text-2xl font-normal' >
                        Explore</Button></Link>
                </div>
            </div>
        </div>
    )
}
