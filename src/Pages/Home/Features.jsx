import React from 'react'
import diesel from '../../assets/Image/diesel.png'
import Pyrolysis from '../../assets/Image/oil.png'
import Carbon from '../../assets/Image/carbon.png'
const Features = () => {
    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">

                <div className="col-span-1">
                    <div className="h-full w-full bg-white p-2 border-t-2 border-[#e87e00] text-center shadow-lg shadow-gray-300 sweep-to-bottom" style={{ borderTopWidth: '5px' }}>
                        <img src={Pyrolysis} alt="Extensive Clean" className="mx-auto py-3 h-[100px]" />
                        <h1 className="font-bold text-lg py-2">Pyrolysis Oil</h1>
                        <p className="text-[#ABA9A9] text-md">Our range of products include plastic pyrolysis oil, pyrolysis oil bottle, premium pyrolysis oil and boilers furnaces fuel oil.</p>
                    </div>
                </div>


                <div className="col-span-1">
                    <div className="h-full w-full bg-white p-2 border-t-2 border-[#e87e00] text-center shadow-lg shadow-gray-300 sweep-to-bottom" style={{ borderTopWidth: '5px' }}>
                        <img src={diesel} alt="Exterior Washing" className="mx-auto py-3 h-[100px]" />
                        <h1 className="font-bold text-lg py-2">Diesel Oil</h1>
                        <p className="text-[#ABA9A9] text-md">Offering you a complete choice of products which include light diesel oil, industrial diesel oil, furnace diesel oil, high mileage diesel oil and industrial boiler diesel oil.</p>
                    </div>
                </div>




                <div className="col-span-1">
                    <div className="h-full w-full bg-white p-2 border-t-2 border-[#e87e00] text-center shadow-lg shadow-gray-300 sweep-to-bottom" style={{ borderTopWidth: '5px' }}>
                        <img src={Carbon} alt="Modern Equipment" className="mx-auto py-3 h-[100px]" />
                        <h1 className="font-bold text-lg py-2">Carbon Black</h1>
                        <p className="text-[#ABA9A9] text-md">Providing you the best range of carbon black powder with effective & timely delivery.</p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Features
