import Food1 from '../assets/img/food1.jpg';
import Food2 from '../assets/img/food3.jpg';

function Onboarding() {
    return (
        <section className="min-h-screen min-w-screen flex flex-col justify-around py-2">

            <div className="flex flex-row items-start gap-3 overflow-hidden">
                <img src={Food1} alt="Prato de comida" className="w-3/5 h-56 object-cover rounded-2xl"/>
                <img src={Food2} alt="Prato de comida" className="w-3/5 h-56 object-cover rounded-2xl"/>
            </div>

            <section className="flex flex-col items-center text-center px-2">
                <h2 className="text-xl font-bold text-gray-900">
                    Enjoy your lunch time
                </h2>

                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    Just relax and not overthink what to eat. This is on our
                    side with our personalized meal plans, just prepared and
                    adapted to your needs.
                </p>
            </section>

            <footer className="flex items-center justify-around">
                <div className="flex items-center gap-1.5">
                    <span className="w-8 h-1.5 rounded-full bg-[#8B4EEB]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
                </div>

                <button className="px-8 py-2 rounded-md bg-[#8B4EEB] text-white text-sm font-semibold outline-none">
                    Next
                </button>
            </footer>
        </section>
    );
}

export default Onboarding;