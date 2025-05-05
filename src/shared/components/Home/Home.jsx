import React, { useEffect, useState } from 'react';
import dash from '/assets/ijbcibook.png';
import right from '/assets/Right.png';
import { Link, useNavigate } from "react-router-dom";
import { FaBookOpen, FaGlobeAmericas, FaUpload } from 'react-icons/fa';
import { ImUpload2 } from 'react-icons/im';
import { FaBookOpenReader } from 'react-icons/fa6';


const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const featuredTopics = [
    {
      title: "Peer Review ",
      content: "IJBCI follows a rigorous double-blind peer review process to maintain high academic standards. Each submission is evaluated by independent experts to ensure quality, originality, and relevance. This process ensures unbiased feedback and helps uphold the integrity of published research.",
      buttonText: "Learn More ",
      buttonAction: () => { navigate('/peer') }
    },
    {
      title: "Publications Ethics",
      content: "IJBCI is committed to upholding the highest standards of publication ethics and integrity. All stakeholders—authors, reviewers, and editors—are expected to adhere to ethical guidelines to ensure transparency, honesty, and fairness throughout the publication process.",
      buttonText: "Learn More ",
      buttonAction: () => { navigate('/publicationethicspage') }
    },
    {
      title: "Article Processing",
      content: "IJBCI ensures a smooth and transparent article processing system from submission to publication. All manuscripts undergo initial screening, peer review, and editorial evaluation to maintain quality and relevance, supporting timely and efficient dissemination of research.",
      buttonText: "Learn More ",
      buttonAction: () => { navigate('/articleprocessingpage') }
    }
  ];

  const researchDomains = [
    'Strategic Planning',
    'Resource Allocation',
    'Market Positioning',
    'Business Sustainability',
    'Business Innovation',
    'Risk Management',
    'Leadership Styles',
    'Change Management',
    'Organizational Development',
    'Business Models',
    'Corporate Governance',
    'Business Strategy',
    'Portfolio diversification',
    'Return on Investment ',
    'Corporate Restructuring',
    'Asset Management',
    'Financial Instruments',
    'Venture Capital',
    'Private Equity',
    'Valuation Techniques',
    'Financial Analysis',
    'Portfolio Management',
    'Capital Markets',
    'Investment Strategies',
    'Corporate Finance',
    'Marketing Communications',
    'Sales Strategies',
    'Product Development',
    'Startups and Scaleups',
    'Business Incubators',
    'Innovation in Business',
    'Entrepreneurship',
    'Marketing Analytics',
    'E-commerce Strategies',
    'Market Research',
    'Brand Management',

  ];

  // Group domains into categories for visual appeal
  const domainCategories = {
    "Business Strategy and Management": researchDomains.slice(0, 12),
    "Finance and Investment": researchDomains.slice(12, 24),
    "Marketing and Entrepreneurship": researchDomains.slice(24)
  };
  const getNextLaunchDate = () => {
    const now = new Date();
    const currentMonth = now.getMonth(); // 0 = January, 11 = December
    const currentYear = now.getFullYear();

    let nextMonth, nextYear;

    if (currentMonth <= 1) {
        // January or February -> March
        nextMonth = 'March';
        nextYear = currentYear;
    } else if (currentMonth <= 4) {
        // March or April -> June
        nextMonth = 'June';
        nextYear = currentYear;
    } else if (currentMonth <= 7) {
        // May, June, or July -> September
        nextMonth = 'September';
        nextYear = currentYear;
    } else if (currentMonth <= 10) {
        // August, September, or October -> December
        nextMonth = 'December';
        nextYear = currentYear;
    } else {
        // November or December -> March next year
        nextMonth = 'March';
        nextYear = currentYear + 1;
    }

    return `${nextMonth} ${nextYear}`;
};

const [launchDate, setLaunchDate] = useState(getNextLaunchDate());

