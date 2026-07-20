const Divider = ({ text = "or use social sign up"}) => {
    return (
        <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/30"></div>

            <span className="text-white/80">
                {text}
            </span>

            <div className="h-px flex-1 bg-white/30"></div>
        </div>
    )
}

export default Divider;