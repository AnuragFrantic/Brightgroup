import React from 'react'
import Features from './Features'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {
    AOS.init();
    return (
        <>
            <section className='banner w-full lg:h-[600px] md:h-[400px] h-[300px] relative flex items-center lg:px-20'>
                <div className="absolute inset-0 bg-[#00000094] bg-opacity-50"></div>
                <div className="container relative z-10">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full">
                                {/* <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[26px] font-[600] pb-4 text-center" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
                                    Under the dynamic leadership of our Proprietor,<span className='textorange lg:text-[30px] md:[25px] text-[20px]'>“Mr.Pritpal Bright”</span> , we have achieved a reputed position in the industry. His constant levels of focus have enabled us to serve to gain such a huge client base all across the country.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='lg:px-[6rem] md:px-[2rem] px-0  lg:-mt-7 mt-0 relative z-20 lg:py-0 py-10' >
                <div className="container mx-auto">
                    <Features />
                </div>
            </section>
        </>
    )
}

export default Banner


