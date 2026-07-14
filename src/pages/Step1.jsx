function Step1() {
    return (
        <>
            <section className="min-h-screen min-w-screen flex flex-col items-center justify-around px-5 gap-5">
                <section className="flex flex-col items-start justify-around w-full h-full gap-10">
                    <section className="flex items-center justify-between w-full h-full">
                        <div className="flex gap-3">
                            <span className="border rounded-full px-2">1</span>
                            <span className="font-bold text-white bg-purple-300 rounded-full px-2">2</span>
                            <span className="font-bold bg-gray-300 rounded-full px-2">3</span>
                            <span className="font-bold bg-gray-300 rounded-full px-2">4</span>
                        </div>
                        <div>
                            <span className="text-blue-500 font-bold">skip</span>
                        </div>
                    </section>
                    <section className="flex flex-col w-full h-full flex-wrap gap-2">
                        <h2 className="text-xl font-bold text-gray-900 w-42">Any ingredient allergies?</h2>
                        <p className="text-sm text-gray-500 leading-relaxed w-64">
                            To offer you the best tailored diet expirience we need to know more information about you.
                        </p>
                    </section >

                    <section className="flex flex-col gap-2">
                        <div className="flex items-center justify-start gap-2">
                            <button className="border rounded-full py-1 px-5">Gluten</button>
                            <button className="border rounded-full py-1 px-5">Diary</button>
                            <button className="border rounded-full py-1 px-5">Egg</button>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <button className="border rounded-full py-1 px-5">Goy</button>
                            <button className="border rounded-full py-1 px-5">Peanut</button>
                            <button className="border rounded-full py-1 px-5">Wheat</button>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <button className="border rounded-full py-1 px-5">Mik</button>
                            <button className="rounded-full text-white bg-[#8B4EEB] py-1 px-7">Fish</button>
                        </div>
                    </section>
                </section>

                <section className="flex items-center justify-between w-full">
                    <button className="bg-gray-300 font-bold py-2 px-3 rounded">Previous</button>
                    <button className="bg-[#8B4EEB] font-bold py-2 px-3 rounded">Previous</button>
                </section>
            </section>

        </>
    )
}

export default Step1;