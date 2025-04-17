import React from 'react'


function Contactus() {
    return (

        <div >
            <div className='flex justify-center items-center flex-col'>
                <h1 className="lg:text-2xl text-xl poppins-extrabold mb-4 text-[#8A42A7]">Contact us:</h1>
                <p className="text-black text-base mb-4 poppins-regular">Get in touch with us for any queries or support </p>
            </div>
            <div className='w-full  mx-auto'>
                <div className="bg-[#F0EBF3] p-6 rounded-lg border-2 border-[#8A42A7] max-w-md mx-auto">

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-[#8A42A7] poppins-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                className="w-full p-2 border border-[#8A42A7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A42A7] bg-white"
                            />
                        </div>


                        <div>
                            <label htmlFor="email" className="block text-[#8A42A7] poppins-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full p-2 border border-[#8A42A7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A42A7] bg-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-[#8A42A7] poppins-medium mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="subject"
                                className="w-full p-2 border border-[#8A42A7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A42A7] bg-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-[#8A42A7] poppins-medium mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Message..."
                                rows="4"
                                className="w-full p-2 border border-[#8A42A7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A42A7] max-h-[calc(85vh-100px)] bg-white"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#8A42A7] text-white p-2 rounded-lg  flex items-center justify-center poppins-medium"
                        >
                            <span className="mr-2"></span> Send Email
                        </button>

                        <p className="text-center text-gray-600 mt-6 poppins-regular">
                            For any queries contact Email: <a href="mailto:editor@ijbci.com" className="text-[#8A42A7] hover:underline">editor@ijbci.com</a>
                        </p>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default Contactus