import React from 'react'
import webdesignicon from '../../assets/webdesign.svg'
import webdevelopmenticon from '../../assets/webdevelopment.svg'
import appdevelopmenticon from '../../assets/appdevelopment.svg'
import { FaArrowRight } from "react-icons/fa";

const Features = () => {
  return (
    <>
      <div className='border-b border-[#DCE1E4]'>
        <div className='max-w-container mx-auto py-[75px]'>
          <div className=''>
            <h3 className='mt-5 font-montserrat text-paragraph2textSize text-primaryColor font-medium leading-[14px] tracking-[2px]'>FEATURES</h3>
            <h2 className='font-montserrat text-h1textSize text-paragraphColor font-bold leading-[75px] mt-5'>What I Do</h2>
            <div className='mt-[60px] flex gap-x-[30px]'>
              <div className='relative w-1/3 h-full px-[50px] py-[35px] rounded-[10px] bg-bg1 shadow-boxShadow duration-500 ease-in-out transition-all z-10 before:absolute before:content-"" before:w-full before:h-full before:bg-primaryColor before:rounded-lg before:top-0 before:left-0 before:opacity-0 before:-z-10 hover:before:opacity-100 '>
                <div>
                  <div className='w-[50px] h-[50px] duration-700 in-expo transition-all translate-y-5 '>
                    <img src={webdesignicon} alt="" />
                  </div>
                  <div className='mt-[30px] duration-700 in-expo transition-all translate-y-5 '>
                    <h4 className='mb-4 font-montserrat text-title1textSize text-secondaryColor font-semibold leading-[14px]'><a href="" className='duration-400'>Web Design</a></h4>
                    <p className='mb-4 font-montserrat text-paragraph1textSize text-paragraphColor font-normal leading-[25px] duration-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quo aliquam itaque iure, consectetur quasi temporibus excepturi ullam! Dicta, iusto.</p>
                    <a className='relative text-xl text-secondaryColor invisible opacity-0 duration-400 after:absolute after:content-"" after:w-full after:h-full after:bg-black-500 after:left-0 after:right-0 after:top-0 after:bottom-0 after:opacity-100 after:-z-10' href=""><FaArrowRight className='text-red-500'/></a>
                  </div>
                </div>
                <a href="" className='absolute top-0 left-0 w-full h-full text-red-500'></a>
              </div>
              {/* <div className='1/3 px-[50px] py-[35px] rounded-[10px] bg-bg1 shadow-boxShadow '>
                <div>
                  <div className='w-[50px] h-[50px]'>
                    <img src={webdevelopmenticon} alt="" />
                  </div>
                  <div className='mt-[30px]'>
                    <h4 className='mb-4 font-montserrat text-title1textSize text-secondaryColor font-semibold leading-[14px]'>Web Development</h4>
                    <p className='mb-4 font-montserrat text-paragraph1textSize text-paragraphColor font-normal leading-[25px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quo aliquam itaque iure, consectetur quasi temporibus excepturi ullam! Dicta, iusto.</p>
                    <a className='text-xl text-secondaryColor' href=""><FaArrowRight /></a>
                  </div>
                </div>
              </div>
              <div className='1/3 px-[50px] py-[35px] rounded-[10px] bg-bg1 shadow-boxShadow '>
                <div>
                  <div className='w-[50px] h-[50px]'>
                    <img src={appdevelopmenticon} alt="" />
                  </div>
                  <div className='mt-[30px]'>
                    <h4 className='mb-4 font-montserrat text-title1textSize text-secondaryColor font-semibold leading-[14px]'>App Development</h4>
                    <p className='mb-4 font-montserrat text-paragraph1textSize text-paragraphColor font-normal leading-[25px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quo aliquam itaque iure, consectetur quasi temporibus excepturi ullam! Dicta, iusto.</p>
                    <a className='text-xl text-secondaryColor' href=""><FaArrowRight /></a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features