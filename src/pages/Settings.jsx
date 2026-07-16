import Photo from '../assets/img/Photo.png'

import { MdKeyboardBackspace } from "react-icons/md";
import { FaFire } from "react-icons/fa6";
import { PiBasketBold } from "react-icons/pi";
import { BsChatRight } from "react-icons/bs";
import { CiForkAndKnife } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";

function Settings() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-end py-5 gap-5 relative">

            <header className="flex flex-col items-start justify-between w-full px-5 py-2 gap-4 bg-white">

                <div className='w-full flex items-start justify-between'>
                    <MdKeyboardBackspace className="size-7" />
                    <span className='text-blue-400 font-bold'>Settings</span>
                </div>

                <div className="w-full flex items-center gap-2 hover:cursor-pointer duration-300">
                    <img src={Photo} className="w-10 rounded-full" alt="profile" />
                    <p>
                        Hi, Rebecca
                    </p>
                </div>
            </header>

            <section className='px-2 py-1 flex items-center justify-around rounded-xl bg-gray-200 w-90 mb-5 gap-2'>
                <button className='bg-white w-50 rounded-md'>Journal</button>
                <button className='w-50 rounded-md'>Favorites</button>
            </section>

            <section className='px-4 py-3 flex flex-col items-center justify-between border w-[90%] h-50 rounded-xl'>
                <div className='flex items-center justify-between w-full'>
                    <h3 className='font-bold'>Weekly Progress</h3>

                    <span className='text-gray-400 text-sm'>9:38AM</span>
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
            </section>

            <h2>Last Measurement</h2>
            <section className='px-4 py-3 flex flex-col items-center justify-between border w-[90%] h-50 rounded-xl'>
                <div className='flex items-center justify-between w-full'>
                    <h3 className='font-bold'>Weight</h3>

                    <span className='text-gray-400 text-sm'>9:38AM</span>
                </div>

                <div className='w-full flex flex-col'>
                    <div className='flex flex-col items-start'>
                        <span className='text-4xl'>72,4 <sub className='text-sm'>kg</sub></span>
                        <div className='flex items-center justify-center gap-1'>
                            <p className='text-sm text-gray-400'>
                                21% For Months
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <button className='bg-[#8B4EEB] py-2 text-white font-bold rounded-xl w-full'>Track new weight</button>
                </div>
            </section>
            
            <section className='px-4 py-3 flex flex-col items-center justify-between border w-[90%] h-50 rounded-xl mb-20 gap-5'>
                <div className='flex items-center justify-between w-full'>
                    <h3 className='font-bold'>Calories</h3>

                    <span className='text-gray-400 text-sm'>9:38AM</span>
                </div>

                <div className='w-full flex flex-col'>
                    <div className='flex flex-col items-start'>
                        <span className='text-4xl'>1,548 <sub className='text-sm'>Cal</sub></span>
                        <div className='flex items-center justify-center gap-1'>
                            <p className='text-sm text-gray-400 flex items-center gap-2 mt-2'>
                                <div className='w-2 h-2 bg-green-400 rounded-full'></div>89% Cal
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full h-10'>
                </div>
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

export default Settings