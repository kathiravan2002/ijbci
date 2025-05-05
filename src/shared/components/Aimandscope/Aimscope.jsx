import React from 'react'
import { Link, } from "react-router-dom";
import { ImUpload2 } from 'react-icons/im';
import dash from '/assets/ijbcibook.png';
import { LuTarget } from 'react-icons/lu';
import { AiOutlineAim } from 'react-icons/ai';
import check from '/assets/check.png';


function Aimscope() {

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
                                Aim and Scope
                            </h1>
                            <img src={dash} alt="image" className=' max-w-[150px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                            <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                                The International Journal of Business and Commerce Insights aims to foster the advancement of knowledge in business, management, and commerce through the publication of high-quality, original research. The journal provides a platform for scholars, practitioners, and policymakers to explore innovative ideas and address contemporary challenges in the global business environment. IJBCI encourages interdisciplinary approaches and practical insights that contribute to academic understanding and industry practices. </p>

                            <div className="lg:pl-6 flex justify-center items-center lg:justify-start">
                                <Link to="https://www.ijbci.com/ijbci/index.php/ijbci/about/submissions" target="_blank" rel="noopener noreferrer">
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
                        <h2 className='poppins-bold lg:text-2xl text-xl text-[#8A42A7] mt-4'>Business and Commerce Insights</h2>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-16  pt-4'>

                        <div className='bg-[#8A42A7] lg:pl-20 flex flex-col'>
                            <div className='border-2 border-[#8A42A7] bg-[#F0EBF3]  h-full'>
                                <div className='flex relative lg:right-14 -translate-y-1/2 lg:top-1/2 lg:justify-start justify-center'>
                                    <div className='rounded-full border-1 border-[#8A42A7]'>
                                        <div className='rounded-full bg-[#8A42A7] lg:p-8 p-6 border-[5px] border-white'>
                                            <AiOutlineAim className='w-[29px] h-[29px] text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:px-14 px-4 space-y-3  -mt-16 mb-6'>
                                    <h1 className='poppins-bold text-[#8A42A7] lg:text-xl text-lg lg:mt-0 mt-5'>Aim</h1>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Promote high-quality research in business, management, and commerce disciplines.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Foster knowledge exchange between academic, professional, and industry communities.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Encourage innovative thinking to solve real-world business and commerce challenges.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Support interdisciplinary approaches to advance global business and economic understanding.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#8A42A7] lg:pl-20 flex flex-col'>
                            <div className='border-2 border-[#8A42A7] bg-[#F0EBF3]  h-full'>
                                <div className='flex relative lg:right-14 -translate-y-1/2 lg:top-1/2 lg:justify-start justify-center'>
                                    <div className='rounded-full border-1 border-[#8A42A7]'>
                                        <div className='rounded-full bg-[#8A42A7] lg:p-7 p-6 border-[5px] border-white'>
                                            <LuTarget className='w-[36px] h-[36px] text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:px-14 px-4 space-y-3  -mt-16 mb-6'>
                                    <h1 className='poppins-bold text-[#8A42A7] lg:text-xl text-lg lg:mt-0 mt-5'>Scope</h1>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Business strategy, innovation, and competitive analysis across global markets.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Financial management, investment analysis, and corporate financial decision-making.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Marketing trends, consumer behavior, branding, and digital marketing strategies.</p>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 bg-[#8A42A7] rounded-full mr-2 "></div>
                                        </div>
                                        <p className="poppins-regular">Entrepreneurship, organizational development, leadership, and business performance evaluation.</p>
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
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#8A42A7]">Research Areas</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Business strategy, leadership, and organizational behavior focusing on innovation, competitiveness, sustainability, and long-term value creation.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Financial management, investment analysis, corporate finance, and risk assessment in emerging and established global market environments.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Marketing strategies, consumer behavior, branding, and digital transformation across diverse industries and cross-cultural business contexts.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Entrepreneurship, small business development, and startup ecosystems, including innovation, scalability, and economic impact on local and global levels.</p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#8A42A7]">Global Perspectives</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Explore international business practices and strategies influencing global trade, cross-border investments, and multinational corporate governance.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Analyze economic policies, regulatory frameworks, and market dynamics shaping business environments across different regions and countries.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Encourage comparative studies on business models and commercial trends across developed, emerging, and transitioning economies worldwide.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Promote cross-cultural research highlighting diverse consumer behaviors, management practices, and international marketing strategies in a globalized economy.</p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#8A42A7]">Emerging Topics of Interest</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Digital transformation in business operations, including AI integration, blockchain applications, and data-driven decision-making processes.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Sustainable business practices addressing environmental, social, and governance (ESG) concerns in global commerce and corporate responsibility.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">The impact of fintech innovations on financial services, consumer behavior, and investment strategies in evolving digital economies.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <img src={check} alt="" className='w-[25px] h-[25px]' />
                                </div>
                                <p className="poppins-regular">Remote work trends, virtual leadership, and organizational resilience in response to global disruptions and technological advancements.</p>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default Aimscope