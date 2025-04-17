import React from 'react'
import { Link, } from "react-router-dom";
import { ImUpload2 } from 'react-icons/im';
import dash from '/assets/ijbcibook.png';
import check from '/assets/check.png';
import { LuUserRoundCheck } from 'react-icons/lu';
import { MdCropRotate } from 'react-icons/md';


function Articalprocessing() {

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
                            Article Processing
                            </h1>
                            <img src={dash} alt="image" className=' max-w-[150px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                            <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6"> All submitted manuscripts to IJBCI undergo a rigorous and transparent article processing workflow, including initial screening, peer review, and final editorial approval. Authors are required to follow the journal’s formatting and ethical guidelines to ensure quality and integrity. Upon acceptance, articles are copyedited and prepared for publication to maintain high scholarly standards. IJBCI is committed to timely processing while upholding the excellence of published research.</p>

                            <div className="lg:pl-6 flex justify-center items-center lg:justify-start">
                                <Link to="" target="_blank" rel="noopener noreferrer">
                                    <button className="hover:text-[#8A42A7] poppins-regular hover:bg-white lg:p-1 lg:px-4   py-1 px-2 cursor-pointer text-white bg-[#8A42A7] border-2 border-white hover:border-2 hover:border-[#8A42A7]  transition-duration duration-300 rounded-lg  ">
                                        <div className="flex justify-between  text-nowrap gap-2 "> Submit Paper <ImUpload2 className="mt-1" /></div>
                                    </button>
                                </Link>
                            </div>
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
                        <h2 className='poppins-bold lg:text-2xl text-xl text-[#8A42A7] mt-4'>Publication Workflow and Author Advantages</h2>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-16  pt-4'>

                        <div className='bg-[#8A42A7] lg:pl-20 flex flex-col'>
                            <div className='border-2 border-[#8A42A7] bg-[#F0EBF3]  h-full'>
                                <div className='flex relative lg:right-14 -translate-y-1/2 lg:top-1/2 lg:justify-start justify-center'>
                                    <div className='rounded-full border-1 border-[#8A42A7]'>
                                        <div className='rounded-full bg-[#8A42A7] lg:p-7 p-6 border-[5px] border-white'>
                                            <MdCropRotate    className='w-[36px] h-[36px] text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:px-14 px-4 space-y-3  -mt-16 mb-6'>
                                    <h1 className='poppins-bold text-[#8A42A7] lg:text-xl text-lg lg:mt-0 mt-5'>Publication Process</h1>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Manuscript submission through online portal with required formatting and documents.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Initial editorial screening for scope, structure, and ethical compliance.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Double-blind peer review ensures quality, originality, and academic relevance.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Final decision, typesetting, and publication in online open-access format.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#8A42A7] lg:pl-20 flex flex-col'>
                            <div className='border-2 border-[#8A42A7] bg-[#F0EBF3]  h-full'>
                                <div className='flex relative lg:right-14 -translate-y-1/2 lg:top-1/2 lg:justify-start justify-center'>
                                    <div className='rounded-full border-1 border-[#8A42A7]'>
                                        <div className='rounded-full bg-[#8A42A7] lg:p-7 p-6 border-[5px] border-white'>
                                            <LuUserRoundCheck    className='w-[36px] h-[36px] text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:px-14 px-4 space-y-3  -mt-16 mb-6'>
                                    <h1 className='poppins-bold text-[#8A42A7] lg:text-xl text-lg lg:mt-0 mt-5'>Author Benefits</h1>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Fast and transparent review process with timely editorial decisions.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Wide global visibility through open access publication and indexing.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Authors retain copyright under Creative Commons licensing policy.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Enhanced citation potential through inclusion in major academic databases.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                        </div>
                    </div>
                </div>
                <section className="mb-8">
                    <div className=" p-4 lg:p-8  border-2 border-[#8A42A7]">
                        <div>
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#8A42A7]">Initial Submission</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Authors must submit manuscripts through the IJBCI online system in accordance with formatting and ethical compliance guidelines.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Initial submissions should include abstract, keywords, references, and author details, ensuring clarity, relevance, and academic completeness.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Manuscripts undergo preliminary checks for plagiarism, structure, language quality, and scope alignment before peer review consideration.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Submissions not meeting journal standards are returned to authors for revision or desk-rejection with constructive editorial feedback.</p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#8A42A7]">Peer Review</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Submitted manuscripts undergo a double-blind peer review by qualified experts to ensure objectivity, relevance, and academic quality.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Reviewers evaluate methodology, originality, clarity, and contribution to business and commerce knowledge before providing constructive feedback.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Authors may be requested to revise manuscripts based on reviewer comments before final editorial decisions are made.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">The peer review process upholds academic integrity and ensures only high-quality, impactful research is accepted for publication.</p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#8A42A7]">Publications</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Accepted articles are professionally copyedited, formatted, and prepared for online publication to ensure readability and consistency.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Final versions are assigned DOIs, enabling permanent identification and easy citation in academic and professional platforms.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Published articles are immediately available through open access, promoting global dissemination and academic engagement without subscription barriers.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">IJBCI ensures long-term archiving of published content through partnerships with digital repositories and scholarly indexing platforms.</p>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default Articalprocessing