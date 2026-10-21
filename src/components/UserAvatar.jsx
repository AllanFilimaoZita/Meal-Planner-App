
function UserAvatar({ name = "", className = "" }) {
  const initial = name.trim().charAt(0).toUpperCase() || "U";

  return (
    <div
      aria-label={`Avatar de ${name || "utilizador"}`}
      className={`flex shrink-0 items-center justify-center rounded-full bg-orange-500 font-semibold text-white ${className}`}
    >
      {initial}
    </div>
  );
}

export default UserAvatar;
