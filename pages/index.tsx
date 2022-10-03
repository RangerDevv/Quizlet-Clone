import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
const Home: NextPage = () => {
  return (
    <div className='Body'>
      <nav className=' flex w-screen flex-row h-12 bg-slate-800'>
        <p className=' text-3xl text-white ml-5 mt-1'>Tau</p>
        <div className='flex flex-row justify-end mr-5 w-screen'>
        <p className=' text-2xl text-white ml-5 mt-2 hover:mt-1'>Explore</p>
        <p className=' text-2xl text-white ml-5 mt-2 hover:mt-1'>Login</p>
        <p className=' text-2xl text-white ml-5 mt-2 hover:mt-1'>Sign Up</p>
        </div>
      </nav>
    </div>
  )
}

export default Home
