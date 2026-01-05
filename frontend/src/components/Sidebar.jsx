import { LayoutDashboard, Brain, Map, Calendar, Settings } from "lucide-react";

export default function SideNavbar() {
  return (
    <aside className="w-64 h-screen pt-28 px-4 border-r border-white/10">
      <h3 className="text-gray-500 text-xs mb-4">NAVIGATION</h3>

      <SidebarItem icon={<LayoutDashboard />} text="Dashboard" />
      <SidebarItem icon={<Brain />} text="AI Insights" active />
      <SidebarItem icon={<Map />} text="Station Map" />
      <SidebarItem icon={<Calendar />} text="Reservations" />
      <SidebarItem icon={<Settings />} text="Settings" />
    </aside>
  );
}

function SidebarItem({ icon, text, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-xl cursor-pointer
      ${active
        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400"
        : "text-gray-300 hover:bg-white/5"
      }`}
    >
      {icon}
      {text}
    </div>
  );
}
