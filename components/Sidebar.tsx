
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Car, CalendarClock, Timer, CircleDollarSign, Newspaper } from 'lucide-react';

const icons = {
  LayoutDashboard,
  Car,
  CalendarClock,
  Timer,
  CircleDollarSign
};

type IconName = keyof typeof icons;

interface NavItemProps {
  to: string;
  icon: IconName;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
  const IconComponent = icons[icon];
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
          isActive
            ? 'bg-gray-700 text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        }`
      }
    >
      <IconComponent className="w-5 h-5 mr-3" />
      {label}
    </NavLink>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col h-full shadow-lg">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <Newspaper className="h-8 w-8 text-indigo-400" />
        <h1 className="text-2xl font-bold ml-2">NewsFlow</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavItem to="/dashboard" icon="LayoutDashboard" label="Dashboard" />
        <NavItem to="/fleet" icon="Car" label="Fleet Management" />
        <NavItem to="/leave" icon="CalendarClock" label="Leave Management" />
        <NavItem to="/hours" icon="Timer" label="Work Hours" />
        <NavItem to="/payroll" icon="CircleDollarSign" label="Payroll & Finance" />
      </nav>
    </div>
  );
};

export default Sidebar;
