import { MdKeyboardBackspace } from "react-icons/md";
import Person from '../assets/img/mayhem.jpg'

function Upgrade() {
    return (
        <>
            <section className="w-full h-full gap-5 py-5 px-3 flex flex-col items-center justify-center ">
                <section className="flex flex-col items-start justify-between w-full h-full">
                    <div className="w-full flex items-start justify-between gap-3">
                        <MdKeyboardBackspace className="size-7" />
                    </div>

                    <div className="flex items-center justify-center w-full">
                        <img src={Person} className="h-70 w-full object-cover " />
                    </div>
                </section>
                <section className="flex flex-col items-center w-full h-full gap-2">
                    <h2 className="font-bold text-xl">Your personal plan is ready</h2>

                    <p className="text-center">
                        Upgrade your account and get full access to jumpstart your practice.
                    </p>
                </section >

                <section className="w-full h-full flex flex-col gap-5">

                    <div className="flex flex-row gap-4 bg-gray-200 items-center justify-center px-5 py-5 w-full rounded-full">
                        <div className="w-4 h-4 bg-white rounded-full border-1"></div>
                        <div className="w-full flex justify-between">
                            <div>
                                <h3 className="font-bold">1 Month Plan</h3>
                                <p className="text-xs">
                                    Buy monthly, Cancel anytime
                                </p>
                            </div>
                            <div className="flex items-end">
                                <p className="text-xs">
                                    For only <span className="text-sm">$</span> <span className="text-base">12</span>/month
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 bg-white items-center justify-center px-5 py-5 w-full rounded-full border-2 border-fuchsia-700">
                        <div className="w-4 h-4 bg-[#8B4EEB] rounded-full border"></div>
                        <div className="w-full flex justify-between">
                            <div>
                                <h3 className="font-bold">1 Year Plan</h3>
                                <p className="text-xs">
                                    Buy monthly, Cancel anytime
                                </p>
                            </div>
                            <div className="flex items-end">
                                <p className="text-xs">
                                    For only <span className="text-sm">$</span> <span className="text-base">8</span>/month
                                </p>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="flex flex-col items-center justify-center w-full gap-5">
                    <button className="bg-[#8B4EEB] text-lg py-4 px-20 rounded-3xl text-white font-bold w-full">Upgrade</button>

                    <p className="font-bold text-sm text-center w-60">By continuing you agree to the Terms & Conditions</p>
                </section>
            </section>
        </>
    )
}

export default Upgrade