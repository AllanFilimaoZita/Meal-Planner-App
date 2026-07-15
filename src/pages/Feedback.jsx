import { MdKeyboardBackspace } from "react-icons/md";

function Feedback() {
    return (
        <>
            <section className="h-full w-full py-5 px-3">
                <section className="flex flex-col items-start justify-around w-full h-full gap-10">
                    <section className="flex flex-col items-start justify-between w-full h-full">
                        <div className="w-full flex items-start justify-between gap-3">
                            <MdKeyboardBackspace className="size-7" />
                            <span className="text-[#8B4EEB] font-bold">skip</span>
                        </div>

                        <h2 className="text-xl font-bold w-60 mt-5">How was your overall experience?</h2>

                        <p>
                            It will help us to serve you better.
                        </p>
                    </section>
                    <section className="flex flex-col w-full h-full gap-2">
                        <div className="flex w-full h-full flex-wrap gap-2">
                            <span>😖</span><span>☹️</span><span>😐</span><span>😀</span><span>😍</span>
                        </div>

                        <h3 className="font-bold">What is wrong?</h3>

                        <section className="flex flex-col gap-2">
                            <div className="flex items-center justify-start gap-2">
                                <button className="border rounded-full py-1 px-5">Application bugs</button>
                                <button className="border rounded-full py-1 px-5">Customer service</button>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <button className="border rounded-full py-1 px-5">Slow loading</button>
                                <button className="border rounded-full py-1 px-5">Bad navigation</button>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <button className="border rounded-full py-1 px-5">Weak functionality</button>
                                <button className="rounded-full text-white bg-[#8B4EEB] py-1 px-7">Other problems</button>
                            </div>
                        </section>

                        <section>
                            <h3>Notes</h3>
                            <input id="input-nome" type="text" placeholder="How can we do better?" className="flex items-start justify-start border-solid border w-full h-42 rounded-md placeholder:flex placeholder:items-start placeholder:text-start " />
                        </section>

                        <button className="bg-[#8B4EEB] py-2 px-20 rounded text-white font-bold">Submit Feedback</button>
                    </section >
                </section>
            </section>
        </>
    )
}

export default Feedback