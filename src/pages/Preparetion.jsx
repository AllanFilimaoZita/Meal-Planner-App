import { MdOpenInFull } from "react-icons/md";

import Ramen from '../assets/img/ramen.png'

function Preparetion() {
    return (
        <div className="h-min-screen w-full py-5 relative">

            <header className="w-full flex items-start justify-end gap-3 px-5 absolute py-4">
                <MdOpenInFull className="text-white size-7" />
            </header>

            <section>
                <img src={Ramen} className="w-full h-70" />
            </section>

            <section className="flex flex-col justify-between items-center w-full h-full py-5 absolute top-65 bg-white rounded-t-4xl">
                <section className="w-full flex items-center justify-center px-5">
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold text-xl">Step 4</h3>
                    </div>
                </section>

                <section className="flex flex-col w-full gap-3 px-5 py-4">
                    <ul className="flex flex-col gap-4 mt-3">
                        <li className="flex items-center justify-between">
                            <p>Bacon</p>
                            <span className="text-gray-300">50 gr</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <p>Soy Sauce</p>
                            <span className="text-gray-300">200 ml</span>
                        </li>
                    </ul>

                    <p>
                        We tie the bacon with twine so that the skin is on the outside and one end and the other practically meet. Heat a little oil in a pressure cooker and mark the bacon all over until golden brown. We remove and discard the oil.
                    </p>

                    <div className="flex gap-4 mt-5">

                        <button className="bg-[#c9c9c9] w-full py-3 rounded-md text-black text-lg font-bold">Previous</button>
                        <button className="bg-[#8B4EEB] w-full py-3 rounded-md text-white text-lg font-bold">Start cooking </button>
                    </div>
                </section>
            </section>

        </div>
    )
}

export default Preparetion