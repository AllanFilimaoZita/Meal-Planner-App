
import { NavLink } from "react-router-dom";

import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { CiForkAndKnife } from "react-icons/ci";
import { PiBowlFood } from "react-icons/pi";

const navigationItems = [
  {
    label: "Home",
    to: "/home",
    icon: IoHomeOutline,
  },
  {
    label: "Meal Plan",
    to: "/recipe",
    icon: CiForkAndKnife,
  },
  {
    label: "Receitas",
    to: "/recipes",
    icon: PiBowlFood,
  },
  {
    label: "Perfil",
    to: "/profile",
    icon: IoPersonOutline,
  },
];

function Navigation() {
  return (
    <nav
      aria-label="Navegação principal"
      className="fixed bottom-2 left-1/2 z-20 flex w-[90%] max-w-md -translate-x-1/2 items-center justify-around rounded-full bg-black px-3 py-3 text-white shadow-lg"
    >
      {navigationItems.map(({ label, to, icon: Icon }) => (
        <NavLink
          key={label}
          to={to}
          className={({ isActive }) =>
            `flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-3 py-1 transition ${
              isActive
                ? "font-bold text-white"
                : "text-white/60 hover:text-white"
            }`
          }
          aria-label={label}
        >
          {({ isActive }) => (
            <>
              <span
                className={`flex items-center justify-center rounded-full p-1.5 ${
                  isActive ? "bg-white text-black" : ""
                }`}
              >
                <Icon className="size-5" />
              </span>

              <span className="text-[10px]">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;
