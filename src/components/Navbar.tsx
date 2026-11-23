import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";

const navItems = [
  { to: "/", label: "Home", icon: "solar:home-2-linear", activeIcon: "solar:home-2-bold" },
  { to: "/progress", label: "Progress", icon: "solar:chart-2-linear", activeIcon: "solar:chart-2-bold" },
  { to: "/streak", label: "Streak", icon: "solar:fire-linear", activeIcon: "solar:fire-bold" },
  { to: "/profile", label: "Profile", icon: "solar:user-rounded-linear", activeIcon: "solar:user-rounded-bold" },
];

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  `group relative flex flex-1 flex-col items-center justify-center gap-1 rounded-full py-2 text-[11px] font-medium transition-all duration-200 ` +
  `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E89855] sm:flex-row sm:gap-2 sm:py-2.5 sm:text-xs md:text-sm ` +
  (isActive
    ? "text-[#F7F5EF]"
    : "text-[#F7F5EF]/75 hover:bg-[#245C48]/80 hover:text-[#F7F5EF] hover:ring-1 hover:ring-[#F7F5EF]/35");

function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#245C48]/40 bg-[#163B32]/95 px-4 py-2 backdrop-blur-md md:py-2.5"
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-1 md:max-w-lg md:gap-2">
        {navItems.map(({ to, label, icon, activeIcon }) => (
          <NavLink key={to} to={to} className={getLinkClass}>
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[#245C48] shadow-sm"
                  />
                )}
                <Icon
                  icon={isActive ? activeIcon : icon}
                  width={20}
                  height={20}
                  aria-hidden="true"
                  className={`relative z-10 ${isActive ? "text-[#E89855]" : ""}`}
                />
                <span className="relative z-10">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;