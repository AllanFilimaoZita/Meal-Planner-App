import Navigation from '../components/Navigation'

import Photo from '../assets/img/Photo.png'

import { FaAppStore } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoSend } from "react-icons/io5";

function Chat() {

    return (
        <div className="w-full min-h-screen bg-white relative flex flex-col">

            <header className="flex flex-row items-center justify-between w-full px-5 py-4 bg-white">
                <div className="w-10 hover:cursor-pointer duration-300">
                    <img src={Photo} className="w-full rounded-full" alt="profile" />
                </div>
                <div className='bg-gray-200 p-1.5 rounded-md hover:cursor-pointer hover:bg-gray-700 hover:text-white duration-300'>
                    <IoMdMenu className="size-6" />
                </div>
            </header>

            <p className='text-gray-400 text-center text-sm py-4'>
                Your personal nutritionist
            </p>


            <div className='w-[90%] flex items-center justify-between bg-gray-100 text-white px-6 py-3 rounded-full fixed left-1/2 -translate-x-1/2 z-20fixed bottom-20'>
                <div className='flex justify-between w-15'>
                    <FaCamera className='text-gray-500 size-5 hover:cursor-pointer' />
                    <FaAppStore className='text-gray-500 size-5 hover:cursor-pointer' />
                </div>
                <input type="text" name="search" id="search" placeholder='Message...' className='flex-1 bg-transparent outline-none text-sm text-gray-300' />
                <button className='bg-black text-white rounded-full p-2 hover:cursor-pointer'>
                    <IoSend className='size-4' />
                </button>
            </div>

            <Navigation />
        </div>
    )
}

export default Chat