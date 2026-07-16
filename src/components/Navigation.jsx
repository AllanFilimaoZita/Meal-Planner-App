import { IoSunnyOutline } from "react-icons/io5";
import { PiBasketBold } from "react-icons/pi";
import { CiForkAndKnife } from "react-icons/ci";
import { BsChatRight } from "react-icons/bs";

function Navigation() {
    return (
        <div>
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

export default Navigation