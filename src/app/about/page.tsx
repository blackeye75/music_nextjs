import Footer from '@/components/Footer'
import { BackgroundLines } from '@/components/ui/background-lines'
import React from 'react'

const page = () => {
    return (
        <>
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Music is the language of the <br /> <span className='bg-gradient-to-b bg-clip-text text-transparent from-pink-900 to-pink-700 ' > mind and soul.</span> 
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                    Get the best advices from our experts, including expert artists,
                    painters, marathon enthusiasts and RDX, totally free.
                </p>
            </BackgroundLines>
            <Footer />
        </>
    )
}

export default page