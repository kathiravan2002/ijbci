import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { ImUpload2 } from 'react-icons/im';
import dash from '/assets/ijbcibook.png';
import { FaArrowRight, FaUserCheck, FaUserEdit } from 'react-icons/fa';
import check from '/assets/check.png';

function Malpractice() {


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
                            Malpractice Policy
                            </h1>
                            <img src={dash} alt="image" className=' max-w-[150px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                            <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                            The International Journal of Business and Commerce Insights is committed to upholding the highest standards of publication ethics. Any form of unethical behavior, including data fabrication, plagiarism, falsification, or authorship manipulation, is strictly prohibited. All manuscripts are evaluated for ethical compliance, and any suspected malpractice is thoroughly investigated. Confirmed violations may result in manuscript rejection, retraction of published articles, and reporting to relevant academic or institutional bodies.</p>

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
                        <h2 className='poppins-bold lg:text-2xl text-xl text-[#8A42A7] mt-4'>Ethical Responsibilities in Scholarly Publishing</h2>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-16  pt-4'>

                        <div className='bg-[#8A42A7] lg:pl-20 flex flex-col'>
                            <div className='border-2 border-[#8A42A7] bg-[#F0EBF3]  h-full'>
                                <div className='flex relative lg:right-14 -translate-y-1/2 lg:top-1/2 lg:justify-start justify-center'>
                                    <div className='rounded-full border-1 border-[#8A42A7]'>
                                        <div className='rounded-full bg-[#8A42A7] lg:p-7 p-6 border-[5px] border-white'>
                                            <FaUserCheck   className='w-[36px] h-[36px] text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:px-14 px-4 space-y-3  -mt-16 mb-6'>
                                    <h1 className='poppins-bold text-[#8A42A7] lg:text-xl text-lg lg:mt-0 mt-5'>Author's Responsibilities</h1>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Submit original work with proper citations and ethical research standards.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Ensure all listed authors contributed significantly to the manuscript.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Disclose any potential conflicts of interest during manuscript submission.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Respond promptly to editorial queries and revision requests when required.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#8A42A7] lg:pl-20 flex flex-col'>
                            <div className='border-2 border-[#8A42A7] bg-[#F0EBF3]  h-full'>
                                <div className='flex relative lg:right-14 -translate-y-1/2 lg:top-1/2 lg:justify-start justify-center'>
                                    <div className='rounded-full border-1 border-[#8A42A7]'>
                                        <div className='rounded-full bg-[#8A42A7] lg:p-7 p-6 border-[5px] border-white'>
                                            <FaUserEdit  className='w-[36px] h-[36px] text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:px-14 px-4 space-y-3  -mt-16 mb-6'>
                                    <h1 className='poppins-bold text-[#8A42A7] lg:text-xl text-lg lg:mt-0 mt-5'>Editor's Responsibilities</h1>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Ensure fair, unbiased, and timely review of submitted manuscripts.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Maintain confidentiality of submissions throughout the editorial process.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Make decisions based on academic merit, not personal interests.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Act on ethical concerns and suspected misconduct appropriately and transparently.</p>
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
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#8A42A7]">Reviewer's Responsibilities</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Reviewers must provide objective, constructive, and timely feedback to improve the quality and clarity of submitted manuscripts.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">They should maintain confidentiality and not share or use manuscript content for personal or professional advantage.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Reviewers must disclose any conflicts of interest that may bias their evaluation or compromise the review process integrity.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Report any ethical issues, plagiarism, or data fabrication discovered during manuscript assessment to the editorial board immediately.</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={() => navigate('/authorguidelinespage')}
                                className="group relative overflow-hidden px-8 py-3 bg-[#8A42A7] rounded-lg text-white poppins-medium  cursor-pointer "
                            >
                                <span className="relative z-10 flex items-center">
                                    View  Guidelines
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

export default Malpractice