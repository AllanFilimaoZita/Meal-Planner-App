import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaApple } from "react-icons/fa";

import Background from '../assets/img/background.png';

import PrimaryButton from '../components/ui/PrimaryButton';
import Divider from '../components/ui/Divider';
import SocialButton from '../components/ui/SocialButton';
import Login from '../components/ui/Login';

const SignUp = () => {
    return (
        <main className="h-full flex flex-col items-center justify-center bg-linear-to-b from-black/10 via-[#8B4EEB]/70 to-[#8B4EEB]">

            <section className="relative h-[30vh] w-full overflow-hidden">
                <img src={Background} alt="Hero Image" className='h-full w-full object-cover' />
            </section>

            <section className="mx-auto flex w-full max-w-sm flex-col gap-6 px-6 pb-10">
                <PrimaryButton>
                    Sign up with email
                </PrimaryButton>

                <Divider />

                <SocialButton className="flex gap-2">
                    <FcGoogle /> Sign up with Google
                </SocialButton>

                <SocialButton className="flex gap-2">
                    <ImFacebook2 /> Sign up with Facebook
                </SocialButton>

                <SocialButton className="flex gap-2">
                    <FaApple /> Sign up with Apple
                </SocialButton>

                <Login />

            </section>
        </main>
    );
};

export default SignUp;