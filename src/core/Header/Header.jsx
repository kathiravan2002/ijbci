import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import NavItems from "./NavItems";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '/assets/ijbci.png'
import { IoIosArrowDropdown } from "react-icons/io";

const Header = () => {
  const menuRef = useRef(null);
  const [MenuOpen, setMenuOpen] = useState(false);
  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);
  const dropdown3Ref = useRef(null);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const isActive = location.pathname;
  const ToggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
        setDropdown1(false);
      }
      if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
        setDropdown2(false);
      }
      if (dropdown3Ref.current && !dropdown3Ref.current.contains(event.target)) {
        setDropdown3(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    console.log();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Aboutus = [
    { name: "About Us", path: "/aboutus" },
    { name: "Aim and Scope", path: "/aimscope" },
    { name: "Editorial Board", path: "/editorial" },
    { name: "Issues", path: "/issues" },
    { name: "Author Guidelines", path: "/authorguidelinespage" },
    { name: "Copyrights", path: "/copyrightformpage" },
  ];
  const Overview = [
    { name: "Peer Review Process", path: "/peer" },
    { name: "Publication Ethics", path: "/publicationethicspage" },
    { name: "Abstracting and Indexing", path: "/abstractindexing" },
    { name: "Article Processing", path: "/articleprocessingpage" }
  ];
  const Policy = [
    { name: "Plagiarism ", path: "/plagiarismpage" },
    { name: "Malpractice", path: "/malpracticepage" },
    { name: "Correction", path: "/correctionpage" },
    { name: "Publication Rights", path: "/publicationrightspage" },
  ];

  return (
    <>
      <header
        ref={menuRef}
        className="fixed top-0 w-full z-[100] ">
        <div className="bg-[#8A42A7] py-5">
          <div className="max-w-full mx-auto w-full ">
            <div className="w-full flex  items-center justify-between ">             
              <div className=" flex justify-center items-center h-full text-white z-10 " >
                {/* <div className=" " ></div> */}
                {/* <Link to={'/'}>
                  <div>
                    <img
                      src={Logo}
                      loading='lazy'
                      alt="Website Logo"
                      className=" lg:min-w-40 lg:w-40 min-w-28 w-28 select-none lg:ml-10 ml-8"
                    />
                   
                  </div>

                </Link> */}
                <h2 className="namdhinggo-extrabold text-3xl lg:ml-10 ml-6">IJBCI</h2>
                
              </div>

              <Link to={"/"} className="lg:block hidden  lg:pl-44 xl:pl-0 mr-24">
                <div className="flex justify-center items-center">
                  <h1 className="text-2xl font-semibold  whitespace-nowrap text-white namdhinggo-bold ">International Journal of Business and Commerce Insights</h1>
                </div>
              </Link>

              <div className="hidden lg:block w-[100px]"></div>

              <div
                onClick={ToggleMenu}
                className={`${scroll ? "" : ""
                  } text-white inline-flex align-middle cursor-pointer items-center duration-300 min-w-24 select-none lg:hidden `}
              >
                {" "}

                < GiHamburgerMenu
                  className={`${scroll ? " " : ""}  ml-10 text-3xl  cursor-pointer duration-300 m-1.5  rotate-180 `}
                />
              </div>



            </div>
          </div>

          <NavItems MenuOpen={MenuOpen} ToggleMenu={ToggleMenu} isActive={isActive} dropdown1Ref={dropdown1Ref} dropdown2Ref={dropdown2Ref} setDropdown1={setDropdown1} setDropdown2={setDropdown2} dropdown1={dropdown1} dropdown2={dropdown2} />
          {MenuOpen && (
            <div
              onClick={() => setMenuOpen(false)}
              className="h-screen w-full bg-black/40 absolute top-0"
            ></div>
          )}
        </div>

        {/* lg navigations */}
        <div className="lg:py-2.5 py-2  w-full  bg-white hidden lg:block"
        >
          <div className="lg:flex items-center justify-center   gap-10 ">
            <div className="  h-full text-[#8A42A7] poppins-medium hidden  lg:block ">
              <ul className="flex gap-5 h-full  ">
                <li className="">
                  <Link to='/'>Home</Link>
                </li>

                <li ref={dropdown1Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown1(!dropdown1)} className="flex items-center gap-1" >About<IoIosArrowDropdown className={`${dropdown1 ? 'rotate-180' : 'rotate-0'} duration-200 text-lg `} /> </Link>
                  {dropdown1 &&
                    <div className="absolute  bg-white border border-[#8A42A7] mt-2 rounded-lg">
                      <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap ">
                        {Aboutus.map((link, index) => (
                          <Link key={index} onClick={() => setDropdown1(!dropdown1)} to={link.path} className="!w-full" >
                            <li className="px-4 py-1  text-[#8A42A7] poppins-medium  border-b border-[#584A05]" >{link.name} </li>
                          </Link>
                        ))}
                      </ul>
                    </div>}
                </li>
                <li ref={dropdown2Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown2(!dropdown2)} className="flex items-center gap-1" >Journal Overview <IoIosArrowDropdown className={`${dropdown2 ? 'rotate-180' : 'rotate-0'} duration-200 text-lg `} /> </Link>
                  {dropdown2 &&
                    <div className="absolute  bg-white border border-[#8A42A7] mt-2 rounded-lg">
                      <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap ">
                        {Overview.map((link, index) => (
                          <Link key={index} onClick={() => setDropdown2(!dropdown2)} to={link.path} className="!w-full" >
                            <li className="px-4 py-1   text-[#8A42A7] poppins-medium border-b border-[#8A42A7] " >{link.name} </li>
                          </Link>
                        ))}
                      </ul>
                    </div>}
                </li>
                <li ref={dropdown3Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown3(!dropdown3)} className="flex items-center gap-1" >Journal Policy<IoIosArrowDropdown className={`${dropdown3 ? 'rotate-180' : 'rotate-0'} duration-200 text-lg `} /> </Link>
                  {dropdown3 &&
                    <div className="absolute bg-white border border-[#8A42A7] mt-2 rounded-lg">
                      <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap ">
                        {Policy.map((link, index) => (
                          <Link key={index} onClick={() => setDropdown3(!dropdown3)} to={link.path} className="!w-full" >
                            <li className="px-4 py-1   text-[#8A42A7] poppins-medium border-b border-[#8A42A7]" >{link.name} </li>
                          </Link>
                        ))}
                      </ul>
                    </div>}
                </li>
                <li className="">
                  <Link to='/contactuspage'>Contact</Link>
                </li>
              </ul>
            </div>
            {/* <div className="flex justify-center items-center ">
              <Link to="https://iraep.com/iraep/index.php/iraep/about/submissions" target="_blank" rel="noopener noreferrer">
                <button className="hover:text-white poppins-regular hover:bg-[#937D14] lg:p-1 lg:px-4   py-1 px-2 cursor-pointer text-[#584A05] border-2 border-[#584A05] hover:border-2 hover:border-[#937D14]  transition-duration duration-300">
                  <div className="flex justify-between  text-nowrap gap-2 "> Submit Paper <ImUpload2 className="mt-1" /></div>
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;