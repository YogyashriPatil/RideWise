import { useState } from "react";
import {
  FiHome,
  FiTrendingUp,
  FiMapPin,
  FiInfo,
  FiMail,
  FiSun,
  FiUser,
  FiMenu,
  FiX
} from "react-icons/fi";

import Logo from "../logo/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="
      fixed top-0 left-0 w-full z-50
      bg-black/40 backdrop-blur-xl
      border-b border-white/10
    ">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        {/* CENTER: Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-white/80">
          <NavItem icon={<FiHome />} label="Home" />
          <NavItem icon={<FiTrendingUp />} label="Predict" />
          <NavItem icon={<FiMapPin />} label="Map" />
          <NavItem icon={<FiInfo />} label="About" />
          <NavItem icon={<FiMail />} label="Contact" />
        </ul>

        {/* RIGHT: Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="
            px-5 py-2 rounded-xl text-white font-medium
            bg-gradient-to-r from-cyan-400 to-purple-500
            hover:opacity-90 transition
          ">
            Reserve Bike
          </button>

          <IconButton icon={<FiSun />} />
          <IconButton icon={<FiUser />} />
        </div>

        {/* MOBILE: Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      {open && (
        <div className="
          md:hidden
          bg-black/60 backdrop-blur-xl
          border-t border-white/10
        ">
          <ul className="flex flex-col px-6 py-6 gap-4 text-white/80">
            <MobileItem icon={<FiHome />} label="Home" />
            <MobileItem icon={<FiTrendingUp />} label="Predict" />
            <MobileItem icon={<FiMapPin />} label="Map" />
            <MobileItem icon={<FiInfo />} label="About" />
            <MobileItem icon={<FiMail />} label="Contact" />

            <div className="flex gap-3 pt-4">
              <button className="
                flex-1 py-3 rounded-xl text-white font-medium
                bg-gradient-to-r from-cyan-400 to-purple-500
              ">
                Reserve Bike
              </button>

              <IconButton icon={<FiSun />} />
              <IconButton icon={<FiUser />} />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

/* ---------- Reusable ---------- */

const NavItem = ({ icon, label }) => (
  <li className="flex items-center gap-2 cursor-pointer hover:text-cyan-300 transition">
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </li>
);

const MobileItem = ({ icon, label }) => (
  <li className="flex items-center gap-3 py-2 text-lg hover:text-cyan-300 transition cursor-pointer">
    <span className="text-xl">{icon}</span>
    <span>{label}</span>
  </li>
);

const IconButton = ({ icon }) => (
  <button className="
    w-10 h-10 rounded-full
    bg-white/5 border border-white/10
    flex items-center justify-center
    text-white/80
    hover:bg-white/10 hover:text-cyan-300
    transition
  ">
    {icon}
  </button>
);
