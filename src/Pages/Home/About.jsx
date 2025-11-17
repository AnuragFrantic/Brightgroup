import React from 'react'
import nature from '../../assets/Image/nature.png'
import Heading from '../../Component/Heading'
import about from '../../assets/Image/aboutus.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    AOS.init();
    const data = [
        {
            image: nature,
            title: "Nature of Business",
            para: "Manufacturer"
        },
        {
            image: nature,
            title: "Total Number of Employees",
            para: "11 to 25 People"
        },
        {
            image: nature,
            title: "GST Registration Date",
            para: "01-07-2017"
        },
        {
            image: nature,
            title: "Legal Status of Firm",
            para: "Limited Company"
        },
        {
            image: nature,
            title: "Annual Turnover",
            para: "5 - 25 Cr"
        },
        {
            image: nature,
            title: "GST No.",
            para: "27AAECB4964F1ZM"
        },
        {

            image: nature,
            title: "CIN No.",
            para: "U90001MH2011PTC215803"
        },
    ]
    return (
        <>
            <section className='lg:py-10 py-5 overflow-hidden' >
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 text-center">
                            {/* <Heading title="About Bright Environmental Solutions Private Limited" /> */}
                            <h3 className='title2 md:text-[30px] text-[17px]  font-[600] border-b-2 border-[#FF914D] inline-block relative py-3'>About Bright Environmental Solutions Private Limited</h3>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 pt-10 justify-center">
                        {
                            data.map((itm) => (
                                <>
                                    <div className="col-span-1" data-aos="fade-up"
                                        data-aos-duration="2000">
                                        <div className="w-full h-full bg-white xl:p-8 lg:p-6 p-4 rounded-[10px] relative overflow-hidden shadow-md shadow-[#e87e006b] transition-all duration-300">
                                            <div className="icon h-[60px] w-[60px] rounded-[50%] mb-[20px] flex justify-center items-center" style={{ backgroundColor: "color-mix(in srgb, #e87e00, transparent 90%)" }}
                                            >
                                                <img src={itm.image} alt='image' className='h-[40px]' />
                                            </div>
                                            <h3 className='md:text-[14px] xl:text-[17px] text-[15px] font-[600] md:mb-[5px] mb-[2px]'>{itm.title}</h3>
                                            <p className='md:text-[11px] xl:text-[15px] text-[12px]'>
                                                {itm.para}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ))
                        }

                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 pt-20 gap-8 items-center">

                        <div className="col-span-1" data-aos="flip-left" data-aos-duration="1000">
                            <img src={about} alt='image' className='rounded-[10px] border-l-4 border-[#e87e00]' />
                        </div>
                        <div className="cols-span-1" data-aos="fade-left" data-aos-duration="2000">
                            <div className="w-full">
                                <h3 className=' md:text-[30px] text-[20px] font-[600]'>About Us</h3>
                                <p className='xl:text-[18px] text-[15px] font-[400] py-3 text-justify'>
                                    <span className='font-[600] textorange'>Bright Environment Solution Pvt Ltd</span> was established in year of <span className='font-[600] textorange'>2010</span>. We are leading manufacturers and wholesaler of high quality <span className='font-[600] textorange'>Pyrolysis oil, Diesel Oil, etc</span>. Our range is widely acclaimed for neck-deep first-class features like quality, efficiency and durability. All the products we offer conform to international quality standards and accomplish the complete demand of customers. Our products find usage in various industrial applications and gives efficient performance by reducing the down time of boilers and furnances occurring due to other low quality oils. Our oil is a direct substitute to LDO and industrial diesel, at a lesser rate.
                                </p>
                                <div className='pt-4 '>
                                    <button className='bgorange text-white rounded-[5px] px-5 py-2 cursor-pointer' onClick={() => navigate('/about')}>Know More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
