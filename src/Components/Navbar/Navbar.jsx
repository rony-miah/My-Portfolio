import React from 'react'

const Navbar = () => {
    return (
        <>
            <div>
                <div className='max-w-container mx-auto flex justify-between'>
                    <div className='w-20% my-auto'>
                        <h1>RONYMIAH</h1>
                    </div>
                    <div className='w-60% my-auto'>
                        <div>
                            <ul className='flex gap-x-8'>
                                <li><a href="" className='relative before:absolute before:content-[""] before:w-8 before:h-[2px] before:bg-primaryColor before:rounded-lg before:top-5 before:opacity-0 before:translate-x-[-12px] before:transition-all before:duration-300 hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100 hover:before:bg-bghover hover:text-primaryColor'>HOME</a></li>
                                <li><a href="" className='hover:text-primaryColor relative before:absolute before:content-[""] before:w-8 before:h-[2px] before:bg-bghover before:top-5 before:opacity-0 before:translate-x-[-12px] before:transition-all before:duration-300 hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100 hover:before:bg-primaryColor'>FEATURES</a></li>
                                <li><a href="" className='hover:text-primaryColor relative before:absolute before:content-[""] before:w-8 before:h-[2px] before:bg-primaryColor before:top-5 before:opacity-0 before:translate-x-[-12px] before:transition-all before:duration-300 hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100 hover:before:bg-bghover'>RESUME</a></li>
                                <li><a href="" className='hover:text-primaryColor relative before:absolute before:content-[""] before:w-8 before:h-[2px] before:bg-primaryColor before:top-5 before:opacity-0 before:translate-x-[-12px] before:transition-all before:duration-300 hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100 hover:before:bg-bghover'>MY SKILLS</a></li>
                                <li><a href="" className='hover:text-primaryColor relative before:absolute before:content-[""] before:w-8 before:h-[2px] before:bg-primaryColor before:top-5 before:opacity-0 before:translate-x-[-12px] before:transition-all before:duration-300 hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100 hover:before:bg-bghover'>PORTFOLIO</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-20% '>
                        {/* <button className='px-4 py-3 border rounded-md shadow-bgShadow shadow-boxShadow hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white text-primaryColor'>CONTACT ME</button> */}
                        <a href="" className="px-[19px] py-[17px] bg-bg1 shadow-boxShadow rounded-[6px] text-primaryColor hover:bg-bghover hover:text-white duration-400"><span>CONTACT ME</span></a>
                    </div>
                    {/* relative before:absolute before:content-[""] before:w-8 before:h-[2px] before:bg-primaryColor before:rounded-lg before:top-5 before:opacity-0 before:translate-x-[-12px] before:transition-all before:duration-300 hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100 hover:before:bg-bghover hover:text-primaryColor */}
                </div>
            </div>
        </>
    )
}

export default Navbar