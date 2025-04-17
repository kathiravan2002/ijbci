import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { ImUpload2 } from 'react-icons/im';
import dash from '/assets/ijbcibook.png';
import { FaArrowRight } from 'react-icons/fa';
import check from '/assets/check.png';
import { MdCreditScore } from 'react-icons/md';

function Correction() {


    const navigate = useNavigate();


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
                            Journal Correction Policy
                            </h1>
                            <img src={dash} alt="image" className=' max-w-[150px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                            <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                            The International Journal of Business and Commerce Insights is committed to maintaining the accuracy and integrity of the scholarly record. If errors are identified in published articles—whether by authors, editors, or readers—appropriate corrections, such as errata, corrigenda, or retractions, will be issued promptly. Corrections are clearly linked to the original article and are freely accessible. IJBCI ensures that all amendments are transparent and uphold the trust of the academic community.</p>

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
                        <h2 className='poppins-bold lg:text-2xl text-xl text-[#8A42A7] mt-4'>Version of Record and Correction Guidelines </h2>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-16  pt-4'>

                        <div className='bg-[#8A42A7] lg:pl-20 flex flex-col'>
                            <div className='border-2 border-[#8A42A7] bg-[#F0EBF3]  h-full'>
                                <div className='flex relative lg:right-14 -translate-y-1/2 lg:top-1/2 lg:justify-start justify-center'>
                                    <div className='rounded-full border-1 border-[#8A42A7]'>
                                        <div className='rounded-full bg-[#8A42A7] lg:p-7 p-6 border-[5px] border-white'>
                                            <MdCreditScore    className='w-[36px] h-[36px] text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:px-14 px-4 space-y-3  -mt-16 mb-6'>
                                    <h1 className='poppins-bold text-[#8A42A7] lg:text-xl text-lg lg:mt-0 mt-5'>Version of Record (VoR) </h1>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">VoR represents the final, published version of the article.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Any post-publication changes are documented through official correction notices.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Corrections ensure transparency without altering original publication dates or citations.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">All changes to VoR maintain integrity and academic record accuracy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#8A42A7] lg:pl-20 flex flex-col'>
                            <div className='border-2 border-[#8A42A7] bg-[#F0EBF3]  h-full'>
                                <div className='flex relative lg:right-14 -translate-y-1/2 lg:top-1/2 lg:justify-start justify-center'>
                                    <div className='rounded-full border-1 border-[#8A42A7]'>
                                        <div className='rounded-full bg-[#8A42A7] lg:p-7 p-6 border-[5px] border-white'>
                                            <MdCreditScore   className='w-[36px] h-[36px] text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:px-14 px-4 space-y-3  -mt-16 mb-6'>
                                    <h1 className='poppins-bold text-[#8A42A7] lg:text-xl text-lg lg:mt-0 mt-5'>Correction Criteria </h1>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Corrections apply to significant errors affecting data or interpretation.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Minor typographical errors not affecting meaning may be ignored.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Authorship errors require formal request and editorial board evaluation.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Ethical breaches or plagiarism result in retraction, not correction notice.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div>
                        </div>
                    </div>
                </div>
                <section className="mb-8">
                    <div className="rounded-lg p-4 lg:p-8  border-2 border-[#8A42A7]">
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#8A42A7]">Correction Process</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Authors must notify the editorial team immediately upon discovering errors in published articles requiring correction or clarification.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">The editorial board evaluates the significance of the error and determines the appropriate type of correction to be issued.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Approved corrections are published as errata, corrigenda, or retractions and linked to the original article for transparency.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">All correction notices are permanently accessible to ensure the integrity and reliability of the scholarly record remains intact.</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={() => navigate('/editorial')}
                                className="group relative overflow-hidden px-8 py-3 bg-[#8A42A7] rounded-lg text-white poppins-medium  cursor-pointer "
                            >
                                <span className="relative z-10 flex items-center">
                                    Contact Editorial Team
                                    <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-[#8A42A7] to-[#8A42A7] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Correction