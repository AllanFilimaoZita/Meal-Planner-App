import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { FaApple } from "react-icons/fa";

import Background from '../assets/img/img.png';

import Divider from '../components/ui/Divider';
import Login from '../components/ui/Login';

import { Link } from 'react-router-dom';



const SignIn = () => {
    return (
        <main className="relative h-full flex flex-col items-center justify-center">

            <section className="h-[40vh] w-full overflow-hidden">
                <img src={Background} alt="Hero Image" className='h-full w-full object-cover' />
            </section>

            <section className="z-20 mx-auto flex w-full max-w-sm flex-col gap-6 px-6 pb-10">
                
                <Link to={'/home'}  className="bg-black text-white font-bold py-2 px-5 rounded-sm flex items-center justify-center" ><button className="bg-black text-white font-bold py-2 px-5 rounded-sm">Sign Up with email</button></Link>

                <Divider />

                <Link to={'/home'}  className="bg-white text-black font-bold py-2 px-5 rounded-sm flex items-center justify-center" ><button className="bg-white text-black font-bold py-2 px-5 rounded-sm flex items-center justify-center gap-3"> <FcGoogle /> Sign Up with Google</button></Link>
                
                <Link to={'/home'}  className="bg-white text-black font-bold py-2 px-5 rounded-sm flex items-center justify-center" ><button className="bg-white text-black font-bold py-2 px-5 rounded-sm flex items-center justify-center gap-3"> <AiFillFacebook /> Sign Up with Google</button></Link>
                
                <Link to={'/home'}  className="bg-white text-black font-bold py-2 px-5 rounded-sm flex items-center justify-center" ><button className="bg-white text-black font-bold py-2 px-5 rounded-sm flex items-center justify-center gap-3"> <FaApple /> Sign Up with Google</button></Link>

                <Login />

            </section>

            <div className="absolute z-10 h-full w-full bg-linear-to-b from-black/50 --tw-gradient-via: #8B4EEB; to-[#8B4EEB]">

            </div>
        </main>
    );
};

export default SignIn;