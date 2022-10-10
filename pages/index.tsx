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
      {/* Navbar */}
      <header className=' w-screen flex flex-col justify-center gap-y-5'>
        <div className=' flex justify-center'>
        <p className=' 4xl:text-6xl text-5xl text-white text-center mt-8 w-96 leading-tight '><strong>Work <u className=' underline decoration-4 decoration-sky-500 underline-offset-4'>Smarter</u>, Not Harder</strong></p>
        </div>
        <p className=' text-2xl text-center text-white'>With tau, you can study faster, and smarter.</p>
        <div className=' flex justify-center'>
        <button className=' btn w-36 btn-success'>Get Started →</button>
        </div>
      </header>
      {/* body */}
      <div className=' flex flex-col gap-28 mt-28'>
        <div className=' flex justify-center md:flex-row flex-col '>
          <div className=' flex flex-col justify-start w-screen md:ml-10 2xl:ml-28 gap-y-5 4xl:ml-[25rem]'>
            <p className=' text-white text-center md:text-start sm:text-2xl font-semibold  4xl:text-[2.5rem]'>Memorize faster with flashcards. </p>
            <p className=' text-white text-center md:text-start text-xl 2xl:text-2xl md:w-96 4xl:w-[34rem] 4xl:text-[1.7rem] 4xl:leading-normal'>Memorize faster, and more efficiently with flashcards.</p>
          </div>
          <div className='flex justify-center md:justify-end md:w-80 h-56 md:mr-40 4xl:mr-[25rem]'>
            <label className="swap swap-flip text-9xl 2xl:pt-0 pt-8">
              <input type="checkbox" />
              <div className=' w-80 h-56 4xl:w-[35rem] 2xl:h-80 rounded-xl pt-20 text-xl 2xl:text-2xl bg-gray-800 swap-off'>
                <p className=' text-white text-center 4xl:text-[2.5rem] '>What is a tissue?</p>
              </div>
              <div className=' w-80 h-56 4xl:w-[35rem] 2xl:h-80 rounded-xl pt-20 text-xl 2xl:text-2xl bg-gray-800 swap-on 4xl:text-[2.5rem] 4xl:leading-normal'>
                <p className=' text-white text-center'>Tissue is a group of cells that have similar structure and that function together as a unit. </p>
              </div>
            </label>
          </div>
        </div>
        <div className=' flex justify-center'>
        <p className=' text-center text-white w-screen  text-3xl font-bold' id='quote'>"When used correctly, flash cards allow students to interact with information in a way that makes it<u className=' underline decoration-red-500 decoration-4'> easier to retain.</u> Flash cards are strategically designed to <u className=' underline decoration-sky-500 decoration-4'>enhance</u> and <u className=' underline decoration-sky-500 decoration-4'>encourage</u> active recall."<p><i className=' underline decoration-yellow-500 decoration-4'>-carsondellosa.com</i></p></p>
        </div>
        <div className=' flex justify-center md:flex-row flex-col '>
          <div className=' flex flex-col justify-start w-screen md:ml-10 2xl:ml-28 gap-y-5 4xl:ml-[25rem]'>
            <p className=' text-white text-center md:text-start sm:text-2xl font-semibold  4xl:text-[2.5rem]'>Quiz yourself on what you have learnt.</p>
            <p className=' text-white text-center md:text-start text-xl 2xl:text-2xl md:w-96 4xl:w-[34rem] 4xl:text-[1.7rem] 4xl:leading-normal'>Turn your flashcards into a way to test yourself on what you have learnt.</p>
          </div>
          <div className=' mr-40 4xl:mr-[25rem] flex justify-center md:justify-end w-screen pt-4 md:pt-0'>
          <div className='card w-96 bg-base-100 shadow-xl rounded-md h-64 4xl:w-[34rem] 4xl:h-[26rem]'>
            <div className=' card-actions justify-evenly'>
            <div className=' flex flex-col gap-7 '>
              <p className=' text-md font-semibold text-white text-center pt-5 4xl:text-4xl'>What do tissues combine to form?</p>
              <div className='flex gap-x-2 pl-6'>
                <input type="radio" name="radio-2" className="radio radio-accent mb-1 4xl:w-8 4xl:h-8" />
                <label className=' text-md align-top text-white 4xl:text-2xl'>Cell</label>
              </div>
              <div className='flex gap-x-2 pl-6'>
                <input type="radio" name="radio-2" className="radio radio-accent mb-1 4xl:w-8 4xl:h-8" />
                <label className=' text-md align-top  text-white 4xl:text-2xl'>Organ</label>
              </div>
              <div className='flex gap-x-2 pl-6'>
                <input type="radio" name="radio-2" className="radio radio-accent mb-1 4xl:w-8 4xl:h-8" />
                <label className=' text-md align-top text-white 4xl:text-2xl'>Human</label>
              </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className=' flex justify-center md:flex-row flex-col '>
          <div className=' flex flex-col justify-start w-screen md:ml-10 2xl:ml-28 gap-y-5 4xl:ml-[25rem]'>
            <p className=' text-white text-center md:text-start sm:text-2xl font-semibold  4xl:text-[2.5rem]'>Learn anywhere, anytime, for free.</p>
            <p className=' text-white text-center md:text-start text-xl 2xl:text-2xl md:w-96 4xl:w-[34rem] 4xl:text-[1.7rem] 4xl:leading-normal'>Our website supports both desktop and mobile, study anywhere, anytime. Free for everyone forever.</p>
          </div>
          <div className='mr-40 4xl:mr-[25rem] flex justify-center w-screen md:justify-end pt-4 md:pt-0'>
            <div className=' block 4xl:hidden'>
              <svg width="388" height="235" viewBox="0 0 488 335" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="6" width="476" height="323" rx="21" fill="#00428F" stroke="#4A4A4A" stroke-width="12"/>
              <rect x="151" y="108" width="186" height="103" rx="14" fill="#124559"/>
              <rect x="194" y="147" width="100" height="6" fill="#D9D9D9"/>
              <rect x="202" y="160" width="84" height="6" fill="#D9D9D9"/>
              <rect x="137" y="46" width="57" height="30" rx="5" fill="#AEC3B0"/>
              <rect x="215" y="46" width="57" height="30" rx="5" fill="#AEC3B0"/>
              <rect x="293" y="46" width="57" height="30" rx="5" fill="#AEC3B0"/>
              </svg>
            </div>
            <div className=' 4xl:block hidden'>
              <svg width="488" height="335" viewBox="0 0 488 335" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="6" width="476" height="323" rx="21" fill="#00428F" stroke="#4A4A4A" stroke-width="12"/>
              <rect x="151" y="108" width="186" height="103" rx="14" fill="#124559"/>
              <rect x="194" y="147" width="100" height="6" fill="#D9D9D9"/>
              <rect x="202" y="160" width="84" height="6" fill="#D9D9D9"/>
              <rect x="137" y="46" width="57" height="30" rx="5" fill="#AEC3B0"/>
              <rect x="215" y="46" width="57" height="30" rx="5" fill="#AEC3B0"/>
              <rect x="293" y="46" width="57" height="30" rx="5" fill="#AEC3B0"/>
              </svg>
            </div>
          </div>
        </div>
        </div>
        <div className=' flex justify-center pt-24'>
          <button className=' btn btn-success'>Lets Get started!</button>
        </div>
        {/* footer */}
  <footer className="footer footer-center p-10 text-primary-content pt-24">
    <div>
      <p className="font-bold">
        Tau Inc.<br/>Learn to be the best, by the best.
      </p> 
      <p>Copyright © 2022 - All right reserved</p>
    </div> 
    <div>
      <div className="grid grid-flow-col gap-4">
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
      </div>
    </div>
  </footer>
    </div>
  )
}
export default Home
