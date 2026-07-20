const SocialButton = ({ children, type="button", onClick, disabled = false}) => {
    return (
        <button type={type} onClick={onClick} disabled={disabled} className="flex h-14 w-full items-center justify-center rounded-sm bg-white px-6 text-base font-semibold text-black transition all duration-200 hover:bg-neutral-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50">
            {children}
        </button>
    )
}

export default SocialButton;