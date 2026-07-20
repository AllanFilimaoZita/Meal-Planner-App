import HeroIMage from "../assets/img/background.png"

const HeroImage = () => {
    return (
        <>
            <section className="relative h-[30vh] w-full overflow-hidden">
                <img src={HeroIMage} alt="Hero Image" className='h-full w-full object-cover' />
            </section>

            <div className="absolute inset-x-0 bottom-0 h-52 bg-linear-to-t"></div>
        </>
    );
};

export default HeroImage