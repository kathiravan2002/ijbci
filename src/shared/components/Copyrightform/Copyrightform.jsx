import React from 'react'
import { Link, } from "react-router-dom";
import { ImUpload2 } from 'react-icons/im';
import dash from '/assets/ijbcibook.png';
import check from '/assets/check.png';
import { LiaCopyrightSolid } from 'react-icons/lia';


function Copyrightform() {

    return (
        <div>
            <div className="text-justify">
                <div className='relative '>
                    <div className='lg:flex justify-evenly items-center gap-5 lg:bg-gradient-to-r bg-gradient-to-b from-[#8A42A7] via-[#692783] to-[#361A41] px-4  pb-28 pt-9 '>
                        <div className='hidden lg:block  '>
                            <img src={dash} alt="image" className=' max-w-[150px] max-w-auto  ' />
                        </div>
                        <div>
                            <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 text-white  lg:pl-6 poppins-bold">
                                Copyright Declaration
                            </h1>
                            <img src={dash} alt="image" className=' max-w-[150px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                            <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                                By submitting a manuscript to IJBCI, authors confirm that the work is original and has not been published elsewhere. Upon acceptance, authors retain copyright but grant IJBCI the right to publish and distribute the article. Authors are responsible for obtaining permission to reuse any third-party content. Proper acknowledgment of the journal is required for any future reuse or distribution of the article.</p>

                            {/* <div className="lg:pl-6 flex justify-center items-center lg:justify-start">
                                <Link to="" target="_blank" rel="noopener noreferrer">
                                    <button className="hover:text-[#8A42A7] poppins-regular hover:bg-white lg:p-1 lg:px-4   py-1 px-2 cursor-pointer text-white bg-[#8A42A7] border-2 border-white hover:border-2 hover:border-[#8A42A7]  transition-duration duration-300 rounded-lg  ">
                                        <div className="flex justify-between  text-nowrap gap-2 "> Submit Paper <ImUpload2 className="mt-1" /></div>
                                    </button>
                                </Link>
                            </div> */}
                        </div>

                    </div>
                    <div className="absolute bottom-0 left-0 right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                        </svg>
                    </div>
                </div>
                <div className=''>
                    <div className='text-center flex flex-col gap-4 lg:mb-4 mb-14'>
                        <h2 className='poppins-bold lg:text-2xl text-xl text-[#8A42A7] mt-4'>Publishing Requirements and Submission Process</h2>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-16  pt-4'>

                        <div className='bg-[#8A42A7] lg:pl-20 flex flex-col'>
                            <div className='border-2 border-[#8A42A7] bg-[#F0EBF3]  h-full'>
                                <div className='flex relative lg:right-14 -translate-y-1/2 lg:top-1/2 lg:justify-start justify-center'>
                                    <div className='rounded-full border-1 border-[#8A42A7]'>
                                        <div className='rounded-full bg-[#8A42A7] lg:p-7 p-6 border-[5px] border-white'>
                                            <LiaCopyrightSolid  className='w-[36px] h-[36px] text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:px-14 px-4 space-y-3  -mt-16 mb-6'>
                                    <h1 className='poppins-bold text-[#8A42A7] lg:text-xl text-lg lg:mt-0 mt-5'>Copyright Declaration</h1>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">I/We __________ the author(s) of the research paper/article entitled __________ authorize you to publish the above mentioned paper/article in IJBCI. By submitting this declaration, the author(s) confirm their agreement to the following terms and conditions regarding the publication of their research work.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#8A42A7] lg:pl-20 flex flex-col'>
                            <div className='border-2 border-[#8A42A7] bg-[#F0EBF3]  h-full'>
                                <div className='flex relative lg:right-14 -translate-y-1/2 lg:top-1/2 lg:justify-start justify-center'>
                                    <div className='rounded-full border-1 border-[#8A42A7]'>
                                        <div className='rounded-full bg-[#8A42A7] lg:p-7 p-6 border-[5px] border-white'>
                                            <LiaCopyrightSolid  className='w-[36px] h-[36px] text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:px-14 px-4 space-y-3  -mt-16 mb-6'>
                                    <h1 className='poppins-bold text-[#8A42A7] lg:text-xl text-lg lg:mt-0 mt-5'>Author Agreement</h1>
                                    <div className="space-y-3">
                                        <div className="flex items-start ">
                                            <div className="flex-shrink-0 mt-2">
                                                <div className="w-2 h-2 bg-[#8A42A7]  rounded-full mr-2 "></div>
                                            </div>
                                            <p className="poppins-regular">This agreement outlines the terms and conditions for publication, ensuring the protection of both the author's rights and the journal's interests. The author(s) maintain their copyright while granting the journal the necessary rights to publish and distribute the work.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                        </div>
                    </div>
                </div>
                <section className="mb-8">
                    <div className="p-4 lg:p-8  border-2 border-[#8A42A7]">
                        <div>
                            <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#8A42A7]">Publication Rights</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <img src={check} alt="" className='w-[25px] h-[25px]' />
                                    </div>
                                    <p className="poppins-regular">I/We will not publish the above-mentioned contribution anywhere else without the prior written permission of the publisher, unless it has been substantially changed.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#8A42A7]">Content Warranty</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <img src={check} alt="" className='w-[25px] h-[25px]' />
                                    </div>
                                    <p className="poppins-regular">I/ We declare and warrants that his/her/their contribution is original, except for such excerpts from copyrighted works as may be included with the permission of the copyright holder and author thereof, that it contains no libelous statements, and does not infringe on any copyright, trademark, patent, statutory right, or propriety right of others.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#8A42A7]">Legal Compliance</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <img src={check} alt="" className='w-[25px] h-[25px]' />
                                    </div>
                                    <p className="poppins-regular">The Author warrants the right to enter into this Agreement and that the Article contains no libelous or unlawful statements, harmful instructions, and does not violate any rights or privacy of others.</p>
                                </div>
                               
                            </div>
                        </div>

                    </div>

                </section>
            </div>
        </div>
    )
}

export default Copyrightform