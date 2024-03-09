import React from 'react'
import Hero from './Hero'

const HeadingText = () => {
  return (
    <div className='max-w-3xl space-y-4'>
        <h1 className='text-3xl sm:textl-5xl md:text-6xl font-bold'>
            Keep track of your fitness journey
        </h1>
        <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
            Your ultimate companion for tracking <br/>
            your fitness progress
        </h3>
        <Hero></Hero>
    </div>
  )
}

export default HeadingText