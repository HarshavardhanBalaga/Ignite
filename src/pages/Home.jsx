import Magnet from '@/components/Magnet'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center gap-4'>
        <div>
          <h1 className='text-4xl font-bold'>Welcome to <span className='text-orange-700'>Ignite</span></h1>
        <p className='text-lg font-light'>Ignite your inner self🔥</p>
        </div>
        <Link href="/dashboard"><Magnet>Go to Dashboard</Magnet></Link>
        
    </div>
  )
}

export default Home