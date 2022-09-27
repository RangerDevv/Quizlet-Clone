import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Checkbox from 'react-daisyui/dist/Checkbox'

const Home: NextPage = () => {
  return (
    <div>
    <h1>Hello, world! Welcome to Doki.</h1>
    <p className=' text-blue-500'>This is a test!</p>
    <button className='btn btn-error'>hello world</button>
    </div>
  )
}

export default Home
