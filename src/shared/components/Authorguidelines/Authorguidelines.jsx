import React from 'react'
import { Link, } from "react-router-dom";
import { ImUpload2 } from 'react-icons/im';
import dash from '/assets/ijbcibook.png';
import check from '/assets/check.png';
import { MdPublishedWithChanges } from 'react-icons/md';
import { BsUbuntu } from 'react-icons/bs';


function Authorguidelines() {

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
                                Author Guidelines
                            </h1>
                            <img src={dash} alt="image" className=' max-w-[150px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                            <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                                Authors are invited to submit original, unpublished manuscripts that align with the journal’s scope. Submissions must follow the IJBCI formatting style, including structured abstract, keywords, references, and any tables or figures. All manuscripts should be written in clear academic English and properly cite all sources to avoid plagiarism. Authors must ensure the manuscript is not under review elsewhere. Submissions are accepted electronically through the journal’s official submission portal or designated email. </p>

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
                                        <div className='rounded-full bg-[#8A42A7] lg:p-8 p-6 border-[5px] border-white'>
                                            <MdPublishedWithChanges className='w-[29px] h-[29px] text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:px-14 px-4 space-y-3  -mt-16 mb-6'>
                                    <h1 className='poppins-bold text-[#8A42A7] lg:text-xl text-lg lg:mt-0 mt-5'>Publishing Requirements</h1>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Manuscripts must be original, properly formatted, ethically sound, and not under review elsewhere for publication.</p>
                                    </div>
                                    <div>
                                        <h2 className='poppins-bold'>Key Requirements :</h2>
                                    </div>
                                    <div className='ml-4 space-y-3'>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-2">
                                                <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2"></div>
                                            </div>
                                            <p className="poppins-regular">Manuscripts must be original and unpublished. </p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-2">
                                                <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2"></div>
                                            </div>
                                            <p className="poppins-regular"> Adhere to the journal’s formatting and referencing guidelines.</p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-2">
                                                <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2"></div>
                                            </div>
                                            <p className="poppins-regular">Provide a structured abstract and relevant keywords.</p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-2">
                                                <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2"></div>
                                            </div>
                                            <p className="poppins-regular">Ensure ethical research practices and disclose conflicts of interest.</p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-2">
                                                <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2"></div>
                                            </div>
                                            <p className="poppins-regular">Submissions must align with the journal's scope in applied economics and policy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#8A42A7] lg:pl-20 flex flex-col'>
                            <div className='border-2 border-[#8A42A7] bg-[#F0EBF3]  h-full'>
                                <div className='flex relative lg:right-14 -translate-y-1/2 lg:top-1/2 lg:justify-start justify-center'>
                                    <div className='rounded-full border-1 border-[#8A42A7]'>
                                        <div className='rounded-full bg-[#8A42A7] lg:p-7 p-6 border-[5px] border-white'>
                                            <BsUbuntu className='w-[36px] h-[36px] text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:px-14 px-4 space-y-3  -mt-16 mb-6'>
                                    <h1 className='poppins-bold text-[#8A42A7] lg:text-xl text-lg lg:mt-0 mt-5'>Submission Process </h1>
                                    <div className="space-y-3">
                                        <div className="flex items-start ">
                                            <div className="flex-shrink-0 mt-2">
                                                <div className="w-2 h-2 bg-[#8A42A7]  rounded-full mr-2 "></div>
                                            </div>
                                            <p className="poppins-regular">Authors must submit manuscripts online with complete details, following IJBCI’s required structure and formatting guidelines.</p>
                                        </div>
                                        <div>
                                            <h2 className='poppins-bold'>Key Requirements :</h2>
                                        </div>
                                        <div className='ml-4 space-y-3'>
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 mt-2">
                                                    <div className="w-2 h-2 bg-[#8A42A7]  rounded-full mr-2"></div>
                                                </div>
                                                <p className="poppins-regular">Initial manuscript screening by editorial team.</p>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 mt-2">
                                                    <div className="w-2 h-2 bg-[#8A42A7]  rounded-full mr-2"></div>
                                                </div>
                                                <p className="poppins-regular"> Double-blind peer review process. </p>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 mt-2">
                                                    <div className="w-2 h-2 bg-[#8A42A7]  rounded-full mr-2"></div>
                                                </div>
                                                <p className="poppins-regular">Author revision period. </p>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 mt-2">
                                                    <div className="w-2 h-2 bg-[#8A42A7]  rounded-full mr-2"></div>
                                                </div>
                                                <p className="poppins-regular">Final editorial decision. </p>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 mt-2">
                                                    <div className="w-2 h-2 bg-[#8A42A7]  rounded-full mr-2"></div>
                                                </div>
                                                <p className="poppins-regular">Publication with Creative Commons licensing.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-2">
                                                <div className="w-2 h-2 bg-[#8A42A7]  rounded-full mr-2"></div>
                                            </div>
                                            <p className="poppins-regular">It aims to serve as a platform for work that influences policy decisions and contributes to economic advancement globally.</p>
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
                    <div className=" p-4 lg:p-8  border-2 border-[#8A42A7]">
                        <div>
                            <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#8A42A7]">Research Article</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <img src={check} alt="" className='w-[25px] h-[25px]' />
                                    </div>
                                    <p className="poppins-regular">Original studies offering new insights into business, management, and commerce through data-driven analysis and theoretical frameworks.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <img src={check} alt="" className='w-[25px] h-[25px]' />
                                    </div>
                                    <p className="poppins-regular">Empirical research based on qualitative or quantitative methods addressing current issues in global business and economic environments.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <img src={check} alt="" className='w-[25px] h-[25px]' />
                                    </div>
                                    <p className="poppins-regular">Case studies exploring innovative practices, strategic decisions, and operational outcomes in real-world organizational settings.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <img src={check} alt="" className='w-[25px] h-[25px]' />
                                    </div>
                                    <p className="poppins-regular">Interdisciplinary articles integrating concepts from economics, finance, marketing, and technology to solve complex business challenges.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#8A42A7]">In-depth Review Article</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <img src={check} alt="" className='w-[25px] h-[25px]' />
                                    </div>
                                    <p className="poppins-regular">Comprehensive analysis of existing literature on key business and commerce topics, highlighting research gaps and future directions.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <img src={check} alt="" className='w-[25px] h-[25px]' />
                                    </div>
                                    <p className="poppins-regular">Critical evaluation of theoretical frameworks, methodologies, and findings across multiple studies within a focused business research domain.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <img src={check} alt="" className='w-[25px] h-[25px]' />
                                    </div>
                                    <p className="poppins-regular">Synthesis of interdisciplinary perspectives to provide a broader understanding of emerging trends and evolving business practices.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <img src={check} alt="" className='w-[25px] h-[25px]' />
                                    </div>
                                    <p className="poppins-regular">Authoritative discussions offering valuable insights for scholars, practitioners, and policymakers in addressing complex business and economic challenges.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#8A42A7]">Technical Article</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <img src={check} alt="" className='w-[25px] h-[25px]' />
                                    </div>
                                    <p className="poppins-regular">Detailed examination of practical business tools, models, or systems applied in real-world corporate and commercial environments.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <img src={check} alt="" className='w-[25px] h-[25px]' />
                                    </div>
                                    <p className="poppins-regular">Presentation of innovative methodologies, analytical techniques, or software applications used to solve specific business and commerce problems.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <img src={check} alt="" className='w-[25px] h-[25px]' />
                                    </div>
                                    <p className="poppins-regular">Focused discussion on implementation challenges, performance evaluation, and optimization of technical solutions in business operations.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <img src={check} alt="" className='w-[25px] h-[25px]' />
                                    </div>
                                    <p className="poppins-regular">Contributions that bridge theory and practice through technology-driven approaches enhancing decision-making and operational efficiency.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </div>
        </div>
    )
}

export default Authorguidelines