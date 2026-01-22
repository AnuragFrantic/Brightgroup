import React from 'react'


import manuunit from '../../assets/Image/manufacturingunit.webp'
import certificate from '../../assets/Image/certificate.webp'
import machinery from '../../assets/Image/machinery.webp'
import service from '../../assets/Image/service.webp'
import infresetup from '../../assets/Image/infrastructuresetup.webp'
import rawmaterial from '../../assets/Image/rawmaterial.webp'
import infrafacility from '../../assets/Image/infrastructure.webp'
import Manufacturing from '../../assets/Image/manufacturing.webp'
import Heading from '../../Component/Heading'

const data = [
    {
        image: manuunit,

    },
    {
        image: certificate,

    },
    {
        image: machinery,

    },
    {
        image: service,

    },
    {
        image: infresetup,

    },
    {
        image: rawmaterial,

    },
    {
        image: infrafacility,

    },
    {
        image: Manufacturing,

    },

]



function Gallery() {
    return (
        <>

            <div class="grid grid-cols-1">
                <div class="col-span-1 text-center">
                    <Heading title="Our Gallery" />
                </div>
            </div>

            <div class="er_sec er_gallery_section">
                <div class="er_gallary_wrapper">
                    <div className="container mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {data.map((img, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-b  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img src={img.image} alt="gallery-img" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                                {/* <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h5 className="text-white text-lg font-semibold">Plants For Garden</h5>
                                    <p className="text-white text-sm px-4 text-center">Amet minim mollit non deserunt ullamco aliqua dolor do amet sint duis enim.</p>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Gallery


