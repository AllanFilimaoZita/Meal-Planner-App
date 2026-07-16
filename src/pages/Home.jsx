import Photo from '../assets/img/Photo.png'
import Ramen from '../assets/img/ramen.png'

import { FaFire } from "react-icons/fa6";
import { PiBasketBold } from "react-icons/pi";
import { BsChatRight } from "react-icons/bs";
import { CiForkAndKnife } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";

function Home() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-end py-5  relative">

            <header className="flex flex-row items-center justify-between w-full px-5 py-4 bg-white">
                <div className="w-10 hover:cursor-pointer duration-300">
                    <img src={Photo} className="w-full rounded-full" alt="profile" />
                </div>
                <div className='bg-gray-200 p-1.5 rounded-md hover:cursor-pointer hover:bg-gray-700 hover:text-white duration-300'>
                    <IoMdMenu className="size-6" />
                </div>
            </header>

            <section className='px-4 py-3 flex flex-col items-center justify-between border w-[90%] h-50 rounded-xl'>
                <div className='flex items-center justify-between w-full'>
                    <h3 className='font-bold'>Today's Progress</h3>

                    <span className='text-blue-400'>View more</span>
                </div>

                <div className='w-full'>
                    <div className='flex flex-col items-start'>
                        <span className='text-gray-300 text-sm'>Calories</span>
                        <div className='flex items-center justify-center gap-1'>
                            <FaFire />
                            <p className='text-xm'>1,284</p>
                        </div>
                    </div>
                </div>

                <div className='w-full flex items-center justify-start gap-4'>
                    <img src={Photo} className="w-9 rounded-full" alt="profile" />

                    <p className='bg-gray-100 px-4 py-2 rounded-full text-sm'>
                        Keep the pace! You're doing great.
                    </p>
                </div>
            </section>
            
            <section className='flex flex-col items-center justify-center gap-5 mt-5 mb-15'>

                <img src={Ramen} className='w-80 h-70 rounded-2xl' />
                <img src={Ramen} className='w-80 h-70 rounded-2xl' />

            </section>

            <nav className="w-[90%] flex items-center justify-between bg-black text-white px-6 py-3 rounded-full fixed bottom-2 left-1/2 -translate-x-1/2 z-20">

                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="bg-white text-black rounded-full p-1.5">
                        <IoSunnyOutline className="size-4" />
                    </div>
                    <span className="text-[10px] font-bold">Today</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-1 opacity-60">
                    <CiForkAndKnife className="size-5" />
                    <span className="text-[10px]">Meal Plan</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-1 opacity-60">
                    <PiBasketBold className="size-5" />
                    <span className="text-[10px]">Grocery List</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-1 opacity-60">
                    <BsChatRight className="size-5" />
                    <span className="text-[10px]">Chat</span>
                </div>

            </nav>

        </div>
    )
}

export default Home