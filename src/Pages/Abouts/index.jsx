import React from 'react'
import Heading from '../../Component/Heading'
import Companyalbum from './Companyalbum'
import manuunit from '../../assets/Image/manufacturingunit.webp'
import certificate from '../../assets/Image/certificate.webp'
import machinery from '../../assets/Image/machinery.webp'
import service from '../../assets/Image/service.webp'
import infresetup from '../../assets/Image/infrastructuresetup.webp'
import rawmaterial from '../../assets/Image/rawmaterial.webp'
import infrafacility from '../../assets/Image/infrastructure.webp'
import Manufacturing from '../../assets/Image/manufacturing.webp'
import OurInfrastructure from '../../assets/Image/ourinfrastructure.webp'
import Factsheet from './Factsheet'
import Whyus from './Whyus'

const Abouts = () => {
    const data = [
        {
            image: manuunit,
            text: "Manufacturing Unit",
            para: "Manufacturing Area"
        },
        {
            image: certificate,
            text: "ISO Certification",
            para: "Registration Date: 21 Sep-2021",
            para2: "Expiry Date:20-Sep-2024"
        },
        {
            image: machinery,
            text: "Our Machinery",
            para: "Machines"
        },
        {
            image: service,
            text: "Our Services",
            para: "Services"
        },
        {
            image: infresetup,
            text: "Infrastructural Set-Up",
            para: "Office Image"
        },
        {
            image: rawmaterial,
            text: "Raw Materials",
            para: "Our Production Method"
        },
        {
            image: infrafacility,
            text: "Infrastructure Facilities",
            para: "Our Control Panel"
        },
        {
            image: Manufacturing,
            text: "Infrastructure & Manufacturing Facilities",
            para: "Our Infrastructure"
        },
        // {
        //     image: OurInfrastructure,
        //     text: "Our Infrastructure",
        //     para:"Our Infrastructure"
        // },
    ]


    const teamMembers = [
        {
            name: "Surinderpal Singh Bright",
            title: "Chairman",
            description: "Visionary leader with decades of industry experience guiding our company's strategic direction and growth.",
            color: "from-orange-500 to-orange-600"
        },
        {
            name: "Pritpal Singh Bright",
            title: "Managing Director",
            description: "Dynamic executive overseeing operations, business development, and ensuring operational excellence.",
            color: "from-blue-500 to-blue-600"
        },
        {
            name: "Karamveer Singh Bright",
            title: "Executive Director",
            description: "Innovative leader driving technical excellence, quality control, and process optimization.",
            color: "from-emerald-500 to-emerald-600"
        }
    ]

    return (
        <>
            <section className='lg:py-10 py-5'>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center">
                                <Heading title="About Us" />
                            </div>
                            <div className="col-span-1">
                                <p className='pt-5 md:text-[18px] text-[15px] text-justify'>
                                    <span className='textorange'>Bright Environment Solution Pvt Ltd </span>was established in year of <span className='textorange'>2010</span>. We are leading manufacturers and wholesaler of high quality <span className='textorange'>Pyrolysis oil, Diesel Oil, etc</span>. Our range is widely acclaimed for neck-deep first-class features like quality, efficiency and durability. All the products we offer conform to international quality standards and accomplish the complete demand of customers. Our products find usage in various industrial applications and gives efficient performance by reducing the down time of boilers and furnances occurring due to other low quality oils. Our oil is a direct substitute to LDO and industrial diesel, at a lesser rate.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Factsheet />
            <Companyalbum />
            <section className='lg:pb-10 pb-5 overflow-hidden'>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center">
                                <Heading title="About The Company" />
                            </div>
                            <div className="col-span-1">
                                <p className='pt-5 md:text-[18px] text-[15px] text-justify'>
                                    The team we have has vast experience in this industry and stay in close coordination with customers to understand their requirement and offer the line accordingly. We also custom-make the products as per the necessity and stipulation of the client and offer them inside a stipulated time frame to meet their demand.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 pt-10 justify-center">
                        {
                            data.map((itm) => (
                                <>
                                    <div className="col-span-1" data-aos="fade-up"
                                        data-aos-duration="2000">
                                        <div className="w-full h-full bg-white p-4 rounded-[10px] relative overflow-hidden shadow-md shadow-[#e87e006b] transition-all duration-300">
                                            {/* <div className="icon h-[60px] w-[60px] rounded-[50%] mb-[20px] flex justify-center items-center" style={{ backgroundColor: "color-mix(in srgb, #e87e00, transparent 90%)" }}
                                            > */}
                                            <div className='mb-3'>
                                                <img src={itm.image} alt='image' className='h-[200px] w-full object-cover rounded-[10px]' />
                                            </div>
                                            {/* </div> */}
                                            <h3 className='md:text-[20px] text-[15px] font-[600] md:mb-[5px] mb-[2px]'>{itm.text}</h3>
                                            <p className='md:text-[15px] text-[12px]'>
                                                {itm.para}
                                            </p>
                                            <p className='md:text-[15px] text-[12px]'>
                                                {itm.para2}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>
            </section>
            {/* NEW LEADERSHIP TEAM SECTION */}
            <section className='py-20 bg-gradient-to-b from-slate-50 to-white'>
                <div className="container">
                    <div className="text-center mb-20">
                        <Heading title="Leadership Team" />
                        <p className='pt-5 md:text-xl text-lg max-w-2xl mx-auto text-gray-600'>
                            Meet the visionary leaders driving Bright Environment Solution Pvt Ltd towards excellence and innovation.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white"
                                data-aos="fade-up"
                                data-aos-delay={index * 200}
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                {/* Profile Avatar */}
                                <div className="relative z-10 p-8 text-center">
                                    <div className="w-24 h-24 mx-auto mb-6 relative">
                                        <div className={`w-full h-full rounded-full bg-gradient-to-br ${member.color} p-1 group-hover:scale-110 transition-all duration-500`}>
                                            <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg">
                                                <svg className="w-12 h-12 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 bg-clip-text transition-all duration-500">
                                        {member.name}
                                    </h3>

                                    {/* Title */}
                                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 text-white bg-gradient-to-r ${member.color} shadow-lg`}>
                                        {member.title}
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                        {member.description}
                                    </p>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute -top-4 -right-4 w-48 h-48 bg-white/20 rounded-full blur-xl -rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Whyus />

        </>
    )
}

export default Abouts
