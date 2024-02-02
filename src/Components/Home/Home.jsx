import React from 'react'
import mypic from '../../assets/Me.jpg'
import { LuFacebook } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";

const Home = () => {
  return (
    <>
      <div className='border-b border-[#DCE1E4]'>
        <div className='max-w-container mx-auto pt-[100px] pb-[75px]'>
          <div className='flex'>
            <div className='w-2/3'>
              <h2 className='font-montserrat text-h2textSize text-secondaryColor font-semibold'>Assalamu Alaikum,</h2>
              <h3 className='mt-5 font-montserrat text-title2textSize text-paragraphColor font-medium leading-[21px] tracking-[3px]'>WELCOME TO MY WORLD</h3>
              <div className='mt-5 w-[550px]'>
                <h1 className='font-montserrat text-h1textSize text-secondaryColor font-bold leading-[75px]'>Hi, I’m Rony Miah <span className='font-montserrat text-[48px] text-secondaryColor font-bold leading-[57px]'><span className='font-montserrat text-[48px] text-primaryColor font-bold leading-[57px]'>a</span> Professional Coder.</span></h1>
              </div>
              <p className='mt-5 w-[550px] font-montserrat text-paragraph1textSize text-secondaryColor font-normal leading-[30px]'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
              <div className='mt-10'>
                <h4 className='font-montserrat text-paragraph2textSize text-secondaryColor font-medium leading-[21px] tracking-[2px] ml-[190px]'>FIND WITH ME</h4>
                <div className='mt-5  ml-[145px] flex gap-x-5'>
                  <div className='relative w-[60px] h-[60px] bg-bg1 shadow-boxShadow rounded-[6px] text-primaryColor hover:bg-bghover hover:text-white duration-[0.4s]'>
                    <a href="" className='absolute top-4 left-4 text-title1textSize '><LuFacebook /></a>
                  </div>
                  <div className='relative w-[60px] h-[60px] bg-bg1 shadow-boxShadow rounded-[6px] text-primaryColor hover:bg-bghover hover:text-white duration-[0.4s]'>
                    <a href="" className='absolute top-4 left-4 text-title1textSize '><IoLogoInstagram /></a>
                  </div>
                  <div className='relative w-[60px] h-[60px] bg-bg1 shadow-boxShadow rounded-[6px] text-primaryColor hover:bg-bghover hover:text-white duration-[0.4s]'>
                    <a href="" className='absolute top-4 left-4 text-title1textSize '><SlSocialLinkedin /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='1/3 mt-[75px]'>
              <img className='w-[350px] h-[350px] rounded-[50%]' src={mypic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home