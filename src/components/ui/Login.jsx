const Login = ({ text = "Already have an account?", linkText = "Log in", linkUrl = "/login" }) => {
    return (
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/80">
            <span>{text}</span>
            <a href={linkUrl} className="font-semibold text-white hover:underline">
                {linkText}
            </a>
        </div>
    );
};

export default Login;