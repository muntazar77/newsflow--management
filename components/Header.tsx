
import React, { useState } from 'react';
import { Bell, ChevronDown, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Welcome, {user?.name}!</h2>
        <p className="text-sm text-gray-500">Here is your daily overview.</p>
      </div>
      <div className="flex items-center space-x-6">
        <button className="relative text-gray-500 hover:text-gray-800">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={user?.avatarUrl}
              alt="User Avatar"
            />
            <div className="text-left hidden md:block">
                <p className="font-semibold text-sm text-gray-800">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.role}</p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <a href="#/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                My Profile
              </a>
              <button
                onClick={logout}
                className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
