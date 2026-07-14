import Food1 from '../assets/img/food1.jpg';
import Food2 from '../assets/img/food3.jpg';

function Onboarding() {
    return (
        <>
            <main className="h-full w-full flex flex-col gap-4 justify-between" >
                <div className="flex flex-row gap-8" >
                    <img src={Food1} alt="food" className="w-1/2" />
                    <img src={Food2} alt="food" className="w-1/2" />
                </div>

                <section className="flex flex-col items-center mt-8">
                    <h2>Enjoy your lunch time</h2>

                    <p className="text-center mt-4">
                        Just relax and not overthink about what to eat.
                        This in our side with our personalized meal pians just prepared and adapted to yours needs.
                    </p>
                </section>

                <footer className="flex items-center justify-center gap-[30px]">
                    <div className="flex items-center justify-center gap-[5px]">
                        <div>
                            <div className="w-[40px] rounded-full h-[5px] bg-[#8B4EEB]"></div>
                        </div>
                        <div>
                            <div className="w-[6px] rounded-full h-[5px] bg-[#D9D9D9]"></div>
                        </div>
                        <div>
                            <div className="w-[6px] rounded-full h-[5px] bg-[#D9D9D9]"></div>
                        </div>
                        <div>
                            <div className="w-[6px] rounded-full h-[5px] bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                    <div>
                        <button className="rounded-lg outline-none bg-[#8B4EEB]  text-[#FFFFFF]">
                            Next
                        </button>
                    </div>
                </footer>
            </main>



        </>
    )
}

export default Onboarding;