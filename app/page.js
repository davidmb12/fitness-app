import HeadingText from '@/components/HomePage/HeadingText'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <section className='h-full pt-40'>
      <div className='flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10'>
        <HeadingText></HeadingText>
      </div>

    </section>
  )
}

export default HomePage