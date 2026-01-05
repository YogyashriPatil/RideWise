import { LayoutDashboard, Brain, Map, Calendar, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function SideNavbar() {
  return (
    <aside className="w-64 h-screen pt-28 px-4 border-r border-white/10">
      <h3 className="text-gray-500 text-xs mb-4">NAVIGATION</h3>

      <SidebarItem to="/home" icon={<LayoutDashboard />} text="Dashboard" />
      <SidebarItem to="/predict" icon={<Brain />} text="AI Insights" />
      <SidebarItem to="/map" icon={<Map />} text="Station Map" />
      <SidebarItem to="/reserve" icon={<Calendar />} text="Reservations" />
      <SidebarItem to="/setting" icon={<Settings />} text="Settings" />
    </aside>
  );
}

function SidebarItem({ to, icon, text }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all
        ${
          isActive
            ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black shadow-lg"
            : "text-white hover:bg-white/5"
        }`
      }
    >
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{text}</span>
    </NavLink>
  );
}