useEffect(() => {
    const checkMonthChange = () => {
        const newLaunchDate = getNextLaunchDate();
        if (newLaunchDate !== launchDate) {
            setLaunchDate(newLaunchDate);
        }
    };

    // Check every day to detect month changes
    const interval = setInterval(checkMonthChange, 24 * 60 * 60 * 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
}, [launchDate]);

  return (
    <div>
      <div>
        <main className="w-full text-justify ">
          <div className='relative '>
            <div className='lg:flex justify-evenly items-center gap-5 lg:bg-gradient-to-r bg-gradient-to-b from-[#8A42A7] via-[#692783] to-[#361A41] px-4  pb-28 pt-9 '>
              <div className='hidden lg:block  '>
                <img src={dash} alt="image" className=' max-w-[150px] max-w-auto  ' />
              </div>
              <div>
                <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 text-white  lg:pl-6 poppins-bold">
                  Welcome to IJBCI
                </h1>
                <img src={dash} alt="image" className=' max-w-[150px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                  The International Journal of Business and Commerce Insights is a peer-reviewed academic journal dedicated to publishing high-quality research in the fields of business, commerce, and management. IJBCI provides a global platform for scholars, researchers, and professionals to share innovative ideas, strategic insights, and practical solutions. The journal aims to foster a deeper understanding of business trends, commercial practices, and emerging market dynamics. Contributions from diverse disciplines that impact commerce and trade are encouraged.</p>

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
              <h2 className='poppins-bold lg:text-2xl text-xl text-[#8A42A7] mt-4'>About the Journal</h2>
              <p className='poppins-regular lg:px-28 px-3 lg:text-center text-justify text-lg'><span className='text-[#8A42A7] poppins-bold'>The  International Journal of Business and Commerce Insights</span>  is a scholarly platform that publishes original research and insights in business, commerce, and related fields. </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-16  pt-4'>

              {/* <div
                className="bg-[#F0EBF3] p-3"
                style={{
                  clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',
                }}
              >

                <div className='pl-12 pr-40 pt-8'>
                  <h2 className='poppins-bold text-[#8A42A7]  text-xl flex items-center'>Our Mision</h2>
                <div>
                  <p className='poppins-regular'>Our mission is to advance the understanding of corporate finance and investment through the dissemination of innovative research and practical insights. ijbci aims to bridge academia and industry by promoting high-quality studies that address real-world financial challenges and opportunities.</p>
                </div>
                <div className="px-4 lg:px-0  flex justify-end items-end  ">
                  <button className="bg-[#8A42A7] text-white px-4 py-2 rounded-lg  poppins-bold mt-3 cursor-pointer " onClick={() => navigate('/aboutus')}>
                    <div className='flex justify-between gap-3  '>  Learn More
                      <img src={right} alt="Submit Icon" />
                    </div>
                  </button>
                </div>
                </div>
              </div> */}
              <div className='bg-[#8A42A7] lg:pl-20 flex flex-col'>
              <div className='border-2 border-[#8A42A7] bg-[#F0EBF3] h-full'>
               <div className='flex relative lg:right-14 -translate-y-1/2 lg:top-1/2 lg:justify-start justify-center'> <div className='rounded-full border-1 border-[#8A42A7]'><div className='rounded-full bg-[#8A42A7] lg:p-8 p-6 border-[5px] border-white'><FaGlobeAmericas className='w-[29px] h-[29px] text-white'/></div><div></div></div></div>
                <div className='lg:px-14 px-4 space-y-3 -mt-16 mb-6'>
                  <h1 className='poppins-bold text-[#8A42A7] lg:text-xl text-lg lg:mt-0 mt-5'>Our Mission</h1>
                  <p className='poppins-regular'>Our mission is to advance business and commerce knowledge through innovative research and practical insights, bridging academia and industry to address real-world challenges and opportunities.</p>
                
                  <div className="px-4 lg:px-0  flex justify-end items-end  ">
                  <button className="bg-[#8A42A7] text-white px-4 py-2 rounded-lg  poppins-bold mt-3 cursor-pointer" onClick={() => navigate('/aboutus')}>
                    <div className='flex justify-between gap-3'>  Learn More
                      <img src={right} alt="Submit Icon" />
                    </div>
                  </button>
                </div></div>
              </div>
              </div>
              <div className='bg-[#8A42A7] lg:pl-20 flex flex-col'>
              <div className='border-2 border-[#8A42A7] bg-[#F0EBF3] h-full'>
               <div className='flex relative lg:right-14 -translate-y-1/2 lg:top-1/2 lg:justify-start justify-center'> <div className='rounded-full border-1 border-[#8A42A7]'><div className='rounded-full bg-[#8A42A7] lg:p-8 p-6 border-[5px] border-white'><FaBookOpenReader  className='w-[29px] h-[29px] text-white'/></div><div></div></div></div>
                <div className='lg:px-14 px-4 space-y-3 -mt-16 mb-6'>
                  <h1 className='poppins-bold text-[#8A42A7] lg:text-xl text-lg lg:mt-0 mt-5'>Aim and Scope</h1>
                  <p className='poppins-regular'>The IJBCI aims to publish impactful research that advances knowledge in business, management, and commerce, with a focus on practical and innovative solutions to global challenges.</p>
                
                  <div className="px-4 lg:px-0  flex justify-end items-end  ">
                  <button className="bg-[#8A42A7] text-white px-4 py-2 rounded-lg  poppins-bold mt-3 cursor-pointer" onClick={() => navigate('/aimscope')}>
                    <div className='flex justify-between gap-3'>  Learn More
                      <img src={right} alt="Submit Icon" />
                    </div>
                  </button>
                </div></div>
              </div>
              </div>
              <div></div>
            </div>
          </div>

          <section className="mb-8 w-full ">
            <div className="bg-white  p-6 border-2 border-[#8A42A7] w-full ">
              {/* <div className="relative w-fit mx-auto mb-6"> */}
                <h2 className=" text-lg lg:text-xl poppins-bold text-[#8A42A7] text-center mb-2 lg:mb-0">
                  Featured Topics
                </h2>
                {/* <div className='absolute bg-[#8A42A7] h-[3px] min-w-[130px] '></div></div> */}

              <div className="flex border-b-[2px] border-[#8A42A7] mb-6 lg:gap-8 gap-2 sm:gap-8 md:gap-8">
                {featuredTopics.map((topic, index) => (
                  <button
                    key={index}
                    className={`  poppins-medium cursor-pointer ${activeTab === index ? 'text-[#8A42A7] border-b-2 border-[#8A42A7] ' : ' hover:text-[#8A42A7]'} transition-colors duration-200 lg:text-lg text-sm`}
                    onClick={() => setActiveTab(index)}
                  >
                    {topic.title}
                  </button>
                ))}

              </div>
              <div className=" rounded-lg">
                <p className="leading-relaxed poppins-regular">{featuredTopics[activeTab].content}</p>
                <div className='flex justify-end mt-4'>
                  <button
                    onClick={featuredTopics[activeTab].buttonAction}
                    className="bg-[#8A42A7] text-white px-5 py-2  poppins-bold cursor-pointer rounded-lg"
                  >
                    <div className='flex justify-between gap-1 '>  {featuredTopics[activeTab].buttonText}
                      <img src={right} alt="Submit Icon" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Key Research Domains Section */}
          <section className="bg-white border-2 border-[#8A42A7]    mb-7 lg:mb-8 w-full  ">

            <h2 className="text-center text-xl poppins-bold mt-4 text-[#8A42A7] ">
              Key Research Domains
            </h2>

            <p className="text-center text-base lg:text-xl mb-3 lg:mb-4  text-[#000000] poppins-bold px-4 lg:px-0 mt-4 ">
              The journal covers the following areas of  Business and Commerce Insights
            </p>
            <div >
              <div>
                {Object.entries(domainCategories).map(([category, domains], index) => (
                  <div key={category} className="mb-6">
                    <h3 className="lg:text-xl text-lg poppins-bold text-[#8A42A7] mb-6 px-4 ">{category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                      {domains.map((domain, i) => (
                        <div
                          key={i}
                          className="flex items-center p-4 bg-[#F0F0F0]  shadow-sm hover:shadow-md hover:bg-[#dec4e9] transition-all duration-300 "
                        >
                          <span className="text-black poppins-regular">{domain}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Submission Info Section */}
          <section className="w-full  text-center bg-[#F0EBF3] p-5 space-y-5">
            <div>
            <h2 className='poppins-bold text-xl mb-2 text-[#8A42A7]'>Ready to Contribute ? </h2>
            </div>
            <div>
            <p className=" mb-2 poppins-regular lg:text-base px-4 lg:px-0 lg:text-center text-justify">
              We publish original research articles, review articles, and technical notes. The journal reviews papers within two weeks of submission and publishes accepted articles on the internet immediately upon receiving the final versions. Our fast reviewing process is our strength.
            </p>
            </div>
            <div className='flex justify-center items-center'>
            <div className="bg-[#8A42A7]  p-2 lg:max-w-1/2 ">
              <p className="text-white poppins-bold  text-sm lg:text-base">
                The last date for manuscript submission for the next issue is {launchDate}              </p>
            </div></div>
            <p className="text-black mt-2 poppins-regular   px-4 lg:px-0">
              With Warm Regards, <br />
              <span className='text-[#8A42A7]'>Editor-in-Chief</span> <br />
              <span className="font-bold">IJBCI</span>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
