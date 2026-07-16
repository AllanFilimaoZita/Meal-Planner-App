import { MdKeyboardBackspace } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { IoReload } from "react-icons/io5";

import Food4 from '../assets/img/food4.png'

function Recipe() {
    return (
        <div className="h-full w-full py-5 relative">

            <header className="w-full flex items-start justify-between gap-3 px-5 absolute py-4">
                <MdKeyboardBackspace className="size-7" />
                <IoIosMore className="size-7" />
            </header>

            <section>
                <img src={Food4} className="w-full h-70" />
            </section>

            <section className="w-full py-5 absolute top-65 bg-white rounded-t-4xl">
                <section className="w-full flex items-center justify-between px-5">
                    <IoReload className="size-7" />
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold text-xl">Ramen</h3>
                        <p>Lunch/15 mins</p>
                    </div>
                    <div className="w-5">
                    </div>
                </section>
                
                <section className="flex items-center justify-between w-full px-5 py-4 mt-4 bg-gray-200">
                    <div className="flex flex-col items-center">
                        <span>100k</span>
                        <p className="font-bold">Energy</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>15g</span>
                        <p className="font-bold">Protein</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>58g</span>
                        <p className="font-bold">Carbs</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>20g</span>
                        <p className="font-bold">Fat</p>
                    </div>
                </section>
                <section className="flex flex-col w-full gap-3 px-5 py-4">
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Igredients <span className="font-light text-xs">2 services</span></p>
                        <div>
                            <button className="border w-12 h-10 p-2">-</button>
                            <button className="border w-12 h-10 p-2">+</button>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-4 mt-3">
                        <li className="flex items-center justify-between">
                            <p>Chicken breasts</p>
                            <span className="text-gray-300">250g</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <p>Unsalted butter</p>
                            <span className="text-gray-300">1tbsp</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <p>Sesasme or vegetaible oil</p>
                            <span className="text-gray-300">2tsp</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <p>Fresh ginger</p>
                            <span className="text-gray-300">2tsp</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <p>Large Egg</p>
                            <span className="text-gray-300">100g</span>
                        </li>
                    </ul>
                    <div className="mt-5">
                
                        <button className="bg-[#8B4EEB] w-full py-3 rounded-md text-white text-lg font-bold">Start cooking</button>
                    </div>
                </section>
            </section>

        </div>
    )
}

export default Recipe