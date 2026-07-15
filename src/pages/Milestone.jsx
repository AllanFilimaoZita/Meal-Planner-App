import Food1 from '../assets/img/food1.jpg'
import Food2 from '../assets/img/food2.jpg'
import Food3 from '../assets/img/food3.jpg'

import Fire from '../assets/svg/Fire.svg';
import Taca from '../assets/svg/Taca.svg';
import Photo from '../assets/img/Photo.png'

import { PiBasketBold } from "react-icons/pi";
import { BsChatRight } from "react-icons/bs";
import { CiForkAndKnife } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

function Milestone() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-end py-5 px-5 relative">

            <header className="fixed top-0 left-1/2 -translate-x-1/2 z-30 flex flex-row items-center justify-between py-8 px-5 w-full bg-white">
                <div className="w-12 hover:cursor-pointer duration-300">
                    <img src={Photo} className="w-full rounded-full" />
                </div>

                <div className='bg-gray-200 p-1 rounded-md hover:cursor-pointer hover:bg-gray-700 hover:text-white duration-300'>
                    <IoMdMenu className="size-8" />
                </div>
            </header>

            <section className="w-full h-26 flex items-center justify-center gap-4 bg-[#8B4EEB] py-4 px-4 rounded-2xl mt-25 text-white">

                <div>
                    <img src={Taca} className='w-32' />
                </div>

                <div className='flex flex-col justify-between h-full gap-2'>
                    <h3 className='text-lg font-black'>Wow! You made it</h3>
                    <p className='text-xs'>
                        You have won <span className='font-black'>5 days free trial </span>
                        of the daily diet plan. Enjoy!
                    </p>
                </div>

                <div className='flex flex-col items-center justify-between h-full'>
                    <IoClose className='size-5 hover:size-8 hover:cursor-pointer' />
                    <img src={Fire} />
                </div>

            </section>
            
            <section className='flex flex-col items-center justify-between mt-5 w-full h-full gap-5'>

                <div>
                    <img src={Food3} className='rounded-2xl' />
                </div>
                
                <div>
                    <img src={Food1} className='rounded-2xl' />
                </div>
                
                
                <div>
                    <img src={Food2} className='rounded-2xl' />
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

export default Milestone