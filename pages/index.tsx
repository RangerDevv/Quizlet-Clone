import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
const Home: NextPage = () => {
  return (
    <div className='Body bg-gray-900'>
      <nav className=' flex w-screen flex-row h-12 bg-gray-700'>
        <p className=' text-3xl text-white ml-5 mt-1'>Tau</p>
        <div className='flex flex-row justify-end mr-5 w-screen'>
        <p className=' text-2xl text-white ml-5 mt-2 hover:mt-1'>Explore</p>
        <p className=' text-2xl text-white ml-5 mt-2 hover:mt-1'>Login</p>
        <p className=' text-2xl text-white ml-5 mt-2 hover:mt-1'>Sign Up</p>
        </div>
      </nav>
      <header className=' w-screen flex flex-col justify-center gap-y-5'>
        <div className=' flex justify-center'>
        <p className=' text-5xl text-white text-center mt-8 w-96 leading-tight '>Work <u className=' underline decoration-4 decoration-sky-500 underline-offset-4'>Smarter</u>, Not Harder</p>
        </div>
        <p className=' text-xl text-center text-white'>With tau, you can study faster, and smarter.</p>
        <div className=' flex justify-center'>
        <button className=' btn w-36 btn-success'>Get Started →</button>
        </div>
      </header>
    </div>
  )
}
export default Home
